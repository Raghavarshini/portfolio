
import resume from './resume.pdf';
import React from 'react';
import { PiLinkedinLogo } from 'react-icons/pi';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { PiDownloadDuotone} from 'react-icons/pi';
const Navbar = () => {
  return (
    <header>
      <nav className="navbar">
        
        
        <ul>
       
        <li> <a  href={resume} download="Your_Resume.pdf">
        RESUME <PiDownloadDuotone />
      </a></li>
        <li><Link to="/">Home</Link></li>
          
          <li><Link to="/work">Projects</Link></li>
        <li> 
        <Link to="https://www.linkedin.com/in/raghavarshini/">linkedin<PiLinkedinLogo /></Link>
      </li>
      <li> 
        <Link to="https://www.linkedin.com/in/raghavarshini/details/recommendations/?detailScreenTabIndex=0">Recommendations<PiLinkedinLogo /></Link>
        </li>
        
          
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

