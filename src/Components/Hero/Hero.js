import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile-img.jpg'

const Hero = () => {
    return (
        <div className='hero'>
            <img src={profile_img} alt='' />
            <h1><span>I'm Meradji Abderrahim,</span> frontend developer based in Montreal.</h1>
            <p>Hello my name is meradji abderrahim and i am a frontend developer from canada and i  have multiple exprenience in Canada</p>
            <div className='hero-action'>
                <div className='hero-connect'>Connect With Me</div>
                <div className='hero-resume'>My resume</div>
            </div>
        </div>
    )
}

export default Hero