import React, {useState} from 'react'

const UseStateArray = () => {
  const bioData = [
      {
          id:0, myName:"reem"
      }, 
      {
          id:1, myName:"resin"
      }
  ]
  console.log('array', bioData)

  const [myArray, setmyArray] = useState(bioData)

  const clearArray = () => {
      setmyArray([]);
  }

  return (
    <div>
        {
          myArray.map((currElem) => {
            return <h1 className='h1style' key={currElem.id}>Name: {currElem.myName} </h1>
          })
        }
        <button className='btn' onClick={clearArray}>clear</button>
    </div>
  )
}

export default UseStateArray