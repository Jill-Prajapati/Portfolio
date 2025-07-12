import React from 'react';
import './Skills.css';

const skills = [
  { icon: '🐍', name: 'Python' },
  { icon: '🗄️', name: 'SQL' },
  { icon: '📊', name: 'Excel' },
  { icon: '📈', name: 'Data Visualization' },
  { icon: '📉', name: 'Basic Statistics' },
  { icon: '📊', name: 'Power BI ' },
  { icon: '🤖', name: 'Machine Learning' },
  { icon: '🧩', name: 'Problem Solving' },
  { icon: '💬', name: 'Communication' },
];

const Skills = () => (
  <section id="skills" className="skills-section">
    <h2>Skills</h2>
    <div className="skills-grid">
      {skills.map((skill, idx) => (
        <div className="skill-card" key={idx}>
          <span className="skill-icon">{skill.icon}</span>
          <span className="skill-name">{skill.name}</span>
        </div>
      ))}
    </div>
  </section>
);

export default Skills; 