import React, { Component } from 'react'
import Child from './Child'
export default class ComponentWillUnmount extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       show: false 
    }
  }
  render() {
    return (
      <>
       {this.state.show? <Child/> : null}
       <button onClick={() => {this.setState({show: !this.state.show})}}>Toggle child</button>
      </>
    )
  }
}
