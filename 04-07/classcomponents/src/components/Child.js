import React, { Component } from 'react'

export default class Child extends Component {
  componentWillUnmount(){
    console.log('componentWillUnmount - component is unmounted')
  }
  render() {
    return (
      <div>Child</div>
    )
  }
}
