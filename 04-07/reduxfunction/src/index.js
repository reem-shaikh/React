import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//a centralized store that is passed to all components 
import store from './store'
//connecting react to redux using provider 
import { Provider } from 'react-redux'
ReactDOM.render(
  <React.StrictMode>
{/* passing props to App.js through provider, which is then received through useSelector in App.js*/}
    <Provider store={store}>
      <App />
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();