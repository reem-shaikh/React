import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
//were importing card component in App.js (App component)
import Card from './Card.js';

class App extends Component {
  render(){
    return (
      <div className="App">
       <button>
         <a>hello</a>
       </button>
       <hr />
       <Card name="Reem" age="20"></Card>
       <hr />
       <Card name="Bro" age="20"></Card>

      </div>
    );
  }
}


export default App;
