import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar/Navbar';
function App() {
  return (
    <div>
      <Router>
      <Navbar/>
        <Routes>
        
</Routes>
        </Router>
     
    </div>
  );
}

export default App;
