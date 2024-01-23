import React, { useState, useEffect } from 'react';
import "../styles/main.css";

function AboutMe() {


  return (
    <div id="about-me" className='section text-white h-screen grid grid-cols-12'>
      <div className='col-span-10 col-start-2'>
        <div className='text-[3rem]'>About Me</div>
        <div className='grid grid-cols-4 mt-5'>
          <div className=' col-span-3 text-lg'>
            <div>Professionally connected with the web development industry.</div>
            <div>Problem solver, always interested to learn new things, loyal employee with high attention to detail.</div>
            <div>Seriously love designing, coding, reading, listening to music and playing video games.</div>
            <div>Interested in the entire frontend spectrum and working on ambitious projects with interesting people. Go teamwork !!</div>
          </div>
          <div className='grid place-content-center p-5 w-44 ms-16 mt-[-50px] border-white rounded-full border-solid border-[1px]'>
            <img className='rounded-full h-44' src='/mypic.jpg'></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
