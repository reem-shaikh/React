import { useState, useEffect } from 'react'

function RefTwo() {
  //When you update the state, you cause the component to rre-render 
  const [name, setName] = useState('')
  const [renderCount, setRenderCount] = useState(0)

  useEffect(() => {
      setRenderCount(prevRenderCount => 
        prevRenderCount + 1)
  })

  return (
    <>
    <h1>Ref Two</h1>
     <input value={name} onChange={e => setName(e.target.value)} />
     <div>{name}</div>
     <div>I rendered: {renderCount} times</div>
    </>
  )
}

export default RefTwo