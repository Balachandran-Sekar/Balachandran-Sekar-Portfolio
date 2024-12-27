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
            <div className='exp-container' id='experience' data-aos="fade-right">
                <h2 data-aos="fade-right">EXPERIENCE</h2>
                <div className="work" data-aos="fade-right">
                    <h2 data-aos="fade-right">Work Experience</h2>
                    <p>{experience.toString()}</p>
                    <ul>
                        <div className="company1" data-aos="fade-right">
                            <li><h3>Software Trainee</h3></li>
                            <p>Crud operations</p>
                            <p>November 2024 - Present</p>
                        </div>
                        <div className="company2" data-aos="fade-right">
                            <li><h3>Software Intern</h3></li>
                            <p>Crud operations</p>
                            <p>July 2024 - October 2024</p>
                        </div>
                    </ul>
                </div>
                <div className="internships">
                    <h2 data-aos="fade-right">Interships</h2>
                    <ul>
                        <div className="intern1" data-aos="fade-right">
                            <li><h3>Software Developer</h3></li>
                            <p>IMFU Tech,Pudukkottai.</p>
                            <p>February 2024 - March 2024</p></div>
                        <div className="intern2" data-aos="fade-right">
                            <li><h3>Java & Selenium Internship in testing</h3></li>
                            <p>Moolya Ed.</p>
                            <p>July 2023</p></div>
                        <div className="intern3" data-aos="fade-right">
                            <li><h3>Cyber Security Program</h3></li>
                            <p>Verzeo</p>
                            <p>January 2023 - February 2023</p></div>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Experience