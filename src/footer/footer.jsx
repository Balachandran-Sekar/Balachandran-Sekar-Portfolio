import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import "../footer/footer.css"
const footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <h6>&copy;2025 &ensp;</h6>
        <h6>Developed By :Balachandran-Sekar</h6>
      </div>
      <div className="links">
        <a href="https://www.linkedin.com/in/balachandran-sekar-a54b1922a/" className='linked-in'><LinkedInIcon style={{ color: '#000000', fontSize: "30px" }} /></a>
        <a href="https://github.com/Balachandran-Sekar" className='github'><GitHubIcon style={{ color: '#000000', fontSize: "30px" }} /></a>
        <a href="" className='instagram'><InstagramIcon style={{ color: '#000000', fontSize: "30px" }} /></a>
      </div>
    </footer>
  )
}

export default footer