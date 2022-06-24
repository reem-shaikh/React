//import ThemSwitcher.js inside NavigationBar.
import React from 'react';
import { setThemeDark, setThemeLight } from '../slice';
import MaterialUISwitch from './MaterialUISwitch';
import { useSelector, useDispatch } from 'react-redux';

const ThemeSwitcher = (props) => {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.theme);

  //actions are dispatched here 
  const changeTheme = e => {
    if(e.target.checked) {
      dispatch(setThemeDark());
    } else {
      dispatch(setThemeLight());
    }
  }

  return (
    <>
      <MaterialUISwitch onChange={changeTheme} theme={theme} />
    </>
  )
}

export default ThemeSwitcher