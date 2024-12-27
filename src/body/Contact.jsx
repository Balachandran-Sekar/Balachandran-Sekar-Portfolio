import React from 'react'
import "./Contact.css"
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
const Contact = () => {
   
      
  return (
   <>
   <div className="contact-container" id='contact'>
    <h2 data-aos="fade-right">CONTACT</h2>
    <ol>
    <li data-aos="fade-right"><a href="tel:+91 6379108577"><PhoneAndroidIcon style={{color:"000000",fontSize:"30px"}}/></a>+91 6379108577</li>
    <li data-aos="fade-right"><a href="mailto:balacs2103@gmail.com"><EmailIcon style={{color:"000000",fontSize:"30px"}}/></a>balacs2103@gmail.com</li>
    <li data-aos="fade-right"><p><LocationOnIcon style={{color:"000000",fontSize:"30px"}}/></p>81,Konnaipatti,Semboothi Post,Ponnamaravathi Tk,Pudukkottai Dt,TamilNadu,India -622401.</li>
    </ol>
   </div>
   </>
  )
}

export default Contact