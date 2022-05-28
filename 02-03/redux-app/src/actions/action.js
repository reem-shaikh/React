//create object here and export from this file 
const increaseAction = {
    type: "INCREASE",
}

const decreaseAction = (amount) => {
    type: "DECREASE",
    //we specified the functionality of the function inside reducer.js 
    amount: amount,
}

export {increaseAction, decreaseAction}