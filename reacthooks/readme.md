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

### Handling objects using UseState Hooks 
Get data from an object using useState, when you click on update button, update the value 

> UseStateObject.js 
```bash 
import React, {useState} from 'react'

const UseStateObject = () => {
  const [myObject, setMyObject] = useState({
      myName: "reem",
      city:"mumbai"
  })
  //this object is defined inside myObject 

  const changeObject = () =>{
      setMyObject({myName: "Resin", city:"Mumbai"})
  }

  return (
    <>
     <h1 className='h1style'>Name: {myObject.myName} City:{myObject.city}</h1>
     <button className='btn' onClick={changeObject}>Update</button>
    </>
  )
}

export default UseStateObject
```
> App.js 
```bash 
import logo from './logo.svg';
import './App.css';
import UseStateObject from './component/UseStateObject';

function App() {
  return (
    <div className="App">
      <UseStateObject></UseStateObject>
    </div>
  );
}

export default App;
```
> before clicking on update button 
![](images/2.PNG)

> after clicking on update button 
![](images/3.PNG)

#### When we dont set a value for one of the objects when the update button is clicked, then the object field shows no value 
> UseStateObject.js 
```bash 
import React, {useState} from 'react'
//rafce

const UseStateObject = () => {
  const [myObject, setMyObject] = useState({
      myName: "reem",
      city:"mumbai"
  })
  //this object is defined inside myObject 

  const changeObject = () =>{
        setMyObject({myName: "Resin"})
        // When we dont set a value for one of the objects when the update button is clicked, then the object field shows no value 
  }

  return (
    <>
     <h1 className='h1style'>Name: {myObject.myName} City:{myObject.city}</h1>
     <button className='btn' onClick={changeObject}>Update</button>
    </>
  )
}

export default UseStateObject
```
> on clicking on the update button
![](images/4.PNG)

#### to only update one object value we use ternary operator (which is represented by ...)
> UseStateObject.js 
```bash 
import React, {useState} from 'react'

const UseStateObject = () => {
  const [myObject, setMyObject] = useState({
      myName: "reem",
      city:"mumbai"
  })
  //this object is defined inside myObject 

  const changeObject = () =>{
        setMyObject({...myObject, myName: "Resin"})
        // When we dont set a value for one of the objects when the update button is clicked, then the object field shows no value 
  }

  return (
    <>
     <h1 className='h1style'>Name: {myObject.myName} City:{myObject.city}</h1>
     <button className='btn' onClick={changeObject}>Update</button>
    </>
  )
}

export default UseStateObject
```
> Before clicking on update button 
![](images/2.PNG)

> After clicking on update button 
![](images/5.PNG)

#### To Do List 
remove individual elements on clicking on it 

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

  const clearArray = ()=> {
      setmyArray([]);
  }

  const removeElem = (id)=> {
    // when we click on the 0th index id to delete it 
    // it stores all the other index ids in a new array called myNewArray 
    // and we set the display to myNewArray 

      const myNewArray = myArray.filter((currElem) => {
          return currElem.id != id
      })

      setmyArray(myNewArray)
  }

  return (
    <>
        {
          myArray.map((currElem) => {
            return <h1 className='h1style' key={currElem.id}>Name: {currElem.myName} 
            {/* to ensure that onclick on buttton removeelem should run, we add the fat arrow functio, if we didnt add it, it would call the function removeElem by default */}
            <button className='btnInner' onClick={ () => removeElem(currElem.id)}>remove</button></h1>
          })
        }
        <button className='btn' onClick={clearArray}>clear</button>
    </>
  )
}

export default UseStateArray

console:
array (2) [{…}, {…}]
0: {id: 0, myName: 'reem'}
1: {id: 1, myName: 'resin'}
length: 2[[Prototype]]: Array(0)
```
> before clicking on remove 
![](images/6.PNG)

> after removing the element on 1st index 
![](images/7.PNG)


#### counter App using useState hook (traditional method)
> UseReducer.js 
```bash 
import React, {useState} from 'react'

const UseReducer = () => {
  const [count, setCount] = useState(0)
  return (
    <>
    <div>
        <p>{count}</p>
        <div className='btn'>
            <button onClick={() => setCount(count + 1)}>Inc</button>
            <button onClick={() => setCount(count - 1)}>Dec</button>
        </div>
    </div>
    </>
  )
}

export default UseReducer
```
> App.js 
```bash 
import logo from './logo.svg';
import './App.css';
import UseReducer from './component/UseReducer';

function App() {
  return (
    <div className="App">
      <UseReducer></UseReducer>
    </div>
  );
}

