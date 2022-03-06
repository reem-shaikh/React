import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/Counter";
import { connect } from "react-redux";
import img1 from './img/graph.png'

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
        {/* 
        <p>Total Balance is- {this.state.key}</p>
        <button onClick={() => {
              const value = this.props.someKey;
              this.setState({ key: value });
        }}>show balance</button>
          <Counter /> 
        */}
	<div className="header">
		<div className="menu-icon-wrapper">
			<div className="dots-wrapper">
				<div className="light-dot"></div>
				<div className="dark-dot"></div>
			</div>
			<div className="dots-wrapper">
				<div className="dark-dot"></div>
				<div className="light-dot"></div>
			</div>
		</div>
		<h1>Bank Wallet</h1>
		<div className="calender-icon-wrapper">
			<svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 13a1 1 0 110-2 1 1 0 010 2zM8 17a1 1 0 110-2 1 1 0 010 2zM11 16a1 1 0 102 0 1 1 0 00-2 0zM16 17a1 1 0 110-2 1 1 0 010 2zM11 12a1 1 0 102 0 1 1 0 00-2 0zM16 13a1 1 0 110-2 1 1 0 010 2zM8 7a1 1 0 000 2h8a1 1 0 100-2H8z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M6 3a3 3 0 00-3 3v12a3 3 0 003 3h12a3 3 0 003-3V6a3 3 0 00-3-3H6zm12 2H6a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V6a1 1 0 00-1-1z" fill="currentColor"/></svg>
		</div>
	</div>

	<div className="balance-wrapper">
		<h3>TOTAL BALANCE</h3>
		<h1>{this.state.key} <span>USD</span></h1>
	</div>

	<div className="hr"></div>
	<div className="activity-wrapper">
		<h3>Check your total balance by clicking on show balance button </h3>
		<div className="expense-btn">
			{/* <h4>Total Balance</h4> */}
      <button onClick={() => {
              const value = this.props.someKey;
              this.setState({ key: value });
        }}>show balance</button>
		</div>
	</div>

	<div className="graph-wrapper">
		<img src={img1} alt="Graph" className="graph" />
		<div className="months-wrapper">
		
			<h3 id="active-month">NOV</h3>
			<h3>DEC</h3>
			<h3>JAN</h3>
		</div>
	</div>

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