import React from 'react'
import './MyWork.css'
import { ArrowRight } from "lucide-react";
import theme_pattern from '../../assets/theme_pattern.png'
import pro1Img from '../../assets/img_first_project.png'
import pro2Img from '../../assets/todo_list_web_application.jpg'
import pro3Img from '../../assets/TicTacTao.jpg'

const MyWork = () => {
    const projects = [
    {
        num: 1,
        name: "Web Design",
        img: pro1Img
    },
    {
        num: 2,
        name: "Web Design",
        img: pro2Img
    },
    {
        num: 3,
        name: "Web Design",
        img: pro3Img
    },
    ];

  return (
    <div className='mywork'>
        <div className="mywork-title">
            <h1>My latest work</h1>
            <img src={theme_pattern} alt="adsas" />
        </div>
        <div className='mywork-container'>
            {projects.map((project) => {
                return(
                    <img  
                    key={project.num} 
                    src={project.img} 
                    alt='project_img'
                    />
                )
            })}
        </div>
        <div className="mywork-showmore">
            <p>Show More</p>
            <ArrowRight className="arrow"/>
        </div>
    </div>
  )
}

export default MyWork