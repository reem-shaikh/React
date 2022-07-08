import React, { Component } from 'react'
import Nav from './Nav'

export default class Mounting extends Component {

    //first constructor is initialized
  constructor(props) {
    super(props)
    console.log('constructor')

    this.state= {
        show: true
    }
  }

  //third componentdidmount is mounted 
  componentDidMount(){
    console.log('mounted')
  }

  //second render is iniitialized 
  render() {
    console.log('render')
    return (
      <>
      <h1>lifecycle methods</h1>
      {this.state.show ? <Nav/> : null}
      <button onClick={() => {this.setState({show: !this.state.show})}}>toggle nav</button>
      </>
    )
  }
}
