import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import Header from './header/header.jsx'
import Home from './body/Home.jsx';
import About from './body/About.jsx';
import Experience from './body/Experience.jsx';
import Projects from './body/Projects.jsx';
import Contact from"./body/Contact.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <Home/>
    <About/>
    <Experience/>
    <Projects/>
    <Contact/>
  </StrictMode>,
)
