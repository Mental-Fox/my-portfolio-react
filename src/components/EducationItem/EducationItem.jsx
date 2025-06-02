// components/EducationItem/EducationItem.jsx
import React from 'react';
import './EducationItem.css';

const EducationItem = ({ degree, university, year }) => {
    return (
        <div className="education-item">
            <div className="education-item__degree">{degree}</div>
            <div className="education-item__university">{university}</div>
            <div className="education-item__year">{year}</div>
        </div>
    );
};

export default EducationItem;