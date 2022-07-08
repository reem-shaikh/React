import React, { Component } from 'react'

export default class EventBind extends Component {
  //rconst 
  constructor(props) {
    super(props)
  
    this.state = {
       message: 'hello'
    }

    // this.clickHandler = this.clickHandler.bind(this)
  }

  clickHandler(){
    this.setState({
        message: 'gdbye'
    })
    //this keyword within event handler is undefined, thats why event binding is necessary in class based components 
    console.log(this)
    //this is the typical behavior of this keyword 

    //there are number of ways to bind event handlers in react.
    //1. binding in the render method 
    //2. using arrow function in render method 
    //3. approach in official react dom - binding the event handler in the constructor as opposed to binding in the render method 
  }
  render() {
    return (
      <>
      {/* If your functions don't require access to the state of your component, then sure, you don't need to bind them. */}
      <p>{this.state.message}</p>

      {/* Data binding in React can be achieved by using a controlled input . A controlled input is achieved by binding the value to a state variable and a onChange event to change the state as the input value changes. */}
      {/* when user clciks on the button change the message */}
      <button onClick={this.clickHandler.bind(this)}>click</button>

{/* To avoid the need for binding we have something introduced in ES6 as arrow functions. Using the arrow function to call this. setState will lead to avoid the use of bind.22 */}
      {/* were calling event handler and retaining that value */}
      {/* <button onClick={() => this.clickHandler()}>click</button> */}

{/*
The argument in favour of adding these lines to the constructor is so that the new bound functions are only created once per instance of the class. but either of these methods (callback approach or the first approach) will create a new function every time the component is re-rendered. */}
      {/* 
      <button onClick={this.clickHandler}>click</button>  */}
    
      </>
    )
  }
}
