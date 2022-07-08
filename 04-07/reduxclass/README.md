# Redux in class based components 
- cannot be used with toolkit, only available for the old method 
- also mapdispatchtoprops and mapstatetoprops are deprecated. 

### code 
- create actions file
```bash
const INCREMENT = {
    type: "INCREMENT"
  };
  
  const DECREMENT = {
    type: "DECREMENT"
  };
  
  export {INCREMENT, DECREMENT};
```
- create reducers file 
```bash
const initialState = {
    counter: 0
  };
  
  const reducer = (state = initialState, action) => {
    switch(action.type) {
      case "INCREMENT":
        state.counter += 1;
        break;
      case "DECREMENT":
        state.counter -= 1;
        break;
      default:
        break;
    }
    return { ...state };
  }
  
  export default reducer;
```
- in App.js we import createStore() with reducer, we also pass the store object with Provider component 
```bash
import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import { useState, Suspense, lazy, useMemo } from 'react';
import Memo from './components/Memo';
import { createStore } from 'redux';
import reducer from './reducers';
import { Provider } from 'react-redux';
import Buttons from './components/Buttons';
import Counter from './components/Counter';

const store = createStore(reducer);

function App() {
  const [showComp, setShowComp] = useState(false);
  return (
    <Provider store={store}>
      <div className="App">
        <br />
        <Buttons />
        <Counter />
      </div>
    </Provider>
  );
}

export default App;
```
- we create Buttons.js and create 2 buttons for like and dislike. we created objects for each dispatch we need. we create mapdispatchtopops  (dispatchFn) which dispatches function which dispatches actions to the store. we specify connect method here, null first parameter. component to map goes in second parenthesis 
> Buttons.js
```bash
import React, { Component } from 'react'
import { DECREMENT, INCREMENT } from '../actions'
import { connect } from 'react-redux'

class Buttons extends Component {
  render() {
    return (
      <>
        <button onClick={this.props.increment}>👍🏻</button>
        <button onClick={this.props.decrement}>👎🏻</button>
      </>
    )
  }
}

#mapDispatchToProps 
const dispatchFn = (dispatch) => {
  return {
    increment: _ => dispatch(INCREMENT),
    decrement: _ => dispatch(DECREMENT)
  };
}

export default connect(null, dispatchFn)(Buttons);
```
- we create Counter.js where we specify <p></p> where count will be displayed. we create mapstatetoprops we named it as stateFn here, were retreiving the state from the redux store. we then export the connected component 
> Counter.js 
```bash
import React, { Component } from 'react'
import { connect } from 'react-redux';

class Counter extends Component {
  render() {
    return (
      <p>{this.props.counter}</p>
    )
  }
}

#mapStateToProps 
const stateFn = (state) => {
  return {
    counter: state.counter
  };
};

export default connect(stateFn, null)(Counter);
```

### Debouncing 
API calls are happening too fast. create callback function and send with a little timer
https://blog.logrocket.com/how-and-when-to-debounce-or-throttle-in-react/