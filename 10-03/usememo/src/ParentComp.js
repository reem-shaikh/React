//rce
import React, { Component } from 'react'
import PureComp from './PureComp'
import RegularComp from './RegularComp'

class ParentComp extends Component {
  constructor(props){
      super(props)

      this.state = {
          name: 'reem'
      }
  }

  componentDidMount(){
      setInterval(() => {
        //setting state inside the setinterval 
        this.setState({
            name: 'reem'
        })
      }, 2000)
  }
  render() {
    console.log('parent component')
    return (
    <div>
      <div>Parent Comp</div>
      <RegularComp name={this.state.name}></RegularComp>
      <PureComp name={this.state.name}></PureComp>
    </div>
    )
  }
}

export default ParentComp