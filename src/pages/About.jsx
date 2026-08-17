import React from 'react';
import yourImage from '../assets/your-image.png';
import Skills from '../components/Skills';

export default function About() {
  return (
    <main className="fade-in">
      <section id="about" className="about">
        <h2 className="about-heading">About Me</h2>
        <div className="container about-flex">
          <div className="about-text">
            <h2>Introduction</h2>
            <p>
              Hello! I'm Sneha Priya, a Computer Science undergraduate with a strong
              interest in software development, machine learning, and web technologies.
            </p>
            <p>
              I enjoy solving real-world problems through programming and continuously
              improving my technical skills by building practical projects.
            </p>
            <p>
              My areas of interest include Full Stack Development, Artificial
              Intelligence, Natural Language Processing, and Software Engineering.
            </p>
            <p>
              I am proficient in C++, Java, Python, HTML, CSS, JavaScript, SQL,
              and enjoy working with modern development tools and frameworks.
            </p>
            <p>
              Apart from academics, I enjoy learning new technologies, participating
              in technical events, and collaborating on innovative projects.
            </p>
            <a 
              href="https://drive.google.com/file/d/1jGRdHnxA9ckbTLMyVtNgcfzRMq1ZNL-d/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="resume-btn"
            >
              📄 Explore My Resume
            </a>   
          </div>
          <div className="about-image">
            <img src={yourImage} alt="Sneha Priya portrait" />
          </div>
        </div>
      </section>

      {/* Render the Skills Component */}
      <Skills />
    </main>
  );
}
