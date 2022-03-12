// This is HOC component 
import React, { Component } from 'react'

// HIGHER ORDER FUNCTION 
// HOC accepts an original component as a parameter and returns a new component

// HOC takes the originalComponent as its parameter 
const withCounter = (OriginalComponent) => {
    // HOC returns a new component 
    class NewComponent extends React.Component {
        //adding the reusable code
        constructor(props) {
            //rconst
          super(props)
        
          this.state = {
             count: 0
          }
        }
        
        increementCount = () => {
            this.setState( prevState => {
                return {count: prevState.count + 1}
            })
        }

        render(){
            //render the original component 
            return <OriginalComponent 
            count={this.state.count}
            increementCount={this.increementCount} />
        }
    }
    // and return the new component 
    return NewComponent
}

export default withCounter