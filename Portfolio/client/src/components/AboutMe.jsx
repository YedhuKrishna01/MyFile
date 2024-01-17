import React, { useState, useEffect } from 'react';

function AboutMe() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {

      const aboutMeElement = document.getElementById('about-me');
      const aboutMePosition = aboutMeElement.getBoundingClientRect().top;

      const isAboutMeVisible = aboutMePosition < window.innerHeight / 2;

      setIsVisible(isAboutMeVisible);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="about-me" style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 1s' }}>
      <div className='pt-1 ps-5 h-11 underline underline-offset-4 decoration-red-700 text-[2rem] mt-20'>About me</div>
      <div className='grid grid-cols-6 mt-8 gap-2'>
        <div className='col-span-1 flex justify-center items-center border-2 border-pink-500 rounded-full h-48 scale-75'>My img here</div>
        <div className='ms-[-40px] mt-24 col-span-2 border-4 bg-black border-blue-700 rounded-full h-[420px] text-white ps-6 pt-2 text-[1.1rem] scale-75'>
          <div className='mt-24 ps-2 font-extralight text-[1.2rem]'>My name's Yedhukrishna KS & I love to design products and code them to reality.</div>
          <div className='ms-24 mt-8 text-white font-extralight'> I am a -
            <ul className='text-2xl list-disc ml-5 mt-1'>
              <li>Web Developer</li>
              <li>UI/UX designer</li>
              <li>3D-Modelling</li>
            </ul>
          </div>
        </div>
        <div className='mt-[-30px] col-span-2 flex justify-center items-center border-4 border-purple-600 bg-black rounded-full font-bold h-96'></div>
        
      </div>
    </div>
  );
}

export default AboutMe;
