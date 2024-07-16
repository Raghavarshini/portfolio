import React from 'react';

import './AboutMe.css';
import ragha from './ragha.png';


const AboutMe = () => {
  return (
    <div className="app1">
    
    <div className="top-row">
      <div className="left-side">
        <h2>LET ME INTRODUCE MYSELF:</h2>
        <p>Hi there! With over 4 years of experience in the tech industry, I've had the opportunity to work on a variety of challenging projects across multiple domains where I've honed my skills and delivered impactful solutions.</p>
        <p>My Expertise can be broadly classified into 3 domains - Devops, Data Analytics & Software Development</p>
      </div>
      <div className="right-side">
        
        <img src={ragha} alt="Background" />
        </div>
        </div>
    
</div>
      
    
    
  );
};

export default AboutMe;
