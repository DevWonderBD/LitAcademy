import { GoogleGenerativeAI } from "@google/generative-ai";
import OpenAI from "openai";
import { detectLanguage, DetectedLang } from "./language";

export interface PythiaMessage {
  role: "user" | "assistant" | "system";
  content: string;
}

const SYSTEM_PROMPT = `You are Pythia, the AI guide for LitAcademy (a premium English Literature platform for National University Bangladesh students).
Your persona: bubbly, witty, warm, concise, and tasteful.

CRITICAL LANGUAGE RULES:
1. If the user writes in plain English (e.g. "what is your name?", "explain this"), YOU MUST REPLY ENTIRELY IN ENGLISH.
2. Students sometimes write Bangla in English letters (Banglish) (e.g. "tomer nam ki?"). Treat Banglish as Bangla.
3. If the user writes in Bangla or Banglish, you MUST reply in Bengali script.
4. Never answer a Bangla/Banglish message in English.

EXAMPLES:
User: "what is your name?" -> Assistant: "I am Pythia, your AI guide for LitAcademy."
User: "tomer nam ki?" -> Assistant: "আমি Pythia, LitAcademy-র AI গাইড।"

CRITICAL RULES:
- Never invent syllabus facts, page numbers, or exam questions.
- If something is not in the provided context or you don't know it, politely admit it.
- Keep your answers concise and well-formatted (around 135-165 words maximum).
- Do not use words like "Course", "Lesson", "Buy", "Instructor". Use "Program", "Paper", "Topic", "Guide".
- Your primary goal is to help students understand English literature topics clearly.
- When generating Markdown tables, ALWAYS ensure there is a clear newline character (\n) after every row so the frontend renders it correctly.

HUMOR RULE:
- At the end of longer, explanatory answers (but NOT for very short factual questions), add a tasteful, funny, relevant line in the same language as your response to make the student smile.`;

interface Provider {
  name: string;
  stream(messages: PythiaMessage[], contextData: string): AsyncGenerator<string, void, unknown>;
}

// ============================================================================
// 1. GEMINI PROVIDER
// ============================================================================
function createGeminiProvider(modelName: string): Provider {
  return {
    name: `gemini (${modelName})`,
    async *stream(messages, contextData) {
      const key = process.env.GOOGLE_GENERATIVE_AI_API_KEY?.trim();
      if (!key) throw new Error("Missing Gemini API Key");
      
      const genAI = new GoogleGenerativeAI(key);
      const model = genAI.getGenerativeModel({
        model: modelName,
        systemInstruction: SYSTEM_PROMPT,
        safetySettings: [
          { category: "HARM_CATEGORY_HARASSMENT" as any, threshold: "BLOCK_NONE" as any },
          { category: "HARM_CATEGORY_HATE_SPEECH" as any, threshold: "BLOCK_NONE" as any },
          { category: "HARM_CATEGORY_SEXUALLY_EXPLICIT" as any, threshold: "BLOCK_NONE" as any },
          { category: "HARM_CATEGORY_DANGEROUS_CONTENT" as any, threshold: "BLOCK_NONE" as any }
        ],
        generationConfig: { maxOutputTokens: 400 },
      });

      const history = messages.filter(m => m.role !== "system").map(m => ({
        role: m.role === "assistant" ? "model" : "user",
        parts: [{ text: m.content }],
      }));

      if (history.length > 0 && history[0].role === "model") {
        history.unshift({ role: "user", parts: [{ text: "Hello" }] });
      }

      if (contextData && history.length > 0 && history[0].role === "user") {
        history[0].parts[0].text = `[SYLLABUS CONTEXT]\n${contextData}\n\n[USER QUESTION]\n${history[0].parts[0].text}`;
      }

      const lastMessage = history.pop();
      if (!lastMessage) throw new Error("No question provided");

      const chat = model.startChat({ history });
      const result = await chat.sendMessageStream(lastMessage.parts);
      
      for await (const chunk of result.stream) {
        const text = chunk.text();
        if (text) yield text;
      }
    }
  };
}

