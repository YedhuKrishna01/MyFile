import React from 'react'

function Contacts() {
  return (
    <div className='section grid grid-cols-12 h-screen text-white' id='contacts'>
      <div className='col-start-2 col-span-10'>
        <div className='text-[3rem]'>Contacts</div>
        <div className='grid grid-cols-2 mt-5 text-lg border-white border-2 p-5 gap-5'>
          <li>Phone: +918592803244</li>
          <li>Email: <a className='underline underline-offset-2 decoration-yellow-300 decoration-2' href='mailto:yedhukrishnagk@gmail.com'>yedhukrishnagk@gmail.com</a></li>
          <li>Git: <a className='underline underline-offset-2 decoration-yellow-300 decoration-2' href='https://github.com/YedhuKrishna01'>Click here</a></li>
        </div>
      </div>
    </div>
  )
}

export default Contacts
