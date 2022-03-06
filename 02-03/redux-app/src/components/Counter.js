import React, { Component } from 'react'
//rcc
import { Dispatch } from 'redux'
import {connect} from 'react-redux'

import increaseAction from './actions/action'

class Counter extends Component {

    constructor(){
        super()
        this.state = {
            count: 0,
        }
    }

    // increase = () => {
    //     this.setState({count: this.state.count + 1})
    // }

    // decrease = () => {
    //     this.setState({count: this.state.count - 1})
    // }

    dispatchDecrease = () => {
        this.props.dec()
    }

    dispatchIncrease = () => {
        this.props.inc()
    }

  render() {
    return (
      <div>
          <button onClick={this.dispatchIncrease}>increase</button>

          {/* we want to recieve this count through the store and not the state */}
          {/* {this.state.count} */}

          {this.props.geekCount}
          <button onClick={this.dispatchDecrease}>decrease</button>
      </div>
    )
  }
}

//mapstatetoprops - gets access to read redux store data 
//has the making the order function
const mapStateToProps = (reduxStoreObject, props) => {
    console.log(reduxStoreObject)
    return {
        geekCount: reduxStoreObject.count
    }

}

//has the giving order function 
//this function is used to create functions and return it 

//when redux calls this function 
//this function mapDispatchToProps internally it will have access to dispatch and props

//we can update the props of counter component using mapDispatchToProps

//mapDispatchToProps gets dispatch function by default through redux, you dont need to import it 

//this function can send things (actions, through dispatch function) to the reducer function 

const mapDispatchToProps = (dispatch, props) => {
 
    //the action object is passed inside dispatch
    //in order to trigger action, its wrapped inside dispatch 
    const inc = () => {
        //action is an object, which should have a type property 
        const increaseAction = {
            type: "INCREASE"
        }
        //as soon as dispatch is triggered 
        //action is dispatched and that comes to reducer 
        dispatch(increaseAction)

        //when inc() is called it will call the dispatch 
    }

    const dec = () => {
        //action is an object, which should have a type property 
        // const decreaseAction = {
        //     type: "DECREASE",
        //     //we specified the functionality of the function inside reducer.js 
        //     amount: 2,
        // }
        //dispatch the actual action 
        dispatch(decreaseAction(5))

        //when inc() is called it will call the dispatch 
    }

    //to acces these functions inside our function
    //this.props.inc
    return {
        //we can even write it as 
        // inc: inc, 
        // dec: dec
        inc, 
        dec, 
    }
}

//export default Counter

//under the hood, redux does this 
//export default connect(mapStateToProps, mapDispatchToProps)(Counter)

//mapStateToProps contains the redux state, not the state of the component 
export default connect(null, mapDispatchToProps)(Counter)
//in which component do you want to add the props - counter 
//that's what we specify over here 