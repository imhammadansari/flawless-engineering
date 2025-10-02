import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const Partners = () => {
  return (
    <div className="w-full px-0 pt-4 my-10 md:my-14">
      {/* Full-width background with overlay */}
      <div
        className="relative w-full bg-cover bg-center"
        style={{ backgroundImage: "url('/clients-banner.jpg')" }}
      >
        {/* White overlay on full background */}
        <div className="absolute inset-0 bg-black/40 z-0"></div>

        {/* Content container centered with fixed width */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 py-8 lg:py-16 ">
          {/* Heading */}
          <h1 className="text-center text-white text-2xl sm:text-4xl md:text-3xl lg:text-4xl font-bold mb-4">
            Our Clients
          </h1>

          {/* Swiper */}
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={2}
            breakpoints={{
              640: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 5 },
            }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="w-full"
            style={{ height: "150px" }}
          >
            {[
              { src: "/clients/zong.png", w: "w-[6rem] md:w-[8rem]" },
              { src: "/clients/nokia.png", w: "w-[8rem] md:w-[12rem]" },
              { src: "/clients/jazz-logo.png", w: "w-[5rem] md:w-[12rem]" },
              { src: "/clients/engro.png", w: "w-[8rem] md:w-[11rem]" },
              { src: "/clients/nrtc.png", w: "w-[6rem] md:w-[7rem]" },
              { src: "/clients/dha.png", w: "w-[5rem] md:w-[6rem]" },
            ].map((client, index) => (
              <SwiperSlide
                key={index}
                className="flex items-center justify-center h-full"
              >
                <img
                  src={client.src}
                  className={`${client.w} object-contain h-full max-h-[120px]`}
                  alt={`client-${index}`}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Partners;
