import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <nav>
        {/*
        <a href=''>Home</a>
        <a href=''>Contact</a> 
        */}
        {/* but anchor tag is taking some time and mount it on the DOM, to fix this we use Link tags , also it makes additional requests to the browser */}

        <Link to="">Home</Link>
        <Link to="">Contact</Link>
        {/* loads without making any additonal netwrok requests to the browser, this will make website fast, server wont take any load (saves cost as a company), saves user data also */}

    </nav>
  )
}

export default Navigation