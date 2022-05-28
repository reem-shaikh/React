// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";
// import { Provider } from "react-redux";
// import myStore from "./ReduxStore/MyStore";

// ReactDOM.render(
//   //provider component take one prop - were providing store value to the store 

//   //Provider connects store with the app component 
//   //key of the prop is store - were providing our store as a value "myStore"
//   <Provider store={myStore}>
//     <App />
//   </Provider>,
//   document.getElementById("root")
// );

//reportWebVitals();


import ReactDOM from 'react-dom/client';
import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import myStore from "./ReduxStore/MyStore";

//provider component take one prop - were providing store value to the store 

//Provider connects store with the app component 
//key of the prop is store - were providing our store as a value "myStore"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={myStore}>
  <App />
</Provider>,
);

reportWebVitals();

