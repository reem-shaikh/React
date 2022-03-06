import React from 'react';
import axios from 'axios';

import './App.css';

class App extends React.Component {
  state = {
    advice: '',
  }

  componentDidMount() {
    this.fetchAdvice();
  }

  fetchAdvice = () => {
    //everytime we reload this API it returns a new set of json data 
    //{"slip": { "id": 3, "advice": "Don't eat non-snow-coloured snow."}}
    axios.get('https://api.adviceslip.com/advice')
      .then((response) => {
        console.log('response', response)
        //destructuring the advice 
        const { advice } = response.data.slip;
        //the slip contains id and advice that we want to extract 
        //we update the state 'advice' with the new data inside the response object

        this.setState({ advice });
        //updating state property using setState, so we can access the updated state in render 
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="app">
        <div className="card">
          <h1 className="heading">{this.state.advice}</h1>
          <button className="button" onClick={this.fetchAdvice}>
                        <span>GIVE ME ADVICE!</span>
                        {/* when we call the fetchAdvice function it updates the advice in the state 'advice' and returns it in the heading where were calling to display it */}
          </button>
        </div>
      </div>
    );
  }
}

export default App;