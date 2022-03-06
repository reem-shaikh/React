### Review of this code 
> functionality of this app 
```bash 
we create 2 components, with same functionality in both and both are linked to the same redux store

Whenever user enter something in the input field, and hit on submit the reduxStoreObject is updated

We link the reduxStoreObject on our app through the function mapStateToProps 
```
> App.js 
```bash 
import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { connect } from "react-redux";
import Child from "./Child";
import ChildTwo from "./ChildTwo";

class App extends Component {
  render() {
    console.log("app comp - ", this.props);
    return (
      <div className="App">
        <header className="App-header">
          <p>parent component- {this.props.someKey}</p>
          <Child age="99" />
          <ChildTwo />
        </header>
      </div>
    );
  }
}

✅Note that: the App has its own mapStateToProps as well as mapDispatchToProps function

// maps the state of redux to the props of your component, in our case App.js 
const mapStateToProps = (reduxStoreObject, currComponentProps) => {
  // console.log("reduxStoreObject - ", reduxStoreObject);
  const nameValue = reduxStoreObject.name;
  // console.log({ nameValue });

  ✅were getting this from the state "name" defined inside reducer.js 
  return {
    someKey: nameValue,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    abhishek: "geekgeek",
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
```
> Child.js 
```bash 
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

✅whenever we enter a value in input field onChange function is triggered, and childName state is updated.
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
           {/* when you click on the button it will call geekdispatch which is returned from mapDispatchToProps*/}

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
```
> action.js 
```bash 
const someActionFn = (someName) => {
    return {
      type: "CHANGE_NAME",
      payload: someName,
    };
  };
  
  export { someActionFn };
```
> now were, going to be adding Child2 component, Note that: when we enter a value in the input field of childTwo input field, and hit on submit, it updates all the values from Child component as well, because both these Child and Child2 components are linked to the same redux store. 

> ChildTwo.js 
```bash 
import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";

class ChildTwo extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          this is the child 2 component -{this.props.name}
          <input placeholder="child 2" />
          <button onClick={() => {}}>submit</button>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (reduxStoreObject, currComponentProps) => {
  const name = reduxStoreObject.name;
  return {
    name,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  const dispatchActionFromChild = (newName) => {
    const actionObj = {
      type: "CHANGE_NAME",
      payload: newName,
    };
    dispatch(actionObj);
  };

  return {
    geekDispatch: dispatchActionFromChild,
  };
};

export default connect(mapStateToProps, null)(ChildTwo);
```
> index.js 
```bash 
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.render(
  <React.StrictMode>
  {/* prop name is fixed, prop value can be changed */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
```
#### Assignment 
- finish the requirement when you click on submit of "child 2" the value from input of child 2 should be added (concat) to the redux state name
> ChildTwo.js 
```bash 
import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";

class ChildTwo extends Component {
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
    // console.log("child render - ", this.props);
    // console.log("child render - ", this.state.childName);
    return (
      <div className="App">
        <header className="App-header">
          this is the child 2 component -{this.props.name}
          <input value={this.state.childName} onChange={this.handleChange} />
          <button onClick={() => this.props.geekDispatch(this.state.childName)}>submit</button>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (reduxStoreObject, currComponentProps) => {
  const name = reduxStoreObject.name;
  return {
    name,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  const dispatchActionFromChild = (newName) => {
    const actionObj = {
      type: "CHANGE_NAME2",
      payload: newName,
    };
    dispatch(actionObj);
  };

  return {
    geekDispatch: dispatchActionFromChild,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChildTwo);
```
> reducer.js 
```bash 
const reducer = (state, action) => {
    if (state === undefined) {
      return {
        name: "geekster",
      };
    }

  
    switch (action.type) {
      case "CHANGE_NAME":
        console.log("i have reached reducer - switch statement");
        state.name = action.payload;
        break;

      case "CHANGE_NAME2":
        console.log('2')
          state.name = state.name + action.payload;
          break;
  
      default:
        break;
    }
  
    return { ...state };
  };
  export default reducer;
```