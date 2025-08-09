import React, { useState } from 'react'
import '../css/navSection.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
    const [showMenu, setShowMenu] = useState(false);
    const navigate = useNavigate();
    const handleManueBar = () => {
        setShowMenu(true)
    }
    const handleCloseMenu = () => {
        setShowMenu(false)
    }

    const handleContact = () => {
        navigate('/contact');
    }
    return (
        <nav className='nav-section'>
            <div className='logo-container'>
                <h2>C</h2>
            </div>
            <ul className={`nav-items ${showMenu ? 'nav-items-active' : ''}`}>
                <div className='side-menu-top-bar'>
                    <div className='logo-container hide-logo'>
                        <h2>C</h2>
                    </div>
                    <button className='menue-bar' onClick={handleCloseMenu}>
                        <FontAwesomeIcon className='menu-cross-icon' icon={faXmark} />
                    </button>
                </div>
                <div className='side-nav'>
                    <div className='div-inside-ul'>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/works">Works</Link></li>
                        <li><Link to="/about">About</Link></li>
                    </div>
                    <button className='btn-primary hide-btn' onClick={handleContact}>Contant us</button>
                </div>

            </ul>
            <button className='menue-bar' onClick={handleManueBar}>
                <FontAwesomeIcon className='menu' icon={faBars}
                />
            </button>
            <button className='btn-primary contct-btn' onClick={handleContact}>Contant us</button>
        </nav>
    )
}

export default Navbar