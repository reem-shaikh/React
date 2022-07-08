// hook is a wrapper of the state

//created a custom hook for online and offline 
//https://developer.mozilla.org/en-US/docs/Web/API/Navigator/onLine

//create hook for battery percent changing 
import {useState, useEffect} from 'react';
const useNetwork = () => {
  const [networkStatus, setNetworkStatus] = useState({isOnline: true});

  useEffect(() => {
    const networkStatusChanged = (e) => {
      if(e.type === "offline") {
        setNetworkStatus({isOnline: false});
      } else {
        setNetworkStatus({isOnline: true});
      }
    }

    window.addEventListener('offline', networkStatusChanged);
    window.addEventListener('online', networkStatusChanged);
    // window.navigator.connection.onchange = function (e) {
    //   console.log(e);
    // }
  
    return () => {
      window.removeEventListener('offline', networkStatusChanged);
      window.removeEventListener('online', networkStatusChanged);
      // window.navigator.connection.onchange = () => {};
    }
  }, [])
  
  return networkStatus;
}
export default useNetwork;