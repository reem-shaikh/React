import React, {Component} from 'react'

class Card extends Component{
    // Constructor added 
    // props contains all the data that we sent from App.js compoenent to Card.js component
    constructor(props){
        super(props)
        this.state = {myName: 'Geek'}
    }
    render(){
        return(
            <div className="container">
                <h2>This is Props: {this.props.name}</h2>
                <h2>This is Props: {this.props.age}</h2>
                <h2>This is property of class Card: {this.state.myName}</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente repellat fugiat perferendis nisi praesentium, quasi ipsam cum eius maiores iure rem deleniti voluptas adipisci nostrum accusamus asperiores vitae doloremque ab et totam magni. Hic, magnam? Est esse accusamus sit aspernatur.
                </p>
            </div>
        );
    }
}

export default Card;