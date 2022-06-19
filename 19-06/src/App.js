//import logo from './logo.svg';
import './App.css';
//we imported this bootstrap class in App.js to render the Header styling imported from react-bootstrap 
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
//importing both the components 
import CardsDetails from './components/CardsDetails';
import Cards from './components/Cards';
import Footer from './components/Footer'
//setting Routing here 
import {Routes,Route} from "react-router-dom";

function App() {
  return (
  <>
   <Header />
   <Routes>
     <Route path='/' element={<Cards />} />
     <Route path='/cart/:id' element={<CardsDetails />} />
   </Routes>
   <Footer/>
  </>
  );
}

export default App;
