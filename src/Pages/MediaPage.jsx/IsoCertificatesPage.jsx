import React, { useEffect } from 'react';
import PotfolioAndGallery from '../../Components/PotfolioAndGallery';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import IsoCertificates from '../../Components/IsoCertificates';


const IsoCertificatesPage = () => {
    useEffect(() => {
            window.scrollTo(0, 0);
        }, []);
    return (
        <>
        <Header />
        <IsoCertificates />
        <Footer />
        
        </>
    )
}

export default IsoCertificatesPage;

