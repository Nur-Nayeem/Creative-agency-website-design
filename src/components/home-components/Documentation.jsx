import React from 'react'
import videoImg from '../../assets/video.png'
const Documentation = () => {
    return (

        <div className='container'>
            <div className='section-header'>
                <h4 className='section-title'>Our Documentation</h4>
                <h3 className='sub-title'>The various services we provide to make your business more powerful</h3>
            </div>
            <figure className='video-box'>
                <img src={videoImg} alt="" />
            </figure>

        </div>
    )
}

export default Documentation;