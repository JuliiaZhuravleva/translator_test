import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY, // Используем ключ API из окружения
});

const modelOptions = {
  '3': 'gpt-3.5-turbo',
  '4': 'gpt-4',
};

const useModel = modelOptions['4']; // Инициализация модели

export async function translateWithChatGPT(text: string, targetLanguages: string[]): Promise<Record<string, string>> {
  const translations: Record<string, string> = {}; // Убедитесь, что это правильный синтаксис

  for (const language of targetLanguages) {
    const prompt = `Translate the following text to ${language}: "${text}"`;

    try {
      const completion = await openai.chat.completions.create({
        model: useModel,
        messages: [
          { role: 'system', content: `You are a helpful assistant that translates text.` },
          { role: 'user', content: prompt },
        ],
      });

      const translation = completion.choices[0].message?.content.trim() || '';
      translations[language] = translation;
    } catch (error) {
      console.error(`Error translating to ${language}:`, error);
      translations[language] = `Error: Could not translate to ${language}`;
    }
  }

  return translations;
}
