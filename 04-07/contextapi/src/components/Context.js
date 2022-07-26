import React, { Component, createContext } from 'react';

// were creating context variable here 
const AppContext = createContext();
export {AppContext};

export default class Context extends Component {
  constructor() {
    super();
    //CONTEXT STATE 
    this.state = {
      // initially dark theme is set to false 
      isDarkTheme: false,
    }
  }

  // REDUCERS 
  // switch to dark theme
  setDarkTheme = () => {
    this.setState({isDarkTheme: true});
  }

  // set to light theme 
  setLightTheme = () => {
    this.setState({isDarkTheme: false});
  }

  render() {
    let ctxObj = {
      isDarkTheme: this.state.isDarkTheme,
      //HELPER FUNCTIONS 
      setDarkTheme: this.setDarkTheme,
      setLightTheme: this.setLightTheme 
    };
    return (
      <AppContext.Provider value={ctxObj}>
        {this.props.children}
      </AppContext.Provider>
    )
  }
}