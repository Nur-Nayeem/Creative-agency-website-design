import React from 'react'
import Card from './Card'
import '../css/ourServices.css'
import { faFireFlameSimple, faPenNib, faDesktop, faMobileScreen, faCity, faChartSimple } from '@fortawesome/free-solid-svg-icons';

const services = [
    {
        icon: faFireFlameSimple,
        title: "Ideate",
        details: "We help you develop creative ideas so that your business can grow more rapidly",
        bgColor: "#4C40F7"
    },
    {
        icon: faPenNib,
        title: "Design",
        details: "We provide services with the best designs than our designer team for your business",
        bgColor: "#FF2D59"
    },
    {
        icon: faDesktop,
        title: "Design",
        details: "We provide services with the best designs than our designer team for your business",
        bgColor: "#4ADB61"
    },
    {

        icon: faMobileScreen,
        title: "Design",
        details: "We provide services with the best designs than our designer team for your business",
        bgColor: "#FFCC00"
    },
    {
        icon: faCity,
        title: "Design",
        details: "We provide services with the best designs than our designer team for your business",
        bgColor: "#007BFF"
    },
    {
        icon: faChartSimple,
        title: "Design",
        details: "We provide services with the best designs than our designer team for your business",
        bgColor: "#FF6800"
    },
]


function OurServices() {
    return (
        <div className='services-container'>
            <h4 className='section-title'>Our Services</h4>
            <h2 className='sub-title'>The various services we provide to make your business more powerful</h2>
            <div className='card-container'>
                {
                    services.map((item, index) => {
                        return (
                            <Card icon={item.icon} title={item.title} details={item.details} bgColor={item.bgColor} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default OurServices