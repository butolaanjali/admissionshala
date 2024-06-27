import React from 'react';
import './Advantages.css';

const Advantage = ({ icon, title, description }) => (
  <div className="advantage">
    <div className="icon">
      <i className={icon}></i>
    </div>
    <div className="content">
      <div className="title">{title}</div>
      <div className="description">{description}</div>
    </div>
  </div>
);

function Advantages() {
  return (
    <div className="App">
      <h1>Advantages of Admissionshala</h1>
      <div className="advantages">
        <Advantage
          icon="fas fa-search"
          title="Explore Options"
          description="We help you explore all your accessible institute options. With the guidance of our expert counsellors, you can explore all the potential options just under one roof."
        />
        <Advantage
          icon="fas fa-book-open"
          title="Easy Research"
          description="We make your research easy. Our advanced research option of College comparator makes your research easy. Compare and zero down according to your preference."
        />
        <Advantage
          icon="fas fa-hands-helping"
          title="Professional Assistance"
          description="Professional assistance at each step - form filling, college eligibility, college selection to fees and education loan assistance. Admissionshala helps you acquire the best."
        />
      </div>
    </div>
  );
}

export default Advantages;
