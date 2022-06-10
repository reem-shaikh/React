import React from 'react'
// in Users.js we need to add an outlet component for rendering the child 
import {Outlet} from 'react-router-dom'
const Users = () => {
  return (
    <div>
        <h2>user 1</h2>
        <h2>user 2</h2>
        <h2>user 3</h2>
        <Outlet/>
    </div>
  )
}

export default Users