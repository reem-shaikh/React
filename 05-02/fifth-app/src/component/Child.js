import React, { Component } from 'react';
import Form from './Form';

export default class Child extends Component {
  render() {
    return (
        <h1>{this.props.value}</h1>
    );
  }
}
