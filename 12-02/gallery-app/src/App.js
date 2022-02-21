import logo from './logo.svg';
import './App.css';
import React from 'react'
import Gallery from './Gallery';
import './Gallery.css'

function App() {
  return (
    <div className="App">
       <div className="container" >
        <header className="header" >
            <div className="branding">
                <h1 className="title"><a href="#">Flexbox</a></h1>
                <h2 className="description">Photo Portfolio using Flexbox</h2>
            </div>
          <nav className="main-navigation">
            <div>
                <ul className="menu">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Shop</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Elements</a></li>
                       <li><a href="#">Pages</a>
                         <ul>
                          <li><a href="#">Portfolio Item</a></li>
                          <li><a href="#">Blog Article</a></li>
                          <li><a href="#">Shop Item</a></li>
                          <li><a href="#">Portfolio Category</a></li>
                         </ul>
                       </li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
          </nav>
        </header>
      </div>
      {/* <h1 style={{textAlign: 'center', fontFamily: 'times new roman', marginBottom: '80px'}}>Image Gallery</h1> */}
      {/* <h2  style={{textAlign: 'center'}}>lorem ipsum dolor</h2> */}
      <Gallery />
    </div>
  );
}

export default App;
