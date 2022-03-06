// to send something to reducer, you need dispatch 

//nfn 
//reducer(store/store, action)
const reducer = (state, action) => { 

    //initially state is undefined 
    if(state === undefined) {
        return {
            name: "Geekster"
        }
    }

    //the action we dispatched can be recieved in the reducer like this 
    switch(action.type){
        case "CHANGE_NAME": console.log('I have reached reducer')

        // state.name = 'child component'
        //the state is updated from Geekster to child component 

        state.name = action.payload 
        // were updating the state with whatever user entered in the input field 
        break

        default:
        break
    }


    // return new state object 
    return {...state}
 };

 export default reducer