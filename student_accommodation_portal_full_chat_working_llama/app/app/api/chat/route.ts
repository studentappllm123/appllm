// app/api/chat/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { message } = await req.json();

  try {
    const response = await fetch("http://localhost:11434/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "llama3",
        prompt: message,
        stream: false,
      }),
    });

    const data = await response.json();

    return NextResponse.json({
      ok: true,
      reply: data.response,
    });
  } catch (error: any) {
    console.error("Ollama error:", error);
    return NextResponse.json(
      { ok: false, reply: "⚠️ LLaMA backend error." },
      { status: 500 }
    );
  }
}