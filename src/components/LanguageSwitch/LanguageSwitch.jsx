// components/LanguageSwitch/LanguageSwitch.jsx
import React from 'react';
import './LanguageSwitch.css';

const LanguageSwitch = ({ currentLanguage, onLanguageChange, availableLanguages }) => {
    const languageNames = {
        ru: 'RU',
        en: 'EN'
    };

    return (
        <div className="language-switch">
            {availableLanguages.map(lang => (
                <button
                    key={lang}
                    className={`language-switch__button ${currentLanguage === lang ? 'language-switch__button--active' : ''
                        }`}
                    onClick={() => onLanguageChange(lang)}
                >
                    {languageNames[lang]}
                </button>
            ))}
        </div>
    );
};

export default LanguageSwitch;