import React from "react";
import "./style.css";

class App extends React.Component{
    constructor(){
      super();
      this.state = {
        count: 0,
        todo:[]
      };
    }

    clickHandler = (event)=>{
      event.preventDefault();
      let todo = event.target[0].value;
      this.setState({ todo: [...this.state.todo,todo ] });
      console.log(this.state);
    }
  
    render() {
      return (
        <>
        <button onClick={() => this.add(index)}>+</button>
        <ol>
          <li>
          </li>
        </ol>
        <button onClick={() => this.sub(index)}>-</button>
        </>
      );
    }
  }
export default App;
