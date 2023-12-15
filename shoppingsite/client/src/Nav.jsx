import React from 'react'

function Nav() {
  return (
    <div className='container-fluid'>
      <div className="topbar row">
        <div className='col-4'>
            <div className="logo mt-3 ps-2">OnMART</div>
        </div>
        <div className='col-4'>
            <input className='mt-3 searchBar' type='text' placeholder='Search' />
        </div>
        <div className='navbuts col-4'>
            <buttons className="btn btn-light mt-3">Home</buttons>
            <buttons className="btn btn-light ms-2 mt-3">SignUp</buttons>
            <buttons className="btn btn-light ms-2 mt-3">Login</buttons>
            <buttons className="btn btn-light ms-2 mt-3">Profile</buttons>
        </div>
      </div>
    </div>
  )
}

export default Nav
