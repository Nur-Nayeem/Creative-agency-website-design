import React from 'react'
import ContactFormSection from '../components/contacts-components/ContactFormSection'
import Navbar from '../components/Navbar'

const Contact = () => {
    return (
        <>
            <div className='max-width small-dev-margi-x'>
                <Navbar />
                <ContactFormSection />
            </div>
        </>
    )
}

export default Contact