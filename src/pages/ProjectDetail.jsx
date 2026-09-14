import React, { useState, useEffect, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api/projects';

export default function ProjectDetail() {
  const { projectId } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [notFound, setNotFound] = useState(false);

  const fetchProjectDetail = useCallback(async () => {
    setLoading(true);
    setError(null);
    setNotFound(false);
    try {
      const response = await fetch(`${API_BASE_URL}/${projectId}`);
      if (response.status === 404) {
        setNotFound(true);
        return;
      }
      if (!response.ok) {
        throw new Error(`Server status ${response.status}`);
      }
      const data = await response.json();
      setProject(data);
    } catch (err) {
      console.error('Failed to fetch project detail:', err);
      setError('Unable to fetch project details from backend API. Please check server connection.');
    } finally {
      setLoading(false);
    }
  }, [projectId]);

  useEffect(() => {
    fetchProjectDetail();
  }, [fetchProjectDetail]);

  if (loading) {
    return (
      <main className="fade-in">
        <section className="project-detail">
          <div className="container">
            <div className="api-state-container">
              <div className="spinner"></div>
              <p className="loading-text">Loading project details from API...</p>
            </div>
          </div>
        </section>
      </main>
    );
  }

  if (notFound) {
    return (
      <main className="fade-in">
        <section className="project-not-found">
          <div className="container">
            <h2>Project Not Found</h2>
            <p>Sorry, the project with ID "{projectId}" could not be found on the server.</p>
            <Link to="/projects" className="back-link-btn">
              ← Back to Projects
            </Link>
          </div>
        </section>
      </main>
    );
  }

  if (error) {
    return (
      <main className="fade-in">
        <section className="project-detail">
          <div className="container">
            <div className="api-state-container error-state">
              <div className="error-icon">⚠️</div>
              <h3 className="error-title">Connection Error</h3>
              <p className="error-message-text">{error}</p>
              <button onClick={fetchProjectDetail} className="retry-btn">
                🔄 Retry Connection
              </button>
            </div>
          </div>
        </section>
      </main>
    );
  }

  if (!project) return null;

  return (
    <main className="fade-in">
      <section className="project-detail">
        <div className="container">
          <Link to="/projects" className="back-link">
            ← Back to Projects
          </Link>
          
          <div className="project-detail-wrapper">
            <div className="project-detail-image-container">
              <img src={project.image} alt={`${project.title} screenshot`} className="project-detail-image" />
            </div>

            <div className="project-detail-content">
              <h2>{project.title}</h2>
              <p className="project-short-desc">{project.description}</p>
              
              <div className="project-description-section">
                <h3>About the Project</h3>
                <p>{project.fullDescription}</p>
              </div>

              <div className="project-tech-section">
                <h3>Technologies Used</h3>
                <div className="tech-badge-list">
                  {project.techStack && project.techStack.map((tech, index) => (
                    <span key={index} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="project-action-links">
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="external-link-btn"
                >
                  🔗 View Project Link
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
