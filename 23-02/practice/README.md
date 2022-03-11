### Counter app 
> App.js 
```bash 

import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import React, { Component } from 'react'

export default class App extends React.Component {

  constructor(){
    console.log('parent- constructor')
    super()

    this.state = {
      mount: false,
      counter: 0,
    }

}

  componentDidMount(){
    console.log('parent - mounted')
  }

  incrementParent = () => {
    this.setState({
      counter: this.state.counter + 1,
      mount: false,

    });
  };

  increement = () => this.setState({counter: this.state.counter + 1,  mount: !this.state.mount})
 
  decreement = () => this.setState({counter: this.state.counter - 1,  mount: !this.state.mount})


  render() {
    console.log('parent-render')
    return (
      <div>
        <div>Count: {this.state.counter}</div>
        {/* <button onClick={this.mountCounter}>mount counter</button>
        <button onClick={this.unmountCounter}>unmount counter</button>  */}

        <button onClick={this.increement}>Increement</button>
        <button onClick={this.decreement}>decreement</button>
        

        {/* <Counter /> */}
        {this.state.mount ? 
        <Counter
        value={this.state.counter}
        changeParent={this.incrementParent}
        /> : null}

      

 
      </div>
    )
  }
}
```
> Counter.js
```bash 
import React, { Component } from 'react'

class Counter extends React.Component {
    constructor(props) {
      console.log('constructor - child')
      super(props);
      this.state = {
        name: "geek",
      };
    }
  
    componentDidMount() {
      console.log("child - componentDidMount");
    }
  
    componentWillUnmount() {
      // polymorphism
      // called when component is being unmounted/removed from screen
      console.log("unmounting!!!!");
    }
  
    componentDidUpdate(prevProps, prevState) {
      console.log("prevProps - ", prevProps.value);
      console.log("pre state - ", prevState);
      console.log("current prop is - ", this.props.value);
      // runs when either state OR props is changed
      console.log("child - UPDATE");
      document.getElementById("update").innerText = prevProps.value;
      // this.setState({ name: "abhishek" });
    }
  
  
    render() {
      console.log("render method - child ");
      return (
        <div>
          {/* Counter component - {this.props.value} */}
          Counter component - {this.props.value}
          
          <button onClick={this.props.changeParent}>change parent from child</button>


        </div>
      );
    }
  }

  export default Counter 
```