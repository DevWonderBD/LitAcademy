import { NextRequest } from "next/server";
import { streamPythiaChat } from "@/server/ai/pythia";
import { auth } from "@/lib/auth";
import { checkRateLimit } from "@/lib/ratelimit";

export async function POST(req: NextRequest) {
  try {
    if (!process.env.GOOGLE_GENERATIVE_AI_API_KEY) {
      return new Response(
        JSON.stringify({ error: { code: "CONFIG_ERROR", message: "API Key is missing. Please check your environment variables." } }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    const session = await auth.api.getSession({
      headers: req.headers
    });
    
    const userId = session?.user?.id;
    const ip = req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "unknown_ip";
    
    // Limits: 5 without login, 30 with login
    const identifier = userId ? `user_${userId}` : `ip_${ip}`;
    const limit = userId ? 30 : 5;
    
    const isAllowed = await checkRateLimit(identifier, limit);
    if (!isAllowed) {
      const errorMsg = userId 
        ? "You have reached your daily limit of 30 messages. Please come back tomorrow!" 
        : "You have reached the free limit of 5 messages. Please log in to continue chatting!";
      return new Response(
        JSON.stringify({ error: { code: "RATE_LIMIT_EXCEEDED", message: errorMsg } }),
        { status: 429, headers: { "Content-Type": "application/json" } }
      );
    }

    const body = await req.json();
    const { messages, contextData } = body;

    if (!messages || !Array.isArray(messages)) {
      return new Response(
        JSON.stringify({ error: { code: "BAD_REQUEST", message: "Invalid messages array" } }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const stream = new ReadableStream({
      async start(controller) {
        try {
          const generator = streamPythiaChat(messages, contextData);
          for await (const chunk of generator) {
            // Send as SSE format
            controller.enqueue(new TextEncoder().encode(`data: ${JSON.stringify({ text: chunk })}\n\n`));
          }
          controller.enqueue(new TextEncoder().encode("data: [DONE]\n\n"));
          controller.close();
        } catch (error) {
          console.error("Pythia stream error:", error);
          controller.error(error);
        }
      },
    });

    return new Response(stream, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        "Connection": "keep-alive",
      },
    });
  } catch (error: any) {
    console.error("Pythia API error:", error);
    return new Response(
      JSON.stringify({ error: { code: "INTERNAL_SERVER_ERROR", message: "An unexpected error occurred." } }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
