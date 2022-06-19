import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import store from './store';
import { Provider } from 'react-redux';

//for react-router 
import { BrowserRouter } from "react-router-dom";

import { createStore } from "redux";
//were importing the rootred which contains all combined reducers 
import rootred from "./redux/reducers/main";

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = createStore(
  rootred
);

root.render(
  //were providing store value to the App component 
  <Provider store={store}>
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
  </Provider>
);



