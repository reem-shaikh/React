import React, { Component } from "react";
import { connect } from "react-redux";
import { increaseAction, decreaseAction } from "../actions/action";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      amount: 0,
    };
  }

  dispatchIncrease = () => {
    this.props.inc(this.state.amount);
  };

  dispatchDecrease = () => {
    this.props.dec(this.state.amount);
  };

  render() {
    return (
      <div>
        <button onClick={this.dispatchDecrease}>decrease</button>
        <input
          value={this.state.amount}
          onChange={(e) => this.setState({ amount: e.target.value })}
        />
        {/* {this.state.count} */}
        {this.props.geekCount}
        <button onClick={this.dispatchIncrease}>increase</button>
      </div>
    );
  }
}

const mapStateToProps = (reduxStoreObject, props) => {
  console.log("reduxStoreObject- ", reduxStoreObject);

  return {
    geekCount: reduxStoreObject.reduxCount,
  };
};

const mapDispatchToProps = (dispatch, props) => {
//   const inc = () => {
//     dispatch(increaseActionFn());
//   };

//   const dec = (someDynamicAmount) => {
//     dispatch(decreaseAction(someDynamicAmount));
//   };


// const inc = () => {
//     const increaseAction = {
//       type: "INCREASE",
//     };
//     dispatch(increaseAction);
//   };

const inc = (DDyanamicamount) => {
    // const increaseAction = (amount) => {
    //     return {
    //     type: "INCREASE",
    //     amount: amount 
    //     }
    // };
    dispatch(increaseAction(DDyanamicamount));
  };

  const dec = (Dyanamicamount) => {
    // const decreaseAction = (amount) => {
    //     return {
    //     type: "DECREASE",
    //     amount: amount 
    //     }
    // };
    dispatch(decreaseAction(Dyanamicamount));
  };

  return {
    inc, // = inc: inc
    dec, // = dec: dec
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

// connect(fn1, fn2)(Component);