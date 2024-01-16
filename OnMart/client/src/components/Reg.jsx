import React from 'react'

function Reg() {
  return (
    <div className='form'>
        <div className='mt-5 grid grid-cols-12'>
          <div className="bg-blue-700 flex flex-col col-start-5 col-span-4 rounded-lg items-center h-[34rem]">
            <div className="text-white flex justify-center mt-5 text-2xl font-bold">Register Your Acc.</div>
            <label for="username" className='text-white text-lg mt-5'>Enter your username:</label>
            <input className='w-4/5 h-8 rounded-lg mt-3 placeholder:ps-3 focus:outline-blue-800' type='text' name='username' placeholder='Username'/>
            <label for="email" className='text-white text-lg mt-5'>Enter your email:</label>
            <input className='w-4/5 h-8 rounded-lg mt-3 placeholder:ps-3 focus:outline-blue-800' type='text' name='email' placeholder='Email'/>
            <div className='mt-5'>
              <label className='text-white font-bold' for="choice">Buyer</label>
              <input className='ms-1' type='radio' name='choice'/>
              <label className='text-white font-bold ms-4' for="choice">Seller</label>
              <input className='ms-1' type='radio' name='choice'/>
            </div>
            <label for="password" className='text-white text-lg mt-5'>Enter your password:</label>
            <input className='w-4/5 h-8 rounded-lg mt-3 placeholder:ps-3 focus:outline-blue-800' type='text' name='password' placeholder='Password'/>
            <label for="password2" className='text-white text-lg mt-5'>Confirm your password:</label>
            <input className='w-4/5 h-8 rounded-lg mt-3 placeholder:ps-3 focus:outline-blue-800' type='text' name='password2' placeholder='Password'/>
            <button className='bg-white p-2 rounded-md mt-5 text-blue-700 font-bold active:text-white active:bg-blue-700' >SignUp</button>
          </div>
        </div>
    </div>
  )
}

export default Reg
