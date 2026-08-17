import React from 'react';
import htmlImg from '../assets/html.png';
import cssImg from '../assets/css.png';
import jsImg from '../assets/javascript.png';
import reactImg from '../assets/react.png';
import nodeImg from '../assets/nodejs.png';
import pythonImg from '../assets/python.png';
import javaImg from '../assets/java.png';
import cppImg from '../assets/cpp.png';
import mysqlImg from '../assets/mysql.png';
import gitImg from '../assets/git.png';

export default function Skills() {
  const skillList = [
    { name: 'HTML5', image: htmlImg },
    { name: 'CSS3', image: cssImg },
    { name: 'JavaScript', image: jsImg },
    { name: 'React', image: reactImg },
    { name: 'NodeJs', image: nodeImg },
    { name: 'Python', image: pythonImg },
    { name: 'Java', image: javaImg },
    { name: 'C++', image: cppImg },
    { name: 'MySQL', image: mysqlImg },
    { name: 'Git', image: gitImg }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2>Skills</h2>
        <div className="skills-grid">
          {skillList.map((skill, index) => (
            <div key={index} className="skill-card">
              <img src={skill.image} alt={`${skill.name} logo`} />
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
