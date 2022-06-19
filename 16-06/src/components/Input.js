//we'll useDispatch to set the value here 

//create dispatch object 
//specify what to dispatch 

//import React, { useContext } from 'react'
import { useDispatch } from 'react-redux';
import { setFirstName, setLastName } from '../Actions';

//in this component were dispatching a couple actions 
const Input = () => {
  const dispatch = useDispatch();
  
  return (
    <div>
      <input type="text" onKeyUp={e => dispatch(setFirstName(e.target.value))} />
      <input type="text" onKeyUp={e => dispatch(setLastName(e.target.value))} />
    </div>
  )
}

export default Input