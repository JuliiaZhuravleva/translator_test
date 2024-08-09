import React from 'react';

const languages = [
  'Spanish', 'French', 'German', 'Chinese', 'Japanese',
  'Russian', 'Italian', 'Portuguese', 'Arabic', 'Korean'
];

type LanguageSelectorProps = {
  selectedLanguages: string[];
  onLanguageChange: (language: string) => void;
};

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ selectedLanguages, onLanguageChange }) => {
  return (
    <div>
      <h3>Select languages for translation:</h3>
      <ul>
        {languages.map((language) => (
          <li key={language}>
            <label>
              <input
                type="checkbox"
                value={language}
                checked={selectedLanguages.includes(language)}
                onChange={() => onLanguageChange(language)}
              />
              {language}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LanguageSelector;
