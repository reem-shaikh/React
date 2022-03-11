import logo from './logo.svg';
import './App.css';
import {React, useState, useMemo, useRef, useEffect, useContext, useCallback} from 'react';
import Todos from './Todos';
import AppContext from './AppContext';

function App() {

  const [count, setCount] = useState(4)
  const [todos, setTodos] = useState([])
  const resultofExFn = useMemo(() => expensiveFn(count), [count])
 
  //create ref
  const geekRef = useRef(0)
  //useref can take an argumnent 

  const contextValue = useContext(AppContext)
  console.log('contextvalue',contextValue)
  //argument to use context from where you want to read the data from

  //on loading of page, focus on input field 
  useEffect(() => {
    geekRef.current.focus()
    //geekRef is an object which has current property

    //any function defined inside useeffect must be defined inside dependency array
    printCount()
  }, [printCount])

  // const printCount = () => {
  //   console.log('princount')
  // }

  const printCount = useCallback(() => {
    console.log('princount', count)
    setCount(count + 1)
  }, [])

  //const increase = useCallback(() => {}, [])

  const increase = () => {
    setCount(count + 1)
  }

  const addTodo = () => {
    setTodos((prevTodos) => [...prevTodos, "some new task"])
  }

  return (
    <div className="App">
      <header className="App-header">
        {/* were printing the result that is stored inside resultToExFn */}
        geekster = {resultofExFn}

        {/* NOTE THAT: ref is an attribute */}
        <input ref={geekRef}/>

        <Todos todos={todos} addtodo={addTodo}/>

        <p>count: {count}</p>
        <button onClick={increase}>count</button>
      </header>
    </div>
  );
}

const expensiveFn = (num) => {
  // let num = 0
  for(let i=0; i<100000; i++){
    num= num + i 
  }
  return num
}

export default App;
