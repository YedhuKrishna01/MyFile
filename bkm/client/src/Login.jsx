import React from 'react'

function Login() {
  return (
    <>
      <form onsubmit="login(event)">
        <input type="text" name="username" id="username" placeholder="USERNAME"/><br/>
        <input type="password" name="password" id="password" placeholder="PASSWORD"/><br/>
        <input type="submit" value="Login" />
      </form>
    </>
  )
}

export default Login
