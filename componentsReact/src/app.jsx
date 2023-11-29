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

    del = (index)=>{
      this.setState({ todo: this.state.todo.filter((item, ind)=> index != ind)});
    }

    edit = (index)=>{
      let change = prompt("Enter the change:");
      this.setState({ todo: this.state.todo.map((item, ind)=> ind == index ? change : item)})
    }

    componentDidMount(){
      console.log("Mounted")
    }

    componentDidUpdate(){
      console.log("Updated")
    }

    shouldComponentUpdate(p, s){
      console.log("Should Update");
      return this.state.todo.length%2==0;
    }
  
    render() {
      return (
        <>
        <form onSubmit={this.clickHandler}>
          <input type="text" name="todo" id="todo" />
          <input type="submit" value="add" />
        </form>
        <ol>
          {this.state.todo.map((item, index)=>(
            <li key={index}>{item}
            <button onClick={() => this.del(index)}>del</button>
            <button onClick={() => this.edit(index)}>edit</button>
            </li>
          ))}
        </ol>
        </>
      );
    }
  }
export default App;
