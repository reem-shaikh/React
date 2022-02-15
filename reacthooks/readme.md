### React Hooks 
Hooks are a special function that helps us hook into React features. 
> Hooks are a new addition in React 16.8. 

- If your write a function component and realize you need to add some state to it, previously you had to convert it to class. Now you can use a hook inside the existing function component. 

> useState hook allows to add state to functional components 
> App.js (when you click on the button, name changes from "ree" to "Reem Shaikh")
```bash 
import React, { useState } from 'react'
import "./App.css"

const App = () => {
  let val = 'ree'

  // this is the iniital state 
  // it creates a useState object which contains the value ree 
  console.log(useState('ree'))

  // cuurent value, updated value 
  const [myName, setMyName]=useState('ree')

  const changeName = () => {
    // to change state inside function you need to use useState hook
    // val = "reem"
    // console.log('inside', val)

    setMyName('Reem Shaikh')
  }
  console.log('ouside', val)

  return (
    //including JS inside HTML - JSX

    <div>
      {/*<h1>{val}</h1> */}
      <h1>{myName}</h1>
      <button className='btn' onClick={changeName}>click me</button>
    </div>
  )
}

export default App

console:
(2) ['ree', ƒ]
App.js:20 ouside ree
```
> the problem with this approach was that, on clicking the button it changed the value, however if we wanted to go back to the previous value "ree" then we'd have to refresh the page, we need to now acheive toggling. 

### How to toggle the Data onClick using Hook 
> App.js 
```bash 
import React, { useState } from 'react'
import "./App.css"

const App = () => {
  let val;

  //this is the iniital state 
  console.log(useState('ree'))

  //cuurent value, updated value 
  const [myName, setMyName]=useState('ree')

  const changeName = () => {
    let val = myName;

    // if(val === 'ree'){
    //   setMyName('Reem Shaikh')
    // } else {
    //   setMyName('ree')
    // }

    (val === 'ree') ? setMyName('Reem Shaikh') : setMyName('ree')

  }
  console.log('ouside', val)

  return (
    //including JS inside HTML - JSX

    <div>
      {/*<h1>{val}</h1> */}
      <h1>{myName}</h1>
      <button className='btn' onClick={changeName}>click me</button>
    </div>
  )
}

export default App
```
### React Hook Rules 
1. Always write hook inside component or function (you cant write inside return)
2. component must always be in pascal case convention (first letter capital)
3. We can directly import useState 
> RuleHook.js
```bash 
import React, {useState} from 'react'

const RuleHook = () => {
  const [myName, setMyName] = useState('ree')
  return (
    <div> {myName} </div>
  )
}

export default RuleHook
```
- App.js 
```bash 
import React, { useState } from 'react'
import "./App.css"
import RuleHook from './component/RuleHook'

const App = () => {

  return (
    <div>
      <RuleHook></RuleHook>
    </div>
  )
}

export default App
```
- or if we want to use it only once we can write it as
> RuleHook.js
```bash 
import React from 'react'

const RuleHook = () => {
  const [myName, setMyName] = React.useState('ree')
  return (
    <div> {myName} </div>
  )
}

export default RuleHook
```
4. you cant call the complete hook inside loops / conditions / nested functions 
> RuleHook.js
```bash 
import React from 'react'

const RuleHook = () => {
❌if(true) {
  const [myName, setMyName] = React.useState('ree')
  //however you can call setMyName (function) inside conditionals 
  }

  return (
    <div> {myName} </div>
  )
}

export default RuleHook
```
### How to work with Arrays using useState hook 
when you click on clear it removes the element from the dom 

> UseStateArray.js
```bash 
import React, {useState} from 'react'

const UseStateArray = () => {
  const bioData = [
      {
          id:0, myName:"reem"
      }, 
      {
          id:1, myName:"resin"
      }
  ]
  console.log('array', bioData)

  const [myArray, setmyArray] = useState(bioData)

  const clearArray = () => {
      setmyArray([]);
  }

  return (
    <div>
        {
          myArray.map((currElem) => {
            return <h1 className='h1style' key={currElem.id}>Name: {currElem.myName} </h1>
          })
        }
        <button className='btn' onClick={clearArray}>clear</button>
    </div>
  )
}

export default UseStateArray
```
> App.js 
```bash 
import logo from './logo.svg';
import './App.css';
import UseStateArray from './component/UseStateArray';

function App() {
  return (
    <div className="App">
      <UseStateArray></UseStateArray>
    </div>
  );
}

export default App;
```
![](images/1.PNG)