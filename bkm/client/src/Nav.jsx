import React from 'react'

function Nav() {
  return (
    <div>
      <div className="topbar">
            <img className="logo" src="/images/bookmyshow.png"/>
            <input type="text" className="search" name="search" id="search" placeholder="Search for movies,events,sports & activities"/>
            <button className="add btn btn-light" onClick={add}>Add Review</button>
            <button className="signUp btn btn-light">Sign Up</button>
        </div>
    </div>
  )
}

export default Nav;

function add(){
    location.href = "http://localhost:3000/login"
  }
