import React, { Component } from 'react'

export default class Nav extends Component {

  componentWillUnmount(){
    console.log('unmounted')
    }

  render() {
    return (
      <div>Nav</div>
    )
  }
}
