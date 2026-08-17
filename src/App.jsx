import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

export default function App() {
  // Lifted theme state initialized from localStorage, defaulting to 'dark'
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('portfolio-theme') || 'dark';
  });

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  // Sync theme changes to body element and localStorage
  useEffect(() => {
    localStorage.setItem('portfolio-theme', theme);
    if (theme === 'light') {
      document.body.classList.add('light-theme');
      document.body.classList.remove('dark-theme');
    } else {
      document.body.classList.add('dark-theme');
      document.body.classList.remove('light-theme');
    }
  }, [theme]);

  return (
    <BrowserRouter>
      <div className={`app-wrapper ${theme}-mode`}>
        {/* Persistent Navbar */}
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        
        {/* Main application routing area */}
        <div className="main-content">
          <Routes>
            {/* Redirect index path to /Home */}
            <Route path="/" element={<Navigate to="/Home" replace />} />
            
            <Route path="/Home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            
            {/* Dynamic project detail route */}
            <Route path="/projects/:projectId" element={<ProjectDetail />} />
            
            <Route path="/contact" element={<Contact />} />
            
            {/* 404 Catch-all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>

        {/* Persistent Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}
