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
