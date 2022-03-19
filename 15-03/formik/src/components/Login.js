import { useFormik } from 'formik';
import * as Yup from 'yup';
import React, {useState} from 'react'

function Login() {
const formik = useFormik({
    initialValues: {
        firstName: "",
        lastName: "",
        email: ""
    },
    validationSchema: Yup.object({
        firstName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      lastName: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
      email: Yup.string()
        .email('Email is invalid')
        .required('Email is required'),
    }),

    onSubmit: (values) => {
        console.log('values',values)
    }
})

//to view the errors 
console.log('errors', formik.errors)

  return (
// two way bind data using value field 
<form onSubmit={formik.handleSubmit}>
    <div className='input-container'>
    {console.log('formik', formik.values)}

    {/* this console statement returns a boolean value which indicates whether the user has touched the input field or not */}
   {console.log('formik touched', formik.touched)}

    <input 
        id='firstName'
        name='firstName'
        type='text'
        placeholder='First Name'
        onChange={formik.handleChange} 
        value={formik.values.firstName}
        onBlur={formik.handleBlur}>
        {/* handleblurr property is directly linked to formik.touched, when we click on the input field this onblurr function is fired and formik.touched logs true  */}
    </input>
    {formik.touched.firstName && formik.errors.firstName? <p>{formik.errors.firstName}</p> : null}
        <input 
        id='lastName'
        name='lastName'
        type='text'
        placeholder='Last Name'
        onChange={formik.handleChange} 
        value={formik.values.lastName}
        onBlur={formik.handleBlur}>
        </input>
    {formik.touched.lastName && formik.errors.lastName? <p>{formik.errors.lastName}</p> : null}
        <input 
        id='email'
        name='email'
        type='email'
        placeholder='Email'
        onChange={formik.handleChange} 
        value={formik.values.email}
        onBlur={formik.handleBlur}>
        </input>
    {formik.touched.email && formik.errors.email? <p>{formik.errors.email}</p> : null}
        <button type='submit'>submit</button>
    </div>
</form>
  )
}

export default Login