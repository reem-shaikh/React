import './App.css';
import useNetwork from './components/useNetwork';
// how to detect internet or not?
function App() {
  //extracting the state from useNetwork
  const {isOnline} = useNetwork();
  
  return (
    <div className="App">
      <h3>Internet Status (🌐) - {isOnline ? "✔️" : "❌"}</h3>
    </div>
  );
}

export default App;