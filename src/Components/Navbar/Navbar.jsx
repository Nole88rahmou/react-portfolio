import React, { useRef } from 'react'
import './Navbar.css'
import theme_pattern from '../../assets/theme_pattern.png'
import underline from '../../assets/underline_pattern.png'
import { useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Navbar = () => {
    const [section, setSection] = useState("");
    const menuRef = useRef();

    const openMenu = () => {
        menuRef.current.style.right ="0";
    }
    const closeMenu = () => {
        menuRef.current.style.right ="-350px";
    }

    return (
        <div className='navbar'>
            <svg width="40" height="20" viewBox="0 0 40 20" fill="none" onClick={openMenu} >
                <rect width="40" height="4" fill="white"/>
                <rect y="8" width="40" height="4" fill="white"/>
                <rect y="16" width="40" height="4" fill="white"/>
            </svg>
            <div className="navbar-title">
                <p>Nole</p>
                <img src={theme_pattern} alt='Logo' />
            </div>
            <ul className='nav-menu' ref={menuRef}>
                <svg width="35" height="35" viewBox="0 0 40 40" onClick={closeMenu} >
                    <line x1="5" y1="5" x2="35" y2="35" stroke="white" strokeWidth="4"/>
                    <line x1="5" y1="35" x2="35" y2="5" stroke="white" strokeWidth="4"/>
                </svg>
                <li><AnchorLink className='anchor-link'  href='#home'><p onClick={()=> {setSection("home")}}>Home</p></AnchorLink>{section === "home" ? <img src={underline} alt=''/> : <></>}</li>   
                <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=> {setSection("about")}}>About Me</p></AnchorLink>{section === "about" ? <img src={underline} alt=''/> : <></>}</li>
                <li><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={()=> {setSection("services")}}>Services</p></AnchorLink>{section === "services" ? <img src={underline} alt=''/> : <></>}</li>
                <li><AnchorLink className='anchor-link' offset={50} href='#work'><p onClick={()=> {setSection("portfolio")}}>Portfolio</p></AnchorLink>{section === "portfolio" ? <img src={underline} alt=''/> : <></>}</li> 
                <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=> {setSection("contact")}}>Contact</p></AnchorLink>{section === "contact" ? <img src={underline} alt=''/> : <></>}</li>
            </ul>
            <div className='nav-connect'><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
        </div>
    )
}

export default Navbar
