const LikeDislike = () => {
    
    const [counter, setCounter] = React.useState(0)
    return (
        <div>
            {/* counter++ in place of counter+1 wont work
                because state variable of variable is const 
                we cannot change it 
                
                but react recommends to use state as a const, which makes state read only */}
            <button onClick={_ => setCounter(counter + 1)}> 👍</button>
            <button onClick={_ => setCounter(counter - 1)}> 👎</button>
            {/* _ in this context is same as () */}
            <p>{counter}</p>
        </div>
    )
}


// POST INCREEMENT 
// let a = 10
// console.log(a++) //10
// console.log(a)   //11
// use value then increement 

// PRE INCREEMENT 
// let a = 10
// console.log(++a) //11
// console.log(a)   //11
// first increement, then use the value 


{/* let num=10
    console.log(num++ + ++num)
    10 + 12 = 22
            
    let num =10 
    console.log(num++ - --num + ++num - num--)
    10 - 10 + 11 - 11
*/}