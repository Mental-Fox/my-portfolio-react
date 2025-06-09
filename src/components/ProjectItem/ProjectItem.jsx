// components/ProjectItem/ProjectItem.jsx
import React from 'react';
import TagList from '../TagList/TagList';
import './ProjectItem.css';

const ProjectItem = ({ name, period, description, technologies, url }) => {
    return (
        <div className="project-item">
            <a href={url} target="_blank" rel="noopener noreferrer" className="project-item-link">
                <div className="project-item__name">{name}</div>
                <div className="project-item__period">{period}</div>
                <div className="project-item__description">{description}</div>
                {technologies && <TagList tags={technologies} />}
            </a>
        </div>
    );
};

export default ProjectItem;