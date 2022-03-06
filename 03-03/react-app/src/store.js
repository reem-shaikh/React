// creating store 
import {createStore} from "redux"
import reducer from "./reducer/reducer.js"

// store sends reducer to app.js
const store = createStore(reducer)
// takes argument of reducer 

export default store 