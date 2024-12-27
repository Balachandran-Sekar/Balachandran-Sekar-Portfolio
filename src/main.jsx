import { StrictMode,useEffect } from 'react'
import { createRoot } from 'react-dom/client';
import Header from './header/header.jsx'
import Home from './body/Home.jsx';
import About from './body/About.jsx';
import Experience from './body/Experience.jsx';
import Projects from './body/Projects.jsx';
import Contact from"./body/Contact.jsx";
import Footer from "./footer/footer.jsx"
import "./main.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
 
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
    });

  return (
    <>
      <Header />
      <Home />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <App/>
  </StrictMode>,
)
