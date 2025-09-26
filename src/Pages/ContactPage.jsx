import React, { useEffect } from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Contact from '../Components/Contact'
import GoogleMaps from '../Components/GoogleMaps';


const ContactPage = () => {

  useEffect(() => {
          window.scrollTo(0, 0);
      }, []);
  return (
    <>
    <Header />
    <Contact />
    <GoogleMaps />
    <Footer />
    </>
  )
}

export default ContactPage;