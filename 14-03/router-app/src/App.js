
import './App.css';
import {BrowserRouter as Router, Routes, Route, Link, } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Error from './pages/Error';
import PrivateRoute from './pages/PrivateRoute';
import { useState } from 'react';


function App() {
  const [isLogged, setIsLogged] = useState(false)

  return (
  <div className='App'>
  <button onClick={() => setIsLogged(true)}>Login</button>
    
  <button onClick={() => setIsLogged(false)}>LogOut</button>
    <Router>
      <nav>
        <Link to="/">Home</Link> <br></br>
        <Link to="/profile">Profile</Link>
      </nav>
      <Routes>
         <Route path="/" element={<Home/>} />
         <Route element={<PrivateRoute isLogged={isLogged}/>} >
           <Route path='/profile' element={<Profile/>} />
         </Route>
         <Route path="*" element={<Error />}/>
      </Routes>
    </Router>
  </div>
  );
}

export default App;
