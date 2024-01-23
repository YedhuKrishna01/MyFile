import React from 'react'

function Projects() {
  return (
    <div className='section grid grid-cols-12 h-screen text-white' id='projects'>
      <div className='col-start-2 col-span-10'>
        <div className='text-[3rem]'>Works</div>
        <div className='grid grid-cols-3 gap-3'>
          <div className='border-white border-2 grid place-content-center h-44'>E-commerce</div>
          <div className='border-white border-2 grid place-content-center'>Blogg</div>
          <div className='border-white border-2 grid place-content-center'>Spotify</div>
        </div>

      </div>
    </div>
  )
}

export default Projects
