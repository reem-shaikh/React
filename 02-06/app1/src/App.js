import './App.css';
import Header from './components/Header';
import ImageList from './components/ImageList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  console.log(process.env.REACT_APP_API_KEY)

  return (
    <div className="App">
     <Header/>
     <ImageList/>
    </div>
  );
}

export default App;
