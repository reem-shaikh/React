import React from 'react'
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const Navigation = () => {
  const navigate = useNavigate();
  
  const clicked = _ => {
    //query parameters (need useSearchParams)
    navigate('secret/abcd?key=value&key1=value1&key2=value2')

    //Path Parameter (need useParams)
    navigate('secret/:id')

  }

  return (
    <div style={{marginBottom: "2rem"}}>
      <NavLink
        to="/"
        style={({ isActive }) => isActive ? {color: "white"} : undefined }
      >
        Home
      </NavLink> 
        || 
      <NavLink
        to="about"
        style={({ isActive }) => isActive ? {color: "white"} : undefined }
      >
        About
      </NavLink> 
        ||
      <NavLink
        to="user"
        style={({ isActive }) => isActive ? {color: "white"} : undefined }
      > Users 
      </NavLink> 

      <button onClick={clicked}>Secret</button>
    </div>
  )
}

export default Navigation