// reducer is responsible for executing the logic for the specific action, after checking the action using action.type 

//defining initial state for carts, which is a blank array 
const INIT_STATE = {
    //all cart data is stored in this state 
    carts: []
};

export const cartreducer = (state = INIT_STATE, action) => {
    //checking the action type defined in redux/actions/action.js 
    switch (action.type) {

        case "ADD_CART":
        ////store data passed from action.payload in carts state 

        //1. if the id user clicked on, is already present in carts[]
        //were checking if the payload value (basically the id user targetted) is same as the id present inside carts[], if it is then we store it in another variable IteamIndex
        const IteamIndex = state.carts.findIndex((iteam)=> iteam.id === action.payload.id);

        //findindex returns index 

        //if ItemIndex has a value greater than 0
        //if any item is actually present in both carts[] and the payload, then it can have an index thats 0 or anything above that
        if(IteamIndex >= 0){
            //then increase the quantity by 1 
            state.carts[IteamIndex].quantity +=1
            return {
                ...state,
                carts:[...state.carts]
            }
        }else{
            //2. if the id user clciked on, is not present in carts[]

            //when user clicks on add to cart, we want to show the data in the cart, ensuring that the previos data stored within it persists, thats why were setting ...state.carts, with ...action.payload 
            const temp = {...action.payload,quantity:1}
             return {
                ...state,
                carts: [...state.carts, temp]
            }
        }

        //break;

        //were filtering out the id passed to remove
        case "RMV_CART":
            //were typically filtering out the id that were retreive over here
            //if cart id in carts[] is not equal to the id passed in payload, then return the rest of the data in the carts[]
            const data = state.carts.filter((el)=>el.id !== action.payload); 
            // console.log(data);

            return {
                //let previos data remain 
                ...state,
                //and add the new data above it 
                carts:data
            }

        //break;

        case "RMV_ONE":
            //if the id in the payload is same as the id present inside carts[], then store it in ItemIndex_dec
            const IteamIndex_dec = state.carts.findIndex((iteam)=> iteam.id === action.payload.id);
   
            //were checking if the item user clicked on has quantity atleast 1 and above 
            if(state.carts[IteamIndex_dec].quantity >= 1){
                //then deecrement by 1
                const dltiteams = state.carts[IteamIndex_dec].quantity -= 1
                console.log([...state.carts,dltiteams]);

                return {
                    ...state,
                    carts:[...state.carts]
                }
            }
            //if the quantity of the item is 1, and user clciks on - 
            else if(state.carts[IteamIndex_dec].quantity === 1 ){
                //we fetch all the id's that's not the same as the one user passed via payload, and we display whatever is left in the cart[], which is techncally nothing, so it redirects us to the home page 
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