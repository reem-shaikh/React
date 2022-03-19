import React from 'react';
import { ErrorMessage, useField } from 'formik';
import '../App.css'

//grabbing all props from parent 
export const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  //field contains all the name attributes and its values 
  console.log('field',field);
  console.log('meta', meta);
  console.log('props', props);

  return (
    <div className="mb-2">
      <label htmlFor={field.name}>{label}</label>
      {/* if input field is touched (i.e touched = true) and input field has error, then run a class called is-invalid */}
      <input
        className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'}`}
        {...field} {...props}
        autoComplete="off"
      />
      <ErrorMessage component="div" name={field.name} className="error" />
    </div>
  )
}