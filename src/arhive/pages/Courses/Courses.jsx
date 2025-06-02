import React, { useState, useEffect } from 'react';
import './Courses.css';
import { Draggable } from 'gsap/Draggable';

const Courses = () => {
    const [modalData, setModalData] = useState(null);

    const courseData = {
        1: {
            title: 'React и Redux',
            platform: 'Udemy, 2023',
            description: 'Освоил создание сложных интерфейсов с React и управление состоянием с Redux.',
            certLink: '#',
            category: 'frontend',
        },
        2: {
            title: 'Продвинутый JavaScript',
            platform: 'Coursera, 2022',
            description: 'Глубокое изучение асинхронного программирования и современных стандартов JS.',
            certLink: '#',
            category: 'frontend',
        },
        3: {
            title: 'UI/UX Дизайн',
            platform: 'Skillbox, 2021',
            description: 'Научился создавать пользовательские интерфейсы и прототипы.',
            certLink: '#',
            category: 'design',
        },
        4: {
            title: 'Node.js Основы',
            platform: 'Pluralsight, 2023',
            description: 'Изучил серверную разработку с использованием Node.js.',
            certLink: '#',
            category: 'backend',
        },
    };

    const handleCardClick = (courseId) => {
        setModalData(courseData[courseId]);
    };

    const closeModal = () => {
        setModalData(null);
    };

    useEffect(() => {
        Draggable.create('.course-card', {
            bounds: '.course-list',
            edgeResistance: 0.65,
            inertia: true
        });
    }, []);

    const handleFilter = (filter) => {
        const cards = document.querySelectorAll('.course-card');
        cards.forEach((card) => {
            card.style.display =
                filter === 'all' || card.dataset.category === filter ? 'block' : 'none';
        });
    };

    return (
        <div className="courses section">
            <h1>Пройденные курсы</h1>
            <div className="filters">
                <button className="filter-btn active" onClick={() => handleFilter('all')}>Все</button>
                <button className="filter-btn" onClick={() => handleFilter('frontend')}>Фронтенд</button>
                <button className="filter-btn" onClick={() => handleFilter('backend')}>Бэкенд</button>
                <button className="filter-btn" onClick={() => handleFilter('design')}>Дизайн</button>
            </div>

            <div className="course-list">
                {Object.entries(courseData).map(([id, course]) => (
                    <div
                        key={id}
                        className="course-card"
                        data-course={id}
                        data-category={course.category}
                        onClick={() => handleCardClick(id)}
                    >
                        <h3>{course.title}</h3>
                        <p>{course.platform}</p>
                    </div>
                ))}
            </div>

            {/* Новый модал */}
            {modalData && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-box" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={closeModal}>×</button>
                        <h2>{modalData.title}</h2>
                        <p><strong>Платформа:</strong> {modalData.platform}</p>
                        <p>{modalData.description}</p>
                        <a href={modalData.certLink} target="_blank" rel="noopener noreferrer">
                            Перейти к сертификату →
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Courses;
