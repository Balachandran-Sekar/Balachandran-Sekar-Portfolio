import React from 'react'
import profile from "../assets/Balachandran-Sekar.jpg"
import "./Home.css"
const Home = () => {
    return (
        <>
            <div className='Home-container'>
                <div className='Details-container'>
                    <h1><b>BALACHANDRAN SEKAR</b></h1>
                    <p>Software Trainee</p>
                </div>
                <div className='Image-container'>
                    <img src={profile} alt='profile' />
                </div>
            </div>
        </>
    )
}

export default Home