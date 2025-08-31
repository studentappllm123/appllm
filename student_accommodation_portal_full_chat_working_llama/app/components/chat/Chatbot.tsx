// components/chat/Chatbot.tsx
"use client";

import { useState } from "react";

export default function Chatbot() {
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>([]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false); // toggle

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { sender: "user", text: input }];
    setMessages(newMessages);

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
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700"
        >
          💬
        </button>
      )}

      {/* Chat window */}
      {isOpen && (
        <div className="w-80 h-96 p-4 border rounded-lg shadow-md bg-white flex flex-col">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-bold">Chatbot</h2>
            <button onClick={() => setIsOpen(false)} className="text-gray-500">✖</button>
          </div>

          <div className="flex-1 overflow-y-auto border p-2 mb-2 rounded-md bg-gray-50">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`p-2 my-1 rounded-md ${
                  msg.sender === "user"
                    ? "bg-blue-500 text-white text-right"
                    : "bg-gray-200 text-left"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <div className="flex">
            <input
              className="flex-grow border rounded-l-md p-2"
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
            />
            <button
              onClick={sendMessage}
              className="bg-blue-600 text-white px-4 rounded-r-md hover:bg-green-700"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
