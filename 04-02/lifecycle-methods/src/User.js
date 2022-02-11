import React, { Component } from 'react';

export default class User extends Component {
  componentWillUnmount(){
        console.log('unmounted')
     }

  render() {
  console.log('user render method')
    return <div>
        <ul>
            <li> Name: Resin </li>
            <li> Email: Resin@gmail.com </li>
        </ul>
    </div>;
  }
}
