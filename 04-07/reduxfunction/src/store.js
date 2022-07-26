import { createStore } from "redux"

import rootReducer from "./reducers/index";
//rootreducer contains the state of the entire applicaion
//store contains global centralized state 
const store = createStore(rootReducer)
//whichever component calls the store, they will get the data stored in it
export default store;