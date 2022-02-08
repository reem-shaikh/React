## Form with 2 components, multiple fields and css 
> App.js 
```bash 
import logo from './logo.svg';
import './App.css';
//importing our component
import MultipleInputs from './component/MultipleInputs.js';


const App = () => {
  return (
     <>
     <MultipleInputs></MultipleInputs>
     </>
  );
}

export default App;
```
> child.js 
```bash 
import React, { Component } from 'react';
import Form from './Form';
import '../App.css';

export default class Child extends Component {
  render() {
    return (
        // <h1>{this.props.value} : {this.props.value1}</h1>
        <div>
             <div className='showDataStyle'>
                <p> {this.props.value} </p>
                <p> {this.props.value1} </p>
                <p> {this.props.value2} </p>
                <p> {this.props.value3} </p>
            </div>
        </div>
    );
  }
}
```
> App.js 
```bash 
import logo from './logo.svg';
import './App.css';
//importing our component
import Form from './component/Form';


const App = () => {
  return (
     <>
     <Form></Form>
     </>
  );
}

export default App;
```