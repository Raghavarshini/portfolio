// Certifications.js
import React from 'react';
import { PiCertificateDuotone } from 'react-icons/pi';
import './Certifications.css';

const certifications = [
  { title: 'Data Analytics & Visualization with Power BI', company: 'Skillsfuture-Intellisoft Systems' },
  { title: 'Social and Behavioral Research - Basic/Refresher', company: 'CITI Program' },
  { title: 'Microsoft Certified: Azure Fundamentals', company: 'Microsoft' },
  { title: 'Python Data Structures', company: 'Coursera' },
  { title: 'Programming for Everybody (Getting Started with Python)', company: 'University of Michigan' },
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
