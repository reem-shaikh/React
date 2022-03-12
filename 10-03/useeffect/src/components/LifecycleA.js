import React, { Component } from 'react'
import LifecycleB from '../LifecycleB'

class LifecycleA extends Component {
  //rconst
  constructor(props) {
    super(props)
  
    this.state = {
       name: 'reem',
       show: false,
    }
    console.log('lifecycle A constructor')
  }

//   static getDerivedStateFromProps(props, state) {
//       console.log('lifecyleA getderivedsttaefromprops')
//       return null
//   }

  componentDidMount(){
      console.log('lifecyleA componentDidmount')
  }

//   shouldComponentUpdate(){
//       console.log('lifecyleA shouldcomponentUPDATE')
//       return true 
//   }

//   getSnapshotBeforeUpdate(prevProps, prevState) {
//       console.log('lifecycleA getsnapshotbeforeupdate')

//       return null
//   }

  componentDidUpdate(){
      console.log('lifecycleA componentDidupdate')
  }

  
componentWillUnmount(){
    console.log('lifecycle A unmount')
}

  changeState = () => {
      this.setState({
          name: 'rum'
      })
  }

  render() {
    console.log('lifecyce a render')
    return (
      <div>
          Lifecyle A: {this.state.name}
          <button onClick={this.changeState}>change state</button>
          <button onClick={() => {
              this.setState({
                show: !this.state.show
              })
          }}>toggle child</button>
          {this.state.show? <LifecycleB/> : null}
      </div>
    )
  }
}

export default LifecycleA