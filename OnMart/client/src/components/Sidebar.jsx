import React from 'react'

function Sidebar() {
  return (
    <div className='flex flex-col m-6 bg-blue-700 text-white h-[400px] items-center rounded-lg col-span-2'>
      <div className="font-bold text-2xl mt-5">Categories</div>
      <div className="w-28 flex flex-col items-start mt-2 ms-[-1rem]">
        <div className='border-x-2 w-32 ps-5 text-white font-bold active:bg-white active:text-blue-800'>Electronics</div>
        <div className='border-x-2 w-32 ps-5 text-white font-bold active:bg-white active:text-blue-800'>Furniture</div>
        <div className='border-x-2 w-32 ps-5 text-white font-bold active:bg-white active:text-blue-800'>Cloths</div>
        <div className='border-x-2 w-32 ps-5 text-white font-bold active:bg-white active:text-blue-800'>Accessories</div>
        <div className='border-x-2 w-32 ps-5 text-white font-bold active:bg-white active:text-blue-800'>Stationary</div>
    </div>
      
      <div className="font-bold text-2xl mt-8">Price</div>
      <div className="w-28 flex flex-col items-start mt-2 ms-[-1rem]">
        <div className='border-x-2 w-32 ps-4 text-white font-bold active:bg-white active:text-blue-800'>100-999</div>
        <div className='border-x-2 w-32 ps-4 text-white font-bold active:bg-white active:text-blue-800'>1000-9999</div>
        <div className='border-x-2 w-32 ps-4 text-white font-bold active:bg-white active:text-blue-800'>10000-19999</div>
        <div className='border-x-2 w-32 ps-4 text-white font-bold active:bg-white active:text-blue-800'>20000-34999</div>
        <div className='border-x-2 w-32 ps-4 text-white font-bold active:bg-white active:text-blue-800'>Above 35000</div>
      </div>
    </div>
  )
}

export default Sidebar
