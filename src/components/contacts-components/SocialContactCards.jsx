import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../../css/contact-css/socialOntactCard.css"
const SocialContactCards = ({ icon }) => {
    return (
        <div className='social-contact-card'>
            <div className='icon-social-contact'>
                <FontAwesomeIcon icon={icon} />
            </div>
            <p>Facebook</p>
        </div>
    )
}

export default SocialContactCards