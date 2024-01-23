import React from 'react';
import '../styles/App.css';
import '../styles/main.css';

function Nav() {

  function scrollToSection(event, sectionId) {
    event.preventDefault();

    const navbarHeight = 56;
    const targetSection = document.getElementById(sectionId);

    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - navbarHeight,
        behavior: 'smooth',
      });
    }
  }

  return (
    <div className='nav w-full grid grid-cols-3 fixed' id='nav'>
      <div className='brand text-lg h-14 ps-10 pt-3 font-bold text-white rounded-tr-lg'>
        <span className='bg-black rounded-full p-1'>YK</span>rishna
      </div>
      <div className='bg-purple-950 grid grid-cols-4 justify-items-center place-items-center rounded-full mt-5'>
        <a href="#about-me" className="navBtns text-white w-full h-full grid place-content-center rounded " onClick={(e) => scrollToSection(e, 'about-me')}>About</a>
        <a href="#skills" className="navBtns text-white w-full h-full grid place-content-center rounded" onClick={(e) => scrollToSection(e, 'skills')}>Skills</a>
        <a href="#projects" className="navBtns text-white w-full h-full grid place-content-center rounded" onClick={(e) => scrollToSection(e, 'projects')}>Works</a>
        <a href="#contacts" className="navBtns text-white w-full h-full grid place-content-center rounded" onClick={(e) => scrollToSection(e, 'contacts')}>Contact</a>
      </div>
    </div>
  )
}

export default Nav
