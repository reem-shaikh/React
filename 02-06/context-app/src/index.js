import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
        <React.StrictMode>
          <App />
        </React.StrictMode>
);

//we cannot have state contexts 
//we can have regular contexts which dont deal with state

//contexts and utils not mandatory to use pascal casing 



