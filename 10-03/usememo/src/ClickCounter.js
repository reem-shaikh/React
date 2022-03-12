import React, { Component } from 'react'
// importing the higher order function
import withCounter from './withCounter'

export class ClickCounter extends Component {
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
      <div>
          <button onClick={this.props.increementCount}>click {this.props.count} times</button>
      </div>
    )
  }
}

// passing the component through the HOC function 
export default withCounter(ClickCounter)