import React from 'react';
import "../styles/main.css";

function Banner() {
  return (
    <div className='flex justify-center items-center text-3xl h-screen'>
      <div className='roles w-[400px] h-48 rounded grid place-content-center'>
        <div className='text-white py-2 border-y-2 w-72 h-24'>
          Hi. I am Yedhukrishna 
          <div className='ms-6 whitespace-nowrap overflow-hidden'>
            <span className='webD'>| Web Developer |</span>
            <span className='ms-10 uiD'>| UI/UX Designer |</span>
            <span className='ms-10 modeller'>| 3D Modeller |</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
