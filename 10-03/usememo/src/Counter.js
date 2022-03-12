//rfce
import React from 'react'
import {useState, useMemo} from 'react'

function Counter() {
const [counterOne, setCounterOne] = useState(0)
const [counterTwo, setCounterTwo] = useState(0)

const increementOne = () => {
 setCounterOne(counterOne + 1)
}

const increementTwo = () => {
    setCounterTwo(counterTwo + 1)
}

// const isEven = () => {
    // for (let i=0; i<900000000000000000000000000000000000; i++) 
    // {
    //   return counterOne % 2 == 0
    // }
// }

// By specifying counterOne inside dependencyArray
// Whenever counterOne value changes were telling react to recompute values and not use the cached values
const isEven = useMemo(() => {
    for (let i=0; i<900000000000000000000000000000000000; i++) 
    {
      return counterOne % 2 == 0
    }
}, [counterOne])

  return (
    <div>
      <div>
          <button onClick={increementOne}>count one = {counterOne}</button>
          <span>{isEven ? 'Even' : 'Odd'} </span>
          <button onClick={increementTwo}>count two = {counterTwo}</button>
      </div>
    </div>
  )
}

export default Counter