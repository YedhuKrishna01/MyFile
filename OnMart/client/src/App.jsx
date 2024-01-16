import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          {/* <Route path="/cart" element={<Cart/>}></Route>
          <Route path="/profile" element={<Profile/>}></Route> */}
        </Routes>
      </Router>
    </>
  )
}

export default App
