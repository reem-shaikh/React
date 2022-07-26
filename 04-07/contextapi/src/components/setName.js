import { useState } from 'react'

//useName is a custom hook 
const useName = () => {
  const[name, setName] = useState();

  //were encapsulating useState hook within the custom hook
  const setSomething = (data) => {
    setName(data);
  }

  //returning the updated value 
  return [name, setSomething];
}

export default useName