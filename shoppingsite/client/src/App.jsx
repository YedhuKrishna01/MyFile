import { useState } from 'react';
import  Nav from "./Nav.jsx";
import "./style/style.css";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Nav />
    </>
  )
}

export default App
