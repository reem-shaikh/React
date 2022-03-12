
import './App.css';
import {useState, useEffect} from 'react'

const App = () => {
  const [num, setNum] = useState(0)
  const [nums, setNums] = useState(0)

  useEffect(() => {
  console.log('we unmounted')
    //useffect provides a cleanup function 
    return () => {

    }
  }, [])

  return (
  <>
    <button onClick={() => {
      setNum(num + 1)
    }}>click me {num} </button>

    <br></br>

    <button onClick={() => {
      setNums(nums + 1)
    }}>click me {nums} </button>

  </>
  )}

export default App;
