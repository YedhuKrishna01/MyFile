import React from 'react';
import Nav from '../components/Nav.jsx';
import Background from '../components/Background.jsx';
import AboutMe from '../components/AboutMe.jsx';
import Projects from '../components/Projects.jsx';
import Banner from '../components/Banner.jsx';
import Skills from '../components/Skills.jsx';
import Contacts from '../components/Contacts.jsx';


function Home() {
  return (
    <div>
      <Background/>
      <Nav/>
      <Banner/>
      <AboutMe/>
      <Skills/>
      <Projects/>
      <Contacts/>
    </div>
  )
}

export default Home
