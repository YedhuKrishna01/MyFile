import React from 'react';
import './style.css';

function App() {

  return (
    <>
      <div className="container-fluid p-0">
        <div className="topbar">
            <img className="logo" src="/images/bookmyshow.png"/>
            <input type="text" className="search" name="search" id="search" placeholder="Search for movies,events,sports & activities"/>
            <button className="add btn btn-light" onClick={add}>Add Review</button>
            <button className="signUp btn btn-light">Sign Up</button>
        </div>
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

function add(event){
    location.href = "http://localhost:3000/add.html"
}
