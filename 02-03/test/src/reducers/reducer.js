const reducer = (state, action) => {
    if (state === undefined) {
      return {
        reduxCount: 5000,
      };
    }
  
    switch (action.type) {
      case "INCREASE": 
      // note that: by default + is considered as concatenation 
      // you need to convert it to parse Int 
        state.reduxCount = parseInt(state.reduxCount) + parseInt(action.amount);
        break;
      case "DECREASE":
        console.log("i have reached decrease reducer");
        state.reduxCount = state.reduxCount - action.amount;
        break;
      // case "DISPLAY":
      //   state.reduxCount = state.reduxCount;

      default:
        break;
    }
  
    return { ...state };
  };
  
  export default reducer;
