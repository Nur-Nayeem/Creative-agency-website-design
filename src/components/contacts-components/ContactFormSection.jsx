import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faUser, faEnvelope, faMessage, faBuilding, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import "../../css/contact-css/contactFormSection.css"
const ContactFormSection = () => {
    return (
        <div className='form-section-container'>
            <div className='left-container'>
                <h1>Let's Work Together!</h1>
                <p className='details'>I would like to meet with you to discuss something and opportunities for collaboration.</p>
                <div className='cont-info-container'>
                    <div className='cont-info'>
                        <FontAwesomeIcon icon={faEnvelope} />
                        <p>info@yourdomain.com</p>
                    </div>
                    <div className='cont-info'>
                        <FontAwesomeIcon icon={faBuilding} />
                        <p>Jl KH Samanhudi Metro Atom Plaza Bl AKS 1/11, Dki Jakarta</p>
                    </div>
                    <div className='cont-info'>
                        <FontAwesomeIcon icon={faPhoneVolume} />
                        <p>+62 (0) 000 0000 00</p>
                    </div>

                </div>
            </div>
            <div className='right-container'>
                <form action="">
                    <label htmlFor="name" className='contact-input-box'>
                        <input type="text" name='name' id="name" placeholder='Name' />
                        <div className='input-icons'>
                            <FontAwesomeIcon icon={faUser} />
                        </div>
                    </label>
                    <label htmlFor="email" className='contact-input-box'>
                        <input type="email" name='email' id="email" placeholder='info@yourdomain.com' />
                        <div className='input-icons'>
                            <FontAwesomeIcon icon={faEnvelope} />
                        </div>
                    </label>
                    <label htmlFor="message" className='contact-input-box'>
                        <textarea name="message" id="message" placeholder='Message'></textarea>
                        <div className='messege-icon'>
                            <FontAwesomeIcon icon={faMessage} />
                        </div>
                    </label>
                </form>
                <button className='btn-primary'>
                    Let's Talk
                    <span className='arrow-icon'><FontAwesomeIcon icon={faArrowRight} /></span>
                </button>
            </div>
        </div>
    )
}

export default ContactFormSection