import React from 'react'

function Log() {
  return (
    <div className='form'>
        <div className='mt-32 grid grid-cols-12'>
          <div className="bg-blue-700 flex flex-col col-start-5 col-span-4 rounded-lg items-center h-[21rem]">
            <div className="text-white flex justify-center mt-5 text-2xl font-bold">Login</div>
            <label for="email" className='text-white text-lg mt-5'>Enter your email:</label>
            <input className='w-4/5 h-8 rounded-lg mt-3 placeholder:ps-3 focus:outline-blue-800' type='text' name='email' placeholder='Email'/>
            <label for="password" className='text-white text-lg mt-5'>Enter your password:</label>
            <input className='w-4/5 h-8 rounded-lg mt-3 placeholder:ps-3 focus:outline-blue-800' type='text' name='password' placeholder='Password'/>
            <button className='bg-white p-2 rounded-md mt-5 text-blue-700 font-bold active:text-white active:bg-blue-700' >Login</button>
          </div>
        </div>
    </div>
  )
}

export default Log
