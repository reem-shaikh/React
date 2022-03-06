import { Component } from 'react';
import './App.css';
import {connect} from "react-redux";

class Child extends Component {

  constructor(props) {
      super(props)
      this.state = {
        childName: "",
    }
  }

  handleChange = (e) => {
      const value = e.target.value 
      this.setState({childName: value})
  }
  render() {
  console.log(this.props)
  console.log(this.state.childName)

  return (
    <div className="App">
    {/* controlled component */}
    <input placeholder='enter text and when you clcik on submit both these props will be updated based on what you entered in the input field' value={this.state.childName} onChange={this.handleChange}/>
      {this.props.name}
      <button onClick={()=> this.props.geekDispatch}>dispatch</button>
      {/* when you clcik on the button it will call geekdispatch */}
    </div>
  );
  }
}

// read from redux store and access through props 
const mapStateToProps = (reduxStoreObject, currComponentProps) => {
    console.log('redux store', reduxStoreObject)
    const name = reduxStoreObject.name
    console.log({name})
   
    return {
        name,
  
    }
  }

// access to dispatch function 
const mapDispatchToProps = (dispatch, props) => {

    const dispatchActionFromChild = (newName) => {
        const actionObj = {
            type: "CHANGE_NAME",

            //whenever you send any data to reducer you send it through payload key 
            payload: newName
        }
        dispatch(actionObj)
        //after action is dispatched it goes to the reducer
    }
    return {
        geekDispatch: dispatchActionFromChild
    }
}
  

export default connect(mapStateToProps, null)(Child)