import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/home-components/Hero'
import OurServices from '../components/home-components/OurServices'
import Documentation from '../components/home-components/Documentation'
import CustomerFeedback from '../components/home-components/CustomerFeedback'
import WorkingPlace from '../components/home-components/WorkingPlace'
import SomeGreatCustoSection from '../components/home-components/SomeGreatCustoSection'
import SlidersInfo from '../components/home-components/SliderInfo'
import FrequentlyAskqn from '../components/home-components/FrequentlyAskqn'
import Testimonials from '../components/home-components/Testimonials'
import StartNewProject from '../components/StartNewProject'
import Footer from '../components/Footer'
import SubscribeNow from '../components/SubscribeNow'
function Home() {
    return (
        <>
            <div className='max-width small-dev-margi-x'>
                <Navbar />
                <Hero />
                <OurServices />
                <Documentation />
                <CustomerFeedback />
                <WorkingPlace />
                <SomeGreatCustoSection />
            </div>

            <SlidersInfo />
            <div className='max-width small-dev-margi-x'>
                <FrequentlyAskqn />
                <Testimonials />
                <StartNewProject />
            </div>
            <div>
                <SubscribeNow />
                <Footer />
            </div>
        </>
    )
}

export default Home