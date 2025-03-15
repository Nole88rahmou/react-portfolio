import React from 'react'
import './Navbar.css'
import theme_pattern from '../../assets/theme_pattern.png'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="navbar-title">
                <p>Nole</p>
                <img src={theme_pattern} alt='Logo' />
            </div>
            <ul className='nav-menu'>
                <li>Home</li>
                <li>About Me</li>
                <li>Services</li>
                <li>Portfolio</li>
                <li>Contact</li>
            </ul>
            <div className='nav-connect'>Connect With Me</div>
        </div>
    )
}

export default Navbar
