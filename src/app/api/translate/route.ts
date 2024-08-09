import { NextResponse } from 'next/server';
import { translateWithChatGPT } from '@/services/openaiService';

export async function POST(req: Request) {
  const { text, languages } = await req.json();

  if (!text || !languages || !Array.isArray(languages)) {
    return NextResponse.json({ error: 'Missing or invalid text or languages' }, { status: 400 });
  }

  try {
    const translations = await translateWithChatGPT(text, languages);
    return NextResponse.json({ translations });
  } catch (error) {
    console.error('Translation error:', error);
    return NextResponse.json({ error: 'Translation failed' }, { status: 500 });
  }
}
