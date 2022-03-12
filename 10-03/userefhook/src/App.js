import React, {useEffect, useState, useRef} from 'react'


export default function App() {

  const inputRef = useRef(null)

  const uncontrolled = () => {
     console.log(inputRef.current.value)
  }

  return (
    <div>
      <input type="text" ref={inputRef} />

        <button onClick={uncontrolled}>uncontrolled</button>
    </div>
  )
}

