import React from 'react'
import '../css/navSection.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
    return (
        <nav className='nav-section'>
            <div className='logo-container'>
                <h2>C</h2>
            </div>
            <ul className='nav-items'>
                <li><a href="#home">Home</a></li>
                <li><a href="#works">Works</a></li>
                <li><a href="#about">About</a></li>
            </ul>
            <button className='menue-bar'>
                <FontAwesomeIcon className='menu' icon={faBars} />
            </button>
            <button className='btn-primary contct-btn'>Contant us</button>
        </nav>
    )
}

export default Navbar