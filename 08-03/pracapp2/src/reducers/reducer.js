const reducer = (state, action) => {
// check if state is undefined 
if(state === undefined){
    //intial state value when app is run 
    return {
        count: 0, 
        name: 'geek'
    }
    //this is the initial redux store object 
}

switch(action.type){
    case 'INCREASE':
        state.count = state.count + 1;
        console.log('reached reducer')
        break;
    
    default:
        break;
}
return {...state} 
// return new state object 
}

export default reducer