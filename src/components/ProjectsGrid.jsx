import React from 'react';
import ProjectCard from './ProjectCard';

export default function ProjectsGrid({ projectList }) {
  return (
    <div className="project-grid">
      {projectList.map((project) => (
        <ProjectCard
          key={project.id}
          id={project.id}
          title={project.title}
          description={project.description}
          techStack={project.techStack}
          image={project.image}
          link={project.link}
        />
      ))}
    </div>
  );
}
