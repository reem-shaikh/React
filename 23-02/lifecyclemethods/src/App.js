import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import React, { Component } from 'react'

export default class App extends React.Component {

  constructor(props){
    console.log('child - constructor')
    super(props)

    this.state = {
      mount: false
    }

this.mountCounter = () => this.setState({mount: true})
this.unmountCounter = () => this.setState({mount: false})
  }



  componentDidMount(){
    console.log('child - mounted')
  }

  render() {
    console.log('child-render')
    return (
      <div>
        <button onClick={this.mountCounter}>mount counter</button>
        <button onClick={this.unmountCounter}>unmount counter</button>
        

        {/* <Counter /> */}
        {this.state.mount ? 
        <Counter
        /> : null}

 
      </div>
    )
  }
}
