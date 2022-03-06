### Steps to create a Redux App 
#### I. Biuld a boiler plate for redux 
1. Install redux and react-redux libraries from terminal in the repo your going to be working in 
```bash 
npm i redux react-redux
```
2. Create a redux store 
> src/reduxStore.js 
```bash 
import reducer from "./reducers/reducer";
import { createStore } from "redux";

const store = createStore(reducer);

export default store;
```
> Note that: createStore() function holds the reducer as an argument, let's now build the reducer component 

2. Create a reducer 
> reducers/reducer.js 
```bash 
const reducer = (state, action) => {
    // before an action is dispatched to the reducer, the initial value of reduxCount variable is 0 
    if (state === undefined) {
      return {
        reduxCount: 0,
      };
    }
  
    return { };
    // return an empty state object 
  };
  
  export default reducer;
```
#### Action specifies what to do, Reducers define how to do 
> Note that: actions are encapsulated inside dispatch function (which triggers the action), whenever an action is dispatched, it is recieved at the reducer.

3. Create an action 
> actions/action.js
```bash 
// initially the action is empty 
```

4. Define the component 
> components/Counter.js 
```bash 
import React, { Component } from "react";
import { connect } from "react-redux";
import { increaseActionFn, decreaseAction } from "../actions/action";

class Counter extends Component {
  constructor() {
    super();
    // state for tracking the count will be defined here 
  }

  // functions will be defined here 

  render() {
    return (
      <div>
          // button to increase 
          // an input field which shows the count 
          // button to decrease 
      </div>
    );
  }
}

// these two functions are given to us by redux 
// these are defined outside the component 
// it contains 2 arguments, which we dont have to import, redux internaly gives access to these functions 


// mapStateToProps
// we can read the reduxstoreobject (which is passed from the reduxstore) to this function and pass it as props to the connected component 
const mapStateToProps = (reduxStoreObject, props) => {

  return {

  };
};

// mapDispatchToProps 
// this function can take props and pass it to the connected component, it can also update props of the connected component 
// this function dispatches action to the reducer function 
const mapDispatchToProps = (dispatch, props) => {

  return {

  };
};

// this line of code connects these 2 functions provided by redux to the connected componet i.e Counter.js 
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
```
5. Wrap the App alone with store object as props inside the Provider and pass the reduxStoreObject to App.js which contains the Counter.js component 
```bash 
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import store from './store'
// importing Provider component from react-redux library 
import {Provider} from 'react-redux'

ReactDOM.render(
  <React.StrictMode>
         {/* wrap app inside Provider */}
     <Provider store={store}>
       <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
```
#### 2. Create a Counter redux app 
> Now your ready to create your very first redux app using mapStateToProps and mapDispatchToProps. Here is the functionality we'll be implementing in the App 
1. when the user clicks on increase button, counter increases by 1 
2. when user enters a value in the input field, and clicks on decrease, the value in input field gets decreased by the number we entered 

