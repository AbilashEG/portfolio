import React from 'react';
import './Skills.css'; // Make sure this matches the file you just created

const skills = [
  'AWS',
  'DevOps',
  'AI/ML',
  'CI/CD',
  'React',
  'Python',
  'Docker',
  'Kubernetes',
  'Fullstack'
];

const Skills = () => (
  <div>
    <h1 className="skills-heading">My Skills</h1>
    <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
      {skills.map(skill => (
        <span className="skill" key={skill}>{skill}</span>
      ))}
    </div>
  </div>
);


export default Skills;
