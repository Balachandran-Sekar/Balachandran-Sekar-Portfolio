import React from 'react'
import "./About.css"
const About = () => {
  return (
    <>
      <div className='about-container'id='about' data-aos="fade-right">
        <h2 data-aos="fade-right">ABOUT</h2>
        <div className="education-container">
          <h2 data-aos="fade-right">Education</h2>
          <div className="school">
            <ul>
            <div className="sslc" data-aos="fade-right">
              <li id='sslc'><h3>SSLC</h3></li>
              <p>M.Narayanan Chettiar.High School,Koppanapatti.</p>
              <p>2017-2018 - 89.80%</p>
              </div>
              <div className="hsc" data-aos="fade-right">
              <li id='hsc'><h3>HSC</h3></li>
              <p>M.CT.RM.Ramanathan Chettiar Higher Secondary School,Kulipirai.</p>
              <p>2019-2020 - 68.66%</p>
              </div>
            </ul>
          </div>
          <div className="college"  data-aos="fade-right">
            <ul>
            <li><h3>B.E - Computer Science and Engineering.</h3></li>
            <p>Mookambigai College Of Engineering,Kalamavur.</p>
            <p>2020-2024 - 86.00%</p>
            </ul>
          </div>
        </div>
        <div className="skills-container">
          <h2 data-aos="fade-right">Skills</h2>
          <div className="skills" data-aos="fade-right">
          <ol className='skills-list'>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React Js</li>
            <li>Bootstrap</li>
            <li>Tailwind</li>
            <li>Material UI</li>
            <li>Node Js</li>
            <li>Express</li>
            <li>Mongo DB</li>
          </ol>
        </div>
        </div>
        <div className="strengths-container"data-aos="fade-right">
          <h2>Strengths</h2>
          <div className="strengths" data-aos="fade-right">
          <ol>
            <li>Self-Confidence</li>
            <li>Self-learning</li>
            <li>Punctuality</li>
            <li>Teamwork</li>
          </ol>
          </div>
        </div>
      </div>
    </>
  )
}

export default About