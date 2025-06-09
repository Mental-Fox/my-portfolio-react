// components/EducationItem/EducationItem.jsx
import React from 'react';
import './EducationItem.css';

const EducationItem = ({ degree, university, year, url }) => {
    return (
        <div className="education-item">
            <a href={url} target="_blank" rel="noopener noreferrer" className="education-item-link">
                <div className="education-item__degree">{degree}</div>
                <div className="education-item__university">{university}</div>
                <div className="education-item__year">{year}</div>
            </a>
        </div>
    );
};

export default EducationItem;