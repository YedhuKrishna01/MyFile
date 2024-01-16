import React, { useState, useEffect } from 'react';

function Banner() {
  const imageUrls = ['/first.JPEG', '/second.JPEG', '/third.JPEG', 'fourth.JPEG'];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const showNextImage = () => {
    const nextIndex = (currentImageIndex + 1) % imageUrls.length;
    setCurrentImageIndex(nextIndex);
  };

  const showPreviousImage = () => {
    const previousIndex =
      (currentImageIndex - 1 + imageUrls.length) % imageUrls.length;
    setCurrentImageIndex(previousIndex);
  };

  useEffect(() => {
    const intervalId = setInterval(showNextImage, 3000);
    return () => clearInterval(intervalId);
  }, [currentImageIndex]);

  return (
    <div className='grid grid-cols-12 bg-blue-700 h-[75%]'>
      <div className='col-span-1 flex justify-end items-center'>
        <button
          className='bg-white h-10 w-10 font-bold text-lg rounded-md active:bg-stone-300'
          aria-label='Previous Image'
          onClick={showPreviousImage}
        >
          &lt;
        </button>
      </div>
      <div className='col-span-10'>
      <img
        className='rounded-xl my-9 w-[96%] ms-5 h-96 object-cover'
        src={imageUrls[currentImageIndex]}
        alt={`Image ${currentImageIndex + 1}`}
      />
    </div>

      <div className='col-span-1 flex justify-start items-center'>
        <button
          className='bg-white h-10 w-10 font-bold text-lg rounded-md active:bg-stone-300'
          aria-label='Next Image'
          onClick={showNextImage}
        >
          &gt;
        </button>
      </div>
    </div>
  );
}

export default Banner;
