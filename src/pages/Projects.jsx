import React, { useState, useEffect } from 'react';
import ProjectsGrid from '../components/ProjectsGrid';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api/projects';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProjects = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error(`Server returned status ${response.status}`);
      }
      const data = await response.json();
      setProjects(data);
    } catch (err) {
      console.error('Failed to fetch projects:', err);
      setError('Unable to connect to the backend server. Please ensure the Express backend is running on http://localhost:5000.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <main className="fade-in">
      <section className="projects">
        <div className="container">
          <h2>My Projects</h2>
          
          {loading && (
            <div className="api-state-container">
              <div className="spinner"></div>
              <p className="loading-text">Loading projects from API...</p>
            </div>
          )}

          {!loading && error && (
            <div className="api-state-container error-state">
              <div className="error-icon">⚠️</div>
              <h3 className="error-title">Backend Server Unreachable</h3>
              <p className="error-message-text">{error}</p>
              <button onClick={fetchProjects} className="retry-btn">
                🔄 Retry Connection
              </button>
            </div>
          )}

          {!loading && !error && projects.length === 0 && (
            <div className="api-state-container">
              <p className="loading-text">No projects available at this moment.</p>
            </div>
          )}

          {!loading && !error && projects.length > 0 && (
            <ProjectsGrid projectList={projects} />
          )}
        </div>
      </section>
    </main>
  );
}
