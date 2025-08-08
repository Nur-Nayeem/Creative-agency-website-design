import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
const SubscribeNow = () => {
    return (
        <div className='project-container max-width footer-help' style={{ "background": "var(--color-primary)" }}>
            <p>Get Notified About Project</p>
            <h2>Subscribe Now</h2>
            <form action="" className='subscribe-now-form'>
                <input type="email" placeholder='Email' />
                <div className='icon-box'>
                    <FontAwesomeIcon className='send-icon' icon={faPaperPlane} />
                </div>
            </form>
        </div>
    )
}

export default SubscribeNow