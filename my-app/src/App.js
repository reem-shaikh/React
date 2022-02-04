import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'

function App() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
   <a className="navbar-brand" href="/">Navbar </a>
   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
     <span className="navbar-toggler-icon"></span>
   </button>
   <div className="collapse navbar-collapse" id="navbarText">
     <ul className="navbar-nav mr-auto">
       <li className="nav-item active">
         <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
       </li>
       <li className="nav-item">
         <a className="nav-link" href="/">Features</a>
       </li>
       <li className-="nav-item">
         <a className="nav-link" href="/">Pricing</a>
       </li>
     </ul>
     <span className="navbar-text">
       Navbar text with an inline element
     </span>
   </div>
 </nav>

 <Navbar title="Reem" aboutText="navbar yo"></Navbar>

     </>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

  );
}

export default App;
