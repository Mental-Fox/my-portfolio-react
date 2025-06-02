import React from 'react';
import './ContactInfo.css';
import { FaPhone, FaEnvelope, FaGithub, FaMapMarkerAlt, FaTelegram } from 'react-icons/fa';

const iconMap = {
    phone: <FaPhone />,
    email: <FaEnvelope />,
    github: <FaGithub />,
    location: <FaMapMarkerAlt />,
    telegram: <FaTelegram />,
};

const ContactInfo = ({ contacts }) => {
    const renderContactText = (icon, text) => {
        if (icon === 'github' || icon === 'telegram') {
            let href = text;
            if (icon === 'telegram' && !text.startsWith('http')) {
                href = `https://t.me/${text.replace('@', '')}`;
            }
            return (
                <a href={href} target="_blank" rel="noopener noreferrer" className="contact-info__link">
                    {text}
                </a>
            );
        }
        return text;
    };

    return (
        <div className="contact-info">
            {contacts.map((contact, index) => (
                <div key={index} className="contact-info__item">
                    <span className="contact-info__icon">{iconMap[contact.icon]}</span>
                    <span className="contact-info__text">
                        {renderContactText(contact.icon, contact.text)}
                    </span>
                </div>
            ))}
        </div>
    );
};

export default ContactInfo;
