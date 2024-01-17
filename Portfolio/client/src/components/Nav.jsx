import React from 'react';
import '../styles/App.css';
import '../styles/main.css';

function Nav() {
  return (
    <div className='grid grid-cols-12 bg-black'>
      <div className='brand col-span-6 text-lg h-14 ps-10 pt-3 font-bold bg-white rounded-tr-lg'>
        <span className='bg-black rounded-full p-1 text-white'>YK</span>rishna
      </div>
      <div className='bg-black text-white col-span-6 flex justify-end'>
        <button className='w-20 focus:bg-white focus:text-black focus:rounded-tr-lg'>Welcome</button>
        <a href='#about-me'><button className='w-20 h-14 focus:bg-white focus:text-black focus:rounded-tr-lg'>About me</button></a>
        <a href='#services'><button className='w-20 h-14 focus:bg-white focus:text-black focus:rounded-tr-lg'>Services</button></a>
        <a href='#projects'><button className='w-20 h-14 focus:bg-white focus:text-black'>Projects</button></a>
      </div>
    </div>
  )
}

export default Nav
