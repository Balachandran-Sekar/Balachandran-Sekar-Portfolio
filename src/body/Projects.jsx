import React from 'react'
import "./Projects.css"

const Projects = () => {
  return (
    <>
      <div className='projects-container' id='projects'>
        <h2>PROJECTS</h2>
        <ol>
          <div className="pro"><li className="abc">Exam Seat Allocation System</li>
            <a href="https://github.com/Balachandran-Sekar/ADVANCE-SEAT-ALLOCATION-MANAGEMENT-SYSTEM">Click to View</a></div>
          <div className="pro"><li className="abc">Advanced Voice Assistant Chatbot</li>
            <a href="https://github.com/Balachandran-Sekar/REDQUEEN-ADVANCE-CHATBOT-VOICE-ASSISTANT">Click to View</a></div>
          <div className="pro"><li className="abc">EB Bill Genarator </li>
            <a href="https://github.com/Balachandran-Sekar/Crud_Tasks/tree/main/EB_bil">Click to View</a></div>
            <div className="pro"><li className="abc">Portfolio </li>
            <a href="https://github.com/Balachandran-Sekar/Balachandran-Sekar-Portfolio">Click to View</a></div>
          <div className="pro"><li className="abc">Crud Beat</li>
          </div>
          <div className="pro"><li className="abc">Skin Diseases Prediction Using Machine Learning</li>
          </div>

        </ol>
      </div>
    </>
  )
}

export default Projects