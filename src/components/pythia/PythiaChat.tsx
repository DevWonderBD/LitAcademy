"use client";

import { useState, useRef, useEffect } from "react";
import PythiaLogo, { PythiaMood } from "./PythiaLogo";
import { Send, X, MessageCircle } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

export function PythiaChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [showGreeting, setShowGreeting] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const hasGreeted = useRef(false);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content: "Hello! I am Pythia. I'm here to help you understand any topic in literature. What would you like to know?",
    },
  ]);
  const [input, setInput] = useState("");
  const [status, setStatus] = useState<"idle" | "streaming" | "error">("idle");
  const [mood, setMood] = useState<PythiaMood>("idle");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Floating button Meta AI style greeting animation
  useEffect(() => {
    if (hasGreeted.current || isOpen) return;
    const t1 = setTimeout(() => {
      if (hasGreeted.current || isOpen) return;
      setShowGreeting(true);
      hasGreeted.current = true;
      const t2 = setTimeout(() => setShowGreeting(false), 2500);
      return () => clearTimeout(t2);
    }, 3000);
    return () => clearTimeout(t1);
  }, [isOpen]);

  const showText = (showGreeting || isHovered) && !isOpen;

  const isBengali = (text: string) => /[\u0980-\u09FF]/.test(text);

  // Scroll to bottom on new message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, status]);

  // Handle mood changes based on input and streaming status
  useEffect(() => {
    if (status === "streaming") {
      setMood("thinking");
    } else if (status === "error") {
      setMood("unsure");
    } else if (input.trim().length > 0) {
      setMood("listening");
    } else {
      setMood("idle");
    }
  }, [input, status]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || status === "streaming") return;

    const userMessage: Message = { id: Date.now().toString(), role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setStatus("streaming");

    // Add empty assistant message to stream into
    const assistantMessageId = (Date.now() + 1).toString();
    setMessages((prev) => [...prev, { id: assistantMessageId, role: "assistant", content: "" }]);

    try {
      const res = await fetch("/api/pythia", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, userMessage].map((m) => ({ role: m.role, content: m.content })),
        }),
      });

      if (!res.ok) {
        const errData = await res.json().catch(() => ({}));
        throw new Error(errData.error || "Network response was not ok");
      }

      const reader = res.body?.getReader();
      const decoder = new TextDecoder();

      if (reader) {
        let done = false;
        while (!done) {
          const { value, done: doneReading } = await reader.read();
          done = doneReading;
          if (value) {
            const chunk = decoder.decode(value, { stream: true });
            const lines = chunk.split("\n");
            for (const line of lines) {
              if (line.startsWith("data: ")) {
                const data = line.slice(6);
                if (data === "[DONE]") {
                  done = true;
                  break;
                }
                try {
                  const parsed = JSON.parse(data);
                  if (parsed.text) {
                    setMessages((prev) =>
                      prev.map((msg) =>
                        msg.id === assistantMessageId
                          ? { ...msg, content: msg.content + parsed.text }
                          : msg
                      )
                    );
                  }
                } catch (err) {
                  // Ignore JSON parse errors for incomplete chunks
                }
              }
            }
          }
        }
      }
      setStatus("idle");
      setMood("happy"); // briefly happy after answering
    } catch (error: any) {
      console.error("Chat error:", error);
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === assistantMessageId
            ? { ...msg, content: `দুঃখিত, একটি সমস্যা হয়েছে: ${error.message}` }
            : msg
        )
      );
      setStatus("error");
    }
  };

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 z-50 flex justify-end">
        <button
          onClick={() => setIsOpen(!isOpen)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative flex h-14 items-center rounded-full bg-[var(--color-primary)] text-white shadow-lg transition-transform hover:scale-105 active:scale-95 cursor-pointer"
          aria-label="Open Pythia chat"
        >
          <div className="flex h-14 w-14 shrink-0 items-center justify-center">
            {isOpen ? <X size={24} /> : <PythiaLogo size={56} variant="filled" animated={true} mood={mood} />}
          </div>
          <AnimatePresence>
            {showText && (
              <motion.div
                initial={{ width: 0, opacity: 0, paddingRight: 0 }}
                animate={{ width: "auto", opacity: 1, paddingRight: 24 }}
                exit={{ width: 0, opacity: 0, paddingRight: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden whitespace-nowrap font-medium text-white flex items-center"
              >
                Ask Pythia
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 flex h-[500px] w-[380px] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl sm:w-[400px]"
          >
            {/* Header */}
            <div className="flex items-center gap-3 border-b border-slate-100 bg-slate-50/50 p-4">
              <PythiaLogo
                size={32}
                variant="filled"
                mood="idle" animated={false}
              />
              <div>
                <h3 className="font-serif text-lg font-semibold text-slate-900">Pythia</h3>
                <p className="text-xs font-medium text-slate-500">AI Guide</p>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-white">
              {messages.map((msg, idx) => {
                const isLast = idx === messages.length - 1;
                const isStreamingThis = status === "streaming" && isLast;

                return (
                  <div
                    key={msg.id}
                    className={`flex gap-3 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    {msg.role === "assistant" && (
                      <div className="mt-0.5 flex-shrink-0">
                        <PythiaLogo 
                          size={28} 
                          variant="filled" 
                          mood={isStreamingThis ? "thinking" : "idle"} animated={isStreamingThis} 
                        />
                      </div>
                    )}
                    <div
                      className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-[15px] leading-relaxed ${
                        msg.role === "user"
                          ? "bg-[var(--color-primary)] text-white"
                          : "bg-slate-50 border border-slate-100 text-slate-800"
                      } ${isBengali(msg.content) ? "font-[family-name:var(--font-anek-bangla)]" : ""}`}
                    >
                      {msg.content}
                      {msg.role === "assistant" && isStreamingThis && msg.content === "" && (
                        <div className="flex flex-col gap-2 py-1 w-32">
                          <div className="h-2 w-full animate-pulse rounded-full bg-slate-200"></div>
                          <div className="h-2 w-3/4 animate-pulse rounded-full bg-slate-200"></div>
                          <div className="h-2 w-1/2 animate-pulse rounded-full bg-slate-200"></div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="border-t border-slate-100 p-4">
              <form onSubmit={handleSubmit} className="relative flex items-center">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask Pythia a question..."
                  className="w-full rounded-full border border-slate-200 bg-slate-50 py-3 pl-4 pr-12 text-[15px] outline-none transition-colors focus:border-[var(--color-primary)] focus:bg-white"
                  disabled={status === "streaming"}
                />
                <button
                  type="submit"
                  disabled={!input.trim() || status === "streaming"}
                  className="absolute right-2 flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-primary)] text-white transition-opacity disabled:opacity-50 cursor-pointer"
                >
                  <Send size={16} />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

