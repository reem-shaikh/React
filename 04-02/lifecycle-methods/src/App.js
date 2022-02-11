import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'
import User from './User';

class App extends React.Component {
   constructor(){
     super()
     console.log('constructor')
     this.state = {
       toggle: true
     }

   }
   componentDidMount(){
    console.log('componentdidmount')

   }

    componentDidUpdate(){
       console.log('updated')
    }

    render(){
      console.log('render')
      return (
        <>
        {
          (this.state.toggle? 
          <User />:null)
        }
        <button onClick={()=> {
          this.setState({toggle:!this.state.toggle})
        }}>Delete user</button>
        </>

      );
    }
}

export default App;
