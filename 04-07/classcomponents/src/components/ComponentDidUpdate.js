import React, { Component } from 'react'
import Child2 from './Child2'
export default class ComponentDidUpdate extends Component {

  constructor(props) {
    super(props)

    console.log('props', props.name)
  
    this.state = {
       counter: 0
    }
  }
  
  shouldComponentUpdate(){
    return true
  }

  // you'll need to use getSnapshot method with componentdidupdate method
  //in this method you can manipulate the counter state in the console 
  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('prevprop snapshot', prevProps.name)
    console.log('propname', this.props.name)
    console.log('snapshot prevstate', prevState)
    return prevState.counter*10
  }

  componentDidUpdate(prevProps, prevState, snapShot){
    console.log('component updated')

    //specifies the previous state 
    console.log('prev state', prevState)
    //specifies the current state 
    console.log('current state', this.state)
    //prevProps specifies what prop is passed 
    console.log('prevprops', prevProps)
    console.log('snapshot', snapShot)

    // if(prevState.counter === this.state.counter) {
    //     console.log('matched')
    // }

    // do not use setState in this method without any condition, if thats done it will go in an infinite loop condition 

    //this runs around 0,1,2 times updating the state till 3 
    // if(prevState.counter < 3){
    //     this.setState({counter: this.state.counter+1})}
    }

  render() {
    console.log('render')
    return (
      <>
      {/* but the button also has another setState attached to it, so it updates the state by 1 here */}
       <button onClick={() => {this.setState({counter: this.state.counter+1})}}>{this.state.counter}</button>
      </>
    )
  }
}
