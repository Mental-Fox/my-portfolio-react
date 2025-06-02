// components/ExperienceItem/ExperienceItem.jsx
import React from 'react';
import TagList from '../TagList/TagList';
import './ExperienceItem.css';

const ExperienceItem = ({ company, position, period, description, technologies, url }) => {
    const descriptionLines = description.split('\n');

    return (
        <a href={url} target="_blank" rel="noopener noreferrer" className="experience-item-link">
            <div className="experience-item">
                <div className="experience-item__company">{company}</div>
                <div className="experience-item__position">{position}</div>
                <div className="experience-item__period">{period}</div>
                <div className="experience-item__description">
                    <ul className="description-list">
                        {descriptionLines.map((line, index) => (
                            <li key={index} className="description-line">{line}</li>
                        ))}
                    </ul>
                </div>
                {technologies && <TagList tags={technologies} />}
            </div>
        </a>
    );
};

export default ExperienceItem;