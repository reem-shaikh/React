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

  const clearArray = ()=> {
      setmyArray([]);
  }

  const removeElem = (id)=> {
    // when we click on the 0th index id to delete it 
    // it stores all the other index id's in a new array called myNewArray 
    // and we set the display to myNewArray 
      const myNewArray = myArray.filter((currElem) => {
          return currElem.id != id
      })

      setmyArray(myNewArray)
  }

  return (
    <>
        {
          myArray.map((currElem) => {
            return <h1 className='h1style' key={currElem.id}>Name: {currElem.myName} 
            {/* to ensure that onclick on buttton removeelem should run, we add the fat arrow functio, if we didnt add it, it would call the function removeElem by default */}
            <button className='btnInner' onClick={ () => removeElem(currElem.id)}>remove</button></h1>
          })
        }
        <button className='btn' onClick={clearArray}>clear</button>
    </>
  )
}

export default UseStateArray