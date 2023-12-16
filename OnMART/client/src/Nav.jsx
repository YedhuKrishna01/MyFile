import React from 'react'

function Nav() {
  return (
      <div className="topbar row">
        <div className='col-4'>
            <div className="logo mt-3 ps-2">OnMART</div>
        </div>
        <div className='col-4'>
            <input className='mt-3 searchBar' type='text' placeholder='Search' />
        </div>
        <div className='navbuts col-4'>
            <button className="btn btn-light mt-3">Home</button>
            <button className="btn btn-light ms-2 mt-3">SignUp</button>
            <button className="btn btn-light ms-2 mt-3">Cart</button>
            <button className="btn btn-light ms-2 mt-3">Profile</button>
        </div>
      </div>
  )
}

export default Nav