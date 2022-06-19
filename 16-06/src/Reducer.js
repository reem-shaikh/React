//if a parameter is not defined we can define that 
//were defining old state over here 
const initialState = {
    firstName: "",
    lastName: "",
    isLight: false
}


//initially when app will load for the first time, state (state) will be undefined 
//reducer is a function which takes action and does something to the state 
//reducer takes 2 parameters 
//old state, action 

//state = intiialstate (short circuiting - through short circuiting we skip checking additional things)
//if state is undefined then were telling js to use the initialstate 
//if state == undefined {
//     state = undefined
// }

//in any situation, where parameter is not defined, then use the defined value - default parameter
const Reducer = (state = initialState, action) => {
    //when you load the app for first time, what will be the balue of old state?
    
    //depeending on what action we get, we'll do something
    switch(action.type){
        case "SET_DARK_THEME":
            state.isLight = false;
            break;
        case "SET_LIGHT_THEME":
            state.isLight = true;
            break;
        case "SET_FIRST_NAME":
            state.firstName = action.payload;
            break;
        case "SET_LAST_NAME":
            state.lastName = action.payload
            break;
        default:
            break;
    }
    //return state
    //state passes through action and passes the new state 

    return {...state}
    //deep copy 
    //object is reference type - it will try to compare memory, but we want deep copy 

}

export default Reducer