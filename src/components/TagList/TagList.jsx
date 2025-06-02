// components/TagList/TagList.jsx
import React from 'react';
import './TagList.css';

const TagList = ({ tags }) => {
    return (
        <div className="tag-list">
            {tags.map((tag, index) => (
                <span key={index} className="tag-list__item">
                    {tag}
                </span>
            ))}
        </div>
    );
};

export default TagList;