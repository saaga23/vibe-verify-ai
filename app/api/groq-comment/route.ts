import { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { percentage, isReal, caption } = await req.json();

    const prompt = `You are Vibey — savage 2026 Gen-Z vibe detective.
Caption: "${caption}".
Score: ${percentage}% ${isReal ? 'REAL' : 'AI'}.

Return ONLY valid JSON:
{
  "wowComment": "one extremely funny personal wow phrase (max 14 words)",
  "archetype": "one catchy archetype",
  "risk": "one short risk line",
  "celebrityTwin": "perfect celeb match (gender + ethnicity + vibe accurate — for Black professional man in suit use Idris Elba / Michael B. Jordan / Daniel Kaluuya etc.)",
  "dateability": number 0-100,
  "memeEnergy": "one hilarious meme comparison",
  "badge": "one emoji badge"
}`;

    const groqRes = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${process.env.GROQ_API_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ model: 'llama-3.3-70b-versatile', messages: [{ role: 'user', content: prompt }], temperature: 1.3, max_tokens: 220 }),
    });

    const data = await groqRes.json();
    return Response.json(JSON.parse(data.choices[0].message.content));
  } catch (_) {
    return Response.json({ wowComment: "This energy is illegally attractive 🔥", archetype: "Main Character Energy", risk: "Zero risk", celebrityTwin: "Idris Elba / Michael B. Jordan vibes", dateability: 96, memeEnergy: "Serving 'CEO in a rom-com' realness", badge: "✅ SAFE TO SLIDE" });
  }
}