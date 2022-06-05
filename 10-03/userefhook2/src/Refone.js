import { useState, useRef } from 'react'

function Refone() {
  // useState is responsible for re-rendering the element 
  const [myNum, setMyNum] = useState(0)

  // useRef is designed to store the reference of the element 
  // after adding useRef to both the input fields 
  const inputOne = useRef()
  const inputTwo = useRef()

  const getNumBox = () => {
      console.log('hello')
      console.log(inputOne.current)
      // console:
      // <input type='number' value='7' style='width: 400px;'>

      console.log(inputOne.current.value)
      // 7

      // when we click on rupees button it adds this style to the reference
      inputOne.current.style.width = '400px'
 
  }

  const getTextBox = () => {
    console.log('hello')
    console.log(inputTwo.current)
    console.log(inputTwo.current.value)
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