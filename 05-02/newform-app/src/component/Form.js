import React, { Component } from 'react';
import Child from './Child.js'

export default class Form extends Component {
  constructor(){
  super()

  this.state = {
    value: '',
    value1: '',
    value2:'',
    value3:'',
    show: false
  }

  this.handleChange = this.handleChange.bind(this)
  this.handleChange1 = this.handleChange1.bind(this)
  this.handleChange2 = this.handleChange2.bind(this)
  this.handleChange3 = this.handleChange3.bind(this)
  this.handleSubmit = this.handleSubmit.bind(this)
}

//when user enters something in the input field, its value is fetched and re-assigned to statevalue 
handleChange(e){
    console.log('e', e)
    const {value} = e.target
    this.setState({value: value})

}

handleChange1(e){
    console.log('e', e)
    const {value} = e.target
    this.setState({value1: value})

}

handleChange2(e){
    console.log('e', e)
    const {value} = e.target
    this.setState({value2: value})

}

handleChange3(e){
    console.log('e', e)
    const {value} = e.target
    this.setState({value3: value})

}


handleSubmit(e){
    e.preventDefault()
    //when user clicks on submit button, this.state.show becomes set to true 

    this.setState({show: !this.state.show})
    //when click is over, this.state.show is toggled back to false and this.state.statevalue dissapears becuase this.state.show is false now 

}
  render() {
    return (
        <>
  <div className="container">
        <div className="title">
            Registration
        </div>
        <form action="" onSubmit={this.handleSubmit}>
            <div className="user-details">
                <div className="input-box">
                    <span className="details">
                      <label htmlFor="username">Full Name</label>
                    </span>
                    <input type="text" name="username" 
                    onChange={this.handleChange} 
                    id="username"
                    placeholder="enter your name" 
                    autoComplete="on"
                    required />
                </div>

                <div className="input-box">
                    <span className="details">
                         <label htmlFor="email">e-mail</label>
                    </span>
                    <input type="email" name="email" 
                    onChange={this.handleChange2} 
                    id="email"
                    autoComplete="on"
                    placeholder="enter your email" required
                    />
                </div>

                <div className="input-box">
                    <span className="details">
                        <label htmlFor="phone">Phone</label>
                    </span>
                    <input type="tel" name="phone"
                    onChange={this.handleChange3} 
                    id="phone"
                    autoComplete="on"
                    placeholder="enter your phone number" required />
                </div>

                <div className="input-box">
                    <span className="details">
                      <label htmlFor="password">Password</label>
                    </span>
                    <input type="password" name="password"
                    onChange={this.handleChange1} 
                    id="password"
                    autoComplete="on"
                    placeholder="enter your name" required />
                </div> 
        
            </div>
            {/* user details ends */}
            <button type="submit" className="button" >submit</button>
          </form>    
    </div>
    <div>
     {/* were passing state variable to the child component */}
    {this.state.show === true && <Child value={this.state.value} value1={this.state.value1} value2={this.state.value2} value3={this.state.value3}  />}
    </div>
     </>

    );
  }
}
