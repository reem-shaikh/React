import React, { useState, useCallback } from 'react'
import Count from './Count'
import Button from './Button'
import Title from './Title'

function ParentComponent() {
	const [age, setAge] = useState(25)
	const [salary, setSalary] = useState(50000)

	// without usecalback hook when this function is invoked all the components will be rerendered which causes perrfformance issues, for performance optimisation and ensure only the function invoked is re-rendered and not the entire component
	// const incrementAge = () => {
	// 	setAge(age + 1)
	// }

	// const incrementSalary = () => {
	// 	setSalary(salary + 1000)
	// }

	const incrementAge = useCallback(() => {
		setAge(age + 1)
	}, [age])

	//if incrementAge is executed then usecallback hook will cache incrementSalary and return that value everytime the props are not changed, instead of re-computing the value
	//however when the props are changed it calculates and stores the value in cache
	//so its typically depending on reference equality to prevent unecesary re-renders 
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