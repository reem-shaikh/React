//rce
import React, { Component } from 'react'
import withCounter from './withCounter'

class HoverCounter extends Component {
    // constructor(props) {
    //     //rconst
    //   super(props)
    
    //   this.state = {
    //      count: 0
    //   }
    // }
    
    // increementCount = () => {
    //     this.setState( prevState => {
    //         return {count: prevState.count + 1}
    //     })
    // }

  render() {
    return (
    <div >
      <h1 onMouseOver={this.props.increementCount}>Hover {this.props.count} times</h1>
    </div>
    )
  }
}

export default withCounter(HoverCounter)