import React, { useState, useMemo } from 'react'

function Counter() {
	const [counterOne, setCounterOne] = useState(0)
	const [counterTwo, setCounterTwo] = useState(0)

	// creating two functions to increement the count value 
	const incrementOne = () => {
		setCounterOne(counterOne + 1)
	}

	const incrementTwo = () => {
		setCounterTwo(counterTwo + 1)
  }

//   if we didnt specify this logic in memo then it wouldve executed everutime the counter value is incremented and it also delays the execution of the counter two, when it doesnt even run  on the logic 
//   const isEven = () => {
//     let i = 0
// 	// if we have a large value were checking againstt, its going to slow down the ternary condition given below 
// 	//every time the state updates the component re-renders thats why the function is slow and in turn UI update is slow fr botht the counter one and counter two
//     while (i < 2000000000) i++
//     return counterOne % 2 === 0
//   }

  //however by using usememo were ensuring that the value that only counter one is executed aand the counter two is not
  // for performance optimisation, we use useMemo hook 

  //useMemo hook will only re-compute the value when one of the dependencies have changed and save it to the cache and display the cached value (react simply shows the cached value from the previous re-render)
  const isEven = useMemo(() => {
    let i = 0
    while (i < 2000000000) i++
    return counterOne % 2 === 0
  }, [counterOne])

	return (
		<div>
			<div>
        <button onClick={incrementOne}>Counter One - {counterOne}</button>
		{/* indicate whether count value is odd r even */}
        <span>{isEven ? 'Even' : 'Odd'}</span>
			</div>
			<div>
        <button onClick={incrementTwo}>Counter Two - {counterTwo}</button>
			</div>
		</div>
	)
}

export default Counter