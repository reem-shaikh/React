//rafce
import React from 'react'

const RuleHook = () => {
  const [myName, setMyName] = React.useState('ree')
  return (
    <div> {myName} </div>
  )
}

export default RuleHook