import React from 'react'

function Sidebar() {
  return (
    <div className='col-2 sidebar'>
        <div className="heading m-3"><h3>Categories</h3></div>
        <button className="filter fs-5">All</button><br/>
        <button className="filter fs-5 mt-2">Appliances</button><br/>
        <button className="filter fs-5 mt-2">Books</button><br/>
        <button className="filter fs-5 mt-2">Beauty&Accs</button><br/>
        <button className="filter fs-5 mt-2">Fashion</button><br/>
        <button className="filter fs-5 mt-2">Mobile Phones</button><br/>
        <button className="filter fs-5 mt-2">TV&PC</button><br/>
    </div>
  )
}

export default Sidebar
