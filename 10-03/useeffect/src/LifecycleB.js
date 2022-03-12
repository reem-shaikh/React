import React, { Component } from 'react'

class LifecycleB extends Component {
  //rconst
  constructor(props) {
    super(props)
  
    this.state = {
       name: 'reem'
    }
    console.log('lifecycleB constructor')
  }

//   static getDerivedStateFromProps(props, state) {
//       console.log('lifecyleB getderivedsttaefromprops')
//       return null
//   }

componentDidMount(){
    console.log('lifecyleB componentDidmount')
}


// shouldComponentUpdate(){
//     console.log('lifecyleB shouldcomponentUPDATE')
//     return true 
// }

// getSnapshotBeforeUpdate(prevProps, prevState) {
//     console.log('lifecycleB getsnapshotbeforeupdate')

//     return null
// }

componentDidUpdate(){
    console.log('lifecycleB componentDidupdate')
}

componentWillUnmount(){
    console.log('lifecycle B unmount')
}


  render() {
    console.log('lifecycleB render')
    return (
      <div>
          Lifecyle B
      </div>
    )
  }
}

export default LifecycleB