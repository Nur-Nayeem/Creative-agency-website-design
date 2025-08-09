import React from 'react'
import ContactFormSection from '../components/contacts-components/ContactFormSection'
import Navbar from '../components/Navbar'
import SocialLink from '../components/contacts-components/SocialLink'
import SubscribeNow from '../components/SubscribeNow'
import Footer from '../components/Footer'
const Contact = () => {
    return (
        <>
            <div className='max-width small-dev-margi-x'>
                <Navbar />
                <ContactFormSection />
                <SocialLink />
            </div>
            <div>
                <SubscribeNow />
                <Footer />
            </div>
        </>
    )
}

export default Contact