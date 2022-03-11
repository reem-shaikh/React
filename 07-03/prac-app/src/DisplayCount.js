import React from 'react'

function DisplayCount(props){
    // props are recieved here inside argument 
    return (
        <div>
            {/* were getting these data from parent component App.js props */}
            {props.name} - {props.count}

            <button onClick={()=> {
                this.props.increase
            }}>Inc</button>

            
           <button onClick={()=> {
                this.props.decrease
            }}>Dec</button>
            {/* when we click on this button.  */}
  
        </div>
    )
}

export default DisplayCount