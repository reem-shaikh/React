import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoute = ({ isLogged }) => {
  //when islogged is true move to Outlet otherwise to the home page 
  return isLogged ? <Outlet/> : <Navigate to="/"/>
}

export default PrivateRoute