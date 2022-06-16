import React from 'react'
import nameContext from '../NameContext'

// The Problem: callback hell 
const Child4 = () => {
  return (
    <nameContext.Consumer>
      {param => {
         return (
            <p>{param}</p>
         )
      }}
    </nameContext.Consumer>
  )
}

export default Child4