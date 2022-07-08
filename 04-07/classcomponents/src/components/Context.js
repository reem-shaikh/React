import React, { Component, createContext } from 'react';

const AppContext = createContext();
export {AppContext};

export default class Context extends Component {
  constructor() {
    super();
    // context state 
    this.state = {
      isDarkTheme: false,
    }
  }

 //component functions : same as reducers 
  setDarkTheme = () => {
    this.setState({isDarkTheme: true});
  }

  setLightTheme = () => {
    this.setState({isDarkTheme: false});
  }

  render() {
    // sending this object in the provider 
    // ctx has 3 key values 
    let ctxObj = {
      // actual value 
      isDarkTheme: this.state.isDarkTheme,
      // helper function to set the dark theme and light theme 
      setDarkTheme: this.setDarkTheme,
      setLightTheme: this.setLightTheme 
    };
    return (
       // in context provider we can only provide one value 
      // we dont need dispatch, it dispatches action through pops 
      <AppContext.Provider value={ctxObj}>
        {this.props.children}
      </AppContext.Provider>
    )
  }
}