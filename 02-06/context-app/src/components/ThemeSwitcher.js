import React, {useContext} from 'react';
import SetThemeContext from '../SetThemeContext';
import '../ThemeSwitcher.css';

//We set the setTheme state in this component 
const ThemeSwitcher = () => {
  const setThemeContext = useContext(SetThemeContext);

  //setTheme function is responsible for setting the state value for setThemeContext, it returns either true or false value, which depicts whether its light mode or dark mode 
  const setTheme = e => {
    console.log(e.target.checked);
    setThemeContext(e.target.checked);
    //true -> light mode
    //false -> dark mode
  }

  return (
    // everytime the user clicks on the checkbox, setTheme function is invoked 
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