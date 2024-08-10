// Certifications.js

import React from 'react';
import { PiCertificateDuotone } from 'react-icons/pi';
import './Certifications.css';
import { FaExternalLinkAlt } from "react-icons/fa";


const certifications = [
  { title: 'Social and Behavioral Research', company: 'CITI Program', link: 'https://www.citiprogram.org/verify/?w67a36dc5-1538-4e03-bd92-37098d0d5fd7-53860032'},
  { title: 'Data Analytics & Visualization with Power BI', company: 'Skillsfuture-Intellisoft Systems',link:'https://www.dropbox.com/scl/fi/tj37shgb0j0jyromvm6ts/Dataanalytics-skillsfuture.pdf?rlkey=y8oshmisgkqsapww2u054q0xg&st=7d8hyy9n&dl=0' },
  { title: 'Microsoft Certified: Azure Fundamentals', company: 'Microsoft' , link:'https://www.credly.com/badges/1ef7d438-5d47-4639-8b8b-f9971a9af594/linked_in_profile'},
  
  { title: 'Python Data Structures', company: 'Coursera' , link:'https://www.coursera.org/account/accomplishments/certificate/5N84YARW36K2'},
  { title: 'Programming using Python', company: 'University of Michigan', link:'https://www.coursera.org/account/accomplishments/verify/UDF7FLZV5PFV?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course'},
  { title: 'Cloud Computing', company: 'NPTEL IIT Kharagpur',link:'https://www.dropbox.com/scl/fi/5acbcgcfidi21qthnd96y/CLOUD-COMPUTING_NPTEL-ONLINE-CERTIFICATE_AUG-SEP-2018_01.jpg?rlkey=py4v11uhi5dznt430auohax9d&st=t9mltesj&dl=0' },

  { title: 'Industrial Training Network & Cybersecurity', company: 'BSNL', link:'https://www.dropbox.com/scl/fi/91l77zboomfqmd621fe39/BSNL-CERTIFICATE-_-NETWORKING-AND-CYBER-SECURITY_280518TO150618.jpg?rlkey=615n4l0s90nij5vlaty79r3sp&st=kkgymwvl&dl=0' },
  { title: 'Java Development', company: 'Uniq Technologies' , link:'https://www.dropbox.com/scl/fi/n83nlpx112x3oui72dwoz/CERTIFICTE-OF-COMPLETN_JAVA_MINI-PROJECT_UNIQ.jpg?rlkey=tvn581sul5r6e1iwjb4jcknuv&st=amvxg7ud&dl=0'},
  { title: 'Inplant Training', company: 'Madras Atomic Power Station' ,link:'https://www.dropbox.com/scl/fi/wf77w8ov1d1woi54e5m8d/maps-internship-2019-12-23-07.49.07.pdf?rlkey=y79f17z8503jukkm3jrbmg839&st=3x9m3css&dl=0' },
  { title: 'Devops Professional', company: 'Infosys',link:'https://www.dropbox.com/scl/fi/t9sr2s1nmwy7uskkhg6rj/Experience-certificate-Raghavarshini-G_1103102_28496.pdf?rlkey=rycvu1gbln4b4qwuu5yheiu2r&st=fck193n1&dl=0' }
];

const Certifications = () => {


  return (
    <div className="certifications">
      {certifications.map((cert, index) => (
        <div className="cert-card" key={index} >
          <PiCertificateDuotone className="cert-icon" />
          <h3>{cert.title}</h3>
          
          <a href={cert.link} target="_blank" rel="noopener noreferrer"><p>{cert.company}<br></br><FaExternalLinkAlt/></p></a>
        </div>
      ))}

      

    </div>
  );
};

export default Certifications;
