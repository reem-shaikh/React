import React, {useEffect, useState, useRef} from 'react'

export default function App() {
  const [name, setName] = useState('')
  const [renderCount, setRenderCount] = useRef(0)

  //this function throws an infinite loop, state cause you get into an infinite loop 

  //useref doesnt cause your component to re-update when you cause a change 
  useEffect(() => {
    setRenderCount(renderCount + 1)
  })

  return (
    <>
      <input value={name} onChange={e => setName(e.target.value)}  />
      <div>My name is {name}</div>
      <div>I rendered {renderCount} times</div> 

    </>
  )
}
