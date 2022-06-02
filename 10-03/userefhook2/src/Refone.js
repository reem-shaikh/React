import { useState, useRef } from 'react'

function Refone() {
  const [myNum, setMyNum] = useState(0)

  const inputOne = useRef()
  const inputTwo = useRef()

  const getNumBox = () => {
      console.log('hello')

  }

  const getTextBox = () => {
    console.log('hello')
}

  return (
    <div>
        <input 
         ref={inputOne}
         value={myNum}
         type='number'
         onChange={(e) => setMyNum(e.target.value)} />

        <input 
         ref={inputTwo}
         value={myNum}
         type='text'       
         onChange={(e) => setMyNum(e.target.value)} />

         <h3> {myNum} </h3>

         <button onClick={() => getNumBox()}>rupees</button>
         <button onClick={() => getTextBox()}>Dollars</button>
    </div>
  )
}

export default Refone