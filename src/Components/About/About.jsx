import React from 'react'
import './About.css'
import profile_img from '../../assets/profile-img.jpg'
import theme_pattern from '../../assets/theme_pattern.png'

const About = () => {
    return (
        <div className="about" id='about'>
            <div className="about-title">
                <h1>About me</h1>
                <img src={theme_pattern} alt="dfsdf" />
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={profile_img} alt="fdgdfg" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero esse velit, ab excepturi placeat doloremque. Ipsam autem consequuntur sit, labore dicta dolores sequi culpa et alias, iure fuga, fugit similique!</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident id dolor vel suscipit odit consectetur culpa alias! Quidem, nesciunt deserunt .</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill">
                            <p>HTML & CSS</p><hr style={{width:'80%'}}/>
                        </div>
                        <div className="about-skill">
                            <p>JavaScript</p><hr style={{width:'70%'}}/>
                        </div>
                        <div className="about-skill">
                            <p>React JS</p><hr style={{width:'60%'}}/>
                        </div>
                        <div className="about-skill">
                            <p>Next JS</p><hr style={{width:'50%'}}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>1+</h1>
                    <p>Years Of Experrience</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>5+</h1>
                    <p>Projects Completed</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>10+</h1>
                    <p>Happy Clients</p>
                </div>
            </div>
        </div> 
    )
}

export default About