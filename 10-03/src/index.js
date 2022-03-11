import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AppContext from './AppContext';

ReactDOM.render(
  <React.StrictMode>
    {/* props of context provider is value */}
    <AppContext.Provider value="ronaldo">
       <App />
    </AppContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
