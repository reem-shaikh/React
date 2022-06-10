import React, { Component } from 'react'
import EnhancedComponent from './WithCounter'
// we couldve reused the increementCount functionality in both ClickCounter.js and HoverCounter.js but instead its been duplicated.

// How can we reuse this functionality?
// we could lift the counter logic and state to Parent and pass it as props to both the child components - State Lifting
// If child components are scattered in react component tree, lifting the state wouldnt be the right solution  
class HoverCounter extends Component {
    // constructor(props){
    //     super(props)
  
    //     this.state = {
    //         count: 0
    //     }
    // }
  
    // increementCount = () => {
    //     this.setState( prevState => {
    //         return {
    //             count: prevState.count + 1
    //         }
    //     })
    // }
  render() {
    //const { count } = this.state 

    const {count, increementCount} = this.props
    return (
      // everytime you hover on the heading the count increases 
     //<div onMouseOver={this.increementCount}>{this.props.name} Hover {count} times </div>

    <div onMouseOver={increementCount}>{this.props.name} Hover {count} times </div>
    )
  }
}

export default EnhancedComponent(HoverCounter)