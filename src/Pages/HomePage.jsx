import React from 'react'
import Header from '../Components/Header'
import About from '../Components/About'
import WhyMe from '../Components/WhyMe'
import Footer from '../Components/Footer'
import Banner from '../Components/Banner'
import Services from '../Components/Services'
import PotfolioAndGallery from '../Components/PotfolioAndGallery'
import Partners from '../Components/Partners'
import Achievements from '../Components/Achievements'
import ContactBanner from '../Components/ContactBanner'
import OurCapability from '../Components/OurCapability'
import CoreValues from '../Components/CoreValues'

const HomePage = () => {
  return (
    <>
    <Header />
    <Banner />
    <OurCapability />
    {/* <About /> */}
    <Services />
    <WhyMe />
    <CoreValues />
    {/* <PotfolioAndGallery /> */}
    {/* <Achievements /> */}
    <Partners />
    {/* <ContactBanner /> */}
    <Footer />
    </>
  )
}

export default HomePage