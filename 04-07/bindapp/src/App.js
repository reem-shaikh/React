import React, { Component } from 'react'
import EventBind from './components/EventBind'
export default class App extends Component {
  // constructor(){
  //   super()
  //   //  this.hello = this.hello.bind(this)
  // }
  // hello(){
  //   console.log('hello')
  // }
  render() {
    return (
      <>
      {/* <button onClick={this.hello.bind(this)}>bind</button> */}
      <EventBind/>
      </>
    )
  }
}
