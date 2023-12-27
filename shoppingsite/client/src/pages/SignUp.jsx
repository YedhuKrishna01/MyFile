import React from 'react';
import "../style/signup.css";

function SignUp() {
  return (
    <div>
      <div className="signCont">
        <div className="content">
          <div className="signHead">WOULD YOU LIKE TO REGISTER ?</div>
          <form action="">
            <label for="username" className='tags mt-4'>Enter your username:</label>
            <input type='text' className='search mt-2' name='username' id='username' placeholder='username'/>
            <label for="email" className='tags mt-3'>Enter your email:</label>
            <input type='text' className='search mt-2' name='email' id='email' placeholder='email'/>
            <label className='tags mt-3' for="userType">Enter your preferrence:</label>
            <select className='search select tags mt-2' name='userType'>
              <option>Buyer</option>
              <option>Seller</option>
            </select>
            <label for="password" className='tags mt-3'>Enter your password:</label>
            <input type='password' className='search mt-2' name='password' id='password' placeholder='password'/>
            <label for="password2" className='tags mt-3'>Confirm password:</label>
            <input type='password' className='search mt-2' name='password2' id='password2' placeholder='password'/>
            <input className='btn btn-light mt-4' type='submit' value={"Register"}/>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUp
