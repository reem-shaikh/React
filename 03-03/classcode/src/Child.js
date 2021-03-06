import React, { Component } from "react";
import "./App.css";

import { connect } from "react-redux";
import { someActionFn } from "./actions/action";

class Child extends Component {
  constructor(props) {
    super(props);
    this.state = {
      childName: "",
    };
  }

  handleChange = (e) => {
    const value = e.target.value;
    this.setState({ childName: value });
  };

  render() {
    console.log("child render - ", this.props);
    console.log("child render - ", this.state.childName);
    return (
      <div className="App">
        <header className="App-header">
          this is the child component -{this.props.name}
          {/* controlled component */}
          <input value={this.state.childName} onChange={this.handleChange} />
           {/* when you clcik on the button it will call geekdispatch which is returned from mapDispatchToProps*/}
          <button onClick={() => this.props.geekDispatch(this.state.childName)}>
            submit
          </button>
        </header>
      </div>
    );
  }
}

// read from redux store and access through props 
const mapStateToProps = (reduxStoreObject, currComponentProps) => {
  const name = reduxStoreObject.name;
  return {
    name,
  };
};


// this function gives access to dispatch function 
const mapDispatchToProps = (dispatch, props) => {
  const dispatchActionFromChild = (newName) => {
    // const actionObj = {
    //   type: "CHANGE_NAME",
    //   payload: newName,
    // };
    // dispatch(actionObj);

    
    //whenever you send any data to reducer you send it through payload key 

    dispatch(someActionFn(newName));
  };

  return {
    geekDispatch: dispatchActionFromChild,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Child);