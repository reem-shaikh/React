import React, { Component } from 'react'
//if we didnt import Component here, then we need to write this instead class Comp1 extends React.Component

//any class Comp1 is a typical ES6 class, to add certain features we need to inherit and overrirde its functionality 
//we are inheritaating functionalities from base class Component
class Comp1 extends Component {
//any class that you make will have a render() function 

//constructor used to initialize state 
//call parents constructor() using super() - to ensure previous functionality works 
//props is an object
constructor(props){
    super();
    //these props can be assigned to something 
    //this.text = props.text
}

  btnClick(){
        console.log('button clicked')
    }
  render() {
    return (
      <>
      {/* to access anything in class based components you'll need the this keyword */}
      <h1>{this.props.text}</h1>
      <button onClick={this.btnClick}>click me</button>
      </>
    )
  }
}

export default Comp1