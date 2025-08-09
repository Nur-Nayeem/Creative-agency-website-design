import React from 'react'
import SocialContactCards from './SocialContactCards'
import { faFacebookF, faInstagram, faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons";

const SocialLink = () => {
    return (
        <div className='social-contact-card-container'>
            <SocialContactCards icon={faFacebookF} />
            <SocialContactCards icon={faInstagram} />
            <SocialContactCards icon={faLinkedin} />
            <SocialContactCards icon={faXTwitter} />
        </div>
    )
}

export default SocialLink