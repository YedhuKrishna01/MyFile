import React from 'react';
import "../styles/Banner.css"

function Banner() {
    return (
      <div className='grid grid-cols-3 h-[450px]'>
        <div className='col-span-2 flex justify-center items-center text-[2.5rem] ps-5 animate-character'>
          Where your dreams are no longer just a Dream.
        </div>
        <div className=''>
            <img className='scale-75 mt-[-40px] rounded-xl' src='/public/blue.jpg' alt='image here'/>
        </div>
      </div>
    );
  }

export default Banner
