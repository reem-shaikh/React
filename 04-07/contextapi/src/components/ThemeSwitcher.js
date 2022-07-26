import React, { Component } from 'react'
import { AppContext } from './Context';
//in order to access it 
import setName from './setName';

//consuming the context over here 
export default class ThemeSwitcher extends Component {
  setTheme = (e) => {
    //cannot import hooks in class based components 
    // const [nm, setNm] = setName();

    if(e.target.checked) {
      this.context.setDarkTheme();
    } else {
      this.context.setLightTheme()
    }
  }
  render() {
    //were retreiving context from AppContext
    console.log(this.context);

    return (
      <>
      <input type="checkbox" id='theme_checkbox' checked={this.context.isDarkTheme} onChange={this.setTheme} />
      <label htmlFor='theme_checkbox'>Make it Night Time</label>
      </>
    )
  }
}

ThemeSwitcher.contextType = AppContext;