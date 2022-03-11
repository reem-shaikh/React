import logo from './logo.svg';
import './App.css';
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

  const name = useSelector((reduxStore) => {
    return reduxStore.name
  })

  //for dispatching actions 
  const dispatch = useDispatch()
  // useDispatch() hook returns  a dispatch function 


  console.log('reduxStore', appCount, name)

  const dispatchAction = () => {
    dispatch({type: 'INCREASE'})
    //inside dispatch were defining the action 
    //action has a type and a value 
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => {
          dispatchAction()
        }}>dispatch</button>
      </header>
    </div>
  );
}

export default App;
