import React from 'react'
import nameContext from '../NameContext'
import lastNameContext from '../lastNameContext'
// The Solution: useContext:
// import { useContext } from 'react'

// const Child4 = () => {
//   const firstName = useContext(nameContext);
//   const lastName = useContext(lastNameContext);

//   return <h1>Name: {firstName} {lastName}</h1>;
// }

// The Problem: callback hell 
const Child4 = () => {
  return (
    <nameContext.Consumer>
      {firstName => {
        return (
          <lastNameContext.Consumer>
            {lastName => {
              return(
                <h1>Name: {firstName} {lastName} </h1>
              )
            }}
          </lastNameContext.Consumer>
        )
      }}
    </nameContext.Consumer>
  )
}

export default Child4