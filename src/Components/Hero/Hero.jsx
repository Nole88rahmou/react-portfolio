import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profil_22.jpeg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
    return (
        <div className='hero' id='home'>
            <img src={profile_img} alt='' />
            <h1><span>I'm Meradji Abderrahim,</span> frontend developer based in Montreal.</h1>
            <p>Hello my name is meradji abderrahim and i am a frontend developer from canada and i  have multiple exprenience in Canada</p>
            <div className='hero-action'>
                <div className='hero-connect'><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
                <div className='hero-resume'>My resume</div>
            </div>
        </div>
    )
}

export default Hero