// ============================================================================
// 2. GROQ PROVIDER
// ============================================================================
const groqProvider: Provider = {
  name: "groq",
  async *stream(messages, contextData) {
    const key = process.env.GROQ_API_KEY?.trim();
    if (!key) throw new Error("Missing Groq API Key");
    
    const openai = new OpenAI({ apiKey: key, baseURL: "https://api.groq.com/openai/v1" });
    
    const formattedMessages = messages.map(m => ({ role: m.role, content: m.content }));
    if (contextData && formattedMessages.length > 0) {
      const lastIdx = formattedMessages.length - 1;
      formattedMessages[lastIdx].content = `[SYLLABUS CONTEXT]\n${contextData}\n\n[USER QUESTION]\n${formattedMessages[lastIdx].content}`;
    }
    formattedMessages.unshift({ role: "system", content: SYSTEM_PROMPT });

    const stream = await openai.chat.completions.create({
      model: "openai/gpt-oss-20b", 
      messages: formattedMessages as any,
      max_tokens: 400, 
      stream: true,
      reasoning_effort: "low" as any
    });

    let buffer = "";
    for await (const chunk of stream) {
      const content = chunk.choices[0]?.delta?.content || "";
      if (content) {
        buffer += content;
        // Fix for gpt-oss-20b missing newlines in tables (e.g. outputs "||" instead of "|\n|")
        if (buffer.includes("||")) {
          buffer = buffer.replace(/\|\|/g, "|\n|");
        }
        
        // Hold the last character if it's a pipe to catch cross-chunk "||"
        if (buffer.endsWith("|")) {
          yield buffer.slice(0, -1);
          buffer = "|";
        } else {
          yield buffer;
          buffer = "";
        }
      }
    }
    if (buffer) {
      yield buffer;
    }
  }
};

// ============================================================================
// MAIN ROUTING FUNCTION
// ============================================================================
export interface StreamPythiaOptions {
  messages: PythiaMessage[];
  contextData?: string;
  sessionLang?: DetectedLang;
  uiLocale?: string;
}

export async function* streamPythiaChat({
  messages,
  contextData = "",
  sessionLang,
  uiLocale,
}: StreamPythiaOptions) {
  const recentMessages = messages.slice(-4);
  const lastUserMessage = recentMessages[recentMessages.length - 1]?.content || "";

  const startMs = Date.now();

  const geminiModels = [
    process.env.PYTHIA_MODEL_CHAT,
    process.env.PYTHIA_MODEL_CHAT2,
    process.env.PYTHIA_MODEL_CHAT3,
  ].filter(Boolean) as string[];
  
  if (geminiModels.length === 0) {
    geminiModels.push("gemini-1.5-flash");
  }

  const geminiProviders = geminiModels.map(model => createGeminiProvider(model));

  // 1. Language Detection
  const { lang: detectedLang, source: langSource } = detectLanguage({
    text: lastUserMessage,
    sessionLang,
    uiLocale
  });

  // 2. Routing
  // If English: Groq -> Gemini
  // If Bangla/Banglish/Unknown: Gemini (No Groq)
  const isEnglish = detectedLang === 'en';
  
  const providers = isEnglish
    ? [groqProvider, ...geminiProviders]
    : [...geminiProviders];

  let lastError: any = null;

  for (const provider of providers) {
    let committed = false;
    try {
      const iterator = provider.stream(recentMessages, contextData);
      const firstChunk = await iterator.next();
      
      if (firstChunk.done) continue;
      
      committed = true;
      
      // LOGGING: Provider picked and language info
      const latencyMs = Date.now() - startMs;
      console.log(`[Pythia Routing] lang=${detectedLang} src=${langSource} provider=${provider.name} latencyMs=${latencyMs}`);

      yield `__PROVIDER__${provider.name}__`;
      
      yield firstChunk.value;
      
      for await (const chunk of iterator) {
        yield chunk;
      }
      
      return; 
    } catch (error) {
      console.warn(`[AI Fallback] ${provider.name} failed:`, error);
      lastError = error;
      
      if (committed) {
        throw error;
      }
    }
  }

  console.error(`[AI Fallback] All providers exhausted for lang=${detectedLang}.`, lastError);
  throw new Error("All AI providers are currently busy or unavailable. Please try again later.");
}
