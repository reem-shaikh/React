import React, { Component } from 'react';

class Card extends Component {
  constructor(props){
      super(props)
  }

  //props is just an object with a key:value pair
  render() {
    return <div>
        <h2>{this.props.name} : {this.props.geek}</h2>

    </div>;
  }
}

export default Card;
