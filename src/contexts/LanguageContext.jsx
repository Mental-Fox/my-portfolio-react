import React, { createContext, useState, useEffect } from 'react';
import { ru } from '../locales/ru';
import { en } from '../locales/en';

const LanguageContext = createContext();

const translations = {
    ru,
    en,
};

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(() => localStorage.getItem('language') || 'ru');

    useEffect(() => {
        localStorage.setItem('language', language);
    }, [language]);

    const switchLanguage = (lang) => {
        setLanguage(lang);
    };

    return (
        <LanguageContext.Provider value={{ language, switchLanguage, data: translations[language] }}>
            {children}
        </LanguageContext.Provider>
    );
};

export default LanguageContext;