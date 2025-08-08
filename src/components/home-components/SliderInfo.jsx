import React, { useState } from 'react'
import "../../css/home-css/sliderInfo.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft, faCircleArrowRight, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

const slides = [
    {
        content: "what i will do now , i cant think of it . I have aforted lots of pressure that i dont want to",
        name: "Mark Garfield",
        degignation: "CEO & Head of Product"

    },
    {
        content: "Nothing to Say , I cant think of it . I have aforted lots of pressure that i dont want to",
        name: "Ono Garfield",
        degignation: "Director & Head of Product"
    },
    {
        content: "Its very tought that , I cant think of it . I have aforted lots of pressure that i dont want to",
        name: "Some Garfield",
        degignation: "Producer & Dr In MBT"
    },
    {
        content: "All is well , I cant think of it . I have aforted lots of pressure that i dont want to",
        name: "Hamilton Jarbis",
        degignation: "Fk & Sob of Nelos"
    },
]

const SlidersInfo = () => {
    return (
        <div className='slider-container'>
            <Slider slides={slides} />
        </div>
    )
}

export default SlidersInfo




const Slider = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const previousSLidde = () => {
        currentIndex === 0 ? setCurrentIndex(slides.length - 1) : setCurrentIndex(currentIndex - 1)
    }
    const nextSlide = () => {
        currentIndex === slides.length - 1 ? setCurrentIndex(0) : setCurrentIndex(currentIndex + 1)
    }
    return (
        <div className='slideBox'>
            <FontAwesomeIcon className='icons leftIcon' icon={faCircleArrowLeft} onClick={previousSLidde} />

            <div className='middle-content'>
                <FontAwesomeIcon className='top-icon' icon={faQuoteLeft} />
                <div className='content'>
                    <p>{slides[currentIndex].content}</p>
                    <div className='person-details'>
                        <p>{slides[currentIndex].name}</p>
                        <p>{slides[currentIndex].degignation}</p>
                    </div>
                </div>
                <div className='sliderBootomTracker'>
                    {
                        slides.map((_, index) => {
                            return <div
                                key={index}
                                className={`tracker-slide ${index === currentIndex ? 'active-tracker' : ''}`}
                                onClick={() => setCurrentIndex(index)}
                            ></div>
                        })
                    }
                </div>

            </div>
            <FontAwesomeIcon className='icons rightIcon' icon={faCircleArrowRight} onClick={nextSlide} />

        </div>
    )
}