import React from 'react';
import { Link } from "react-router-dom";

function Nav() {
  return (
      <div className="topbar row">
        <div className='col-4'>
            <div className="logo mt-3 ps-2">OnMART</div>
        </div>
        <div className='col-5'>
            <input className='mt-3 searchBar' type='text' placeholder='Search...' />
        </div>
        <div className='navbuts col-3'>
          <Link to="/" className="btn btn-light mt-3">Home</Link>
          <Link to="/signup" className="btn btn-light ms-2 mt-3">SignUp</Link>
          <Link to="/cart" className="btn btn-light ms-2 mt-3">Cart</Link>
          <Link to="/profile" className="btn btn-light ms-2 mt-3">Profile</Link>
        </div>
      </div>
  )
}

export default Nav