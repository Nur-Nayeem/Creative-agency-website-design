import React from 'react'
import '../../css/home-css/documentation.css'
import videoImg from '../../assets/video.png'
const Documentation = () => {
    return (
        <div>
            <div className='documentation-container'>
                <h4 className='section-title'>Our Documentation</h4>
                <h3 className='sub-title'>The various services we provide to make your business more powerful</h3>
                <figure className='video-box'>
                    <img src={videoImg} alt="" />
                </figure>

            </div>
        </div>
    )
}

export default Documentation;