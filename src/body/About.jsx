import React from 'react'
import "./About.css"
const About = () => {
  return (
    <>
      <div className='about-container'>
        <h2>ABOUT</h2>
        <div className="education">
          <h2>Education</h2>
          <div className="school">
            <ul>
            <div className="sslc">
              <li id='sslc'><h3>SSLC</h3></li>
              <p>M.Narayanan Chettiar.High School,Koppanapatti.</p>
              <p>2017-2018 - 89.80%</p>
              </div>
              <div className="hsc">
              <li id='hsc'><h3>HSC</h3></li>
              <p>M.CT.RM.Ramanathan Chettiar Higher Secondary School,Kulipirai.</p>
              <p>2019-2020 - 68.66%</p>
              </div>
            </ul>
          </div>
          <div className="college">
            <ul>
            <li><h3>B.E - Computer Science and Engineering.</h3></li>
            <p>Mookambigai College Of Engineering,Kalamavur.</p>
            <p>2020-2024 - 86.00%</p>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default About