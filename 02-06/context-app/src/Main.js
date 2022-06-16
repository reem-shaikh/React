import React, { useContext } from 'react'
//import logo from './logo.svg';
import Child1 from './components/Child1';
import ChildA from './components/ChildA';
import ThemeSwitcher from './components/ThemeSwitcher';
import ThemeContext from './ThemeContext';

//were retreiving the props passed by the context provider object here at the consumer end, over here, we've imported the useContext hook to import the ThemeContext value i.e theme which is requiring for displaying the final theme 
const Main = () => {
  const isLight = useContext(ThemeContext);

  return (
    //when value={theme} is true then simply add the light class from App.css 
    <div className={`App ${isLight?"light": ""}`}>
      <header className="App-header">
        {/* were rendering themeSwitcher component over here */}
        <ThemeSwitcher />
        <Child1 />
        <ChildA />
      </header>
    </div>
  )
}

export default Main