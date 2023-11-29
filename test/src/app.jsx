import React from "react";
import "./style.css";

class App extends React.Component{
    constructor(props){
      super();
      console.log(props);
    }
  
    render() {
      return (
        <>
        <h1>Welcome To the Webpage</h1><Mid /><Footer />
        {}
        </>
      );
    }
  }

  class Mid extends React.Component{
    constructor(){
      super();;
    }

    render() {
      return (
        <>
        <p>This is the content</p>

        </>
      );
    }
  }

  class Footer extends React.Component{
    constructor(){
      super();

    }
  
    render() {
      return (
        <>
        <h3>This is the footer</h3>
        </>
      );
    }
  }

export default App