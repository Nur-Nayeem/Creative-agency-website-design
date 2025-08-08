import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
const StartNewProject = () => {
    return (
        <div className='project-container' style={{ "background": "var(--color-secondary-3)" }}>
            <p>Are You Ready For</p>
            <h2>Start a New Project</h2>
            <button className='btn-primary'>
                Get Started
                <span className='arrow-icon'><FontAwesomeIcon icon={faArrowRight} /></span>
            </button>
        </div>
    )
}

export default StartNewProject