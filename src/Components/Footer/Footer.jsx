import React from 'react'
import './Footer.css'
import theme_pattern from '../../assets/theme_pattern.png'
import user_icon from '../../assets/user_icon.jpg'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <div className="logo">
                    <h1 >Nole</h1>
                    <img src={theme_pattern} alt="theme_pattern" />
                </div>
                <p >I am frontend developer from, Canada with 3 years of experience..</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt="user_icon" />
                    <input type="email" placeholder='Enter your email'/>
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>
        </div>
        <hr />
        <div className="footer-bottom">
            <p className="footer-bottom-left">&copy; 2025 Meradji Abderrahim. All rights reserved.</p>
            <div className="footer-bottom-right">
                <p>Term of services</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
            </div>
        </div>
    </div>
  )
}

export default Footer