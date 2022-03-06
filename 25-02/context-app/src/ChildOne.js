import { Component } from "react"
import React from 'react'
import { Context } from "react"

class ChildOne extends React.Component {

    constructor() {
        super()
    }
render(){
  return (
    <div>
        {this.context.name}
    </div>
  )
}
}

export default ChildOne