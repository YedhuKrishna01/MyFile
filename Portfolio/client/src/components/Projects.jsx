import React from 'react'

function Projects() {
  return (
    <div className='mt-20' id='projects'>
        <div className='pt-1 ps-5 h-11 underline underline-offset-4 decoration-red-700 text-[2rem]'>Projects</div>
        <div className='grid grid-cols-8 mt-16 gap-2 h-64'>
            <div className='col-start-2 col-span-3 border-black rounded-2xl'>Disney Hotstar</div>
            <div className='col-span-3 bg-yellow-500 rounded-2xl'>E-Commerce Website</div>
        </div>
    </div>
  )
}

export default Projects
