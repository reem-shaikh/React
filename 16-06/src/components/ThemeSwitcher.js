//copy from previos project

//we'll use dispatch object here to dispatch actions 
//dispatching an object over here, in Input.js we were dispatching a function
import React from 'react';
import '../ThemeSwitcher.css';
import { useDispatch } from 'react-redux';
import { setDarkTheme, setLightTheme } from '../Actions';

//in this component were dispatching a couple actions 

const ThemeSwitcher = () => {
  const dispatch = useDispatch();

  const setTheme = e => {
    if(e.target.checked) {
      dispatch(setLightTheme);
    } else {
      dispatch(setDarkTheme);
    }
  }
  
  return (
    //when user clicks on the checkbox trigger the setTheme function which is responsible for dispatching the actions (that was first defined inside Reducers but set inside Actions)
    <div className="container">
      <div className="toggle-switch">
        <input 
          type="checkbox" 
          className="checkbox" 
          name="theme" 
          id="theme"
          onChange={setTheme} 
        />
        <label className="label" htmlFor="theme">
          <span className="inner" />
          <span className="switch" />
        </label>
      </div>
    </div>
  )
}

export default ThemeSwitcher