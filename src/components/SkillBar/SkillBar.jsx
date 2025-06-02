// components/SkillBar/SkillBar.jsx
import React from 'react';
import './SkillBar.css';

const SkillBar = ({ name, level }) => {
    return (
        <div className="skill-bar">
            <div className="skill-bar__name">{name}</div>
            <div className="skill-bar__container">
                <div
                    className="skill-bar__fill"
                    style={{ width: `${level}%` }}
                ></div>
            </div>
        </div>
    );
};

export default SkillBar;