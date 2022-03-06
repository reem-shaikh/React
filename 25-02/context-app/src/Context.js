import React from "react"

const geekContext = React.createContext()
//storing context in a constant geekContext 

// properties of context (Provider and consumer are react components)
// giving data - wrap contents in provider 
// use data that was passed - consumer 

// when you want to give some data - provide 
const GeekProvider = geekContext.Provider
// when you want to have access with that data - consumer 
const GeekConsumer = geekContext.Consumer

export default geekContext