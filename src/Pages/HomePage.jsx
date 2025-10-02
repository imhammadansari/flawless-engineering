import React from 'react'
import Header from '../Components/Header'
import WhyMe from '../Components/WhyMe'
import Footer from '../Components/Footer'
import Banner from '../Components/Banner'
import Services from '../Components/Services'
import Partners from '../Components/Partners'

import OurCapability from '../Components/OurCapability'
import CoreValues from '../Components/CoreValues'

const HomePage = () => {
  return (
    <>
    <Header />
    <Banner />
    <OurCapability />
    {/* <About /> */}
    <Partners />
    <Services />
    <WhyMe />
    <CoreValues />
    {/* <PotfolioAndGallery /> */}
    {/* <Achievements /> */}
    {/* <ContactBanner /> */}
    <Footer />
    </>
  )
}

export default HomePage