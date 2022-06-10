import logo from './logo.svg';
import './App.css';
import Homepage from './components/Homepage';
import About from './components/About';
import Navigation from './components/Navigation';
import Secret from './components/Secret';
import {Routes, Route} from 'react-router-dom'
import NoMatch from './components/NoMatch';
import Products from './components/Products';
import FeaturedProducts from './components/FeaturedProducts';
import NewProducts from './components/NewProducts';
import Users from './components/Users';
import Details from './components/Details';
import Admin from './components/Admin';
import UserDetails from './components/UserDetails';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
         <Navigation/>

        {/* routes is an HOC */}
      <Routes>
           {/* if path matches show this component */}
           <Route path='/homepage' element={<Homepage/>}/>
           <Route path='/about' element={<About/>}/>
           {/* 
           Is Route an HOC?
           for a component to be hoc - it should have seperate closing and it should be as a child */}
          <Route path='secret' element={<Secret/>}/>

           {/* this route will match only when no other route does */}
          <Route path='*' element={<NoMatch/>} />

          {/* nested Routes  */}
          {/* confugure routes to render child components within parent component */}
          <Route path='products' element={<Products/>}> 
             {/* define 2 new routes */}
          <Route path='featured' element={<FeaturedProducts/>}/>
          <Route path='new' element={<NewProducts/>} />
        </Route>

{/* this is a path parameter - parameterized url */}
        <Route path='users/:userId' element={<Details/>} />
        {/* 
        <Route path='users' element={<Users/>} />
        <Route path='users/1' element={<Details/>}/>
        <Route path='users/2' element={<Details/>} /> 
        */}
      <Route path='users' element={<Users/>}>
        <Route path='userId' element={<UserDetails/>} />
        <Route path='admin' element={<Admin/>} />
      </Route>
    
     </Routes>
      </header>
    </div>
  );
}

export default App;
