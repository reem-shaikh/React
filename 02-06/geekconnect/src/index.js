import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

// latest redux 
import { configureStore } from '@reduxjs/toolkit';
import sliceReducer from './slice';
const store = configureStore({ reducer: sliceReducer });
//instead of reducer and action seperate file, we have an individual file slice.js

//oldschool redux 
// import reducer from './pages/reducers'
// import { createStore } from "redux";
// import {combineReducers} from "redux";
// const rootred = combineReducers({reducer });
// const store = createStore(rootred);
//contains reducers.js and actions.js 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);