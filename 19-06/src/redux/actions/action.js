//actions are plain js object which tells reducer what to do, payload (whatever item you want to store). You'll need to dispatch actions for it to reach reducer 

//when user clicks on the button, it fetches its data and stores it inside payload 
//when user clicks on add to cart we need to add data to the cart, we'll set the data in the payload 
export const ADD = (item) => {
    return {
        type: "ADD_CART",
        payload: item
    }
}

// remove items - to remove items from the cart when you click on the trash icon
//we'll remove all the items except the id we mentioned in here 
export const DLT = (id) => {
    return {
        type: "RMV_CART",
        payload: id
    }
}

// remove individual item from card details page 
export const REMOVE = (iteam) => {
    return {
        type: "RMV_ONE",
        payload: iteam
    }
}