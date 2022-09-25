import React, { Component } from 'react'
import {MenuItems} from './MenuItems'
//import {} from '@fortawesome/react-fontawesome'
import img1 from './logo.svg'
import '../carousel.css'

class Navbar extends React.Component{
    state = { clicked: false }

    handleClick=() =>{
      this.setState({clicked: !this.state.clicked})
    }


    render(){
        return(
            <nav className='NavbarItems'>
                <h1 className='navbar-logo'><img alt="logo" src={img1}></img></h1>
                <div className='menu-icon' onClick={this.handleClick}>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
               
                    {MenuItems.map((item, index) => {
                        return(
                            <li key={index}> <a className={item.cName}
                            href={item.url}>
                             {item.title}
                            </a></li>
                        )
                    })}
                
                </ul>
            </nav>     
        )
    }
}

export default Navbar 