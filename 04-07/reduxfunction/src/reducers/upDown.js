//were going to specify the code for the functions we defined inside actions/index.js
const initialState = 0 
const changeTheNumber = (state = initialState, action) => {
    switch(action.type) {
        //whats the type of the action that is called 
        case "INCREEMENT": return state + action.payload; 
        //state will be updated
case "DECREEMENT": return state - 1;
        default: return state;
    }
}
export default changeTheNumber;