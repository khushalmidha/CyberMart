"use client";

import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

interface Message {
  role: "user" | "assistant"; // Ensure correct type
  content: string;
}

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Ensure the role is one of the valid literals: "user" or "assistant"
    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]); // TypeScript expects this
    setInput("");
    setIsLoading(true);
    console.log("Api KEy : ", process.env.NEXT_PUBLIC_GEMINI_API_KEY)
    try {
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.NEXT_PUBLIC_GEMINI_API_KEY}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: `input : ${input} \n wesite owner's prompt : Important that I have integrated you in a website.Website is owned by  Khushal. So respond considering that only and don't let themm know and behave like this website's bot this website name is CyberMart. You have to just respond to the thing wrriten in input. Answer queries related to only this website only if asked anything else then tell them you are urbant eco's bot. Give only general website related info only not any specific user's questions ` }] }],
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        console.error("Error:", data.error || response.statusText);
        return;
      }

      // Validate response structure
      const botResponse = data.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, I couldn't understand that.";
      const assistantMessage: Message = { role: "assistant", content: botResponse };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <Card className="w-80 h-96 flex flex-col">
          <div className="p-4 border-b flex justify-between items-center">
            <h3 className="font-semibold">Chat Support</h3>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
              <X className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-2 ${
                    message.role === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted"
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-muted rounded-lg p-2">
                  <span className="animate-pulse">...</span>
                </div>
              </div>
            )}
          </div>
          <form onSubmit={handleSubmit} className="p-4 border-t">
            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                disabled={isLoading}
              />
              <Button type="submit" disabled={isLoading}>
                Send
              </Button>
            </div>
          </form>
        </Card>
      ) : (
        <Button onClick={() => setIsOpen(true)} className="rounded-full h-12 w-12 shadow-lg">
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}
    </div>
  );
}
