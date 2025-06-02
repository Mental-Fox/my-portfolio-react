// App.jsx (главный файл приложения)
import React from 'react';
import './App.css';
import { LanguageProvider } from './contexts/LanguageContext';
import ResumePage from './pages/ResumePage/ResumePage';

function App() {
  return (
    <div className="App">
      <LanguageProvider>
        <ResumePage />
      </LanguageProvider>
    </div>
  );
}

export default App;