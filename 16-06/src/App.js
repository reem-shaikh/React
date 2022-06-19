import logo from './logo.svg';
import './App.css';
import Name from './components/Name';
import Input from './components/Input';
import { useSelector } from 'react-redux';
import ThemeSwitcher from './components/ThemeSwitcher';
import { useEffect } from 'react';

function App() {

  // useEffect(() => {
  //   const data = "hkjsdghdjhjk";
  //   dispatch(action(data));
  // }, [])

  const isLight = useSelector (state => state.isLight);
  return (
    <div className={`App ${isLight? "light": ""}`}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ThemeSwitcher />
        <Name />
        <Input />
      </header>
    </div>
  );
}

export default App;