import React, { Component } from 'react'
import EnhancedComponent from './WithCounter'
class ClickCounter extends Component {
//   constructor(props){
//       super(props)

//       this.state = {
//           count: 0
//       }
//   }

//   increementCount = () => {
//       this.setState( prevState => {
//           return {
//               count: prevState.count + 1
//           }
//       })
//   }
  render() {
    //const { count } = this.state 

    //destructuring count and increement count retreived as props from WithCounter.js
    const {count, increementCount} = this.props

    return (
      <div>
          {/* when you click on the button it increments the count inside the button itself */}
          {/* <button onClick={this.increementCount}>{this.props.name} clicked {count}times</button> */}

          <button onClick={increementCount}>{this.props.name} clicked {count}times</button>
      </div>
    )
  }
}

export default EnhancedComponent(ClickCounter)