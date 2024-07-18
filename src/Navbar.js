

import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <header>
      <nav className="navbar">
        
        
        <ul>
        <li><Link to="/">Home</Link></li>
          
          <li><Link to="/work">Projects</Link></li>
          <li><Link to="/contact">Contact Me</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

