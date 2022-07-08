import React, { Component, Fragment} from 'react'
//you can use Fragment as a HOC also
class LikeDislike extends Component {
  constructor(){
    super();
    this.state = {
        counter: 0,
        list: []
    }

    // This TypeError is obvious now because this is pointing to the props object which doesn’t know the existence of any setState function. The setState function is only a property of componentInstance.

    // So, to fix this problem, we have to bind the handleClick function inside the constructor:

    //to let the app know of the existence of setState we'll bind the app
    //binds this keyword which you can use later onclick
    this.like = this.like.bind(this)
    //this.dislike = this.dislike.bind(this)
    //bind bind whatever object you pass as an argument to the this keyword of the function

    //If your funcs don't require access to the state of your component you don't need to bind them.
    //bind will bind, and will ask the user to call it later, unlike call() and apply()

    //in the non bind approach, we'll use the arrow function
  }

  //on mounting of component 
  //same as useEffect with empty dependency array
  componentDidMount(){
    fetch('https://reqres.in/api/users')
    .then(data => data.json()).
    then(data => this.setState({list: data.data}))
  }

  //allows us to access prev state and prev props 

  //useEffect we could pass the state we want to track in the dependency array
  //called immediately after update occurs

  //snapshot of virtual dom before its updated 
  //just before updating your DOM, it returns the virtual DOM snapshot
  componentDidUpdate(prevprop, prevstate, snapshot){
    //component re-rendered everytime state is changed 

    //this.state stores current state 
    //when we increment its on 1
    console.log(prevstate, this.state)  //0, 1

    //getsnapshotbeforeupdate to set the ref
  }

  //same as cleanup function in useeffect
  componentWillUnmount(){
    //this is cleanup of components, remove any event listeners if any 

  }

  like(){
    this.setState({counter: this.state.counter + 1})
  }

  dislike = () => {
    this.setState({counter: this.state.counter - 1})
  }
  render() {
    return (
      <>
       <button onClick={this.like} style={{backgroundColor: 'gray', border: '1px solid black'}}>like</button>
       <p>{this.state.counter}</p>
       <button onClick={this.dislike} style={{backgroundColor: 'gray', border: '1px solid black'}}>dislike</button>
       {this.state.list.map((e, k) => {
        return <h5 key={k}>{e.first_name}</h5>
       })}
      </>
    )
  }
}

export default LikeDislike;