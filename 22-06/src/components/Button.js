//import React from 'react'
import styled, { keyframes } from 'styled-components'

const rotation = keyframes`
   from {
    // transform: rotate(0 deg)
    // translate: translateY(250px)
    transform scale(2)
   }
   to {
    // transform: rotate(360deg)
    // transform: translateY(0px) 
    //no change shape, size, only position x-y
    transform: scale(0)
    //change shape, size, not the position
   }
`
//if we have not passed the prop then it takes the fallback value
const Button = styled.button`
      background-color: orange;
      color: ${({ primaryColor }) => primaryColor || 'black'};
      animation: ${rotation} 5s linear infinite;
      &:hover {
        background-color:  ${props => props.primaryColor || 'black'};
        color: blue;
      }
`;

//we can extract props like this over here in 2 ways 
//1.  color: ${props => props.primaryColor || 'black'};
//2.  ${({ primaryColor }) => primaryColor || 'black'};

export default Button
// function Button() {
//   return (
//     <>
//     {/* using inline styling in between JSX makes it look clustured */}
//     {/* <button style={{}}>click me</button> */}

//     {/* instead, we can import styled components*/}
//     </>
//   )
// }

// export default Button