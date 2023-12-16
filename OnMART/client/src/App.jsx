import { useState } from 'react';
import  Nav from "./Nav.jsx";
import Card from "./Card.jsx";
import "./style/style.css";
import Sidebar from './Sidebar.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='container-fluid'>
        <Nav />
        <div className="row mt-3">
          <Sidebar />
          <Card />
        </div>
      </div>
    </>
  )
}

export default App