import React, { Component } from "react";
import "../App.css";


class Folder extends Component {
  //folder should get name property from the parent through props 
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  //when we click on the span arrow then we want to display thw child elements 
  //this function is to toggle the state 
  handleClick = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <div className="Folder">
        <span onClick={this.handleClick}>
          {this.state.isOpen ? (
            <i className="caret down icon"></i>
          ) : (
            <i className="caret right icon"></i>
          )}
          <i className="blue folder icon"></i>
        </span>
        {this.props.name}
        {/* when the state vairable is open then display children else display null */}
        {this.state.isOpen ? this.props.children : null}
      </div>
    );
  }
}

export default Folder;