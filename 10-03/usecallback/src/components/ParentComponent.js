import React, {useState, useCallback} from 'react'
import Count from './Count'
import Button from './Button'
import Title from './Title'

function ParentComponent() {
  const [age, setAge] = useState(25)
  const [salary, setSalary] = useState(5000)

  // const increementAge = () => {
  //     setAge(age + 1)
  // }

  const increementAge = useCallback(() => {
      setAge(age + 1)
  }, [age]) 
      
  // const increementSalary = () => {
  //     setSalary(salary + 1000)
  // }

  const increementSalary = useCallback(() => {
    setSalary(salary + 1000)
  }, [salary]) 

  return (
    <div>
        <Title/>
        <Count text='Age' count={age} />
        <Button handleClick={increementAge}>increementAge</Button>
        <Count text='Salary' count={salary} />
        <Button handleClick={increementSalary}>increementSalary</Button>
    </div>
  )
}

export default ParentComponent