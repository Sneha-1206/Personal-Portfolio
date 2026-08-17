import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar({ theme, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);

  // Responsive event listener that resets mobile open state on screen resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header>
      <div className="container header-container">
        <p className="logo">Sneha Priya</p>
        
        <div className="nav-controls">

          {/* Mobile hamburger menu button */}
          <button 
            className={`hamburger ${isOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
          >
            ☰
          </button>
        </div>

        <nav className={isOpen ? 'nav-open' : ''}>
          <ul>
            <li>
              <NavLink to="/Home" onClick={closeMenu} className={({ isActive }) => isActive ? 'active' : ''}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={closeMenu} className={({ isActive }) => isActive ? 'active' : ''}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" onClick={closeMenu} className={({ isActive }) => isActive ? 'active' : ''}>
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={closeMenu} className={({ isActive }) => isActive ? 'active' : ''}>
                Contact
              </NavLink>
            </li>
            <li className="theme-toggle-item">
              <label className="switch" aria-label="Toggle light/dark theme">
                <input 
                  type="checkbox" 
                  checked={theme === 'light'} 
                  onChange={toggleTheme} 
                />
                <span className="slider"></span>
              </label>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
