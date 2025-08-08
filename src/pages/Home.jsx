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
function Home() {
    return (
        <>

            <Navbar />
            <Hero />
            <OurServices />
            <Documentation />
            <CustomerFeedback />
            <WorkingPlace />
            <SomeGreatCustoSection />
            <SlidersInfo />
            <FrequentlyAskqn />
        </>
    )
}

export default Home