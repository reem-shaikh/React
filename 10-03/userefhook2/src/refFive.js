import { useState, useEffect, useRef } from 'react'
//ref is used to store previous value of state 

//everu time the user inputs a value in input field 
//its current most value is stored inside prevName.current
//we update the state with the current most value 
//now name state is updated and the current most updated value shows up in {name}

//every time the app is rendered and name state is changed, then the previous state of name is stored inside {prevName.current}, whenever user types in the input field it updates the name state and its shown in {name} 
function RefFive() {
  const [name, setName] = useState('')
  const prevName = useRef('')

  //were storing previous value of state inside prevName variable
  useEffect(() => {
    prevName.current = name 
  }, [name])

  //we chose prevname to be a useRef instead of useState because useRef will persist/ store this value, while useState will re-render everytime which wont make it possible to retreive the old value 

  return (
    <>
    <h3>Ref Three</h3>
     <input value={name} onChange={e => setName(e.target.value)} />
     <div>{name} and previous name is {prevName.current}</div>

    </>
  )
}

export default RefFive