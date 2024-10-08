import React from 'react';
import Navbar from './Navbar';

import HomePage from './HomePage';
import WorkExperience from './WorkExperience';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
const App = () => {
  return (
    <Router>
      <div className="App">
        
        <Navbar />
        
        <Routes>
        <Route path="/" element={<HomePage />} />
          
          <Route path="/work" element={<WorkExperience />} />
          
        </Routes>
      </div>
    </Router>
  );
};

export default App;
