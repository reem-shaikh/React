import React, { Component } from 'react';
import Child from './Child.js'

export default class Form extends Component {
  constructor(){
  super()

  this.state = {
    value: '',
    show: false
  }

  this.handleChange = this.handleChange.bind(this)
  this.handleSubmit = this.handleSubmit.bind(this)
}

//when user enters something in the input field, its value is fetched and re-assigned to statevalue 
handleChange(e){
    console.log('e', e)
    const {value} = e.target
    this.setState({value: value})
}

handleSubmit(e){
    e.preventDefault()
    //when user clicks on submit button, this.state.show becomes set to true 
    this.setState({show: !this.state.show})
    //when click is over, this.state.show is toggled back to false and this.state.statevalue dissapears becuase this.state.show is false now 
}
  render() {
    return (
        <form onSubmit={this.handleSubmit}>
            <input type="text" name="name" onChange={this.handleChange} />
            <button>submit</button>
            {/* when this.state.show === true then only print this value  */}
            {this.state.show === true && <Child value={this.state.value} />}
        </form>
    );
  }
}
