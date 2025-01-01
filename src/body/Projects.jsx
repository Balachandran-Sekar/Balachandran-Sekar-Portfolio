import React from 'react';
import ProjectImg from "../assets/side-imgs/Projects.png";
import "./Projects.css";

const projects = [
  { id: 'pro1', name: 'Exam Seat Allocation System', link: 'https://github.com/Balachandran-Sekar/ADVANCE-SEAT-ALLOCATION-MANAGEMENT-SYSTEM' },
  { id: 'pro2', name: 'Advanced Voice Assistant Chatbot', link: 'https://github.com/Balachandran-Sekar/REDQUEEN-ADVANCE-CHATBOT-VOICE-ASSISTANT' },
  { id: 'pro3', name: 'EB Bill Generator', link: 'https://github.com/Balachandran-Sekar/Crud_Tasks/tree/main/EB_bil' },
  { id: 'pro4', name: 'Portfolio', link: 'https://github.com/Balachandran-Sekar/Balachandran-Sekar-Portfolio' },
  { id: 'pro5', name: 'Crud Beat', link: null },
  { id: 'pro6', name: 'Skin Diseases Prediction Using Machine Learning', link: null }
];

const Projects = () => (
  <div className='projects-container' id='projects'>
    <div className="projects">
      <h2 data-aos="fade-right">PROJECTS</h2>
      <ol>
  {projects.map(({ id, name, link }) => (
    <div key={id} className="pro-list">
      <li className="pro abc" id={id} data-aos="fade-right">
        {name}
      </li>
      {link && (
        <a href={link} target="_blank" rel="noopener noreferrer" data-aos="fade-right">
          Click to View
        </a>
      )}
    </div>
  ))}
</ol>

    </div>
    <div className="pro-img" data-aos="zoom-in-left">
      <img src={ProjectImg} alt="Projects" />
    </div>
  </div>
);

export default Projects;
