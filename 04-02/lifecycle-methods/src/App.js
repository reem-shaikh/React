import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react'

class App extends React.Component {

  //1. constructor is called 
   constructor(){
     super()

     this.state = {
       show: true 
     }
     console.log('constructor')
   }

   //3. this is called at last 
   //when component is ready, this function is called 
   componentDidMount(){
    console.log('mounted')
   }

    render(){
      //2. render is called 
      console.log('render')
      return (
        <div>life cycle method</div>

      );
    }
}

export default App;
