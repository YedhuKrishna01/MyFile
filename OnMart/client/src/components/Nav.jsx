import React from 'react';
import { useNavigate } from 'react-router-dom';

function Nav() {

  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className='grid grid-cols-3 h-10 bg-blue-800 text-white shadow-lg'>
      <div className="text-white font-bold text-2xl ms-6 mt-2">
        OnMART
      </div>
      <div className="">
      </div>
      <div className="grid grid-cols-4">
        <button onClick={() => handleNavigation('/')} className='text-white font-bold border-x-2 active:bg-white active:text-blue-800'>Home</button>
        <button onClick={() => handleNavigation('/register')} className='text-white font-bold active:bg-white active:text-blue-800'>Register</button>
        <button onClick={() => handleNavigation('/login')} className='text-white font-bold border-x-2 active:bg-white active:text-blue-800'>Login</button>
        <button onClick={() => handleNavigation('/cart')} className='text-white font-bold active:bg-white active:text-blue-800'>Cart</button>
      </div>
    </div>
  )
}

export default Nav
