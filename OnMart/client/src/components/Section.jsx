import React from 'react';
import Sidebar from './Sidebar';
import Card from './Card';

function Section() {
  return (
    <div className='grid grid-cols-8'>
      <Sidebar/>
      <Card/>
    </div>
  )
}

export default Section
