# two hooks concerned with performance optimisation
- useMemo hook 
- useCallback hook 

# useCallback Hook
[](https://exquisite-licorice-b96353.netlify.app/)

usecllback is a hook that will return a memoized version of the callback function that only changes if one of the dependencies has changed.

> Why is it used?
Its useful when passing callbacks to optimized child components that rely on reference equaliy to prevent unecessary renders. 
- App.js 
```bash
import React from 'react'
import './App.css'
import ParentComponent from './components/ParentComponent'

function App() {
	return (
		<div className="App">
			<ParentComponent />
		</div>
	)
}

export default App
```
- ParentComponent.js
```bash
import React, { useState, useCallback } from 'react'
import Count from './Count'
import Button from './Button'
import Title from './Title'

function ParentComponent() {
	const [age, setAge] = useState(25)
	const [salary, setSalary] = useState(50000)

	# without usecalback hook when this function is invoked all the components will be rerendered which causes perrfformance issues, for performance optimisation and ensure only the function invoked is re-rendered and not the entire component
	# const incrementAge = () => {
	# 	setAge(age + 1)
	# }

	# const incrementSalary = () => {
	# 	setSalary(salary + 1000)
	# }

	const incrementAge = useCallback(() => {
		setAge(age + 1)
	}, [age])

	#if incrementAge is executed then usecallback hook will cache incrementSalary and return that value everytime the props are not changed, instead of re-computing the value
	#however when the props are changed it calculates and stores the value in cache
	#so its typically depending on reference equality to prevent unecesary re-renders 
	const incrementSalary = useCallback(() => {
		setSalary(salary + 1000)
	}, [salary])

	return (
		<div>
			<Title />
			<Count text="Age" count={age} />
			<Button handleClick={incrementAge}>Increment Age</Button>
			<Count text="Salary" count={salary} />
			<Button handleClick={incrementSalary}>Increment Salary</Button>
		</div>
	)
}

export default ParentComponent
```
- Title.js 
```bash
import React from 'react'

function Title() {
  console.log('Rendering Title')
  return (
    <h2>
      useCallback Hook
    </h2>
  )
}

export default React.memo(Title)
```
- Button.js 
```bash
import React from 'react'

function Button({ handleClick, children }) {
  console.log('Rendering button - ', children)
  return (
    <button onClick={handleClick}>
      {children}
    </button>
  )
}
# we wrap components in react.memo for usecallback to work
#components will now re-render only when there is a change in the props 
#these are now optmized child components 
export default React.memo(Button)
```
- Count.js
```bash
import React from 'react'

function Count({ text, count }) {
	console.log(`Rendering ${text}`)
	return <div>{text} - {count}</div>
}

export default React.memo(Count)
```
# useMemo hook
[](https://dashing-bubblegum-ea18b1.netlify.app/)

> why is it used?
- When were dealing with executtion of a large value in a function, then indirectly everytime the function is invoked, it would slow down the other functions, since everytime the function executing the large value is invoked, the entire page is re-rendered and thats why the UI updates for other functions slow down, so to prevent this, useMemo hook is used, where the function is executed and its result is then stored in the cache and this cache value is shown to the user on the DOM, also since the value is stored in the cache. If the user calls the function with the same set of values, the function wont be re-computed rather it will instantly show the computed value. 

> example without useMemo hook 
```bash
import React, { useState, useMemo } from 'react'

function Counter() {
	const [counterOne, setCounterOne] = useState(0)
	const [counterTwo, setCounterTwo] = useState(0)

	# creating two functions to increement the count value 
	const incrementOne = () => {
		setCounterOne(counterOne + 1)
	}

	const incrementTwo = () => {
		setCounterTwo(counterTwo + 1)
  }

# this function executed everutime the counter value is incremented and it also delays the execution of the counter two, when it doesnt even run  on the logic 
    const isEven = () => {
      let i = 0
# if we have a large value were checking againstt, its going to slow down the ternary condition given below 
# every time the state updates the component re-renders thats why the function is slow and in turn UI update is slow fr botht the counter one and counter two
     while (i < 2000000000) i++
       return counterOne % 2 === 0
    }

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
```
> using usememo hook 
```bash
import React, { useState, useMemo } from 'react'

function Counter() {
	const [counterOne, setCounterOne] = useState(0)
	const [counterTwo, setCounterTwo] = useState(0)

	# creating two functions to increement the count value 
	const incrementOne = () => {
		setCounterOne(counterOne + 1)
	}

	const incrementTwo = () => {
		setCounterTwo(counterTwo + 1)
  }

  #by using usememo were ensuring that the value that only counter one is executed aand the counter two is not
  # for performance optimisation, we use useMemo hook 

  #useMemo hook will only re-compute the value when one of the dependencies have changed and save it to the cache and display the cached value (react simply shows the cached value from the previous re-render)
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
```
> In this example, its saving the result of useMemo in its cache and its displaying the same result a 1000 times (not re-calculating it, rather taking it from the cache, thats why the execution is so quick)
```bash
import React, { useMemo, useState } from 'react'

const Memo = () => {
  const [num1, setNum1] = useState(10);
  const [num2, setNum2] = useState(15);

  # const sum = (a, b) => {
  #   console.log("Function called");
  #   return a + b;
  # }

  const sum = useMemo(_ => {

    console.log("Function called");
    return num1 + num2;

  }, [num1, num2]);

  return (
    <>
      <ul>
        {Array(1000).fill(-1).map((_, id) => {
          return <li key={id}>{sum}</li>
        })}
      </ul>
    </>
  )
}

export default Memo
```
# Difference between useCallback and useMemo hook?
- useCallback caches the provided function instance itself (cache the function itself)
- useMemo invokes the provided function and caches its result (cache the result of the function)