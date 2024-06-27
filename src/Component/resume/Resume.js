import React from 'react';
import './Resume.css';

function Resume() {
  return (
    <div className="main-container">
      <div className="left-section">
        <h1 className="section-heading">College Comparator</h1>
        <p>As promised, We help you at every step of decision making - Compare your preferred Colleges in just one click with Admissionshala to burst that confusion cloud away!</p>
        <div className="college-cards-container">
          <div className="college-card">
            <img src="https://picsum.photos/100" alt="College 1" className="college-img" />
            <div className="college-info">
              <button className="add-college-btn">Add college</button>
              <select>
                <option value="PGDM">PGDM</option>
                <option value="MBA">MBA</option>
              </select>
            </div>
          </div>
          <div className="college-card">
            <img src="https://picsum.photos/100" alt="College 2" className="college-img" />
            <div className="college-info">
              <button className="add-college-btn">Add college</button>
              <select>
                <option value="PGDM">PGDM</option>
                <option value="MBA">MBA</option>
              </select>
            </div>
          </div>
        </div>
        <button>Compare College</button>
      </div>

      <div className="right-section">
        <h1 className="section-heading">Resume Builder</h1>
        <div className="resume-card">
          <img src="Resume.png" alt="Resume Icon" className="resume-img" />
          <p>Your Resume is the paper representation of your achievements. Make it count! Be resume ready with Admissionshala with just a few clicks! Download your professional resume for Free only with Admissionshala</p>
          <button>Know More</button>
        </div>
      </div>
    </div>
  );
}

export default Resume;
