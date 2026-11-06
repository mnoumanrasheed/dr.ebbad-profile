import { createPortfolioAnswer } from "@/lib/portfolioRag";

export const runtime = "nodejs";

export async function POST(request) {
  try {
    const { message } = await request.json();
    const question = typeof message === "string" ? message.trim().slice(0, 500) : "";

    if (!question) {
      return Response.json({ error: "Please enter a question about this portfolio." }, { status: 400 });
    }

    return Response.json(createPortfolioAnswer(question));
  } catch {
    return Response.json({ error: "The portfolio guide could not read that question. Please try again." }, { status: 400 });
  }
}
