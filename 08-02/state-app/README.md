# Functional Component 
(JS function which returns a JSX element)
React functional component always returns a JSX, unlike the JS functions which can return boolean

A functional component is just a plain JavaScript function that accepts props as an argument and returns a React element. 
```bash 
import React from 'react'

//this is a react functional component 
function FuncComponent() {
  //there is no concept of polymorphism, hence there is no render 
  //normal function takes input, does calculations and returns output 

  //normal function returns array/ boolean/ objects 
  //react functional component returns a JSX 

  //function component syntax is simpler than class component syntax 
  return (
    <div>FuncComponent</div>
  )
}

export default FuncComponent
```

- 5YRS ago functional component didnt have the ability to have its own state, function compponents were called stateless. They dont have a concept of holding its own component. 

>> Then previously how did functional component get data?
functional components were called from inside App component and passed props 

> Functional.js
```bash 
import React from 'react';

//props is an object 
function functional(props) {
  //props is an object with name property 
  return <div>{props.name}</div>;
}

export default functional;
```
> App.js 
```bash 
import logo from './logo.svg';
import './App.css';
import Functional from './component/Functional';

function App() {
  return (
    <div className="App">
     <Functional name="Reem"></Functional>
    </div>
  );
}

export default App;
```

Sometimes referred to as “dumb” or “stateless” components as they simply accept data and display them in some form; that is they are mainly responsible for rendering UI.

- they dont have its own state, thats why its called functional component.
- it takes the passed props from the parent and displays it, it cannot have its own state, thats why functional components were called dumb components.

After React16, to be able to use state in functions, React hooks were created.

**A stateless component renders output which depends upon props value, but a stateful component render depends upon the value of the state.*** A functional component is always a stateless component, but the class component can be stateless or stateful.

### Class component 
A class component requires you to extend from React. React lifecycle methods can be used inside class components (for example, componentDidMount). Hooks can be easily used in functional components.
```bash 
import React, { Component } from 'react'

export class ClassComponent extends Component {

  constructor(props){
      super(props)
  }
  
  render() {
    return (
      <div>ClassComponent</div>
    )
  }
}

export default ClassComponent
```