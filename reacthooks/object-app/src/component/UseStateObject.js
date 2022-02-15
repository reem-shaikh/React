import React, {useState} from 'react'
//rafce

const UseStateObject = () => {
  const [myObject, setMyObject] = useState({
      myName: "reem",
      city:"mumbai"
  })
  //this object is defined inside myObject 

  const changeObject = () =>{
        setMyObject({...myObject, myName: "Resin"})
        // When we dont set a value for one of the objects when the update button is clicked, then the object field shows no value 
  }

  return (
    <>
     <h1 className='h1style'>Name: {myObject.myName} City:{myObject.city}</h1>
     <button className='btn' onClick={changeObject}>Update</button>
    </>
  )
}

export default UseStateObject