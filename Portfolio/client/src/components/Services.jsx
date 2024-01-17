import React from 'react';
import "../styles/main.css";
function Services() {
  return (
    <div className='mt-20' id='services'>
      <div className='text-[2rem] ps-5 h-11 underline underline-offset-4 decoration-red-700'>Services</div>
      <div className='grid grid-cols-10 gap-1 mt-10'>
        <div className='servItem col-start-2 col-span-2 flex h-14 rounded-lg hover:bg-gray-900 justify-center items-center bg-black text-white'>Frontend Web Development</div>
        <div className='servItem col-span-2 flex h-14 justify-center rounded-lg hover:bg-gray-900 items-center bg-black text-white'>Backend Web Development</div>
        <div className='servItem col-span-2 flex h-14 justify-center rounded-lg hover:bg-gray-900 items-center bg-black text-white'>UI/UX designing</div>
        <div className='servItem col-span-2 flex h-14 justify-center rounded-lg hover:bg-gray-900 items-center bg-black text-white'>3D-modelling</div>
        <div className='servItem col-start-2 col-span-2 flex h-14 justify-center rounded-lg hover:bg-yellow-400 items-center bg-yellow-500 text-white'>Using React</div>
        <div className='servItem col-span-2 flex h-14 justify-center rounded-lg hover:bg-yellow-400 items-center bg-yellow-500 text-white'>Using Express</div>
        <div className='servItem col-span-2 flex h-14 justify-center rounded-lg hover:bg-yellow-400 items-center bg-yellow-500 text-white'>Using Figma</div>
        <div className='servItem col-span-2 flex h-14 justify-center rounded-lg hover:bg-yellow-400 items-center bg-yellow-500 text-white'>Using Blender</div>
      </div>
    </div>
  )
}

export default Services
