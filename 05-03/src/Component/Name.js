import React, { Component } from "react";
import nameAction from "../Actions/nameAction";
import { connect } from "react-redux";

class Name extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
    };
  }

  sendDataToAction = () => {
    // alert(this.state.username);

    //calling the action in this function
    //action will be embedded inside dispatch 
    //action will be send to reducer 
    //reducers will be combined under combineReducers
    //combinereducers is stored inside store.js where that state can be accesed to the entire app 
    nameAction(this.state.username, this.props.dispatch);
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="card">
              <div className="card-header bg-dark text-white">
                <h2>Name Component</h2>
              </div>

              <div className="card-body">
                <input
                  type="text"
                  placeholder="Enter Name"
                  className="form-control"
                  onChange={(e) => {
                    //capturring dtaa user enters inside the state 
                    this.setState({
                      username: e.target.value,
                    });
                  }}
                />
                {/* when user clicks on this button, invoke this function */}
                <button
                  className="btn btn-primary mt-2"
                  onClick={this.sendDataToAction}
                >
                  Send Data to Redux
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, (dispatch) => {
  return {
    dispatch,
  };
})(Name);