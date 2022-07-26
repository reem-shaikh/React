import React from 'react'

function Button({ handleClick, children }) {
  console.log('Rendering button - ', children)
  return (
    <button onClick={handleClick}>
      {children}
    </button>
  )
}
// we wrap components in react.memo for usecallback to work
//components will now re-render only when there is a change in the props 
//these are now optmized child components 
export default React.memo(Button)