import React from 'react'
import './Services.css'
import { ArrowRight } from "lucide-react";
import theme_pattern from '../../assets/theme_pattern.png'

const Services = () => {
    const servicesData = [
        {
            servNum: "01",
            servName: "Front-End Web Development",
            serviceDesc: "I build modern and responsive websites using React.js, ensuring fast performance and seamless user experiences. My focus is on clean code, scalability, and SEO optimization to make websites both visually appealing and highly functional."
        },
        {
            servNum: "02",
            servName: "UI/UX Design",
            serviceDesc: "I transform design concepts into fully interactive web interfaces, ensuring they are intuitive and user-friendly. By following best UI/UX practices, I create responsive and accessible designs that enhance user engagement."
        },
        {
            servNum: "03",
            servName: "Web Application Development",
            serviceDesc: "I develop dynamic single-page applications (SPAs) with React.js, integrating APIs for smooth data handling. My goal is to create efficient, fast, and scalable applications that offer a seamless user experience."
        },
        {
            servNum: "04",
            servName: "Maintenance & Optimization",
            serviceDesc: "I optimize website performance by fixing bugs, improving load times, and enhancing overall efficiency. My approach ensures websites remain stable, secure, and up to date with the latest web standards.Would you like any refinements to better match your portfolios style"
        },
    ];
  return (
    <div className='services' id='services'>
        <div className="services-title">
            <h1>My Services</h1>
            <img src={theme_pattern} alt="xczz" />
        </div>
        <div className="services-container">
            {servicesData.map((service) => {
                return(
                    <div key={service.servNum - 1} className='service-format'>
                        <h3>{service.servNum}</h3>
                        <h2>{service.servName}</h2>
                        <p>{service.serviceDesc}</p>
                        <div className='services-readmore'>
                            <p>Read More</p>
                            <ArrowRight className="arrow"/>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Services