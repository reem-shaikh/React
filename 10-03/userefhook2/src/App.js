import logo from './logo.svg';
import './App.css';
import Focus from './Focus'
import Refone from './Refone';
import Ref from './Ref'
import RefTwo from './RefTwo'
import RefThree from './RefThree';
import RefFour from './RefFour';

function App() {
  return (
    <div className="App">
       {/* Focus on the input field using input.current.focus - useRef */}
       <Focus/>

       {/* When we enter in input field it logs the state on the screen, but when we click on rupees and dollars button it shows undefined*/}
       <Ref/>

       {/* when we enter in input field it logs the state on the screen, and when we click on ruppees and dollar button it retreives its reference, adds the style property and returns it to us using current.value  - useRef */}
       <Refone/>

       {/* renderCount renders infinite times - useState  */}
       {/* <RefTwo/> */}

      {/* renderCount renders once - useRef */}
       {/* <RefThree/> */}

       <RefFour/>
    </div>
  );
}

export default App;
