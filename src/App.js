import './App.css';
import AboutComponent from './Components/About/AboutComponent';
import HeroComponent from './Components/Hero/HeroComponent';
import NavbarComponent from './Components/Navbar/NavbarComponent';
import FooterComponent from './Components/Footer/FooterComponent';
import React from 'react';
import SkillComponent from './Components/Skill/SkillComponent';
import ProjectComponent from './Components/Project/ProjectComponent';
import ContactComponent from './Components/Contact/ContactComponent';


const App = () => {
  return (
    <>
      <NavbarComponent />
      <HeroComponent />
      <AboutComponent />
      <SkillComponent />
      <ProjectComponent />
      <ContactComponent />
      <FooterComponent />
    </>
  );
}

export default App;
