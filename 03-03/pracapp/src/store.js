
import { createStore } from "redux";
import reducer from "./allMyReducers/reducer";

// store sends reducer to app.js
const store = createStore(reducer);
// createStore() takes argument of reducer 
export default store;