import React from 'react';
import Card from "./Card";

function Cards() {
  return (
    <div className='col-10 cards'>
      <div className="item">
        <Card id="1" product="name1"/>
        <Card id="2" product="name2"/>
      </div>
    </div>
  )
}

export default Cards