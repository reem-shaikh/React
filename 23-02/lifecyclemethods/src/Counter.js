import React, { Component } from 'react'

export default class Counter extends Component {

  constructor(props) {
      console.log('constructor')
      super(props)

      this.state = {
          counter: 0
      }

      this.increement = () => this.setState({counter: this.state.counter + 1})

      this.decreement = () => this.setState({counter: this.state.counter - 1})
  }

  componentDidMount(){
      //called right after render 
      console.log('componentDidMount')
  }

  componentDidUpdate(prevProps, prevState, snapshot){
      console.log('componentDidUpdate')
  }

  componentWillUnmount() {
      console.log('component is unmounted')
  }

    
  incrementParent = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  render() {
    console.log('render')
    return (
    <>
    <div>Counter: {this.state.counter}</div>
    <button onClick={this.increement}>Increement</button>
    <button onClick={this.decreement}>decreement</button>

    <button onClick={this.incrementParent}>increase child</button>

    

    </>
    )
  }
}
