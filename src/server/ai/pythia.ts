import { GoogleGenerativeAI } from "@google/generative-ai";

// We'll initialize this lazily so it doesn't crash if the env var is missing during build
let ai: GoogleGenerativeAI | null = null;

function getAI() {
  if (!ai) {
    const key = process.env.GOOGLE_GENERATIVE_AI_API_KEY?.trim();
    if (!key) {
      throw new Error("Missing GOOGLE_GENERATIVE_AI_API_KEY environment variable");
    }
    ai = new GoogleGenerativeAI(key);
  }
  return ai;
}

export interface PythiaMessage {
  role: "user" | "assistant" | "system";
  content: string;
}

const SYSTEM_PROMPT = `You are Pythia, the AI guide for LitAcademy (a premium English Literature platform for National University Bangladesh students).
Your persona: bubbly, witty, warm, concise, and tasteful.

CRITICAL LANGUAGE RULES:
- Your DEFAULT language is ENGLISH. If the user asks in English, reply in English.
- ONLY if the user explicitly asks in Bengali (or mixes Bengali), reply in fluent, natural Bengali.

CRITICAL RULES:
- Never invent syllabus facts, page numbers, or exam questions.
- If something is not in the provided context or you don't know it, politely admit it.
- Keep your answers concise and well-formatted.
- Do not use words like "Course", "Lesson", "Buy", "Instructor". Use "Program", "Paper", "Topic", "Guide".
- Your primary goal is to help students understand English literature topics clearly.`;

export async function* streamPythiaChat(messages: PythiaMessage[], contextData: string = "") {
  const modelName = (process.env.PYTHIA_MODEL_CHAT || "gemini-flash-latest").trim();
  
  // Call getAI() immediately to throw error if key is missing before stream starts
  const genAI = getAI();
  
  // We use BLOCK_NONE for literature to avoid blocking tragedies, murders (e.g. Macbeth)
  const model = genAI.getGenerativeModel({
    model: modelName,
    systemInstruction: SYSTEM_PROMPT,
    safetySettings: [
      {
        category: "HARM_CATEGORY_HARASSMENT" as any,
        threshold: "BLOCK_NONE" as any,
      },
      {
        category: "HARM_CATEGORY_HATE_SPEECH" as any,
        threshold: "BLOCK_NONE" as any,
      },
      {
        category: "HARM_CATEGORY_SEXUALLY_EXPLICIT" as any,
        threshold: "BLOCK_NONE" as any,
      },
      {
        category: "HARM_CATEGORY_DANGEROUS_CONTENT" as any,
        threshold: "BLOCK_NONE" as any,
      },
    ],
  });

  // Convert our generic PythiaMessage to Gemini's format
  const history = messages
    .filter((m) => m.role !== "system")
    .map((m) => ({
      role: m.role === "assistant" ? "model" : "user",
      parts: [{ text: m.content }],
    }));

  // Gemini STRICTLY requires the first message to be from the 'user'
  if (history.length > 0 && history[0].role === "model") {
    history.unshift({ role: "user", parts: [{ text: "Hello" }] });
  }

  // If we have context from the syllabus, we prepend it to the first user message
  if (contextData && history.length > 0 && history[0].role === "user") {
    history[0].parts[0].text = `[SYLLABUS CONTEXT]\n${contextData}\n\n[USER QUESTION]\n${history[0].parts[0].text}`;
  }

  const lastMessage = history.pop(); // The current question

  if (!lastMessage) {
    throw new Error("No question provided");
  }

  const chat = model.startChat({ history });

  const result = await chat.sendMessageStream(lastMessage.parts);

  for await (const chunk of result.stream) {
    const text = chunk.text();
    if (text) {
      yield text;
    }
  }
}

