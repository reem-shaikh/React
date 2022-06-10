// Higher Order Components is used to share common functionality between components 
// HOC is a pattern where a function takes a component as an argument and returns a new component 

// syntax for HOC pattern:
// HOC takes an original component, adds functionality and returns an enhanced component
// const EnhancedComponent = higherOrderComponent(originalComponent)
// const ironMan = withSuit(TonyStark)

// HOC file naming convention
// Pascal casing 

import React from "react";
// function which accepts originalComponent and returns EnhancedComponent 
const EnhancedComponent = (OriginalComponent) => {
    class NewComponent extends React.Component {
        // this is the common functionality we want to share 
        constructor(props){
            super(props)
      
            this.state = {
                count: 0
            }
        }
      
        increementCount = () => {
            this.setState( prevState => {
                return {
                    count: prevState.count + 1
                }
            })
        }
        render() {
            // HOC injects name prop to any component that requires it 
            return <OriginalComponent 
                    name='Meow'
                    count={this.state.count}
                    increementCount={this.increementCount}/>
        }
    }
    //originalComponent enhanced with the props is returned as a NewComponent
    return NewComponent
}

export default EnhancedComponent