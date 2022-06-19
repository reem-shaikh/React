// reducer is responsible for executing the logic for the specific action, after checking the action using action.type 

//defining initial state for carts, which is a blank array 
const INIT_STATE = {
    carts: []
};


export const cartreducer = (state = INIT_STATE, action) => {
    //checking the action type defined in redux/actions/action.js 
    switch (action.type) {

        case "ADD_CART":
        ////store data passed from action.payload in carts state 
        const IteamIndex = state.carts.findIndex((iteam)=> iteam.id === action.payload.id);

        if(IteamIndex >= 0){
            state.carts[IteamIndex].quantity +=1
            return {
                ...state,
                carts:[...state.carts]
            }
        }else{
            //when user clicks on add to cart, we want to show the data in the cart, ensuring that the previos data stored within it persists, thats why were using rest operator 
            const temp = {...action.payload,quantity:1}
             return {
                ...state,
                carts: [...state.carts, temp]
            }
        }

        //break;

        case "RMV_CART":
            const data = state.carts.filter((el)=>el.id !== action.payload); 
            // console.log(data);

            return {
                ...state,
                carts:data
            }

        //break;

        case "RMV_ONE":
            const IteamIndex_dec = state.carts.findIndex((iteam)=> iteam.id === action.payload.id);
   
            if(state.carts[IteamIndex_dec].quantity >= 1){
                const dltiteams = state.carts[IteamIndex_dec].quantity -= 1
                console.log([...state.carts,dltiteams]);

                return {
                    ...state,
                    carts:[...state.carts]
                }
            }else if(state.carts[IteamIndex_dec].quantity === 1 ){
                const data = state.carts.filter((el)=>el.id !== action.payload);

                return {
                    ...state,
                    carts:data
                }
            }
        break;

        default:
            return state

    }
}