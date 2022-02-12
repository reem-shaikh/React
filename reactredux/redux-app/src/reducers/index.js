//import all reducers in reducer/index.js 
import changeTheNumber from "./upDown";

//to combine multiple reducers 
import { combineReducers } from "redux"

//there is only one reducer 
const rootReducer = combineReducers({
    //we can add as many reducers inside this seperated by commas 
    changeTheNumber
})

export default rootReducer