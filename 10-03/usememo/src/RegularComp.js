//rce
import React, { Component } from 'react'

export class RegularComp extends Component {
  render() {
    console.log('regular component')
    return (
      <div>Regular Comp: {this.props.name}</div>
    )
  }
}

export default RegularComp