// components/CertificateItem/CertificateItem.jsx
import React from 'react';
import './CertificateItem.css';
import { FaPython, FaDatabase, FaReact, FaSitemap } from 'react-icons/fa';

const iconMap = {
    data: <FaDatabase />,
    python: <FaPython />,
    frontend: <FaReact />,
    gpt: <FaSitemap />,
};

const CertificateItem = ({ name, year, icon, url }) => {
    const selectedIcon = iconMap[icon] || null;

    const content = (
        <div className="certificate-item">
            <div className="certificate-item__logo">
                {selectedIcon}
            </div>
            <div className="certificate-item__info">
                <div className="certificate-item__name">{name}</div>
                <div className="certificate-item__year">{year}</div>
            </div>
        </div>
    );

    return url ? (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="certificate-item__link"
        >
            {content}
        </a>
    ) : (
        content
    );
};

export default CertificateItem;
