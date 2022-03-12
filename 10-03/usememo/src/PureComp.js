import React, { PureComponent } from 'react'
//rpce

export class PureComp extends PureComponent {
  render() {
    console.log('pure component')
    return (
      <div>PureComp: {this.props.name}</div>
    )
  }
}

export default PureComp