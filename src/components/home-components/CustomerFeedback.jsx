import React from 'react'
import '../../css/home-css/customerFeedback.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
function CustomerFeedback() {
    return (
        <div className='feedback-container container'>
            <div className='feedback-left-container'>
                <div className='feedback-card-container feedback-card-container-left'>
                    <div className='feedback-card card-1'>
                        <h2>70K+</h2>
                        <p>We have more than customers</p>
                    </div>
                    <div className='feedback-card card-2'>
                        <h2>100+</h2>
                        <p>People who are helped because of our hard work</p>
                    </div>
                </div>
                <div className='feedback-card-container'>
                    <div className='feedback-card card-3'>
                        <h2>10M+</h2>
                        <p>Projects we have
                            completed</p>
                    </div>
                    <div className='feedback-card card-4'>
                        <h2>200+</h2>
                        <p>Support from world-renowned companies</p>
                    </div>
                </div>
            </div>
            <div className='feedback-right-container'>
                <h2>Customer satisfaction is our first priority</h2>
                <p>We serve many customers, ranging from small businesses, medium entrepreneurs, to world-renowned companies. Their satisfaction is our pleasure. We strive to provide the best service by:</p>
                <ul className='feed-backs'>
                    <li><FontAwesomeIcon
                        icon={faCircleCheck}
                        className="text-blue"
                    /> <span>Provide idea support from our creative team</span> </li>
                    <li><FontAwesomeIcon
                        icon={faCircleCheck}
                        className="text-blue"
                    /> <span>Provide attractive and professional design services</span></li>
                    <li><FontAwesomeIcon
                        icon={faCircleCheck}
                        className="text-blue"
                    /> <span>Support for service 24 hours a week</span></li>
                    <li><FontAwesomeIcon
                        icon={faCircleCheck}
                        className="text-blue"
                    /> <span>Helping our customers to grow their business</span></li>
                    <li><FontAwesomeIcon
                        icon={faCircleCheck}
                        className="text-blue"
                    /> <span>Provide support to market products through online marketplace</span></li>
                </ul>
            </div>
        </div>
    )
}

export default CustomerFeedback