#### Client side rendering VS server side rendering 
- every time the page reloads, were using the ***server side rendering/routing***
- However, react doesn't refresh the page, it renders the particular component and displays it, without refreshing the entire page, this is known as ***client side rendering/routing**. 

## React Router Setup
Through React router, we can acheive client side rendering. However, React router is not a biult in feature.
### React router is a library which is need to install 
1. search google 'react router dom npm'
```bash 
References:
https://www.codegrepper.com/code-examples/javascript/npm+install+react-router-dom

https://www.npmjs.com/package/react-router-dom
```
2. go to terminal and navigate to the react app you want to install react router package for 
```bash 
npm install --save react-router-dom

or
npm install react-router-dom
```
3. to ensure whether your package is properly installed or not, navigate to package.json file and check whether you have react-router-dom installed in it 
> package.json
```bash 
{
  "name": "react-routing",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.16.2",
    "@testing-library/react": "^12.1.2",
    "@testing-library/user-event": "^13.5.0",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    ✅"react-router-dom": "^6.2.1", 
    "react-scripts": "5.0.0",
    "web-vitals": "^2.1.4"
  },

this is v6 version
```
4. you'll need to import browserRouter from react-router-dom package in index.js 

> src/index.js 
```bash 
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
✅import {BrowserRouter} from 'react-router-dom'
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
```
```bash 
Note that:
- First we set up our act to work with React Router by installing the library by using the terminal command 
- Everything that gets rendered will need to go inside the <browserRouter>, so wrap your App (and all the components you want to render) inside <BrowserRouter>.

 Its the <BrowserRouter> </BrowserRouter> component that does all the logic of displaying various components that you provide it with. 

 What is Browser Router?
 BrowserRouter is a parent component and can have only single child

 <BrowserRouter> is a <Router> that uses the HTML5 history API (pushState, replaceState and the popstate event) to keep your UI in sync with the URL (doesnt load the page when user goes from one extension of a domain to another). 
```
> src/index.js `
```bash 
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter} from 'react-router-dom'
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    {/* note that: we embedded the App component inside BrowserRouter */}
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
```
5. you'll need to import Route and Switch from react-router-dom package in index.js 
> src/App.js
```bash 
import React from "react";
import { Route, Switch } from "react-router-dom";

//importing components 
import About from "./About.jsx";
import Contact from "./Contact.jsx";

const App = () => {
  return (
    <>
    <About></About>
    <Contact></Contact>
    </>
  );
}

export default App;
```
> About.js (custom component)
```bash 
import React from "react";

const About = () => {
  return <h1>About page</h1>
}

export default About;
```
> Contact.js (custom component)
```bash 
import React from "react";

const Contact = () => {
  return <h1>Contact page</h1>
}

export default Contact;
```
6. In react-router-dom v6 (which we are using), "Switch" is replaced by routes "Routes". Note that: switch only works in v5.2 and below.

> App.js 
```bash 
import React from "react";
import { Routes, Route } from "react-router-dom";

//importing components 
import About from "./About.js";
import Contact from "./Contact.js";

const App = () => {
  return (
    <>
    {/* whne we go to the application, based on the routes, render the application */}
      <Routes>
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    {/* <About></About>
    <Contact></Contact> */}
    </>
  );
}

export default App;
```
> About.js 
```bash 
import React from "react";

const About = () => {
  return <h1>About page</h1>
}

export default About;
```
> Contact.js 
```bash 
import React from "react";

const Contact = () => {
  return <h1>Contact page</h1>
}

export default Contact;
```
```bash 
Viewport:
When the user types this in the browser: http://localhost:3000/About it shows them the About page 

