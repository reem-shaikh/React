import {useState, useEffect} from 'react';
//all custom hooks start with use 
const useNetwork = () => {
  //hook is a wrapper 
  //maintaining isOnline state over here 
  const [networkStatus, setNetworkStatus] = useState({isOnline: true});

  useEffect(() => {
    const networkStatusChanged = (e) => {
      if(e.type === "offline") {
        setNetworkStatus({isOnline: false});
      } else {
        setNetworkStatus({isOnline: true});
      }
    }

    //attaching event listeners to the state change 
    window.addEventListener('offline', networkStatusChanged);
    window.addEventListener('online', networkStatusChanged);

    // window.navigator.connection.onchange = function (e) {
    //   console.log(e);
    // }
  
    return () => {
      //remove event listener on every re-render 
      window.removeEventListener('offline', networkStatusChanged);
      window.removeEventListener('online', networkStatusChanged);
      // window.navigator.connection.onchange = () => {};
    }
  }, [])
  
  return networkStatus;
}
export default useNetwork;