"use client"; 

import React, { useState } from 'react';
import axios from 'axios';
import LanguageSelector from '@/components/LanguageSelector';

export default function Home() {
  const [text, setText] = useState('');
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
  const [translations, setTranslations] = useState<Record<string, string>>({});

  const handleLanguageChange = (language: string) => {
    setSelectedLanguages((prev) =>
      prev.includes(language)
        ? prev.filter((lang) => lang !== language)
        : [...prev, language]
    );
  };

  const handleTranslate = async () => {
    try {
      const response = await axios.post('/api/translate', {
        text,
        languages: selectedLanguages,
      });

      setTranslations(response.data.translations);
    } catch (error) {
      console.error('Translation error:', error);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Translate Text with ChatGPT</h1>
      <textarea
        className="w-full p-2 border border-gray-300 bg-white text-black rounded mb-4"
        rows={4}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text to translate"
      />
      <LanguageSelector
        selectedLanguages={selectedLanguages}
        onLanguageChange={handleLanguageChange}
      />
      <button
        onClick={handleTranslate}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Translate
      </button>

      {Object.keys(translations).length > 0 && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">Translations:</h2>
          <ul>
            {Object.entries(translations).map(([language, translation]) => (
              <li key={language} className="mb-1">
                <strong>{language}:</strong> {translation}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
