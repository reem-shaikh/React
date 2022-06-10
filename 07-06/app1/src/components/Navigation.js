import React from 'react'
import { Link } from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import { NavLink } from 'react-router-dom'

import '../App.css'

function Navigation() {
    const navigate = useNavigate()

    const clicked = () => {
        // navigate('secret?key=value&key1=value1&key2=value2')
        navigate('secret')
    }

    const navLinkStyles = ({ isActive }) => {
      return {
        // isActive denotes whether the link is active or not 
        //if its active link were currently on that page 

        //whatever component your visiting highlight that partiuclar link

        //which link of your navigation is currently active
          fontWeight: isActive ? 'bold' : 'normal',
          textDecoration: isActive ? 'none' : 'underline',
      }
    }

  return (
    <nav className='primary-nav'>
        {/* make sure the link inside to=""
            is same as the link inside App.js path="" */}
        <Link to='/'>default</Link>
        <Link to='/homepage' style = {{background: 'green'}}>home</Link>
        <Link to='about'>About</Link>
        <button onClick={clicked}>Secret</button>

        <NavLink style={navLinkStyles} to='/products'>products </NavLink>
    </nav>
  )
}

export default Navigation