import React from 'react'
import PropTypes from 'prop-types'
//rafcp - with proptypes 
const Component3 = props => {
  return (
    <>
        <h1>Name: {props.name}</h1>
        <h1>Marks: {props.marks}</h1>
    </>
  )
}

Component3.propTypes = {
    // pass all the props your using inside propTypes 
    name: PropTypes.string,
    marks: PropTypes.number
    //make sure props defined inside the parent is of the same type as that defined inside propTypes
}

export default Component3
