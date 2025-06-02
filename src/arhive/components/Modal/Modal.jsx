import React from 'react';
import './Modal.css';

const CourseModal = ({ course, onClose }) => {
    if (!course) return null;

    return (
        <div className="course-modal-overlay" onClick={onClose}>
            <div className="course-modal" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>×</button>
                <h2>{course.title}</h2>
                <p><strong>Платформа:</strong> {course.platform}</p>
                <p><strong>Описание:</strong> {course.description}</p>
                <a href={course.certLink} target="_blank" rel="noopener noreferrer">
                    Перейти к сертификату →
                </a>
            </div>
        </div>
    );
};

export default CourseModal;
