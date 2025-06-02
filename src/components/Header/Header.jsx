import React, { useContext } from 'react';
import LanguageContext from '../../contexts/LanguageContext';
import avatar from '../../assets/profile.jpg';
import './Header.css';

const Header = ({ name, title }) => {
    const { language, switchLanguage } = useContext(LanguageContext);

    const handleLanguageChange = (e) => {
        switchLanguage(e.target.value);
    };

    return (
        <div className="header">
            <div className="header__avatar">
                <img src={avatar} alt={name} />
            </div>
            <div className="header__info">
                <h1 className="header__name">{name}</h1>
                <h2 className="header__title">{title}</h2>
            </div>
            <div className="header__language-switcher">
                <select
                    value={language}
                    onChange={handleLanguageChange}
                    className="language-dropdown"
                    aria-label="Select language"
                >
                    <option value="ru" data-flag="🇷🇺">
                        Русский
                    </option>
                    <option value="en" data-flag="🇬🇧">
                        English
                    </option>
                </select>
            </div>
        </div>
    );
};

export default Header;