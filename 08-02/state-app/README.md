# Functional Component 
React functional component always returns a JSX, unlike the JS functions which can return boolean

A functional component is just a plain JavaScript function that accepts props as an argument and returns a React element. 

- 5YRS ago functional component didnt have the ability to have its own state, function compponents were called stateless. They dont have a concept of holding its own component 

Sometimes referred to as “dumb” or “stateless” components as they simply accept data and display them in some form; that is they are mainly responsible for rendering UI.

- they dont have its own state, thats why its called functional component.
- it takes the passed props from the parent and displays it, it cannot have its own state, thats why functional components were called dumb components.

> Functional.js
```bash 
import React from 'react';

function functional(props) {
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
After React16, to be able to use state in functions, React hooks were created.

A stateless component renders output which depends upon props value, but a stateful component render depends upon the value of the state. A functional component is always a stateless component, but the class component can be stateless or stateful.

### Class component 
A class component requires you to extend from React. React lifecycle methods can be used inside class components (for example, componentDidMount). Hooks can be easily used in functional components.
