import logo from './logo.svg';
import './App.css';
import Card from './Component/Card'
import React, {Component} from 'react'

class App extends Component {
  //adding state to App component as well 

  //since its not taking props from anywhere, were not mentioning props 
  constructor(){
    super();

    this.state = {
      name: "bill gates"
    };  

    //we binded the function over here 
    this.changeState = this.changeState.bind(this)
  }

  //we cannot use the state of App.js in a function (because it is outside the render)
  changeState(){
    console.log(this.state.name)
    //so this will throw error 
    //in order to use {this.state.name} inside function, we need to bind that function 
  }

  render() {
  return (
    <div className="App">
     {/* displaying state of the App.js */}
     <h2>{this.state.name}</h2>

    {/* reusing card components and passing props to child component */}
     <Card name="" geek="reem" second="shaikh" display={false}></Card>
     {/* passing state of the app component */}
     <Card name={this.state.name} geek="rum"></Card>

     <button onClick={this.changeState}>click me</button>
    </div>
  );
}
}

export default App;
