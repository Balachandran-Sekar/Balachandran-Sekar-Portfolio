import React from 'react';
import { useTheme } from '@mui/material/styles';
import EducationImg from "../assets/side-imgs/Education.png";
import CertificationsImg from "../assets/side-imgs/Certifications.png";
import "./About.css";

const About = () => {
  const theme = useTheme();
  const educationDetails = [
    { title: "SSLC", school: "M.Narayanan Chettiar High School, Koppanapatti.", year: "2017-2018", score: "89.80%" },
    { title: "HSC", school: "M.CT.RM.Ramanathan Chettiar Higher Secondary School, Kulipirai.", year: "2019-2020", score: "68.66%" },
    { title: "B.E - Computer Science and Engineering.", school: "Mookambigai College Of Engineering, Kalamavur.", year: "2020-2024", score: "86.00%" }
  ];

  const skills = ["HTML", "CSS", "JavaScript", "React Js", "Bootstrap", "Tailwind", "Material UI", "Node Js", "Express", "Mongo DB", "C", "C++", "Git", "Communication"];

  const strengths = ["Self-Confidence", "Self-learning", "Punctuality", "Teamwork"];

  const certifications = [
    { title: "Javascript", issuer: "Guvi", link: "https://drive.google.com/file/d/1m2gZxU8InUdlLDKtCiRGSzFAT7ns11ic/view?usp=sharing" },
    { title: "ChatGPT", issuer: "Guvi", link: "https://drive.google.com/file/d/1h5Ae1kU0l213I9vLbD7PosA4NBpvgSqj/view?usp=sharing" },
    { title: "Python", issuer: "Guvi", link: "https://drive.google.com/file/d/1h7ndY7dsAk0eRq0uG_4SBd4pdyAeSwgx/view?usp=sharing" },
    { title: "Introduction to Networks", issuer: "Cisco Networking Academy", link: "https://drive.google.com/file/d/1hDnoEUQ-sgrH2koPXd0eLFXKcoq8lwyQ/view?usp=sharing" },
    { title: "Big Data", issuer: "Edureka through Naan Mudhalvan", link: "https://drive.google.com/file/d/1hc4iny6TKu8RIr2HrXh1D6zkkclnxlOq/view?usp=sharing" },
    { title: "AI For India 2.0", issuer: "Guvi", link: "https://drive.google.com/file/d/1h5WEKlfsu09LgbxWzRSZcWPh2MkWF1sm/view?usp=sharing" },
    { title: "C++", issuer: "VEBBOX Software Solutions", link: "https://drive.google.com/file/d/1lIGmrof44mGIJbDV4hbPmPHUi6Uc9HqE/view?usp=sharing" }
  ];

  return (
    <div className='about-container' id='about'>
      <h2 data-aos="fade-right">ABOUT</h2>

      <div className="education-container">
        <div className="education">
          <h2 data-aos="fade-right">Education</h2>
          <ul>
            {educationDetails.map((edu, idx) => (
              <div key={idx} className={edu.title.toLowerCase()} data-aos="fade-right">
                <li><h3>{edu.title}</h3></li>
                <p>{edu.school}</p>
                <p>{edu.year} - {edu.score}</p>
              </div>
            ))}
          </ul>
        </div>
        <div className="edu-img" data-aos="zoom-in-left">
          <img src={EducationImg} alt="Education" />
        </div>
      </div>

      <div className="skills-container">
        <h2 data-aos="fade-right">Skills</h2>
        <div className='skills-grid'>
          {skills.map((skill, idx) => <div key={idx} className='grid-item' data-aos="fade-right">{skill}</div>)}
        </div>
      </div>

      <div className="strengths-container">
        <h2 data-aos="fade-right">Strengths</h2>
        <div className='strengths-grid' >
          {strengths.map((strength, idx) => <div key={idx} className='grid-item' data-aos="fade-right">{strength}</div>)}
        </div>
      </div>

      <div className="certificate-container">
        <div className="certifications">
          <h2 data-aos="fade-right">Certifications</h2>
          <ol>
            {certifications.map((cert, idx) => (
              <div key={idx} className="certificates">
                <li data-aos="fade-right"><b>{cert.title}</b> Certification from <b>{cert.issuer}</b></li>
                <a href={cert.link} target="_blank" rel="noopener noreferrer" data-aos="fade-right">Click to View</a>
              </div>
            ))}
          </ol>
        </div>
        <div className="certify-img" data-aos="zoom-in-left">
          <img src={CertificationsImg} alt="Certifications" />
        </div>
      </div>
    </div>
  );
};

export default About;
