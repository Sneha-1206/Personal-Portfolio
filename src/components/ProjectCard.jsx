import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ProjectCard({ id, title, description, techStack, image, link }) {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = (e) => {
    e.preventDefault();
    setShowDetails(!showDetails);
  };

  return (
    <article className="project-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      
      {/* Expanded detail box (scoped per component instance) */}
      {showDetails && (
        <div className="project-card-expand">
          <p className="tech-stack-title">Tech Stack:</p>
          <div className="tech-stack-container">
            {techStack.map((tech, idx) => (
              <span key={idx} className="tech-badge">{tech}</span>
            ))}
          </div>
        </div>
      )}

      <div className="project-card-actions">
        <button 
          onClick={toggleDetails} 
          className="details-toggle-btn"
          aria-expanded={showDetails}
        >
          {showDetails ? 'Hide Details' : 'View Details'}
        </button>
        <Link to={`/projects/${id}`} className="learn-more-btn">
          Learn More
        </Link>
      </div>
    </article>
  );
}
