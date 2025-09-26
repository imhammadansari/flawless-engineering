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
        style={{ backgroundImage: "url('/clients/clients.jpg')" }}
      >
        {/* White overlay on full background */}
        <div className="absolute inset-0 bg-white opacity-60 z-0"></div>

        {/* Content container centered with fixed width */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 py-8">
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
              { src: "/clients/telenor.png", w: "w-[7rem] md:w-[11rem]" },
              { src: "/clients/nokia.png", w: "w-[8rem] md:w-[12rem]" },
              { src: "/clients/engro.png", w: "w-[5rem] md:w-[9rem]" },
              { src: "/clients/moblink.png", w: "w-[6rem] md:w-[7rem]" },
              { src: "/clients/huawei.png", w: "w-[5rem] md:w-[5rem]" },
              { src: "/clients/iba-sukkur.png", w: "w-[5.5rem] md:w-[6.5rem]" },
              { src: "/clients/pphi.png", w: "w-[4rem] md:w-[5rem]" },
              { src: "/clients/NBP.png", w: "w-[6rem] md:w-[8rem]" },
              { src: "/clients/SIUT.png", w: "w-[4rem] md:w-[5rem]" },
              { src: "/clients/TAWAL.png", w: "w-[6.5rem] md:w-[8.5rem]" },
              { src: "/clients/tcf.svg", w: "w-[8rem] md:w-[10rem]" },
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
