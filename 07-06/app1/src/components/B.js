import React, {useState} from 'react'
import Counter from './Counter'
function B(props) {
// const [count, setCount] = useState(0)

// function increementCount(){
//     setCount(count+1)
// }
const {count, increementCount} = props
  return (
    <div>
        <button onMouseOver={increementCount}>{count} click</button>
    </div>
  )
}

export default Counter(B)