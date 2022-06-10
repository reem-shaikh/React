import React, {useState} from 'react'
const Counter = (WrappedComponent) => {  
    function Counter(props) {
        const [count, setCount] = useState(0)
    
        function increementCount(){
            setCount(count+1)
        }
    
        return (
        <div> 
           <WrappedComponent 
            count={count} 
            increement={increementCount}/>
        </div>
        )
    }
   return Counter
}

export default Counter