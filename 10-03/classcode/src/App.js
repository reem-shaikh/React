import logo from './logo.svg';
import './App.css';
import {React, useState, useMemo} from 'react';
import Todos from './Todos';

function App() {

  const [count, setCount] = useState(4)
  const [todos, setTodos] = useState([])

  // instead of re-running this function, the value of it is stored inside resultofExFn
  //const resultofExFn = expensiveFn()

  //Evertime component is re-rendered, it keeps re-rendering

  //we need to implement some feature known as usememo hook, where it stores the data of the function thats already called

  //it takes a callback and dependency array (even if anything change inside the array)
  const resultofExFn = useMemo(() => expensiveFn(count), [count])
  //function depends on count variable 
  //run this useMemo function everytime the count variable is changing 

  //note that count value increases rapidly, because this function is run once and value is stored, it not run again and again 

  //therefor performance increases drastically 

  //expensiveFn(count) is depended on the value of count 

  //what can we do when count changes a new expensive function will be run and a new value will be stored based on the new count, to acheive this pass count inside dependency array 

  //however, count will still take some time to increase its value 

  //so this is a compromise were making, addtodo works completely fine time interval
  //count is taking time every time we click on the button cs the value we pased is huge its like 1000000000000000

  const increase = () => {
    setCount(count + 1)
  }

  const addTodo = () => {
    setTodos((prevTodos) => [...prevTodos, "some new task"])
    //return array with previostodos and some new task

    //setTodos(todos.push('some new task"))
    //above statement is same as this code, its pushing a new element to the existing array 
  }

  return (
    <div className="App">
      <header className="App-header">
        {/* were printing the result that is stored inside resultToExFn */}
        geekster = {resultofExFn}

        <Todos todos={todos} addtodo={addTodo}/>

        <p>count: {count}</p>
        <button onClick={increase}>count</button>
      </header>
    </div>
  );
}

const expensiveFn = (num) => {
  // let num = 0
  for(let i=0; i<1000000; i++){
    num= num + i 
  }
  return num
}

export default App;