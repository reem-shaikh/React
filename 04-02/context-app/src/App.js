import React, { Component, createContext } from 'react';
//importing context over here 
import Componenta from './Componenta'

//we created a new context variable called FirstName
//the provider is responsible for passing the value we want to pass to our child component 
const FirstName = createContext();
const LastName = createContext();

const App =()=> {
  return (
    <>
  {/*The Provider component accepts a value(prop)and passes it to consuming components that are descendants of this Provider. All consumers that are descendants of the Provider will re-render whenever the Provider’s value prop changes. */}
  <FirstName.Provider value={"reem"}>
    <LastName.Provider value={"Shaikh"}>
      <Componenta /> 
    </LastName.Provider>
  </FirstName.Provider>

   </>
  );
}

export default App;

//we need to export this particular context and we'll import it in the component we want to import the value in 
export {FirstName}
export {LastName}