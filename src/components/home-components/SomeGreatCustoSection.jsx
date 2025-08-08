import React from 'react'
import "../../css/home-css/SomeGreatCustoSection.css"
import sp1 from "../../assets/sponsor/amazon.jpg"
import sp2 from "../../assets/sponsor/jeep.jpg"
import sp3 from "../../assets/sponsor/areem.jpg"
import sp4 from "../../assets/sponsor/hubspot.jpg"
import sp5 from "../../assets/sponsor/jquery.jpg"
import sp6 from "../../assets/sponsor/canon.jpg"
import sp7 from "../../assets/sponsor/fedex.jpg"
import sp8 from "../../assets/sponsor/bitcoin.jpg"
import sp9 from "../../assets/sponsor/firelli.jpg"
import sp10 from "../../assets/sponsor/philips.jpg"

const SomeGreatCustoSection = () => {
    return (
        <div className='customer-container'>
            <h4 className='section-title'>Some of Our Great Customers</h4>
            <h3 className='sub-title'>Some of the companies we have worked with</h3>
            <div className='customer-img-container'>

                <figure className='img-box'>
                    <img src={sp1} alt="" />
                </figure>
                <figure className='img-box'>
                    <img src={sp2} alt="" />
                </figure>
                <figure className='img-box'>
                    <img src={sp3} alt="" />
                </figure>
                <figure className='img-box'>
                    <img src={sp4} alt="" />
                </figure>
                <figure className='img-box'>
                    <img src={sp5} alt="" />
                </figure>
                <figure className='img-box'>
                    <img src={sp6} alt="" />
                </figure>
                <figure className='img-box'>
                    <img src={sp7} alt="" />
                </figure>
                <figure className='img-box'>
                    <img src={sp8} alt="" />
                </figure>
                <figure className='img-box'>
                    <img src={sp9} alt="" />
                </figure>
                <figure className='img-box'>
                    <img src={sp10} alt="" />
                </figure>

            </div>

        </div>
    )
}

export default SomeGreatCustoSection