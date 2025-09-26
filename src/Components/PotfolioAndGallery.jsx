import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

const PotfolioAndGallery = () => {

  const slideImages = [
    "/banner/10.jpeg",
  ];
  return (
    <>

      <div className="w-full relative">
        <Swiper
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          modules={[Navigation, Autoplay]}
          className="w-full h-[300px] sm:h-[400px] md:h-[600px]"
        >
          {slideImages.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-full">
                <img
                  src={img}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 bg-opacity-40 flex items-center justify-center">
                  <h1 className="text-white text-center text-3xl sm:text-4xl md:text-5xl font-bold">
                    PORTFOLIO & GALLERY
                  </h1>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className='w-full min-h-screen flex flex-col my-8 md:my-14 py-2 md:py-1 lg:py-2 px-4 md:px-8 lg:px-14 lg:gap-2'>

        <h1 className='text-center text-xl md:text-3xl pb-6 md:pb-8'>Civil Work Construction</h1>

        <div className='w-full justify-center gap-4 grid grid-cols-1 md:grid-cols-4 md:grid-cols-2'>

          <img className='w-full' src='/civil-page/1.jpeg' />
          <img className='w-full' src='/civil-page/2.jpeg' />
          <img className='w-full' src='/civil-page/3.jpeg' />
          <img className='w-full' src='/civil-page/4.jpeg' />

        </div>
        
        <div className='w-full justify-center gap-4 grid grid-cols-1 md:grid-cols-3 md:grid-cols-2 pt-2 md:pt-4'>

          <img className='w-full' src='/civil-page/5.jpeg' />
          <img className='w-full' src='/civil-page/6.jpeg' />
          <img className='w-full' src='/civil-page/7.jpeg' />



        </div>

        <h1 className='text-center text-xl md:text-3xl py-6 md:py-8'>Solar Structure & Panel Installation</h1>

        <div className='w-full justify-center gap-2 grid grid-cols-2 md:grid-cols-2'>

          <img className='w-full' src='/solar-panel/1.jpg' />
          <img className='w-full' src='/solar-panel/2.jpg' />
        </div>

        <div className='w-full justify-centergap-2 grid grid-cols-1'>

          <img className='w-full lg:w-auto' src='/solar-panel/6.jpeg' />

        </div>

        <h1 className='text-center text-xl md:text-3xl py-6 md:py-8'>Site Surveys for Acquiring Lands</h1>

        <div className='w-full justify-center gap-2 grid grid-cols-2 md:grid-cols-3 md:grid-cols-2'>

          <img className='w-full' src='/site-surveys/1.jpeg' />
          <img className='w-full' src='/site-surveys/2.jpeg' />
          <img className='w-full' src='/site-surveys/3.jpeg' />
          <img className='w-full' src='/site-surveys/4.jpeg' />
          <img className='w-full' src='/site-surveys/7.jpeg' />
          <img className='w-full' src='/site-surveys/8.jpeg' />
          <img className='w-full' src='/site-surveys/9.jpeg' />
          <img className='w-full' src='/site-surveys/10.jpeg' />
          <img className='w-full' src='/site-surveys/12.jpeg' />

        </div>

        <h1 className='text-center text-xl md:text-3xl py-6 md:py-8'>Telecom Solutions & Services</h1>

        <div className='w-full justify-centergap-2 grid grid-cols-2 md:grid-cols-3'>

          <div className='flex flex gap-4 md:gap-2'>
            <img className='w-full lg:w-auto' src='/maintanence-work/1.jpeg' />
            <img className='w-full lg:w-auto' src='/maintanence-work/2.jpeg' />
            <img className='w-full lg:w-auto' src='/maintanence-work/3.jpeg' />
          </div>

        </div>

        <h1 className='text-center text-xl md:text-3xl py-6 md:py-8'>Home Construction & Renovation</h1>

        <div className='w-full justify-center gap-2 grid grid-cols-1 md:grid-cols-3 md:grid-cols-2'>

          <img className='w-full' src='/home-construction/10.jpeg' />
          <img className='w-full' src='/home-construction/4.jpeg' />
          <img className='w-full' src='/home-construction/2.jpeg' />

        </div>

        <div className='w-full justify-center gap-2 grid grid-cols-2 mt-4 md:grid-cols-4 md:grid-cols-2'>

          <img className='w-full' src='/home-construction/6.jpg' />
          <img className='w-full' src='/home-construction/7.jpg' />
          <img className='w-full' src='/home-construction/8.jpg' />
          <img className='w-full' src='/home-construction/9.jpg' />

        </div>

        {/* <h1 className='text-center text-xl md:text-3xl py-6 md:py-8'>DB & Sunshade Fabrications</h1>

        <div className='w-full justify-center gap-4 grid grid-cols-1 md:grid-cols-3 md:grid-cols-2'>

          <img className='w-full' src='/db-sunshade/2.jpeg' />
          <img className='w-full' src='/db-sunshade/12.jpeg' />
          <img className='w-full' src='/db-sunshade/16.jpg' />
          <img className='w-full' src='/db-sunshade/4.jpeg' />
          <img className='w-full' src='/db-sunshade/6.jpeg' />
          <img className='w-full' src='/db-sunshade/7.jpeg' />
        </div> */}

      </div>

    </>
  )
}

export default PotfolioAndGallery;