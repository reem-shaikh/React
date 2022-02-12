import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//a centralized store that is passed to all components 
import store from './store'

//connecting react to redux 
import { Provider } from 'react-redux'

//to find out if app has redux state or not 
//store.subscribe(()=> { console.log(store.getState())})

ReactDOM.render(
  <React.StrictMode>
    {/* passing props inside provider */}
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
