import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import heroBannerImg from '../assets/hero-banner.jpg';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulates a loading sequence of 1 second
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    // Cleanup timer to prevent memory leaks
    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (isLoading) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
        <p className="loader-text">Loading Portfolio...</p>
      </div>
    );
  }

  return (
    <main className="fade-in">
      <section id="hero-banner" className="hero-banner">
        <img src={heroBannerImg} alt="Sneha Priya portfolio banner" />
        <div className="hero-content">
          <h1 className="hero-title">Hello, I'm Sneha Priya</h1>
          <p>
            Computer Science undergraduate passionate about software development,
            machine learning, and full-stack web development. I enjoy building
            real-world applications that solve practical problems.
          </p>
          <Link to="/projects" className="hero-btn">
            Explore my Projects
          </Link>
        </div>
      </section>
    </main>
  );
}
