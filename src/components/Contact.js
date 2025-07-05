import React from 'react';
import './Contact.css';

const Contact = () => (
  <section id="contact" className="contact-section fade-in">
    <div className="contact-accent">💼</div>
    <h2>Contact</h2>
    <p>Feel free to connect with me on LinkedIn, or reach out via email or phone!</p>
    <div className="contact-info">
      <a href="https://www.linkedin.com/in/jill-prajapati-4a09a7281/" target="_blank" rel="noopener noreferrer" className="linkedin-btn">
        <span className="linkedin-icon">in</span> LinkedIn
      </a>
      <a href="mailto:jill27prajapati@gmail.com" className="email-btn">📧 jill27prajapati@gmail.com</a>
      <a href="tel:+91 9898046025" className="phone-btn">📞 +91 9898046025</a>
    </div>
  </section>
);

export default Contact; 