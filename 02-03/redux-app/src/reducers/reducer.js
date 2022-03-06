
//reducer takes 2 arguments
//state and action 
const reducer = (state, action) => {

    //this functon is run when store is created ,
    //whenever you dispatch an action, the initial state is count: 0 

    //state is an object which has count property 
    if(state === undefined) {
        return {
            count: 0
            // initial state 
        }
    }

    //when the action is dipatched the state is defined thats why it skips the first if condition and jumps to switch condition insteadb

    //instead of if-else, we'll be using switch statement 
    // if(action.type === 'INCREASE'){
    // }else if(action.type === 'DECREASE'){
    // }

    switch(action.type){
        case "INCREASE":  state.count + 1
        // if action.type === increase
        break;

        case "DECREASE": state.count - 1
        break;

        default:
        break;
    }

    return {...state};
    //returns a  new object of state, instead of returning an empty object 
}

export default reducer 