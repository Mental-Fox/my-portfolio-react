import React from 'react';
import './Technologies.css';
import WordCloud from '../../components/WordCloud/WordCloud';

const Technologies = () => {
    const techSections = [
        {
            title: 'Frontend',
            words: [
                { text: 'JavaScript', weight: 5 },
                { text: 'React.JS', weight: 4 },
                { text: 'Figma', weight: 4 },
                { text: 'HTML/CSS', weight: 7 },
                { text: 'Chart.js', weight: 3 },
                { text: 'Git', weight: 5 },
            ]
        },
        {
            title: 'Backend',
            words: [
                { text: 'PHP', weight: 5 },
                { text: 'Node.js', weight: 2 },
                { text: 'JWT Auth', weight: 1 },
                { text: 'MySQL', weight: 5 },
                { text: 'SQLAlchemy', weight: 3 },
                { text: 'PostgreSQL', weight: 2 },
                { text: 'ClickHouse', weight: 3 },
                { text: 'Python', weight: 6 },
                { text: 'OpenAI API', weight: 6 },
            ]
        },
        {
            title: 'BI/Analytics',
            words: [
                { text: 'Tableau Desktop', weight: 9 },
                { text: 'Tableau Server', weight: 7 },
                { text: 'Power BI', weight: 4 },
                { text: 'Looker Studio', weight: 3 },
                { text: '#data_visualisation', weight: 7 },
                { text: '#ai_automation', weight: 3 },
            ]
        },
        {
            title: 'Telecom',
            words: [
                { text: 'GSM, UMTS, LTE, NR', weight: 4 },
                { text: 'OSS', weight: 3 },
                { text: '#development_of_technical_tasks', weight: 2 },
                { text: '#ability_to_find_ways_of_solving_them', weight: 2 },
                { text: '#fast_learning', weight: 2 },
                { text: '#problem_solving_mindset', weight: 2 },
                { text: '#team_collaboration', weight: 2 },
                { text: '#documentation_writing', weight: 2 },
            ]
        }
    ];

    return (
        <div className="section tech">
            <h1>Стек технологий</h1>
            <div className="tech-grid-4">
                {techSections.map((section, index) => (
                    <div key={index} className="tech-block">
                        <h2>{section.title}</h2>
                        <WordCloud words={section.words} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Technologies;
