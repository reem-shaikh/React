import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
//So, the createStore() Redux is now deprecated and configureStore() is recommended from @reduxjs/toolkit
import { createStore } from 'redux';
import rootReducer from './Reducer';


//this is not recommended approach
const store = createStore(rootReducer)

//the crossed createStore problem: has nothing to do with your actual application code. It is specifically a message to users like you who are using "plain Redux" - it's trying to tell you that you're following patterns that are much harder to use, and we want you to use Redux Toolkit instead because it will make your life much easier :)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //this is an hoc 
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);


reportWebVitals();
