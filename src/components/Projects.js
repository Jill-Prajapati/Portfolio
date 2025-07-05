import React from 'react';
import './Projects.css';

const projects = [
  {
    icon: '📈',
    title: 'Cryptocurrency Price Predictor',
    description: 'Built a project that predicts the price of cryptocurrencies using Python and Machine Learning algorithms like XGBoost and Time Series Analysis.',
    tech: 'Python, XGBoost, Time Series Analysis',
  },
  {
    icon: '🔗',
    title: 'Decentralized Voting System using Blockchain',
    description: 'Developed a secure voting system using Ethereum and Solidity for smart contracts and React for the frontend.',
    tech: 'Ethereum, Solidity, React',
  },
  {
    icon: '📊',
    title: 'Sales Insight',
    description: 'Performed Data Analysis using SQL and Power BI to track revenue growth, year-over-year trends, and region-wise sales performance.',
    tech: 'SQL, Power BI',
  },
  {
    icon: '📉',
    title: 'Revenue Insight',
    description: 'Used Power BI to create dashboards to visualize and track revenue by category, trends by key metrics, property performance, realization percentage, and several other KPIs.',
    tech: 'Power BI',
  },
];

const Projects = () => (
  <section id="projects" className="projects-section">
    <h2>Projects</h2>
    <div className="project-cards">
      {projects.map((project, idx) => (
        <div className="project-card" key={idx}>
          <div className="project-icon">{project.icon}</div>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <span className="project-tech">{project.tech}</span>
        </div>
      ))}
    </div>
  </section>
);

export default Projects; 