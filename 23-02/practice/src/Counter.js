import React, { Component } from 'react'

class Counter extends React.Component {
    constructor(props) {
      console.log('constructor - child')
      super(props);
      this.state = {
        name: "geek",
      };
    }
  
    componentDidMount() {
      console.log("child - componentDidMount");
    }
  
    componentWillUnmount() {
      // polymorphism
      // called when component is being unmounted/removed from screen
      console.log("unmounting!!!!");
    }
  
    componentDidUpdate(prevProps, prevState) {
      console.log("prevProps - ", prevProps.value);
      console.log("pre state - ", prevState);
      console.log("current prop is - ", this.props.value);
      // runs when either state OR props is changed
      console.log("child - UPDATE");
      document.getElementById("update").innerText = prevProps.value;
      // this.setState({ name: "abhishek" });
    }
  
  
    render() {
      console.log("render method - child ");
      return (
        <div>
          {/* Counter component - {this.props.value} */}
          Counter component - {this.props.value}
          
          <button onClick={this.props.changeParent}>change parent from child</button>


        </div>
      );
    }
  }

  export default Counter 