import React from 'react'
import setNameContext from '../SetNameContext'
import setLastNameContext from '../setLastNameContext'

// The Solution: useContext
// import { useContext } from 'react'

// const ChildD = () => {
//   const setFirstName = useContext(setNameContext);
//   const setLastName  = useContext(setLastNameContext);
  
//   return (
//     <div>
//       <input type="text" onKeyUp={e => setFirstName(e.target.value)} />
//       <input type="text" onKeyUp={e => setLastName(e.target.value)} />
//     </div>
//   )
// }

// The Problem: Callback hell 
const ChildD = () => {
  <setNameContext.Consumer>
    {setFirstName => {
      return (
        <setLastNameContext.Consumer>
          {setLastName => {
            return (
                <div>
                  <input type="text" onKeyUp={e => setFirstName(e.target.value)} />
                  <input type="text" onKeyUp={e => setLastName(e.target.value)} />
                </div>
            )
          }}
        </setLastNameContext.Consumer>
      )
    }}
  </setNameContext.Consumer>
}

export default ChildD