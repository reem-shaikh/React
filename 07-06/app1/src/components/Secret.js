import React, { useEffect } from 'react'
import {useSearchParams} from 'react-router-dom'

function Secret() {
//its like a state 
let [searchParams, setSearchParams] = useSearchParams()


useEffect(() => {
  const keys = []
  //is there any limit to query paramters? it is but its very large 
  //howver in path param you need to specify in the route how many parameters you want, theres a limit 

    searchParams.forEach((val, idx) => {
        console.log(val, idx)
        //keys.push[idx] = val

        keys.push({

        })
    })

  // searchParams.get gets us the key
  }, [searchParams])

  return (
    <>
    {/* for showing all the keys */}
        <div>secret page</div>
        {/* loop over the queryitems */}
    </>
  )
}

export default Secret

// import React from 'react'

// function Secret() {
//   return (
//     <div>Secret page</div>
//   )
// }

// export default Secret