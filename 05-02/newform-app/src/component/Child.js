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