export default App;
```
> when we clicked on inc a couple times 
![](images/8.PNG)

##### Counter App using useReducer hook 
### What is useReducer hook?
```bash 
its just like useState, except useReducer hook is used to manage multiple states
```
**Reducer is a pure function which takes in a state and action and returns a new state*

#### Pure functions 
- it doesnt have any side effects 
- every single time you give the same input, it returns the same output 

> for a function to be pure, it needs to use parameters from inside the function scope only, if it takes parameters from outside of its function scope and altering current data(this is called a side effect), then its considered impure function.
```bash 
✅impure function
    <script>
        const array = [1, 2, 3]
        // taking parameters that are outside of the function scope - pure functions cannot do this 

        function addElementToArray(element) {
            array.push(element)
            // its altering the datatype that is outside of the function scope - pure functions cannot do this 
        }
    </script>
```
![](images/9.PNG)

> Math.random() is an impure function, because everytime you give the same input, you get a different output for it 
![](images/10.PNG)

> Given below is an example of a pure function
```bash 
    <script>
        const array = [1, 2, 3]

        function addElementToArray(arr, element) {
          //create new array arr and add element to it 
          return [...arr, element]

          //it only uses its inputs that are defined
          //it doesnt change any input its getting (it doesnt add onto the previous array, instead it creates a new array and adds the element to it 

          //everytime you give the same input, you get the same output 
        }
    </script>
```
![](images/11.PNG)

> Given below is an example of an impure function
```bash 
    <script>
        const array = [1, 2, 3]

        function addElementToArray(arr, element) {
            //create new array arr and add element to it 
            return [...arr, element, Math.random()]
        }
    </script>
```
![](images/12.PNG)

#### Counter using useReducer hook 
> App.js 
```bash 
import logo from './logo.svg';
import './App.css';
import UseReducer from './component/UseReducer';

function App() {
  return (
    <div className="App">
      <UseReducer></UseReducer>
    </div>
  );
}

export default App;
```

> useReducer.js 
```bash 
import React, {useReducer} from 'react'

const initialState = 0 

// reducer function - defined here 
// takes 2 arguments: current sttae and action method 
const reducer = (state, action) => {
  console.log('state',state)
  console.log('action', action)

  if(action.type === 'INCREEMENT'){
    return state + 1
  } 

  if(action.type === 'DECREEMENT'){
    return state - 1
  } 

    //reducer always needs to return 
  return state 
}

const UseReducer = () => {
  //const [count, setCount] = useState(0)

  //useReducer is just like useState 
  //takes 2 arguments: reducer function, initial state 
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <>
    <div>
        <p>{state}</p>
        <div className='btn'>
          {/* once product is dispatched, it is then on the way to reach its destination
          
          dispatch: is used to trigger the action method (that is an argumnet of the reducer function*/}
            <button onClick={() => dispatch({type: 'INCREEMENT'})}>Inc</button>
            <button onClick={() => dispatch({type: 'DECREEMENT'})}>Dec</button>
        </div>
    </div>
    </>
  )
}

export default UseReducer
```
### UseEffect Hook 
UseEffect hook helps perform side effects in functional components 
```bash 
If we want to implement aa feature, where were adding notifications to the title dyanamically, it can be acheived through useEffect hook
```
> What are side effects?
side effects are anything that afffects something outside of the scope of the current function thats been executed. 

> What can we acheive through side effects?
- API requsts to our backend service 
- calls to our authentication service 
- Data fetching 
- setting up a subscription 

> UseEffect.js
```bash 
import React, {useState, useEffect} from 'react'

const UseEffect = () => {
  //whenver we use useState it re-renders our component 
  const [count, setCount] = useState(0)

  //useEffect will be called everytime the page reloads 
  useEffect(()=> {
      console.log('use effect')
      document.title = `chats (${count})`
  })

  //first outside will be called in console, then the useEffect will be called 
  console.log('outside')

  return (
    <div>
        <h1>{count}</h1>
        <button className='btn' onClick={()=> setCount(count + 1)}>click me</button>
    </div>
  )
}

export default UseEffect
```

> App.js 
```bash 
import logo from './logo.svg';
import './App.css';
import UseEffect from './component/UseEffect';

function App() {
  return (
    <div className="App">
      <UseEffect></UseEffect>
    </div>
  );
}

export default App;

console:
outside 
use effect

(these 2 will be called as many times the page re-renders)
(the page will re-render everytime we click on increement, because its linked to useState)
(everytime useState is called, it re-renders the page)
(everytime the page re-renders, the new count will be logged to our title)
```
![](images/10.PNG)