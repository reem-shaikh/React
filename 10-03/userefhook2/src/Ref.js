import React from 'react'
import { useState, useEffect } from 'react'

const Ref = () => {
  const [myNum, setMyNum] = useState(0)

  const getNumBox = () => {
      console.log('hello')
  }

  const getTextBox = () => {
      console.log('hello')
  }

  return (
    <>
        <h2></h2>
        {/* whatever changes we make in the input box will be displayed in here */}
        <input 
         value={myNum}
         type='number'
         onChange={(e) => setMyNum(e.target.value)}  />

        <input 
         value={myNum}
         type='text' 
         onChange={(e) => setMyNum(e.target.value)} />
         <h3>Value is {myNum}</h3>

         <button onClick={() => getNumBox}>Rupees</button>
         <button onClick={() => getTextBox}>Dollars</button>
    </>
  )
}

export default Ref