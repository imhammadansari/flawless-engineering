import { useState } from 'react'
import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import AboutPage from './Pages/AboutPage'
import InfrastructureWork from './Pages/ServicePage/InfrastructureWork'
import CivilWork from './Pages/ServicePage/CivilWork'
import SiteSurveys from './Pages/ServicePage/SiteSurveys'
import LosSurveys from './Pages/ServicePage/LosSurveys'
import MaintanenceWork from './Pages/ServicePage/MaintanenceWork'
import ContactPage from './Pages/ContactPage'
import SolarPanel from './Pages/ServicePage/SolarPanel'
import DBAndSunshade from './Pages/ServicePage/DBAndSunshade'
import HomeConstruction from './Pages/ServicePage/HomeConstruction'
import DgRental from './Pages/ServicePage/DgRental'
import GeneralProducts from './Pages/ServicePage/GeneralProducts'
import Gallery from './Pages/MediaPage.jsx/Gallery'
import IsoCertificatesPage from './Pages/MediaPage.jsx/IsoCertificatesPage'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element = {<Navigate to = "/home" />} />
        <Route path='/home' element = {<HomePage />} />
        <Route path='/about' element = {<AboutPage />} />
        <Route path='/contact' element = {<ContactPage />} />
        <Route path='/services/infrastructure-work' element = {<InfrastructureWork />} />
        <Route path='/services/civil-work' element = {<CivilWork />} />
        <Route path='/services/site-surveys' element = {<SiteSurveys />} />
        <Route path='/services/losrs-surveys' element = {<LosSurveys />} />
        <Route path='/services/telecom' element = {<MaintanenceWork />} />
        <Route path='/services/solar-work' element = {<SolarPanel />} />
        <Route path='/services/db-sunshade-fabrics' element = {<DBAndSunshade />} />
        <Route path='/services/home-construction-renovation' element = {<HomeConstruction />} />
        <Route path='/services/dg-rental' element = {<DgRental />} />
        <Route path='/services/general-products' element = {<GeneralProducts />} />
        <Route path='/media/gallery' element = {<Gallery />} />
        <Route path='/media/iso-certificates' element = {<IsoCertificatesPage />} />

      </Routes>
    </>
  )
}

export default App
