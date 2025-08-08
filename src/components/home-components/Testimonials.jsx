import React from 'react'
import TestimonialCard from './TestimonialCard'
import nur from "../../assets/nur.jpg"
import "../../css/home-css/Testimonials.css"
const testimonials = [
    {
        img: nur,
        name: "Nur Nayeem",
        designation: "Unknown",
        description: "Some issues is not solved with it , i gave 5 star rating , because they pay for this review",
        star: 5
    },
    {
        img: nur,
        name: "Nur Nayeem",
        designation: "Unknown",
        description: "Some issues is not solved with it , i gave 5 star rating , because they pay for this review",
        star: 5
    },
    {
        img: nur,
        name: "Nur Nayeem",
        designation: "Unknown",
        description: "Some issues is not solved with it , i gave 5 star rating , because they pay for this review",
        star: 3
    },
    {
        img: nur,
        name: "Nur Nayeem",
        designation: "Unknown",
        description: "Some issues is not solved with it , i gave 5 star rating , because they pay for this review",
        star: 5
    },
    {
        img: nur,
        name: "Nur Nayeem",
        designation: "Unknown",
        description: "Some issues is not solved with it , i gave 5 star rating , because they pay for this review",
        star: 4
    },
    {
        img: nur,
        name: "Nur Nayeem",
        designation: "Unknown",
        description: "Some issues is not solved with it , i gave 5 star rating , because they pay for this review",
        star: 5
    },

]

const Testimonials = () => {
    return (
        <div className='container' style={{ "marginBottom": "100px" }}>
            <div className='section-header'>
                <h4 className='section-title'>Testimonials</h4>
                <h3 className='sub-title'>Some testimonials from our customers</h3>
            </div>
            <div className='testimonial-card-container'>
                {
                    testimonials.map((item, index) => {
                        return (
                            <TestimonialCard key={index} img={item.img} name={item.name} designation={item.designation} description={item.description} star={item.star} />
                        )
                    })
                }

            </div>
        </div>
    )
}

export default Testimonials