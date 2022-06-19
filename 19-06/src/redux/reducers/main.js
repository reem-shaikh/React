//this component is used for combining all reducers 
import {combineReducers} from "redux";
//importing the other reducer 
import { cartreducer } from "./reducer";

//passing cartreducer as argument within CombineReducers 
const rootred = combineReducers({
    cartreducer
});

//these combined reducers are exported to index.js 
export default rootred