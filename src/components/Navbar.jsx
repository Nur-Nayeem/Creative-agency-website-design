import React, { useState } from 'react'
import '../css/navSection.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
    const [showMenu, setShowMenu] = useState(false);
    const handleManueBar = () => {
        setShowMenu(true)
    }
    const handleCloseMenu = () => {
        setShowMenu(false)
    }
    return (
        <nav className='nav-section'>
            <div className='logo-container'>
                <h2>C</h2>
            </div>
            <ul className={`nav-items ${showMenu ? 'nav-items-active' : ''}`}>
                <button className='menue-bar cross-icon-btn' onClick={handleCloseMenu}>
                    <FontAwesomeIcon className='menu-cross-icon' icon={faXmark} />
                </button>
                <li><a href="#home">Home</a></li>
                <li><a href="#works">Works</a></li>
                <li><a href="#about">About</a></li>
            </ul>
            <button className='menue-bar' onClick={handleManueBar}>
                <FontAwesomeIcon className='menu' icon={faBars}
                />
            </button>
            <button className='btn-primary contct-btn'>Contant us</button>
        </nav>
    )
}

export default Navbar