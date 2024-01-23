import React from 'react'

function Skills() {
  return (
    <div className='grid grid-cols-12 text-white section h-screen' id='skills'>
      <div className='col-span-10 col-start-2'>
        <div className='text-[3rem]'>Skills</div>
        <div className='grid grid-cols-6 gap-3 mt-5 h-28'>
          <div className='sets grid place-content-center text-lg border-white rounded-md border-2 border-solid'>HTML</div>
          <div className='sets grid place-content-center text-lg border-white border-2 rounded-md border-solid'>CSS</div>
          <div className='sets grid place-content-center text-lg border-white border-2 rounded-md border-solid'>Bootstrap</div>
          <div className='sets grid place-content-center text-lg border-white border-2 rounded-md border-solid'>Tailwind</div>
          <div className='sets grid place-content-center text-lg border-white border-2 rounded-md border-solid'>Node</div>
          <div className='sets grid place-content-center text-lg border-white border-2 rounded-md border-solid'>Javascript</div>
          <div className='sets grid place-content-center text-lg border-white border-2 rounded-md border-solid'>Express</div>
          <div className='sets grid place-content-center text-lg border-white border-2 rounded-md border-solid'>React</div>
          <div className='sets grid place-content-center text-lg border-white border-2 rounded-md border-solid'>MongoDB</div>
          <div className='sets grid place-content-center text-lg border-white border-2 rounded-md border-solid'>Blender</div>
          <div className='sets grid place-content-center text-lg border-white border-2 rounded-md border-solid'>Figma</div>
          <div className='sets grid place-content-center text-lg border-white border-2 rounded-md border-solid'>Python</div>
        </div>
      </div>
    </div>
  )
}

export default Skills
