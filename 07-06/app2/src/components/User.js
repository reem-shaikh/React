import React from 'react'
import { useParams, useLocation } from 'react-router-dom'

const User = () => {
    const {fname} = useParams()
    const location = useLocation()
    console.log(location)
    
    return (
        <>
            User { fname } Page 
            <p>my current location is {location.pathname}</p>
        </>
    )
}

export default User