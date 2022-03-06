import React, { Component } from "react";
import { connect } from "react-redux";
import { increaseAction, decreaseAction, displayAction } from "../actions/action";

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

  // balanceDisplay = (e) => {
  //   console.log('geekcount',this.props.geekCount)
  //   this.setState({ amount: e.target.value })
  //   this.props.dis(this.state.amount)
  
  // }

  render() {
    return (
      <div>
        <button onClick={this.dispatchDecrease}>withdrawal</button>
        <input
          value={this.state.amount}
          onChange={(e) => this.setState({ amount: e.target.value })}
        />
        {/* {this.state.count} */}
        {this.props.geekCount}
        {/* <button onClick={this.balanceDisplay}>check balance</button>  */}

        <button onClick={this.dispatchIncrease}>deposit</button>
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

  // const dis = (Dyanamicamount) => {
  //   // const displayAction = (amount) => {
  //   //     return {
  //   //     type: "DISPLAY",
  //   //     }
  //   // };
  //   dispatch(displayAction(Dyanamicamount));
  // };

  // const dispatchActionFromChild = (newName) => {
  //   const actionObj = {
  //     type: "DISPLAY",
  //     payload: newName,
  //   };
  //   dispatch(actionObj);

  // };

  return {
    inc, // = inc: inc
    dec, // = dec: dec
    // geekDispatch: dispatchActionFromChild,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

