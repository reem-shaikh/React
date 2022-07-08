import {useState} from 'react'

// custom name start with use 
//cusstom hook is wrapper around useState 
const useName = () => {
  const[name, setName] = useState();

  const setSomething = (data) => {
    setName(data);
  }

  return [name, setSomething];
}

export default useName