import { Component } from "react"
import React from 'react'
import geekContext, { Context } from './Context.js';

class ChildTwo extends React.Component {
    constructor() {
        super()
    }

render(){
  return (
        <GeekConsumer>
            {(context) => {
                return (
                    <div>
                        <h1>hello world</h1>
                        <p>{context.name}</p>
                    </div>
                )
            }}
        </GeekConsumer>
  )
}
}

export default ChildTwo