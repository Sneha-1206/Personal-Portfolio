import React from 'react';
import { projects } from '../data/projects';
import ProjectsGrid from '../components/ProjectsGrid';

export default function Projects() {
  return (
    <main className="fade-in">
      <section className="projects">
        <div className="container">
          <h2>My Projects</h2>
          <ProjectsGrid projectList={projects} />
        </div>
      </section>
    </main>
  );
}
