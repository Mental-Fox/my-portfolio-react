import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({ isCollapsed, toggleSidebar, toggleTheme }) => {

    const [isLightTheme, setIsLightTheme] = useState(false);

    return (
        <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
            <div className="menu-toggle">
                {/* <button className="toggle-btn" onClick={toggleSidebar}>
                    ☰
                </button> */}
                <h2>Project NN</h2>
            </div>
            <ul>
                {/* <li>
                    <NavLink to="/" className="nav-link">
                        <span>Dashboard</span>
                    </NavLink>
                </li> */}
                <li>
                    <NavLink to="/" className="nav-link">
                        <span>О себе</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/courses" className="nav-link">
                        <span>Курсы</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/technologies" className="nav-link">
                        <span>Технологии</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/ai" className="nav-link">
                        <span>AI Лаборатория</span>
                    </NavLink>
                </li>
            </ul>
            <button className="theme-toggle" onClick={toggleTheme}>
                {isLightTheme ? 'Темная тема' : 'Светлая тема'}
            </button>
        </div>
    );
};

export default Sidebar;