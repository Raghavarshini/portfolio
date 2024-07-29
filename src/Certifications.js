// Certifications.js
import React from 'react';
import { PiCertificateDuotone } from 'react-icons/pi';
import './Certifications.css';

const certifications = [
  { title: 'Data Analytics & Visualization with Power BI', company: 'Skillsfuture-Intellisoft Systems' },
  { title: 'Microsoft Certified: Azure Fundamentals', company: 'Microsoft' },
  { title: 'Social and Behavioral Research', company: 'CITI Program' },
  
  { title: 'Python Data Structures', company: 'Coursera' },
  { title: 'Programming for Everybody', company: 'University of Michigan' },
  { title: 'Cloud Computing', company: 'NPTEL IIT Kharagpur' },
];

const Certifications = () => {
  return (
    <div className="certifications">
      {certifications.map((cert, index) => (
        <div className="cert-card" key={index}>
          <PiCertificateDuotone className="cert-icon" />
          <h3>{cert.title}</h3>
          <p>{cert.company}</p>
        </div>
      ))}
    </div>
  );
};

export default Certifications;
