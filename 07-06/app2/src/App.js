import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import Homepage from './components/Homepage';
import About from './components/About';
import { Route, Routes } from 'react-router-dom';
import Video from './components/Video';
import Secret from './components/Secret';
import User from './components/User'
import Match from './components/Match';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Video />
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Navigation />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/about' element={<About />} />
          {/* path parameter - useParams*/}
          <Route path="/secret/:username" element={<Secret />} />

          {/* Path parameter can be implemented by using useParams hook */}
          {/* were adding an extra parameter which we can fetch dyanamically */}
            <Route path='/user/:fname' element={<User/>} />
        </Routes>
      </header>
    </div>
  );
}

export default App;