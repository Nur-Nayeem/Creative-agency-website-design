import React from 'react'
import hero from '../assets/hero3.png'
import blueImg from '../assets/1111.png'
import yellowImg from '../assets/2222.png'
import '../css/heroSection.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faLayerGroup } from '@fortawesome/free-solid-svg-icons';
function Hero() {
    return (
        <section className='hero-container'>
            <div className='hero-left'>
                <h1>Make your business <br /><span>more powerful</span><br />with us</h1>
                <p className='hero-deails'>We provide various services to make your business grow and get bigger. Your satisfaction is our first priority.</p>
                <button className='btn-primary'>
                    Get Started
                    <span className='arrow-icon'><FontAwesomeIcon icon={faArrowRight} /></span>
                </button>
            </div>
            <div>
                <div className='hero-box'>
                    <img className='color-box blue-box' src={blueImg} alt="" />
                    <img className='color-box yellow-box' src={yellowImg} alt="" />
                    <img src={hero} alt="" />
                    <div className='layer-box'>
                        <span className='arrow-icon'><FontAwesomeIcon icon={faLayerGroup} /></span>

                    </div>
                    <div className='hero-chart'>
                        <div className='golla-top'>20%</div>
                        <div className='golla-right'>20%</div>
                        <div className='golla-left'>60%</div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Hero