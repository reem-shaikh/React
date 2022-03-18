import React from 'react'
import './FormInput.css'

const FormInput = (props) => {
  const {label,  errorMessage, onChange, id, ...inputProps} = props

  return (
    <div className='formInput'>
        <label>{props.placeholder}: </label>
        {/* <input placeholder={props.placeholder} onChange={(e) => props.setUsername(e.target.value)}></input> */}
        {/* <input 
        placeholder={props.placeholder} 
        name={props.name}
        /> */}
        
        <input {...inputProps}
        onChange={onChange} required></input>
        <span >{errorMessage}</span>

        {/* 
        internally it creates an input field for each element from the input[] 
        */}
    </div>
  )
}

export default FormInput