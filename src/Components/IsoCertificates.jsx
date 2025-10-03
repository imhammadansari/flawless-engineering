import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

const IsoCertificates = () => {
  const slideImages = [
    "/certificates-banner.png",
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
                    CERTIFICATES
                  </h1>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className='flex px-10 py-8 grid grid-cols-1 md:grid-cols-2 gap-4'>

        <img src='/iso-certificates/1.jpg' />
        <img src='/iso-certificates/2.jpg' />


      </div>
    </>
  )
}

export default IsoCertificates;

