import React from 'react';
import Section from '../components/Section';
import Link from '../components/Link';

function Skills() {
  const skills = [
    { name: "React", image: "./images/react.png" },
    { name: "HTML", image: "./images/html.png" },
    { name: "CSS", image: "./images/css.png" },
    { name: "JavaScript", image: "./images/javascript.png" },
    { name: "Ruby", image: "./images/ruby.png" },
    { name: "PHP", image: "./images/php.png" },
    { name: "Java", image: "./images/java.png" },
    { name: "PostgreSQL", image: "./images/PostgreSQL.png" },
    { name: "Git", image: "./images/git.png" },
    { name: "GitHub", image: "./images/github.jpeg" },
  ];

  return (
   
    
      <Section className="section, skills">
        <h1 className="skills-heading">Skills and Tools</h1>
        <div className="skills-list">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <img src={skill.image} alt={skill.name} className="skill-image" />
              <p className="skill-name">{skill.name}</p>
            </div>
          ))}
        </div>
      </Section>
  
  );
}

export default Skills;
