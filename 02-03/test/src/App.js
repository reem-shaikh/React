import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/Counter";
import { connect } from "react-redux";

class App extends Component {
  constructor() {
    super();
    this.state = {
      key: "0",
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <p>Total Balance is- {this.state.key}</p>
        <button onClick={() => {
              const value = this.props.someKey;
              this.setState({ key: value });
        }}>show balance</button>
          <Counter />
        </header>
      </div>
    );
  }
}

// map the state of redux to the props of your component
const mapStateToProps = (reduxStoreObject, currComponentProps) => {
  // console.log("reduxStoreObject - ", reduxStoreObject);
  const nameValue = reduxStoreObject.reduxCount;
  console.log({ nameValue });
  return {
    someKey: nameValue,
  };
};


export default connect(mapStateToProps, null)(App);