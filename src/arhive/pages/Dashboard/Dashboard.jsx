import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
    return (
        // <div className="dashboard section">
        //     <h1>Dashboard</h1>
        //     <div className="dashboard-grid">
        //         {/* <div className="widget">
        //             <h3>Проекты</h3>
        //             <p>15 завершено</p>
        //         </div> */}
        //         <div className="widget">
        //             <h3>Навыки</h3>
        //             <p>20+ технологий</p>
        //         </div>
        //         <div className="widget">
        //             <h3>Активность</h3>
        //             <p>Последний проект: CRM</p>
        //         </div>
        //         <div className="widget">
        //             <h3>Курсы</h3>
        //             <p>10 пройдено</p>
        //         </div>
        //     </div>
        // </div>

        <div className="timeline">
            <div className="timeline-item">
                <div className="timeline-content">
                    <h3>2020</h3>
                    <p>Начал изучать программирование</p>
                </div>
            </div>
            <div className="timeline-item">
                <div className="timeline-content">
                    <h3>2021</h3>
                    <p>Завершил первый курс по JavaScript</p>
                </div>
            </div>
            <div className="timeline-item">
                <div className="timeline-content">
                    <h3>2022</h3>
                    <p>Создал первую CRM систему</p>
                </div>
            </div>
            <div className="timeline-item">
                <div className="timeline-content">
                    <h3>2024</h3>
                    <p>Стал ведущим фронтенд-разработчиком</p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;