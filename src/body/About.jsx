import React from 'react'
import "./About.css"
const About = () => {
  return (
    <>
      <div className='about-container' id='about' data-aos="fade-right">
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
          <div className="college" data-aos="fade-right">
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
              <li>C</li>
              <li>C++</li>
              <li>Git</li>
              <li>Communication</li>
            </ol>
          </div>
        </div>
        <div className="strengths-container" data-aos="fade-right">
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
        <div className="certificate-container">
          <h2 data-aos="fade-right">Certifications</h2>
          <ol>
            <div className="certificates" id='cert1' data-aos="fade-right"><li className="abc"><b>Javascript</b> Certification from <b>Guvi.</b></li>
              <a href="https://drive.google.com/file/d/1m2gZxU8InUdlLDKtCiRGSzFAT7ns11ic/view?usp=sharing">Click to View</a></div>
            <div className="certificates" id='cert2' data-aos="fade-right"><li className="abc"><b> ChatGPT </b>Certification from <b>Guvi.</b></li>
              <a href="https://drive.google.com/file/d/1h5Ae1kU0l213I9vLbD7PosA4NBpvgSqj/view?usp=sharing">Click to View</a></div>
            <div className="certificates" id='cert3' data-aos="fade-right"><li className="abc"><b>Python</b> Certification from <b>Guvi.</b></li>
              <a href="https://drive.google.com/file/d/1h7ndY7dsAk0eRq0uG_4SBd4pdyAeSwgx/view?usp=sharing">Click to View</a></div>
            <div className="certificates" id='cert4' data-aos="fade-right"><li className="abc"><b> Introduction to Networks</b> Certification from <b> Cisco Networking
              Academy</b></li>
              <a href="https://drive.google.com/file/d/1hDnoEUQ-sgrH2koPXd0eLFXKcoq8lwyQ/view?usp=sharing">Click to View</a></div>
            <div className="certificates" id='cert5' data-aos="fade-right"><li className="abc"><b>Big Data</b> Certification from <b>Edureka</b> thorugh <b>Naan Mudhalvan</b></li> <a href="https://drive.google.com/file/d/1hc4iny6TKu8RIr2HrXh1D6zkkclnxlOq/view?usp=sharing">Click to View</a>
            </div>
            <div className="certificates" id='cert2' data-aos="fade-right"><li className="abc"><b> AI For India 2.0 </b>Certification from <b>Guvi.</b></li>
              <a href="https://drive.google.com/file/d/1h5WEKlfsu09LgbxWzRSZcWPh2MkWF1sm/view?usp=sharing">Click to View</a></div>
            <div className="certificates" id='cert2' data-aos="fade-right"><li className="abc"><b> C++ </b>Certification from <b>VEBBOX Software Solutions.</b></li>
              <a href="https://drive.google.com/file/d/1lIGmrof44mGIJbDV4hbPmPHUi6Uc9HqE/view?usp=sharing">Click to View</a></div>

          </ol>
        </div>
      </div>
    </>
  )
}

export default About