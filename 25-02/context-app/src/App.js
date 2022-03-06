import logo from './logo.svg';
import './App.css';
import ChildOne from './ChildOne';
import ChildTwo from './ChildTwo';
import geekContext, { Context } from './Context.js';

import React from 'react';
import {Component} from 'react'

class App extends React.Component{
constructor(){
  super()
  this.state = {
    name: 'geek',
    age: 25,
    changeFn: this.changeState
  };
}

changeState = () => {
  this.setState({
    name: 'adarsh',
    age: 70,
  })
}
render(){
  // const obj = {
  //   name: 'geek',
  //   age: '20'
  // }
  return (
    //wrap the data we want to send inside the provider component 
    <div className="App">
      <button onClick={() => this.changeState}>click me</button>
      <GeekProvider value={this.state}>
        {/* we want to change state of the parent from the child component; we acheive it  by using the callback function, when were using props */}
         {/* <ChildOne callback={this.changeState}
         /> */}

        {/* however we can also do this by using the context */}
        <ChildOne />
        <ChildTwo />
      </GeekProvider>
    </div>
  );
}
}

export default App;
