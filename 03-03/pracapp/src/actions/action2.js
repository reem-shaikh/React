const someActionFn2 = (someName) => {
    // parameter passed here from both child and child2 mapDispatchToProps
      return {
        type: "CHANGE_NAME",
        payload: someName,
      };
    };
    
    export { someActionFn2 };
    
    // someActionFn("abhishek")
    // argumnent 