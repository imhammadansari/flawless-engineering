import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { TypeAnimation } from "react-type-animation"; // 👈 Import

const Banner = () => {
  const slideImages = [
    "/banner/civil-work-banner.jpg",
    "/banner/solar-banner.jpg",
    "/banner/civil-work-banner-three.jpg",
    "/banner/construction-three.jpg",
    "/banner/surveys-banner.jpeg",
    "/banner/home-construction-banner-two.jpg",
    "/banner/infrastructure-banner-two.jpg",
  ];

  return (
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
              <div className="absolute inset-0 bg-black/20 bg-opacity-40 flex items-center justify-center">
                <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold">
                  <TypeAnimation
                    sequence={[
                      "FLAWLESS ENGINEERING",  // type
                      2000,        // wait 2s
                      "",          // clear
                      1000,        // wait before retyping
                    ]}
                    wrapper="span"
                    cursor={true}
                    speed={60}
                    repeat={Infinity} // infinite loop
                  />
                </h1>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
