// components/HomePage.js
import React, { useState , useEffect} from 'react';
import { Animate } from 'react-simple-animate';
import 'react-typist/dist/Typist.css';
import './HomePage.css';
import ragha from './ragha.png';

const HomePage = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [activePopup, setActivePopup] = useState(null);
  const roles = [
    'a DevOps Engineer',
    'an ITSM Expert',
    'a Data Analyst',
    'a Software Developer',
    'a Cloud Solution Architect',
    'the candidate you are looking for'
  ];


  useEffect(() => {
    const timeout = setTimeout(() => {
      setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000); // Delay before changing the role
    return () => clearTimeout(timeout);
  }, [roleIndex]);


  const handleButtonClick = (section) => {
    setActivePopup(section);
  };

  const handleClosePopup = () => {
    setActivePopup(null);
  };


  return (
    <div className="app2">
      
    <div className="app1">
        
        <div className="left-side1">
        <div className="cardout1">  
      <h1>
        Hi! I am Raghavarshini Ganesan{' '} 
        <Animate
          play // start the animation
          duration={1} // duration of animation
          start={{ opacity: 0 }}
          end={{ opacity: 1 }}
        >
          {roles[roleIndex]}
        </Animate>
      </h1>
      </div>
        </div>
        <div className="right-side1">
        <img src={ragha} alt="Background" />
        </div>
        
        </div>
        <div className="section2">
        <h2>LET ME INTRODUCE MYSELF:</h2>
        <p>Hi there! With over 4 years of experience in the tech industry, I've had the opportunity to work on a variety of challenging projects across multiple domains where I've honed my skills and delivered impactful solutions.</p>
        <p>My Expertise can be broadly classified into 3 domains - Devops, Data Analytics & Software Development</p>
      
        <div className="buttons">
          <button onClick={() => handleButtonClick('devops')}>DevOps</button>
          <button onClick={() => handleButtonClick('dataAnalytics')}>Data Analytics</button>
          <button onClick={() => handleButtonClick('software')}>Software</button>
        </div>
        
        
      {activePopup && (
        <div className="popup">
          <div className="popup-content">
            <button className="close-button" onClick={handleClosePopup}>
              &times;
            </button>
            {activePopup === 'devops' && (
              <div>
                <h2>DevOps- CICD</h2>
                <p>
                <li>AZURE DEVOPS</li>
                <li>BAMBOO</li>
                <li>JENKINS</li>
                <li>VERSION CONTROL</li>
                <li>BITBUCKET & GIT</li>
                <li>DOCKER IMAGE INTEGRATION</li>
                <li>SHELL/BATCH/YAML SCRIPTING</li>
                <li>SONAQUBE FOR QUALITY GATE & CHECKS</li>
                <li>URBAN CODE DEPLOY</li>
                <li>ATLASSIAN JSM & JIRA</li>
                <li>CONTAINERIZATION- KUBERNETES</li>
                <li>ON PREMISE & CLOUD MIGRATION</li>
                <li>ATLASIAN ADMINISTRATION RBAC</li>
                <li>SSO & LDAP INTEGRATION</li>
                <li>AZURE ACTIVE DIRECTORY</li>
                <li>ITSM & WORKFLOW CONFIGURATION</li>
                <li>SERVER DEPLOYMENT FOR MULTI REGIONS</li>
                <li>PLUGIN INTEGRATIONS WITH CICD</li>
                </p>
              </div>
            )}
            {activePopup === 'dataAnalytics' && (
              <div>
                <h2>Data Analytics</h2>
                <p>
                <li>PYTHON</li>
                <li>ETL</li>
                <li>POWER BI</li>
                <li>QLIKSENSE</li>
                <li>TABLEAU</li>
                <li>D3.JS</li>
                <li>DATA CLEANING</li>
                <li>PYTORCH</li>
                <li>SENTIMENT ANALYSIS</li>
                <li>DATA MINING</li>
                <li>DATABASE ADMINISTRATION- SQL</li>
                <li>SPSS- QUANTITATIVE & QUALITATIVE ANALYSIS</li>

                </p>
              </div>
            )}
            {activePopup === 'software' && (
              <div>
                <h2>Software</h2>
                <p>
                <li>JAVA</li>
                <li>OOPS</li>
                <li>MYSQL</li>
                <li>REACT</li>
                <li>POSTMAN</li>
                <li>JAVASCRIPT</li>
                <li>AGILE METHODOLOGIES</li>
                <li>SCRUM</li>
                <li>UNIT TEST CASE</li>
                <li>SQL AUTOMATION</li>
                <li>IIS SETUP</li>
                </p>
              </div>
            )}
          </div>
        </div> 
      )} </div>
    </div>
        
    
    
  );
};

export default HomePage;
