import { createStore } from "redux"
//importing createstore from the dependency of redux 
import rootReducer from "./reducers/index";

//rootreducer contains the state of the entire applicaion
//store contains global centralized state 
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
//whichever component calls the store, they will get the data stored in it 

export default store;