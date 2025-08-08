import React from 'react'
import map from "../assets/map2.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowRight, faFacebookF } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons";


const Footer = () => {
    return (
        <footer >
            <div className='footer-content'>
                <div className='first-footer-content'>
                    <div className='logo-container'>
                        <h2>C</h2>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>
                <div>
                    <h3>Our Office</h3>
                    <figure>
                        <img src={map} alt="" />
                    </figure>
                </div>
                <div className='content-footer'>
                    <h4>Contact</h4>
                    <div className='info-footer'>
                        <p>Jl KH Samanhudi Metro Atom Plaza Bl AKS 1/11, Dki Jakarta</p>
                        <p>info@yourdomain.com</p>
                        <p>+62 (0) 000 0000 00</p>
                    </div>
                </div>
            </div>
            <div className='bottom-footer'>
                <p className='copy-right'>© 2021 Creative Agency</p>
                <ul className='footer-nav'>
                    <li><a href="#Home">Home</a></li>
                    <li><a href="#Works">Works</a></li>
                    <li><a href="#About">About</a></li>
                    <li><a href="#Pricing">Pricing</a></li>
                    <li><a href="#About">About</a></li>
                </ul>
                <div className='socials'>
                    <div>
                        <FontAwesomeIcon icon={faFacebookF} />


                    </div>
                    <div>
                        <FontAwesomeIcon icon={faInstagram} />

                    </div>
                    <div>
                        <FontAwesomeIcon icon={faLinkedin} />

                    </div>
                    <div>
                        <FontAwesomeIcon icon={faXTwitter} />

                    </div>

                </div>
            </div>

        </footer>
    )
}

export default Footer