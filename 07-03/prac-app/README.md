#### Why class components when we can use functional components instead?
- functional components are stateless, states and lifecycle methods were only posibble for class based components. 
- however we can have state and lifecyle methods inside functional components using react hooks (they let you hook into functionalities of class based components into functional based components)
- Class based components have more lines with code.

#### react hooks
functions which helps us hook into functionalities 

#### 1. useState()
useState returns data and a function to change that data 
> App.js
```bash 
✅import React, {useState} from 'react'
import './App.css';

function App() {

  const resultArr = useState(22)
# useState returns actual data and function to change it 
  const count = resultArr[0]
# actual data 

  const changeCount = resultArr[1]
# function used to change state 

  return (
    <div className="App">
      <header className="App-header">
      <h1>useState</h1>
      </header>
    </div>
  );
}

export default App;
```
> changing state using useState method?
> App.js 
```bash 
import React, {useState} from 'react'
import './App.css';

function App() {

  const resultArr = useState(22)
# useState returns actual data and function to change it 
  const count = resultArr[0]
# actual data 

  const changeCount = resultArr[1]
# function used to change state 

  const increase = () => {
# changeCount is the new value of count function
    changeCount(20)
# the value of count is now 20 
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>useState</h1>
        {count}
        <button onClick={() => increase()}>Inc</button>
      </header>
    </div>
  );
}

view:
when you click on the button, component is re-rendered, count value is updated from 22 to 20 
```
> Increase and decrease counter using state 
```bash
import React, {useState} from 'react'
import './App.css';

function App() {

  const resultArr = useState(0)
  //useState returns actual data and function to change it 
  const count = resultArr[0]
  // actual data 

  const changeCount = resultArr[1]
  // function used to change state 

  const increase = () => {
    // changeCount is the new value of count function
    changeCount(count + 1)

  }

  const decrease = () => {
    // changeCount is the new value of count function
    changeCount(count - 1)

  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>useState</h1>
        {count}
        <button onClick={() => increase()}>Inc</button>
        <button onClick={() => decrease()}>Dec</button>
      </header>
    </div>
  );
}

export default App;
```
> using array destructuring
```bash 
import React, {useState} from 'react'
import './App.css';

function App() {

  // instead of these 3 lines of code, we can use array destructuring 
  // const resultArr = useState(0)
  // const count = resultArr[0]
  // const changeCount = resultArr[1]

  // array destructuring 
  ✅const [count, changeCount] = useState(0)


  const increase = () => {
    // changeCount is the new value of count function
    changeCount(count + 1)

  }

  const decrease = () => {
    // changeCount is the new value of count function
    changeCount(count - 1)

  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>useState</h1>
        {count}
        <button onClick={() => increase()}>Inc</button>
        <button onClick={() => decrease()}>Dec</button>
      </header>
    </div>
  );
}

export default App;
```
##### use setCount instead of changeCount, its the naming convention 
> App.js 
```bash 
import React, {useState} from 'react'
import './App.css';

function App() {

  // array destructuring 
  const [count, setCount] = useState(0)
  const [name, setName] = useState('geek')

  constructor(){
    this.state = {
      count: 22,
      name: 'geek'
    }
  }

  const increase = () => {
    // setCount is the new value of count function
    setCount(count + 1)
    setName('reem')

  }

  const decrease = () => {
    // setCount is the new value of count function
    setCount(count - 1)

  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>useState</h1>
        {count} {name}
        <button onClick={() => increase()}>Inc</button>
        <button onClick={() => decrease()}>Dec</button>
      </header>
    </div>
  );
}

export default App;
```
