// components/Section/Section.jsx
import React from 'react';
import './Section.css';

const Section = ({ title, icon, children, className = '' }) => {
    return (
        <div className={`section ${className}`}>
            <div className="section__header">
                <span className="section__icon">{icon}</span>
                <span className="section__title">{title}</span>
            </div>
            <div className="section__content">
                {children}
            </div>
        </div>
    );
};

export default Section;