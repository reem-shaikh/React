//import logo from './logo.svg';
import './App.css';
import NavigationBar from './components/NavigationBar';
import Home from './pages/Home'
import Search from './pages/Search'
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom'
import Profile from './pages/Profile'
import Detail from './pages/Detail'
function App() {
  return (
    <>
       <NavigationBar/>
       {/* these are all the pages, that would be rendered when the url path matches */}
       <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/profile/:id' element={<Profile/>} />
        <Route path='/post/:id' element={<Detail/>}/>
        <Route path='/search' element={<Search/>}/>
       </Routes>
       <Footer/>

    </>
  );
}

export default App;

