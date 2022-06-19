//import logo from './logo.svg';
import './App.css';
import NavigationBar from './components/NavigationBar';
import Home from './pages/Home'
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom'
import Profile from './pages/Profile'
import Detail from './pages/Detail'
function App() {
  return (
    <>
       <NavigationBar/>
       <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/profile/:id' element={<Profile/>} />
        <Route path='/posts/:id' element={<Detail/>}/>
       </Routes>
       <Footer/>

    </>
  );
}

export default App;

