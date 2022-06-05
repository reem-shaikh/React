import { useState, useEffect, useRef } from 'react'

function RefThree() {
  //When you update the state, you cause the component to rre-render 
  const [name, setName] = useState('')

  // however when you useRef it renders it only once 
  const renderCount = useRef(1)

  useEffect(() => {
    //   setRenderCount(prevRenderCount => 
    //     prevRenderCount + 1)
    renderCount.current = renderCount.current + 1
  })


  return (
    <>
    <h3>Ref Three</h3>
     <input value={name} onChange={e => setName(e.target.value)} />
     <div>{name}</div>
     <div>I rendered: {renderCount} times</div>


    </>
  )
}

export default RefThree