import React from 'react';
import Nav from '../components/Nav.jsx';
import Banner from '../components/Banner.jsx';
import AboutMe from '../components/AboutMe.jsx';
import Services from '../components/Services.jsx';
import Projects from '../components/Projects.jsx';

function Home() {
  return (
    <div>
      <Nav/>
      <Banner/>
      <AboutMe/>
      <Services/>
      <Projects/>
    </div>
  )
}

export default Home