> components/Counter.js 
```bash 
import React, { Component } from "react";
import { connect } from "react-redux";
import { increaseActionFn, decreaseAction } from "../actions/action";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      amount: 0,
    };
  }

  dispatchIncrease = () => {
    this.props.inc();
  };


  // since were going to decrease the counter by a particular value 
  dispatchDecrease = () => {
    this.props.dec(this.state.amount);
  };

  render() {
    return (
      <div>
        <button onClick={this.dispatchDecrease}>decrease</button>

        // changing the state based on the current value 
        <input
          value={this.state.amount}
          onChange={(e) => this.setState({ amount: e.target.value })}
        />

        <button onClick={this.dispatchIncrease}>increase</button>
      </div>
    );
  }
}

// we can access the reduxstoreObject in this function 
const mapStateToProps = (reduxStoreObject, props) => {
  console.log("reduxStoreObject- ", reduxStoreObject);

  return {
    
  };
};

const mapDispatchToProps = (dispatch, props) => {
  
  // creating action objects for both inc and dec, wrapping it inside dispatch and calling it 
  const inc = () => {
    const increaseAction = {
       type: "INCREASE",
    };
    dispatch(increaseAction);
  };

  const dec = (Dyanamicamount) => {
    const decreaseAction = (amount) => {
        return {
        type: "DECREASE",
        amount: amount 
        }
    };
    dispatch(decreaseAction(Dyanamicamount));

  return {
    inc,    // = inc: inc
    dec,    // = dec: dec
   
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
```
> reducers/reducer.js 
```bash 
const reducer = (state, action) => {
    if (state === undefined) {
      // we defined a state, since redux is wrapped inside createStore()
      // reduxCount is a store object 

      return {
        reduxCount: 0,
      };
    }
  
    switch (action.type) {
      case "INCREASE": 
        state.reduxCount = state.reduxCount + 1;
        break;
      case "DECREASE":
        console.log("i have reached decrease reducer");
        state.reduxCount = state.reduxCount - action.amount;
        break;
      default:
        break;
    }
  
    // were using this for implementing deep copy 
    // such that, no 2 objects have the same value 
    return { ...state };
  };
  
  export default reducer;
```
> our app is almost done, we just have access the value from reduxStoreObject from mapStateToProps and pass it to our connected component, in the field where our counter values will be rendered.

> components/Counter.js 
```bash 
import React, { Component } from "react";
import { connect } from "react-redux";
import { increaseActionFn, decreaseAction } from "../actions/action";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      amount: 0,
    };
  }

  dispatchIncrease = () => {
    this.props.inc();
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

        ✅{this.props.geekCount}

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
  const inc = () => {
    const increaseAction = {
      type: "INCREASE",
    };
    dispatch(increaseAction);
  };

  const dec = (Dyanamicamount) => {
    const decreaseAction = (amount) => {
        return {
        type: "DECREASE",
        amount: amount 
        }
    };
    dispatch(decreaseAction(Dyanamicamount));

  return {
    inc, // = inc: inc
    dec, // = dec: dec
    name: "abhishek",
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
```
> instead of defining actions, inside the component itself we can create a new actions component 

> actions/action.js 
```bash 
const increaseActionFn = () => {
    return {
      type: "INCREASE",
    };
  };
  
  const decreaseAction = (amount) => {
    return { type: "DECREASE", amount: amount };
  };
  
  export { increaseActionFn, decreaseAction };
```
> components/Counter.js 
let's comment out the actions from here 
```bash 
import React, { Component } from "react";
import { connect } from "react-redux";
import { increaseActionFn, decreaseAction } from "../actions/action";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      amount: 0,
    };
  }

  dispatchIncrease = () => {
    this.props.inc();
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
  const inc = () => {
    // const increaseAction = {
    //   type: "INCREASE",
    // };
    dispatch(increaseActionFn());
  };

  const dec = (someDynamicAmount) => {
    dispatch(decreaseAction(someDynamicAmount));
  };

  return {
    inc, // = inc: inc
    dec, // = dec: dec
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
```
> Now let's try to acheive the same functionality on the INCREASE function 
> reducers/reducer.js 
```bash 
const reducer = (state, action) => {
    if (state === undefined) {
      return {
        reduxCount: 0,
      };
    }
  
    // if(action.type === "INCREASE"){
    // } else if(action.type === "DECREASE"){
    // }
  
    switch (action.type) {
      case "INCREASE": 
      // note that: by default + is considered as concatenation 
      // and action.amount is considered as string 
      // you need to convert it to parse Int 
      ✅state.reduxCount = parseInt(state.reduxCount) + parseInt(action.amount);
        break;
      case "DECREASE":
        console.log("i have reached decrease reducer");
        state.reduxCount = state.reduxCount - action.amount;
        break;
      default:
        break;
    }
  
    return { ...state };
  };
  
  export default reducer;
```
> components/Counter.js 
```bash 
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
```
> actions/action.js 
```bash 
const increaseAction = (amount) => {
    return {
    type: "INCREASE",
    amount: amount
    }
};

  const decreaseAction = (amount) => {
    return { 
        type: "DECREASE", 
        amount: amount 
    };
  };
  
  export { increaseAction, decreaseAction };
```