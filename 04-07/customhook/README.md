# Custom Hook 

## Offline detector 
- ensure that custom hooks start with use*
> useNetwork.js 
```bash
import {useState, useEffect} from 'react';
#all custom hooks start with use 

const useNetwork = () => {
  #maintaining isOnline state over here 
  const [networkStatus, setNetworkStatus] = useState({isOnline: true});

  useEffect(() => {
    const networkStatusChanged = (e) => {
      if(e.type === "offline") {
        setNetworkStatus({isOnline: false});
      } else {
        setNetworkStatus({isOnline: true});
      }
    }

    #attaching event listeners to the state change 
    window.addEventListener('offline', networkStatusChanged);
    window.addEventListener('online', networkStatusChanged);
  
    return () => {
      #remove event listener on every re-render 
      window.removeEventListener('offline', networkStatusChanged);
      window.removeEventListener('online', networkStatusChanged);
    }
  }, [])
  
  return networkStatus;
}
export default useNetwork;
```
> App.js 
```bash
import './App.css';
import useNetwork from './components/useNetwork';
# how to detect internet or not?
function App() {
  
  #we retreived the state isOnline via object destructuring from the custom hook useNetwork() we created 
  const {isOnline} = useNetwork();
  
  return (
    <div className="App">
      <h3>Internet Status (🌐) - {isOnline ? "✔️" : "❌"}</h3>
    </div>
  );
}

export default App;
```