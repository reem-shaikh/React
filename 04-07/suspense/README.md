### React Suspense and Code splitting
SPA and react-router loads everything initially, and when you navigate, it already has content, so it accordingly changes DOM. 

that works for small apps, however when your app is bigger, you need better feature, because that approach makes it slower 

Through suspense, we load some components quickly and load the others later,

Suspense is react built in. 

#### Code 
> When we click on button, it shows Content.js 
- import button component in App.js and define a state named showComp when  this state is true we'll show the Content component. 
- We go to network -> iniitally files are loaded (bundle.js - converts react code to single JS file)
- we then create a build on terminal npm run build 
- we added content in Content.js 

> App.js 
```bash
import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import { useState, Suspense, lazy, useMemo } from 'react';
import Memo from './components/Memo';
import { createStore } from 'redux';
import reducer from './reducers';
import { Provider } from 'react-redux';
import Buttons from './components/Buttons';
import Counter from './components/Counter';

function App() {
  const [showComp, setShowComp] = useState(false);
  return (
      <div className="App">
        <br />
        <Memo />
        <Button clickFn={_ => setShowComp(true)} />
        {showComp ? (
            <Content />
        ) : false} 
      </div>
  );
}

export default App;
```
> Button.js 
```bash
import React from 'react'

const Button = ({clickFn}) => {
  return (
    <button onClick={clickFn}>Load the content</button>
  )
}

export default Button
```
Until I dont click on the button, load load the Content.js, but in this case it loads 
- we wrap Content.js within Suspense and make it lazy loaded which ensures that Content.js is only loaded when we click on the button. Suspense has a prop called fallback which shows the content inside it, while it is loading the component to display. 
- we also do lazy import for the component Content, which means until we dont need it, it wont import, i.e it will load lazily. This component will be loaded, only when its supposed to be mounted. lazy is a react function. 
- To acheive lazy loading, we need react suspense

> App.js 
```bash
import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import { useState, Suspense, lazy, useMemo } from 'react';
import Memo from './components/Memo';
import { createStore } from 'redux';
import reducer from './reducers';
import { Provider } from 'react-redux';
import Buttons from './components/Buttons';
import Counter from './components/Counter';

const Content = lazy(_ => import('./components/Content'));

function App() {
  const [showComp, setShowComp] = useState(false);
  return (
      <div className="App">
        <br />
        <Memo />
        <Button clickFn={_ => setShowComp(true)} />
        {showComp ? (
          <Suspense fallback={<p>Loading...</p>}>
            <Content />
          </Suspense>
        ) : false} 
      </div>
  );
}

export default App;
```

### useMemo 
store repeated computational logic in cache, to improve performance. If change happens then recalculate, otherwise dont. 
  
> Memo.js 
- create states num1 and num2, in sum function we compute the sum and we make this function to  executed a 1000 times. So to save resources and not execute the logic for the same sum a 1000 times, so we encapsulate it in a useMemo hook

- useCallback() -> returns memoized function (returns callback functions) - used for rendering and re-rending of child components, 
when you change something all child gets rendered, but we want only 3 child re-rendered 

- useMemo() -> afer execution it gives memoized value, used for memoized object (returns data)

> memo.js 
```bash
import React, { useCallback, useMemo, useState } from 'react'

const Memo = () => {
  const [num1, setNum1] = useState(10);
  const [num2, setNum2] = useState(15);

  // const sum = (a, b) => {
  //   console.log("Function called");
  //   return a + b;
  // }

  const sum = useMemo(_ => {

    console.log("Function called");
    return num1 + num2;

  }, [num1, num2]);

  return (
    <>
      <ul>
        {Array(1000).fill(-1).map((_, id) => {
          return <li key={id}>{sum}</li>
        })}
      </ul>
    </>
  )
}

export default Memo
```


