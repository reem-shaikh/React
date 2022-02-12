import React, { Component } from "react";

export default class ChildOne extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return (
      <div>
        i am child 1 - {this.props.count}
        {/* when we click on this button, it changes all the components that have geekster function as a prop  */}

        {/* we are changing the state of the parent component from inside a child component */}
        <button onClick={this.props.geekster}>i am child one</button>
      </div>
    );
  }
}