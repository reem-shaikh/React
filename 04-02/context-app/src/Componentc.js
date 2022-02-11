import React from 'react';
//importing both the createContext
import { FirstName, LastName } from './App';

function Componentc() {
  return (
    <>
    {/* Through Consumer we can consume the data passed by the provider */}

    {/* inside the FirstName w have declared a variable inside fat arrow function and returned the value 
    
    inside the return statment of FirstName we have defined LastName, inside which we defined a fat arrow function and returned both the values 
    
    this is typically like nesting.
    */}
     <FirstName.Consumer>
        {(fname) => {
          return (
          <LastName.Consumer>
           {(lname) => {
             return <h1>meow {fname}{lname}</h1>
           }}
          </LastName.Consumer>
          );

        }}
     </FirstName.Consumer>
    </>
  );
}

export default Componentc;
