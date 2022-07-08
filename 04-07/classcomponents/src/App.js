import logo from './logo.svg';
import './App.css';
import Comp1 from './components/Comp1';
import Mounting from './components/Mounting';
import ComponentDidMount from './components/ComponentDidMount';
import ComponentWillUnmount from './components/ComponentWillUnmount';
import ComponentDidUpdate from './components/ComponentDidUpdate';
import ThemeSwitcher from './components/ThemeSwitcher';
import Content from './components/Content';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Context from './components/Context';
import Navigation from './components/Navigation';
import useNetwork from './components/useNetwork'
import {useState} from 'react'
function App() {
  const {isOnline}= useNetwork()
  const [name, setName] = useState('hi')
  return (
    <div className="App">
      <header className="App-header">
        {/* <Comp1 text='text'/> */}
        {/* <Mounting/> */}
        {/* <ComponentDidMount/> */}
        {/* <ComponentWillUnmount/> */}
        <ComponentDidUpdate name={name}/>
        {/* <BrowserRouter>
      <Context>
        <ThemeSwitcher />
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
        <Navigation />
      </Context>
    </BrowserRouter> */}
      </header>
      <h3>Internet Status (🌐) - {isOnline ? "✔️" : "❌"}</h3>
    </div>
  );
}

export default App;
