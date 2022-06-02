// function Component2(props){
//     return (
//         <div style={{backgroundColor: 'red', padding: '15px'}}>
//             {props.children}
//         </div>
//     )
// }


import React, { forwardRef } from 'react'

function Component2(props, ref) {
    console.log('props', props)
    console.log('props.children', props.children)

    //forwarded ref from one component to another 
    return (
        // ref is generated over here 
        <div ref={ref} style={{backgroundColor: 'red', padding: '15px'}}>
            {props.children}
             <h1>hello</h1>
        </div>
    )
}

export default forwardRef(Component2)