import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import "../../css/home-css/questionCard.css"
const QustionCard = ({ title, description }) => {
    const [showQuestion, setShowQuwstion] = useState(false)
    const handleShowQuestion = () => {
        showQuestion ? setShowQuwstion(false) : setShowQuwstion(true)
    }
    return (
        <div className='qn-card'>
            <div className='qn-title' onClick={handleShowQuestion}>
                <p> {title}</p>
                {
                    showQuestion ?
                        <FontAwesomeIcon icon={faAngleUp} />
                        : <FontAwesomeIcon icon={faAngleDown} />
                }
            </div>
            <p className={`${showQuestion ? 'show-description' : 'hide-description'}`}>
                {description}
            </p>

        </div>
    )
}

export default QustionCard