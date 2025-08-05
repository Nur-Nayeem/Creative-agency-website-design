import React from 'react'
import '../css/card.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
function Card({ icon, title, details, bgColor }) {
    return (
        <div className='card' style={{ '--hover-bg-color': bgColor }}>
            <div className='card-icon'>
                <FontAwesomeIcon className='fire-icon' icon={icon} />
            </div>
            <div className='card-content'>
                <h4>{title}</h4>
                <p>{details}</p>
            </div>
            <button className='card-btn'><FontAwesomeIcon icon={faArrowRight} /></button>
        </div>
    )
}

export default Card