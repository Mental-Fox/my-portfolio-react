import React, { useEffect } from 'react';
import './About.css';
import { gsap } from 'gsap';

const About = () => {
    useEffect(() => {
        gsap.from('.timeline-item', {
            y: 50,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power2.out',
            delay: 0.5,
        });
    }, []);

    return (
        <div className="about section">
            <h1>Project NN</h1>
            <div className="about-content">
                <div>
                    <p><strong>О себе: </strong>Специалист по анализу данных и отчетности в сфере OSS. Занимаюсь разработкой уникальных и оптимизированных решений для визуализации в Tableau, которые стали стандартом для компании. Обладаю опытом работы с большим объемом данных (SQL, Python) и поддержкой стабильности аналитических платформ. Моя работа направлена на предоставление руководству и командам точной и своевременной информации.</p>
                    <p><strong>Цели: </strong>Статьフルスタック — разработчиком, участвовать в open-source проектах и создавать продукты, улучшающие жизнь людей.</p>
                </div>

                <div>
                    <p><strong>Контакты: </strong>Telegram: @n_nikolay_kz</p>
                    <p><strong>Хобби: </strong>Играть в компьютерные игры, Ездить на дачу, Сделать что-то самому.</p>
                    <p><strong>Знание языков: </strong>
                        <ul>
                            <li><span>Русский — Родной</span></li>
                            <li><span>Казахский — A1</span></li>
                            <li><span>Английский — B1 </span></li>
                        </ul>
                    </p>
                    <p><strong>Проживает: </strong>Казахстан, Алматы</p>
                </div>
            </div>
            <h1 className="timeline-about">Опыт работы</h1>
            <div className="timeline">
                <div className="timeline-item">
                    <div className="timeline-content">
                        <h3>Lead Engineer Developer OSS (Группа автоматизации отчетности и поддержки систем)</h3>
                        <p>Tele2 Kazakhstan</p>
                        <p>Октябрь 2024 — сейчас</p>
                    </div>
                </div>
                <div className="timeline-item">
                    <div className="timeline-content">
                        <h3>Middle/Senior Engineer Developer OSS (Группа автоматизации отчетности и поддержки систем)</h3>
                        <p>Tele2 Kazakhstan</p>
                        <p>Февраль 2023 — Октябрь 2024</p>
                    </div>
                </div>
                <div className="timeline-item">
                    <div className="timeline-content">
                        <h3>Engineer OSS (Отдел технической отчетности и поддержки систем)</h3>
                        <p>Tele2 Kazakhstan</p>
                        <p>Декабрь 2021 — Январь 2023</p>
                    </div>
                </div>
                <div className="timeline-item">
                    <div className="timeline-content">
                        <h3>Специалист технической поддержки отдела Servicedesk и Helpdesk</h3>
                        <p>TOO "iSME"</p>
                        <p>Май 2021 — Ноябрь 2021</p>
                    </div>
                </div>
                <div className="timeline-item">
                    <div className="timeline-content">
                        <h3>Монтажник СКС (Структурированная кабельная система)</h3>
                        <p>АО "Eurasian Foods Corporation"</p>
                        <p>Март 2021 — Апрель 2021</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;