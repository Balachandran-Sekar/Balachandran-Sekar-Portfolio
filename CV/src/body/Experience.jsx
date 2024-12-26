import React from 'react'
import "./Experience.css"

const Experience = () => {
    function calculateExperience(startDate) {
        const start = new Date(startDate);
        const now = new Date();
      
        let years = now.getFullYear() - start.getFullYear();
        let months = now.getMonth() - start.getMonth();
      
        if (months < 0) {
          years--;
          months += 12;
        }
      
        return {
          years,
          months,
          toString: () => `${years} years and ${months} months`,
        };
      }
      
      const joiningDate = "2024-07-27"; 
      const experience = calculateExperience(joiningDate);

      
    return (
        <>
            <div className='exp-container'>
                <h2>EXPERIENCE</h2>
                <div className="work">
                    <h2>Work Experience</h2>
                    <p>{experience.toString()}</p>
                    <ul>
                        <li><h3>Software Trainee</h3></li>
                        <p>Crud operations</p>
                        <p>November 2024 - Present</p>
                        <li><h3>Software Intern</h3></li>
                        <p>Crud operations</p>
                        <p>July 2024 - October 2024</p>
                    </ul>
                </div>
                <div className="internships">
                    <h2>Interships</h2>
                    <ul>
                    <li><h3>Software Developer</h3></li>
                    <p>IMFU Tech,Pudukkottai.</p>
                    <p>February 2024 - March 2024</p>
                    <li><h3>Java & Selenium Internship in testing</h3></li>
                    <p>Moolya Ed.</p>
                    <p>July 2023</p>
                    <li><h3>Cyber Security Program</h3></li>
                    <p>Verzeo</p>
                    <p>January 2023 - February 2023</p>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Experience