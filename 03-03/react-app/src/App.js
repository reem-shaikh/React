import { Component } from 'react';
import './App.css';
import {connect} from "react-redux";
import Child from './Child';

class App extends Component {
  render() {
  console.log(this.props)
  //it gets access of the props defined inside the mapToProps function 

  return (
    <div className="App">
      {this.props.someKey}
      <Child />
      {/* we updated redux state from child component and we could see updates in both child and parent component  */}
    </div>
  );
  }
}

// redux gives certain arguments to this function 
//1. current component props 
//2. redux store 

// it will have access to update the prop of the component 
// you have access to redux state, you can read it from here and add it to the props of the connected component 
const mapStateToProps = (reduxStoreObject, currComponentProps) => {
  console.log('redux store', reduxStoreObject)
  const nameValue = reduxStoreObject.name
  console.log({nameValue})
  //geekster value is coming from the store
  //store passes the redux value 

  //it will map the state of redux to the props of your component 
  return {
    //passing an object 
    // geek: "ster",
    // abhi: "educator",
    // age: 99,
    someKey: nameValue,

  }
}

// this will also be send to the props of the component 
// the only difference is that 
// you can dispatch actions here, you can send action to the reducer

// and in mapStateToProps you can read redux store
const mapDispatchToProps = (dispatch, props) => { 
  return {
    abhishek: "gekgeek"
  }
}

export default connect(mapStateToProps, null)(App)
