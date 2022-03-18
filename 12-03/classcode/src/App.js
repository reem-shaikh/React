import logo from './logo.svg';
import './App.css';
import Contact from './components/Contact';
import Home from './components/Home';
import About from './components/About';
import NotFound from './components/NotFound';
import Navigation from './components/Navigation';
import {Route, Routes} from 'react-router-dom'
import VideoPlayer from './components/VideoPlayer';

function App() {
  return (
    <>
    <h1>hi</h1>
    {/* Navigation written outside Routes, because its always available */}
    <Navigation />
    <Routes>
      <Route path='/about' element={<About/>} /> 
      <Route path='/contact' element={<Contact/>} /> 
      <Route path='/' element={<Home/>} /> 
      <Route path='*' element={<NotFound/>} /> 
     </Routes>
     <VideoPlayer/>
    </>
  );
}

export default App;
