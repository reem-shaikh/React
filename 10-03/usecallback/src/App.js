import logo from './logo.svg';
import './App.css';
import ParentComponent from './components/ParentComponent'

function App() {
  console.log('app')
  return (
    <div className="App">
      <header className="App-header">
        <ParentComponent/>
      </header>
    </div>
  );
}

export default App;
