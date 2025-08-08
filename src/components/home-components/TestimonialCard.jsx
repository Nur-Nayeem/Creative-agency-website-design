import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import "../../css/home-css/testimonial-card.css"
const TestimonialCard = ({ img, name, designation, description, star }) => {
    return (
        <div className='testimonial-card'>
            <figure className='testimonial-card-img-box'>
                <img src={img} alt="nur" />
            </figure>
            <h4>{name}</h4>
            <p className='designation'>{designation}</p>
            <p className='description'>{description}</p>
            <div>
                {
                    [...Array(star)].map((_, index) => {
                        return <FontAwesomeIcon key={index} className='star-icon' icon={faStar} />
                    })
                }
            </div>
        </div>
    )
}

export default TestimonialCard