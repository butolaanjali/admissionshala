// src/Component/Footer/Footer.js
import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <img src="Smt1.png" alt="Admission Shala Logo" className="footer-logo" />
          <p className="intro-text">Manjira Devi is a budding venture of the parent organization Career Leader <br></br>Educational Services.</p>
       
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Distance Learning</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
        <div className="social-icons">
            <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
            <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="#"><FontAwesomeIcon icon={faYoutube} /></a>
          </div>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Management</a></li>
            <li><a href="#">Resume Builder</a></li>
            <li><a href="#">College Comparator</a></li>
          </ul>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>📞 +917017388084</p>
          <p>✉️ smtmanjiradeviuniversity2024@gmail.com</p>
          <p>🌐 https://smdu.edu.in/</p>
        </div>
        </div>
      </div>
      <div className="footer-bottom">
       <br></br> <p>© 2024 Admissionshala. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
