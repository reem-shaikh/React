import React, {Component} from 'react';

export default class Car extends React.Component {
    constructor(props) {
      super(props);
    // ✅adding multiple properties to state object 
      this.state = {
        brand: "Ford",
        model: "Mustang",
        color: "red",
        year: 1964
      };

      this.changeColor = this.changeColor.bind(this)
  
    }
    // ✅when the button is clicked the state of the color will change from red to blue  
    changeColor = () => {
      this.setState({color: "blue"});
    }
    
    //✅render() displays components to the application 
    render() {
      return (
        <div>
          <h1>My {this.state.brand}</h1>
          <p>
            It is a {this.state.color}
            {this.state.model}
            from {this.state.year}.
          </p>
  
          <button
            type="button"
            onClick={this.changeColor}
          >Change color</button>
  
        </div>
      );
    }
  }