import React from 'react';
import "../style/home.css";
import Cards from "../components/Cards.jsx";
import  Footer from "../components/Footer.jsx";
import Sidebar from '../components/Sidebar.jsx';

function Home() {
  return (
    <div>
        <div className='container-fluid'>
        <div className="row ms-3 mt-4">
          <Sidebar />
          <Cards/>
        </div>
        <Footer/>
      </div>
      
    </div>
  )
}

export default Home
