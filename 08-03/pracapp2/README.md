### Hooks
when we want to implement any functionality, which was only in class based functionality, but we want to implement that in function based components, we use hooks.

#### Integrating redux with hooks 
redux library has provider hooks, to hook into functionalities of 

### 1. mapStateToProps - used to access store in class based components 
> to access redux store in function based components we have the useSelector hook
```bash 
import {useSelector} from 'react-redux'
```
> useSelector hooks gives access to redux store 
```bash 
import {useEffect, useState} from 'react'
import { useSelector } from 'react-redux';

function App() {
  const appCount = useSelector(callback)
  //useSelector passes entire function to callback immediately 

  //useSelector is a function which takes callback function as an argument which contains the reduxstore 

  //we can use the redux store object inside out component through useSelector 
  const callback = (reduxStore) => {
    return reduxStore.count
  }


  console.log('app count =', appCount)
  return (
    <div className="App">
      <header className="App-header">
       
      </header>
    </div>
  );
}

export default App;
```
> minimizing the useSelector hook using anonymous function 
```bash 
  //const appCount = useSelector(callback)
  // const callback = (reduxStore) => {
  //   return reduxStore.count
  // }

  //instead of these 2 lines of code we can write it ;like this 
  const appCount = useSelector((reduxStore) => {
    return reduxStore.count
  })
```

### 2. mapDispatchToProps (used in class based components)
> to dispatch actions in function based components we have the useDispatch hook
```bash 
import { useSelector, useDispatch } from 'react-redux';
```
> App.js 
```bash 
import {useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';

function App() {
  //const appCount = useSelector(callback)
  // const callback = (reduxStore) => {
  //   return reduxStore.count
  // }

  //instead of these 2 lines of code we can write it ;like this 
  const appCount = useSelector((reduxStore) => {
    return reduxStore.count
  })

  ✅for dispatching actions 
  const dispatch = useDispatch()
  // useDispatch() hook returns  a dispatch function 


  console.log('app count =', appCount)

  ✅const dispatchAction = () => {
    dispatch({type: 'INCREASE'})
    //inside dispatch were defining the action 
    //action has a type and a value 
  }

  return (
    <div className="App">
      <header className="App-header">
        ✅<button onClick={() => {
          dispatchAction()
        }}>dispatch</button>
      </header>
    </div>
  );
}

✅we dont need to connect like we did in class based components 
✅Pros: compact code 

export default App;
```
> reducer.js 
```bash 
const reducer = (state, action) => {
// check if state is undefined 
if(state === undefined){
    //intial state value when app is run 
    return {
        count: 0, 
        name: 'geek'
    }
    //this is the initial redux store object 
}

switch(action.type){
    case 'INCREASE':
        state.count = state.count + 1;
        console.log('reached reducer')
        break;
    
    default:
        break;
}
return {...state} 
// return new state object 
}

export default reducer
```
### Assignment 
- use this API with fetch 
- store the result in reduxStore and read from there and display all data 
- dont store any api data in your component state 

```bash 
instead of setting state, dispatch action with some payload
eg (api data)

save the payload in your redux store from your reducer 
```


