import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';

export default function ProjectDetail() {
  const { projectId } = useParams();
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return (
      <main className="fade-in">
        <section className="project-not-found">
          <div className="container">
            <h2>Project Not Found</h2>
            <p>Sorry, the project with ID "{projectId}" could not be found.</p>
            <Link to="/projects" className="back-link-btn">
              ← Back to Projects
            </Link>
          </div>
        </section>
      </main>
    );
  }

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
                  {project.techStack.map((tech, index) => (
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
