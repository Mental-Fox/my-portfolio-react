// components/SkillsList/SkillsList.jsx
import React from 'react';
import SkillBar from '../SkillBar/SkillBar';
import './SkillsList.css';

const SkillsList = ({ skills }) => {
    return (
        <div className="skills-list">
            {skills.map((skill, index) => (
                <SkillBar
                    key={index}
                    name={skill.name}
                    level={skill.level}
                />
            ))}
        </div>
    );
};

export default SkillsList;