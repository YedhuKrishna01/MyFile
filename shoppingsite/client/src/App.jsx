import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import "./style/style.css";
import  Nav from "./components/Nav.jsx";
import Home from "./pages/Home.jsx";
import SignUp from "./pages/SignUp.jsx";
import Cart from "./pages/Cart.jsx";
import Profile from "./pages/Profile.jsx";

function App() {

  return (
    <>
      <Router>
        <Nav/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/signUp" element={<SignUp/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/profile" element={<Profile/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App