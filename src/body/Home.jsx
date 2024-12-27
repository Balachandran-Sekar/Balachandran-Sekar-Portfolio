import React from 'react'
import profile from "../assets/Balachandran-Sekar.jpg"
import "./Home.css"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import Instagram from "../assets/instagram.svg"
import Button from "@mui/material/Button";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import Resume from "../assets/Balachandran-Sekar.pdf";
import 'aos/dist/aos.css';

const Home = () => {
    return (
        <>
            <div className='Home-container' id='home'>
                <div className='Details-container'>
                    <h1 id='name'><b>BALACHANDRAN SEKAR</b></h1>
                    <p id='role'>Software Trainee</p>
                    <div className="objective-container">
                        <h2 className='obj-title'>Objective </h2>
                        <p className='obj-para'> A Motivated Software Trainee skilled in full-stack development with
                            expertise in React, Node.js, MongoDB, and JavaScript. Builds
                            responsive web interfaces and scalable applications, delivering
                            high-quality, end-to-end solutions collaboratively.</p>
                            <div className='cv-down'>
                        <Button
                            variant="contained"
                            color="warning"
                            startIcon={<FileDownloadIcon />}
                            href={Resume}
                            download="Balachandran-Sekar.pdf"
                        >
                            Download Resume
                        </Button>
                    </div>
                    </div>
                </div>
                <div className='Image-container'>
                    <img id='profile' src={profile} alt='profile' />
                    <div className="links">
                        <a href="https://www.linkedin.com/in/balachandran-sekar-a54b1922a/" className='linked-in'><LinkedInIcon style={{ color: '#287fc7', fontSize: "40px" }} /></a>
                        <a href="https://github.com/Balachandran-Sekar" className='github'><GitHubIcon style={{ color: '#000000', fontSize: "40px" }} /></a>
                        <a href="" className='instagram'><img src={Instagram} alt="insta-logo" style={{height:"40px",width:"40px"}} /></a>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default Home