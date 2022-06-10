import React, {useState} from 'react'
import Counter from './Counter'
function A(props) {
// const [count, setCount] = useState(0)

// function increementCount(){
//     setCount(count+1)
// }
const {count, increementCount} = props
  return (
    <div>
        <button onClick={increementCount}>{count} click</button>
    </div>
  )
}

export default Counter(A)