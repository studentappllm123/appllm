// components/chat/Chatbot.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Chatbot() {
  const router = useRouter();
  const [messages, setMessages] = useState<{ sender: string; text: string; showOptions?: boolean }[]>([]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false); // toggle

  // Show initial message when chat is opened
  const handleChatOpen = () => {
    setIsOpen(true);
    if (messages.length === 0) {
      setMessages([
        { 
          sender: "bot", 
          text: "👋 Type 'Hi' to start the conversation!", 
          showOptions: false 
        }
      ]);
    }
  };

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { sender: "user", text: input }];
    setMessages(newMessages);

    // Check if input is "Hi" and show options
    if (input.trim().toLowerCase() === "hi") {
      setMessages([
        ...newMessages,
        { 
          sender: "bot", 
          text: "👋 Hi there! Welcome to the Student Exam Accommodation Assistant.\n\nAre you a:\n🔹 Student looking for a place to stay near your exam center?\n🔹 Property owner who wants to list a PG or hotel?\n\nPlease choose an option to continue.",
          showOptions: true 
        }
      ]);
      setInput("");
      return;
    }

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();
      // For getting chat response 
      console.log("Chatbot API response:", data); 
      setMessages([
        ...newMessages,
        { sender: "bot", text: data.reply || "No response from bot." },
        //{ sender: "bot", text: data.response || "No response from bot." },//
        //{ sender: "bot", text: data.answer || "No response from bot." },//
      ]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages([...newMessages, { sender: "bot", text: "⚠️ Something went wrong." }]);
    }

    setInput("");
  };

  return (
    <div className="relative">
      {/* Floating button */}
      {!isOpen && (
        <button
          onClick={handleChatOpen}
          className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700"
        >
          💬
        </button>
      )}

      {/* Chat window */}
      {isOpen && (
        <div className="w-96 h-[480px] p-4 border rounded-lg shadow-md bg-white flex flex-col">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-bold">Chat Assistant</h2>
            <button onClick={() => setIsOpen(false)} className="text-gray-500">✖</button>
          </div>

          <div className="flex-1 overflow-y-auto border p-2 mb-2 rounded-md bg-gray-50">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`p-2 my-1 rounded-md ${
                  msg.sender === "user"
                    ? "bg-blue-500 text-white text-right text-sm"
                    : msg.text.includes("Type 'Hi'")
                    ? "text-center italic text-gray-500"
                    : "bg-gray-200 text-left"
                }`}
              >
                <div style={{ whiteSpace: 'pre-line' }} className={`${msg.sender === "bot" ? "text-sm leading-relaxed" : ""}`}>{msg.text}</div>
                {msg.showOptions && (
                  <div className="flex flex-col gap-2 mt-3">
                    <button 
                      onClick={() => {
                        setIsOpen(false);
                        router.push('/student/search');
                      }}
                      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm font-medium"
                    >
                      Student
                    </button>
                    <button 
                      onClick={() => {
                        setIsOpen(false);
                        router.push('/auth/register?type=owner');
                      }}
                      className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 text-sm font-medium"
                    >
                      Property Owner
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex">
            <input
              className="flex-grow border rounded-l-md p-2 text-sm"
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
            />
            <button
              onClick={sendMessage}
              className="bg-blue-600 text-white px-4 rounded-r-md hover:bg-blue-700 text-sm font-medium"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
