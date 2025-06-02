import React, { useState, useEffect } from 'react';
import { Router, Routes, Route } from 'react-router-dom';
import Sidebar from '../pages/Sidebar/Sidebar';
import About from '../pages/About/About';
import Courses from '../pages/Courses/Courses';
import Technologies from '../pages/Technologies/Technologies';
import AILab from '../pages/AILab/AILab';
import './App.css';
import Resume from '../pages/Resume/Resume';

const App = () => {

  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isLightTheme, setIsLightTheme] = useState(false);


  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const toggleTheme = () => {
    setIsLightTheme(!isLightTheme);
    localStorage.setItem('theme', !isLightTheme ? 'light' : 'dark');
  };


  useEffect(() => {
    if (localStorage.getItem('theme') === 'light') {
      setIsLightTheme(true);
    }
  }, []);

  return (
    <div className={`app ${isLightTheme ? 'light' : ''}`}>

      <div className="container">
        <Sidebar isCollapsed={isSidebarCollapsed} toggleTheme={toggleTheme} toggleSidebar={toggleSidebar} />
        <div className={`content ${isSidebarCollapsed ? 'expanded' : ''}`}>
          <Routes>
            {/* <Route path="/" element={<Dashboard />} /> */}
            {/* <Route path="/" element={<About />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/technologies" element={<Technologies />} />
            <Route path="/ai" element={<AILab />} /> */}
          </Routes>
        </div>

      </div>
    </div>
  );
};

export default App;