import React from 'react'
import setNameContext from '../SetNameContext'

const ChildD = () => {
  return (
  //we are sharing (function) data from any component to any other component, not necessarily from parent to child component 
  //Lifting state from ChildD to App.js and then the state is passed as props to Child4.js directly through context API 
  <setNameContext.Consumer>
    {param => {
      return (
        <div>
          <input type='text' onKeyUp={(e => param(e.target.value))} />
        </div>
      )
    }}
  </setNameContext.Consumer>
  )
}

export default ChildD