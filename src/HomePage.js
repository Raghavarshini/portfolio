// components/HomePage.js
import React, { useState , useEffect} from 'react';
import { Animate } from 'react-simple-animate';
//import 'react-typist/dist/Typist.css';
import './HomePage.css';
import ragha from './ragha.png';
import { TbArrowBigDownLines } from "react-icons/tb";
import { HiMiniTrophy } from "react-icons/hi2";
import { PiFinnTheHumanFill } from 'react-icons/pi';
import Certifications from './Certifications';


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
    }, 1000); // Delay before changing the role
    return () => clearTimeout(timeout);
  }, [roleIndex, roles.length]);


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
        <br></br>
        
        <div className="buttons">
        <h2>EXPERTISE - CLICK ON EACH SKILL TO VIEW KNOWN TOOLSTACK</h2>
          <button onClick={() => handleButtonClick('devops')}>Devops & Automation</button>
          <button onClick={() => handleButtonClick('dataAnalytics')}>Analytics & Data Engineering</button>
          <button onClick={() => handleButtonClick('software')}>Software Development</button>
          
       
        </div> 
        
        <div className="aboutsection">
        <h2> ABOUT ME: </h2>
        
        <p>  With over 4 years of my expertise in the tech industry, I've had the opportunity to work on a variety of challenging projects across multiple domains where I've honed my skills and delivered impactful solutions. </p>
        <><HiMiniTrophy/></>
        <p>I completed my Bachelors Degree in Computer Science Engineering after which I worked as a Senior Systems Engineer at a leading firm in React & Java - Cloud based projects. I got the wonderful opportunity to work in a Critical Healthcare Project with a USA client and this is where I was introduced to Devops.</p>
        <><TbArrowBigDownLines/></>
        <p> With my never ending thirst to adapt to recent trends and technologies I had moved to Singapore to Pursue my masters Degree in Information Systems at NTU. The overall experience was exciting and exposed me to newer domain of Data Analytics. I also worked part time as a Software Research Intern in an Ongoing Sustainability Project.</p>
        <><TbArrowBigDownLines/></>
        <p> After completing this milestone, I started working in Singapore as a Software Engineer. It has ben over an year & I am so grateful for the learnings and opportunities I have been exposed to in my career path and hope that I will be on track with the latest technological advancements and I look forward to new experiences everyday. </p>
        <h2>MY CERTIFICATIONS:</h2>
        
        <div><Certifications/></div>
        <br></br>
        
        <div><PiFinnTheHumanFill/> DESIGNED BY RAGHA</div>
        </div>
      {activePopup && (
        <div className="popup">
          <div className="popup-content">
            <button className="close-button" onClick={handleClosePopup}>
              &times;
            </button>
            {activePopup === 'devops' && (
              <div>
                <h2>DevOps- CICD Tools & Technologies</h2>
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
                <h2>Data Analytics & visualization Toolstack</h2>
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
                <h2>Coding languages, Design & Fundemental Toolstack</h2>
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
      )} 
    </div>
    </div>    
    
    
  );
};

export default HomePage;