When the user types this in the browser: http://localhost:3000/Contact it shows them the contact page 
```
#### How To Make An API Request in ReactJS With Axios and Fetch 
While dealing with web applications in React, the most common task is to communicate with backend servers. This is usually done via HTTP protocol.  

We are all quite familiar with the very common XML Http Request interface and Fetch API, which allows us to fetch data and make HTTP requests. 

There is another way to communicate with the backend in React, and that is by using axios library 

It is evident from the fact that we may sometimes in React applications need to get data from the external source. It is quite difficult to fetch such data so that they can be normally shown on the website.

### What is axios?
- Axios is used to communicate with the backend and it also supports the Promise API that is native to JS ES6.  
- It is a library which is used to make requests to an API, return data from the API, and then do things with that data in our React application. 
- Axios is a very popular (over 78k stars on Github) HTTP client, which allows us to make HTTP  requests from the browser. 

### Setting up Axios
> Navigate to the app you want to install axios for and type in terminal 
```bash 
npm add axios 
```
> import it in App.js file
```bash 
import logo from './logo.svg';
import './App.css';
import Axios from 'axios'
import React, {useState} from 'react'
//axios allows to make end point request to any api 

function App() {
  const [joke, setJoke] = useState("")

  const getJoke = () => {
    Axios.get("https://api.chucknorris.io/jokes/random").then((response)=> {
      console.log(response)
      console.log(response.data.value)
      setJoke(response.data.value)
    })
  }

  return (
    <div>
      <button onClick={getJoke}>get joke right now</button>
      {joke}
    </div>
  );
}

export default App;

viewport:
when we click on the button, the joke is fetched from the response and set to setJoke, every time a new joke is generated and displayed on the viewport.
```
### Context API 
![](4.png)
```bash 
If we want to pass data from parent component to child component C 

1. parent component pass data to component A 
2. component A passes to component B 
3. component B passes to component C 
```
However, our requirment, was to only pass the data to component C, we can acheive this using Context API. 

> src/Componenta.js 
```bash 
import React from 'react';
import Componentb from './Componentb';

function Componenta() {
  return <div>
      {/* <h1>hello</h1> */}
      <Componentb></Componentb>
  </div>;
}

export default Componenta;
```
> src/Componentb.js 
```bash 
import React from 'react';
import Componentc from './Componentc';

function Componentb() {
  return <div>
      {/* <h1>hi</h1> */}
      <Componentc></Componentc>
  </div>;
}

export default Componentb;
```
> src/Componentc.js 
```bash 
import React from 'react';

function Componentc() {
  return <div><h1>C</h1></div>;
}

export default Componentc;
```
> App.js 
```bash 
import React, { Component } from 'react';
import Componenta from './Componenta'

const App =()=> {
  return <Componenta></Componenta>
}

export default App;

viewport:
C
```
#### What is React Context API?
React context API allows you to easily access data at different levels of your component tree, without passing props to every level.

> React hooks provides a concept call context 
```bash 
All React Hooks: A list.

1. useState 
2. useReducer 
3. useEffect 
4. useRef
5. useLayoutEffect
6. useContext 
7. useImperativeHandle 
8. useMemo 
9. useCallback 
```

### LifeCycle Methods 
Lifecycle methods are special methods built into React, used to operate on components throughout their duration in the DOM. For example, when the component mounts, renders, updates, or unmounts

There are different phases in a component's lifecycle 
1. component is created 
2. component is updated
3. component recieves data 
4. component is unmounted 

#### Phases in lifecycles 
1. Mounting    (created)
2. Updating    (new updates are made on already existing component)
4. Unmounting  (dead)

#### Sequence in which some lifecycle methods are called 
> src/App.js 
```bash 
import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react'

class App extends React.Component {

  ✅1. constructor is called 
  - state is initialized here 
  - used to bind state values used in functions using this 
   constructor(){
     super()
     console.log('constructor')
   }

   ✅3. componentDidMount is called at last 
   //when entire component is rendered, only then this method is executed 
   componentDidMount(){
    console.log('mounted')
   }

    render(){
      ✅2. render is called 
      console.log('render')
      return (
        <div>life cycle method</div>
      );
    }
}

export default App;
```
![](1.png)