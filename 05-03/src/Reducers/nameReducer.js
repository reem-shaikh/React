
//reducer takes 2 argumnets 
// const nameReducer = (state, action) => {
// }

//after dispatch reciebes data from action
//it will be given to reducer 

//dispatch gives data to reducer and store it inside action object 
//action will take that data and give it to the 'state'
//state is stored in the reduxstore 
const nameReducer = (
    state = {
      name: "",
      eamil: "",
    },
    action
  ) => {
    switch (action.type) {
      case "NAME":
        state = {
          ...state, //name: "",
          // eamil: "",
          name: action.payload,
          //action.payload is the data were getting from nameAction.js which stores payload: data
          //action is getting the data from the name.js component, which takes the input entered by the user and when the user clicks on the button it passes the data to the Action function
        };
        break;
    }
    return state;
  };
  
  export default nameReducer;