import { createStore, combineReducers, applyMiddleware } from "redux";
// To Connect Store with react component you need a redux store  
// React-redux and Redux library 
// npm i react react-redux

// whenever use clicks on the button in home.js you need to store that data to the reduxstore 
import logger from "redux-logger";
import nameReducer from "../Reducers/nameReducer";
import cityReducer from "../Reducers/CityReducer";

const CombinedReducers = combineReducers({
  nameReducer, // nameReducer:nameReducer
  cityReducer, // cityReduer:cityReducer 
});


// create redux store using redux library 
// createStore is a predefined method - create store and return reference of that store 

// pass applyMiddleWare as a second argumnet to myStore object 
const myStore = createStore(CombinedReducers, applyMiddleware(logger));
// pass logger as a first argumnent in applyMiddleware


export default myStore;

// were providing this store to the app component through index.js to acheive this, 
// react-redux has a predefined component called provider using which we can provide redux store to our react component 

