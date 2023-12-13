import { useState } from 'react';
import "./style.css";
import Nav from "./Nav"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="container-fluid p-0">
        <Nav />
        <div className="ad">
            <img className="wcAd" src="/images/wcAd.avif"/>
        </div>
        <div className="recText">
            Recommended Movies
        </div>
        <div className="movies">
            <div className="garudan">
                <img className="item" src="/images/garudan.avif"/>
                <div className="movName">Garudan</div>
            </div>
            <div className="bandra">
                <img className="item" src="/images/bandra.avif"/>
                <div className="movName">Bandra</div></div>
            <div className="tiger">
                <img className="item" src="/images/tiger.avif"/>
                <div className="movName">Tiger 3</div>
            </div>
            <div className="jtx2">
                <img className="item" src="/images/jtx2.avif"/>
                <div className="movName">Jigar Thanda</div>
            </div>
            <div className="vela">
                <img className="item" src="/images/vela.avif"/>
                <div className="movName">Vela</div>
            </div>
        </div>
        <div id="addedMoviesContainer" className="movies">
        </div>
    </div>
    </>
  )
}

export default App;
