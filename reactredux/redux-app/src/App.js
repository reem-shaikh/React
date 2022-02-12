import React from 'react'
//rafc - react arrow function component 
import "./App.css"

//instead of consumer that we use with provider in contextapi, we use useSelector with provider in redux 
import { useSelector, useDispatch } from 'react-redux'
//dispatch triggers the action, basically we can use an action only with the help of dispatch 

//importing from action/index.js 
import {incNumber, decNumber} from "./actions/index.js"

 const App = () => {
   //components can get the data, that the provider sent at index.js through this line of code 
  const myState = useSelector((state)=> state.changeTheNumber)

  //declaring dispatch to use it 
  const dispatch = useDispatch()
  return (
    <>
    <div className="container">
      <h1>Increement / Deecreement counter</h1>
      <h4> Using React and Redux</h4>
      <div className="quantity">
        <a className="quantity_minus" title="Decreement" onClick={()=> {
            dispatch(decNumber())
        }}><span>-</span></a>
        {/* components are getting the state over here  */}
        <input name="quantity" type="text" className="quantity_input" value={myState} />
        <a className="quantity_plus" title="Increement" onClick={()=> {
            dispatch(incNumber(5))
        }}><span>+</span></a>
      </div>
    </div>
    </>
  )
}

export default App;