import React from 'react';

const Resume = () => {
    const styles = {
        container: {
            fontFamily: 'Arial, sans-serif',
            maxWidth: '1200px',
            margin: '0 auto',
            backgroundColor: '#f5f5f5',
            minHeight: '100vh'
        },
        header: {
            backgroundColor: '#2E86AB',
            color: 'white',
            padding: '20px',
            display: 'flex',
            alignItems: 'center',
            gap: '20px'
        },
        avatar: {
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            backgroundColor: '#ddd',
            backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'80\' height=\'80\' viewBox=\'0 0 80 80\'%3E%3Crect fill=\'%23ccc\' width=\'80\' height=\'80\'/%3E%3Ctext x=\'50%25\' y=\'50%25\' text-anchor=\'middle\' dy=\'0.3em\' font-size=\'24\' fill=\'%23666\'%3E👤%3C/text%3E%3C/svg%3E")',
            backgroundSize: 'cover'
        },
        headerInfo: {
            flex: 1
        },
        name: {
            fontSize: '24px',
            fontWeight: 'bold',
            margin: '0 0 10px 0'
        },
        title: {
            fontSize: '18px',
            margin: '0',
            opacity: 0.9
        },
        mainContent: {
            display: 'flex',
            gap: '20px',
            padding: '20px'
        },
        leftColumn: {
            width: '300px',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px'
        },
        rightColumn: {
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            gap: '20px'
        },
        section: {
            backgroundColor: 'white',
            borderRadius: '8px',
            overflow: 'hidden',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        },
        sectionHeader: {
            backgroundColor: '#2E86AB',
            color: 'white',
            padding: '15px 20px',
            fontSize: '16px',
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
        },
        sectionContent: {
            padding: '20px'
        },
        skillBar: {
            marginBottom: '15px'
        },
        skillName: {
            fontSize: '14px',
            marginBottom: '5px',
            fontWeight: '500'
        },
        skillBarContainer: {
            height: '8px',
            backgroundColor: '#e0e0e0',
            borderRadius: '4px',
            overflow: 'hidden'
        },
        skillBarFill: {
            height: '100%',
            backgroundColor: '#2E86AB',
            borderRadius: '4px'
        },
        contactItem: {
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            marginBottom: '10px',
            fontSize: '14px'
        },
        experienceItem: {
            marginBottom: '25px',
            paddingBottom: '20px',
            borderBottom: '1px solid #eee'
        },
        companyName: {
            fontSize: '18px',
            fontWeight: 'bold',
            color: '#2E86AB',
            marginBottom: '5px'
        },
        jobTitle: {
            fontSize: '16px',
            fontWeight: '600',
            marginBottom: '5px'
        },
        jobPeriod: {
            fontSize: '14px',
            color: '#666',
            marginBottom: '10px'
        },
        jobDescription: {
            fontSize: '14px',
            lineHeight: '1.5',
            marginBottom: '10px'
        },
        techList: {
            display: 'flex',
            flexWrap: 'wrap',
            gap: '5px'
        },
        techTag: {
            backgroundColor: '#f0f8ff',
            color: '#2E86AB',
            padding: '3px 8px',
            borderRadius: '12px',
            fontSize: '12px',
            border: '1px solid #2E86AB'
        },
        projectItem: {
            marginBottom: '20px',
            paddingBottom: '15px',
            borderBottom: '1px solid #eee'
        },
        projectName: {
            fontSize: '16px',
            fontWeight: 'bold',
            color: '#2E86AB',
            marginBottom: '5px'
        },
        educationItem: {
            marginBottom: '15px'
        },
        degree: {
            fontSize: '16px',
            fontWeight: 'bold',
            marginBottom: '3px'
        },
        university: {
            fontSize: '14px',
            color: '#666',
            marginBottom: '3px'
        },
        year: {
            fontSize: '14px',
            color: '#888'
        },
        certificateItem: {
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            marginBottom: '15px',
            padding: '10px',
            backgroundColor: '#f9f9f9',
            borderRadius: '5px'
        },
        certificateLogo: {
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            backgroundColor: '#ddd',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '20px'
        }
    };

    const skills = [
        { name: 'Python', level: 95 },
        { name: 'Django', level: 90 },
        { name: 'FastAPI', level: 85 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'Docker', level: 75 },
        { name: 'Redis', level: 70 },
        { name: 'JavaScript', level: 65 },
        { name: 'React', level: 60 }
    ];

    const languages = [
        { name: 'Русский', level: 100 },
        { name: 'English', level: 75 },
        { name: 'Казахский', level: 50 }
    ];

    return (
        <div style={styles.container}>
            <div style={styles.header}>
                <div style={styles.avatar}></div>
                <div style={styles.headerInfo}>
                    <h1 style={styles.name}>Андрей Трифонов</h1>
                    <h2 style={styles.title}>Python Developer</h2>
                </div>
            </div>

            <div style={styles.mainContent}>
                <div style={styles.leftColumn}>
                    {/* Контакты */}
                    <div style={styles.section}>
                        <div style={styles.sectionHeader}>
                            📞 Контакты
                        </div>
                        <div style={styles.sectionContent}>
                            <div style={styles.contactItem}>
                                <span>📱</span>
                                <span>+7 (777) 123-45-67</span>
                            </div>
                            <div style={styles.contactItem}>
                                <span>✉️</span>
                                <span>andrey@example.com</span>
                            </div>
                            <div style={styles.contactItem}>
                                <span>🌐</span>
                                <span>github.com/andreydev</span>
                            </div>
                            <div style={styles.contactItem}>
                                <span>📍</span>
                                <span>Алматы, Казахстан</span>
                            </div>
                        </div>
                    </div>

                    {/* Навыки */}
                    <div style={styles.section}>
                        <div style={styles.sectionHeader}>
                            ⚡ Навыки
                        </div>
                        <div style={styles.sectionContent}>
                            {skills.map((skill, index) => (
                                <div key={index} style={styles.skillBar}>
                                    <div style={styles.skillName}>{skill.name}</div>
                                    <div style={styles.skillBarContainer}>
                                        <div
                                            style={{
                                                ...styles.skillBarFill,
                                                width: `${skill.level}%`
                                            }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Языки */}
                    <div style={styles.section}>
                        <div style={styles.sectionHeader}>
                            🌍 Языки
                        </div>
                        <div style={styles.sectionContent}>
                            {languages.map((lang, index) => (
                                <div key={index} style={styles.skillBar}>
                                    <div style={styles.skillName}>{lang.name}</div>
                                    <div style={styles.skillBarContainer}>
                                        <div
                                            style={{
                                                ...styles.skillBarFill,
                                                width: `${lang.level}%`
                                            }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Интересы */}
                    <div style={styles.section}>
                        <div style={styles.sectionHeader}>
                            🎯 Интересы
                        </div>
                        <div style={styles.sectionContent}>
                            <div style={styles.techList}>
                                <span style={styles.techTag}>Machine Learning</span>
                                <span style={styles.techTag}>Blockchain</span>
                                <span style={styles.techTag}>DevOps</span>
                                <span style={styles.techTag}>Спорт</span>
                                <span style={styles.techTag}>Путешествия</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={styles.rightColumn}>
                    {/* Обо мне */}
                    <div style={styles.section}>
                        <div style={styles.sectionHeader}>
                            👤 Обо мне
                        </div>
                        <div style={styles.sectionContent}>
                            <p style={styles.jobDescription}>
                                Опытный Python разработчик с 5+ летним стажем в создании веб-приложений
                                и API. Специализируюсь на Django, FastAPI и современных технологиях разработки.
                                Имею опыт работы с микросервисной архитектурой, контейнеризацией и CI/CD процессами.
                            </p>
                        </div>
                    </div>

                    {/* Опыт работы */}
                    <div style={styles.section}>
                        <div style={styles.sectionHeader}>
                            💼 Опыт работы
                        </div>
                        <div style={styles.sectionContent}>
                            <div style={styles.experienceItem}>
                                <div style={styles.companyName}>ТехноСофт Казахстан</div>
                                <div style={styles.jobTitle}>Senior Python Developer</div>
                                <div style={styles.jobPeriod}>2022 - настоящее время</div>
                                <div style={styles.jobDescription}>
                                    Разработка и поддержка высоконагруженных веб-приложений на Django/FastAPI.
                                    Проектирование RESTful API, оптимизация баз данных, внедрение Docker контейнеризации.
                                </div>
                                <div style={styles.techList}>
                                    <span style={styles.techTag}>Python</span>
                                    <span style={styles.techTag}>Django</span>
                                    <span style={styles.techTag}>PostgreSQL</span>
                                    <span style={styles.techTag}>Redis</span>
                                    <span style={styles.techTag}>Docker</span>
                                </div>
                            </div>

                            <div style={styles.experienceItem}>
                                <div style={styles.companyName}>Digital Solutions</div>
                                <div style={styles.jobTitle}>Python Developer</div>
                                <div style={styles.jobPeriod}>2020 - 2022</div>
                                <div style={styles.jobDescription}>
                                    Создание веб-приложений для e-commerce, интеграция с платежными системами,
                                    разработка административных панелей и API для мобильных приложений.
                                </div>
                                <div style={styles.techList}>
                                    <span style={styles.techTag}>Python</span>
                                    <span style={styles.techTag}>Flask</span>
                                    <span style={styles.techTag}>MySQL</span>
                                    <span style={styles.techTag}>JavaScript</span>
                                </div>
                            </div>

                            <div style={styles.experienceItem}>
                                <div style={styles.companyName}>StartupHub</div>
                                <div style={styles.jobTitle}>Junior Python Developer</div>
                                <div style={styles.jobPeriod}>2019 - 2020</div>
                                <div style={styles.jobDescription}>
                                    Участие в разработке MVP продуктов, создание скриптов автоматизации,
                                    работа с Django REST Framework, изучение современных практик разработки.
                                </div>
                                <div style={styles.techList}>
                                    <span style={styles.techTag}>Python</span>
                                    <span style={styles.techTag}>Django</span>
                                    <span style={styles.techTag}>DRF</span>
                                    <span style={styles.techTag}>SQLite</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Персональные проекты */}
                    <div style={styles.section}>
                        <div style={styles.sectionHeader}>
                            🚀 Персональные проекты
                        </div>
                        <div style={styles.sectionContent}>
                            <div style={styles.projectItem}>
                                <div style={styles.projectName}>E-commerce Platform</div>
                                <div style={styles.jobPeriod}>2023</div>
                                <div style={styles.jobDescription}>
                                    Полнофункциональная платформа электронной коммерции с микросервисной архитектурой,
                                    включающая сервисы для пользователей, товаров, заказов и платежей.
                                </div>
                                <div style={styles.techList}>
                                    <span style={styles.techTag}>FastAPI</span>
                                    <span style={styles.techTag}>PostgreSQL</span>
                                    <span style={styles.techTag}>Redis</span>
                                    <span style={styles.techTag}>Docker</span>
                                    <span style={styles.techTag}>Kubernetes</span>
                                </div>
                            </div>

                            <div style={styles.projectItem}>
                                <div style={styles.projectName}>Task Management API</div>
                                <div style={styles.jobPeriod}>2022</div>
                                <div style={styles.jobDescription}>
                                    RESTful API для управления задачами с аутентификацией JWT,
                                    системой уведомлений и интеграцией с внешними календарями.
                                </div>
                                <div style={styles.techList}>
                                    <span style={styles.techTag}>Django</span>
                                    <span style={styles.techTag}>Celery</span>
                                    <span style={styles.techTag}>PostgreSQL</span>
                                    <span style={styles.techTag}>JWT</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Образование */}
                    <div style={styles.section}>
                        <div style={styles.sectionHeader}>
                            🎓 Образование
                        </div>
                        <div style={styles.sectionContent}>
                            <div style={styles.educationItem}>
                                <div style={styles.degree}>Бакалавр информационных технологий</div>
                                <div style={styles.university}>Казахский национальный университет им. аль-Фараби</div>
                                <div style={styles.year}>2015 - 2019</div>
                            </div>
                        </div>
                    </div>

                    {/* Сертификации */}
                    <div style={styles.section}>
                        <div style={styles.sectionHeader}>
                            🏆 Сертификации
                        </div>
                        <div style={styles.sectionContent}>
                            <div style={styles.certificateItem}>
                                <div style={styles.certificateLogo}>🐍</div>
                                <div>
                                    <div style={styles.skillName}>Python Institute PCEP</div>
                                    <div style={styles.year}>2023</div>
                                </div>
                            </div>

                            <div style={styles.certificateItem}>
                                <div style={styles.certificateLogo}>☁️</div>
                                <div>
                                    <div style={styles.skillName}>AWS Cloud Practitioner</div>
                                    <div style={styles.year}>2022</div>
                                </div>
                            </div>

                            <div style={styles.certificateItem}>
                                <div style={styles.certificateLogo}>🐳</div>
                                <div>
                                    <div style={styles.skillName}>Docker Certified Associate</div>
                                    <div style={styles.year}>2022</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;