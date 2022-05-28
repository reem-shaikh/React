#### Pushing CRA react code to netlify 
> custom deploy 
- create production build by running `npm run build` 
push the `build` folder to custom deploy in netlify 

> Notes:
1. Make sure your app is up and running in terminal 
2. make sure your app is CRA based app and not the custom react app 
3. Make sure your app is in react 18 latest version else convert it to react 18 

### Converting R17 to R18 app 
#### Migrating from React v17 
HOW TO UPDATE REACT 17 TO REACT 18 ?
- in the project folder 
```bash
npm install react@18 react-dom@18
```
- replace `index.js` to react 18 compatible 
1. New React-DOM API 
React-DOM render is deprecated and must use new `createRoot` to use v18 features.
**change in index.js*
> react 17 
```bash
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Card from './Card.js';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
```
> react 18 
```bash
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
//it checks performance and make app more optimized 
```
#### Features introduced in React 18 
1. Concurrency features unlocked in react18
it can simultanously update multiple states by priortizing urgent state updates to happen before the other long time taking state updates. Long taking state updates occur in the background, while the urgent state updates are priortized. React 18 acheives this by a set of features and API's (Concurrent API's) that help with state update priortization. In react 17, one state would update at a time and the next state update would only take place once the old state update was done.

> Concurrent API's include:
These are technically new hooks:
- useTransition()
- startTransition()
- useDefferedValue()

2. automatic behind the scenes imporvements 
> improved state batching 
grouping multiple state update function calls together so their executed as one call instead of multiple calls. 

> improved suspense component 
used to wrap around lazy loaded components. Helps optimize performance since less code needs to be downloaded initially. 

In raect 18 you can use suspense component with server side rendering 

> server side components (alpha stage - will be released in the future)
these components are executed on the server and work seamlessly with clinet side component, once this component is added to react, react will be working as a full stack framework, which allows to mix server side with client side code. 