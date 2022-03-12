import React, { Component, createContext } from 'react'
import ComA from './CompA'

const FirstName = createContext()
const LastName = createContext()

const App = () => {
  return (
    <>
    {/* provider has a fixed prop keyname called "value" , through provider were passing this value to all its child components*/}
    <FirstName.Provider value={"reem"}> 
        <LastName.Provider value={"shaikh"}>
          <ComA />
        </LastName.Provider>
    </FirstName.Provider>
    </>
  )
}

export default App  
export {FirstName, LastName}