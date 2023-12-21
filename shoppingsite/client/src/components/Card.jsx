import React from 'react'

function Card(props) {
  return (
    <div>
      <div className="items">{props.id} {props.product}</div>
    </div>
  )
}

export default Card
