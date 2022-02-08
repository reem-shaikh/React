#### Client side rendering VS server side rendering 
- every time the page reloads, were using the ***server side rendering/routing***
- However, react doesn't refresh the page, it renders the particular component and displays it, without refreshing the entire page, this is known as ***client side rendering/routing**. This is known as react router. 

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
> src/App.jsx
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
> About.jsx (custom component)
```bash 
import React from "react";

const About = () => {
  return <h1>About page</h1>
}

export default About;
```
> Contact.jsx (custom component)
```bash 
import React from "react";

const Contact = () => {
  return <h1>Contact page</h1>
}

export default Contact;
```