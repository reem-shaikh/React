import { useState, useEffect, useRef } from 'react'
//ref is used to store values and persist them across re-renders
//ref is commonly used to reference input elements  
function RefFour() {
  //When you update the state, you cause the component to rre-render 
  const [name, setName] = useState('')
  const inputRef = useRef()

  function focus(){
      console.log(inputRef.current)
      //it targets the input field using focus 
      inputRef.current.focus()
      //it updates the value of the state name 
      inputRef.current.value = 'some value'
  }
  return (
    <>
    <h3>Ref Three</h3>
     <input ref={inputRef} value={name} onChange={e => setName(e.target.value)} />
     <div>{name}</div>

     <button onClick={focus}>Focus</button>

    </>
  )
}

export default RefFour