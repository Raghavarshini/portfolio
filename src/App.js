import React from 'react';
import Navbar from './Navbar';
import AboutMe from './AboutMe';
import HomePage from './HomePage';
import WorkExperience from './WorkExperience';
import ContactMe from './ContactMe';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
const App = () => {
  return (
    <Router>
      <div className="App">
        
        <Navbar />
        
        <Routes>
        <Route path="/" element={<HomePage />} />
          
          <Route path="/work" element={<WorkExperience />} />
          <Route path="/contact" element={<ContactMe />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
