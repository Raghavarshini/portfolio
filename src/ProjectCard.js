import React from 'react';
import './ProjectCard.css';
import { IoOpenSharp } from "react-icons/io5";

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <div className="project-card-inner">
        <div className="project-card-front">
          <h2>{project.title}</h2>
        </div>
        <div className="project-card-back">
          
          <a href={project.link} target="_blank" rel="noopener noreferrer"><p>{project.description}</p><IoOpenSharp/></a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
