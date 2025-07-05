import React from 'react';
import './Header.css';

const Navbar = () => (
  <nav className="navbar">
    <ul>
      <li><a href="#about"><span>About</span></a></li>
      <li><a href="#skills"><span>Skills</span></a></li>
      <li><a href="#projects"><span>Projects</span></a></li>
      <li><a href="#resume"><span>Resume</span></a></li>
      <li><a href="#contact"><span>Contact</span></a></li>
    </ul>
  </nav>
);

export default Navbar; 