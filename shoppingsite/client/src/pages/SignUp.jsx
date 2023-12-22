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
            <label for="password" className='tags mt-3'>Enter your password:</label>
            <input type='password' className='search mt-2' name='password' id='password' placeholder='password'/>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUp
