import React, { Component } from 'react'

export default class ComponentDidMount extends Component {
  constructor(props) {
    super(props)
    console.log('constructor')

    this.state = {
        data: 'false'
    }
  }

  componentDidMount(){
    console.log('componentDidMount')
    this.setState({data: 'true'})
  }

  render() {
    console.log('render')
    return (
      <>
       <h1>ComponentDidMount Life Cycle</h1>
      </>
    )
  }
}
