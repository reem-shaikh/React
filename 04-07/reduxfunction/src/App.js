import React from 'react'
//rafc - react arrow function component (shortcut key)
import "./App.css"
// instead of consumer that we use with provider in contextapi, we use useSelector with provider (index.js) in redux 
import { useSelector, useDispatch } from 'react-redux'
//we imported react-redux dependency from terminal above, were importing its libraries useSelector and useDispatch over here
//dispatch triggers the action, basically we can use an action only with the help of dispatch
//importing from action/index.js 
import {incNumber, decNumber} from "./actions/index.js"
const App = () => {
   //components can get the data, that the provider sent from index.js through this line of code 
  const myState = useSelector((state)=> state.changeTheNumber)
//declaring dispatch to trigger the action 
  const dispatch = useDispatch()
return (
  <>
    <div className="container">
      <div className="quantity">
        <button className="quantity_minus" title="Decreement" 
          onClick= {()=> {
            dispatch(decNumber())
        }}><span>-</span></button>
{/* components are getting the state over here  */}
        <input name="quantity" 
               type="text" 
               className="quantity_input" 
               value={myState} />
       <button className="quantity_plus" 
         title="Increement" 
         onClick={()=> {
            dispatch(incNumber())}}><span>+</span>
       </button>
   </div>
 </div>
</>
  )
}
export default App;