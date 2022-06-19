//actions are plain js object which tells reducer what to do, payload (whatever item you want to store). You'll need to dispatch actions for it to reach reducer 

//when user clicks on the button, it fetches its data and stores it inside payload 
export const ADD = (item) => {
    return {
        type: "ADD_CART",
        payload: item
    }
}

// remove iteams
export const DLT = (id) => {
    return {
        type: "RMV_CART",
        payload: id
    }
}

// remove individual iteam

export const REMOVE = (iteam) => {
    return {
        type: "RMV_ONE",
        payload: iteam
    }
}