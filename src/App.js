import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar/Navbar';
import Footer from './Component/Footer/Footer';
import Testimonial from './Component/Testimonial/Testimonial';
import Resume from './Component/resume/Resume';
function App() {
  return (
    <div>
      <Router>
      <Navbar/>
        <Routes>
        
</Routes>
<Resume/>
<Testimonial/>
<Footer/>
        </Router>

    </div>
  );
}

export default App;
