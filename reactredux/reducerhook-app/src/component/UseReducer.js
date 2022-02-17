import React, {useReducer} from 'react'

const initialState = 0 

// reducer function - defined here 
// takes 2 arguments: current sttae and action method 
const reducer = (state, action) => {
  console.log('state',state)
  console.log('action', action)

  if(action.type === 'INCREEMENT'){
    return state + 1
  } 

  if(action.type === 'DECREEMENT'){
    return state - 1
  } 

    //reducer always needs to return 
  return state 
}

const UseReducer = () => {
  //const [count, setCount] = useState(0)

  //useReducer is just like useState 
  //takes 2 arguments: reducer function, initial state 
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <>
    <div>
        <p>{state}</p>
        <div className='btn'>
          {/* once product is dispatched, it is then on the way to reach its destination
          
          dispatch: is used to trigger the action method (that is an argumnet of the reducer function*/}
            <button onClick={() => dispatch({type: 'INCREEMENT'})}>Inc</button>
            <button onClick={() => dispatch({type: 'DECREEMENT'})}>Dec</button>
        </div>
    </div>
    </>
  )
}

export default UseReducer