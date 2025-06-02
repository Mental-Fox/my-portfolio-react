// components/ProjectItem/ProjectItem.jsx
import React from 'react';
import TagList from '../TagList/TagList';
import './ProjectItem.css';

const ProjectItem = ({ name, period, description, technologies }) => {
    return (
        <div className="project-item">
            <div className="project-item__name">{name}</div>
            <div className="project-item__period">{period}</div>
            <div className="project-item__description">{description}</div>
            {technologies && <TagList tags={technologies} />}
        </div>
    );
};

export default ProjectItem;