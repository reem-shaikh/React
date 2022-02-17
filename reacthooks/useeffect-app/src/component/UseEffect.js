import React, {useState, useEffect} from 'react'

const UseEffect = () => {
  // whenver we use useState it re-renders our component 
  const [count, setCount] = useState(0)

  //useEffect will be called everytime the page reloads 
  useEffect(()=> {
      console.log('use effect')
      document.title = `chats (${count})`
  })
  console.log('outside')

  return (
    <div>
        <h1>{count}</h1>
        <button className='btn' onClick={()=> setCount(count + 1)}>click me</button>
    </div>
  )
}

export default UseEffect