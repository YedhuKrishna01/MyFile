import { useState } from 'react';
import  Nav from "./Nav.jsx";
import Cards from "./Cards.jsx";
import  Footer from "./Footer.jsx";
import "./style/style.css";
import Sidebar from './Sidebar.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='container-fluid'>
        <Nav />
        <div className="row ms-3 mt-3">
          <Sidebar />
          <Cards/>
        </div>
        <Footer/>
      </div>
    </>
  )
}

export default App