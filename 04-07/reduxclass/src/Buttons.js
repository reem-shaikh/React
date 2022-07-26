import React, { Component } from "react";
import { DECREMENT, INCREMENT } from "./counterSlice";
import { connect } from "react-redux";

class Buttons extends Component {
  render() {
    return (
      <>
        <button onClick={this.props.increment}>like</button>
        <button onClick={this.props.decrement}>unlike</button>
      </>
    );
  }
}

//mapDispatchToProps
const mapDispatchToProps = (dispatch) => {
  return {
    increment: (_) => dispatch(INCREMENT),
    decrement: (_) => dispatch(DECREMENT)
  };
};

export default connect(null, mapDispatchToProps)(Buttons);
