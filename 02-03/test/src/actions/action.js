const increaseAction = (amount) => {
    return {
    type: "INCREASE",
    amount: amount
    }
};

  const decreaseAction = (amount) => {
    return { 
        type: "DECREASE", 
        amount: amount 
    };
  };


  
  export { increaseAction, decreaseAction};