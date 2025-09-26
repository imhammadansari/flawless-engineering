import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { useLottie } from "lottie-react";
import ConstructionAnimation from "../assets/about.json";
import TelecomAnimation from "../assets/telecom.json";
import TelecomMaintainAnimation from "../assets/telecom-maintain.json";

const BannerTwo = () => {
  const [isMobile, setIsMobile] = useState(false);

  const Conctruction = {
    animationData: ConstructionAnimation,
    loop: true,
  };
  
  const Telecom = {
    animationData: TelecomAnimation,
    loop: true,
  };
  
  const TelecomMaintain = {
    animationData: TelecomMaintainAnimation,
    loop: true,
  };

  const constructionLottie = useLottie(Conctruction);
const telecomLottie = useLottie(Telecom);
const maintainLottie = useLottie(TelecomMaintain);


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full h-[95vh] md:h-[85vh] flex items-center justify-center">
      <Swiper
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Autoplay]}
        className="mySwiper w-full h-full"
      >
        <SwiperSlide>
          <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 items-center justify-center px-4 sm:px-6 md:px-12">
            <div className="flex flex-col items-center justify-center text-center md:text-left gap-2 lg:gap-3">
              <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-5xl font-bold leading-snug sm:leading-tight">
                More Than Just <span className='text-[rgb(54,137,185)]'>Construction</span> — We Build Your Dreams Into <span className="text-[rgb(54,137,185)]">Reality</span>
              </h1>
              <p className="font-light text-xs sm:text-sm md:text-xl mt-1 md:mt-2">
                Whether renovating a cherished home or starting a new project,
                we listen to your needs, guide you through every detail, and
                deliver results that reflect your lifestyle, values, and goals.
              </p>
            </div>

            <div className="flex items-center justify-center md:justify-end w-full">
              <div className="w-[20rem] sm:w-[25rem] md:w-[40rem] lg:w-[35rem] xl:w-[40rem]">{constructionLottie.View}</div>
            </div>
          </div>
        </SwiperSlide>
        
        <SwiperSlide>
          <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 items-center justify-center px-4 sm:px-6 md:px-12">
            <div className="flex flex-col items-center justify-center text-center md:text-left gap-2 md:gap-4">
              <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-5xl font-bold leading-snug sm:leading-tight">
                From Towers to <span className='text-[rgb(54,137,185)]'>Fiber</span> — We Build What Connects <span className='text-[rgb(54,137,185)]'>Pakistan</span>
              </h1>
              <p className="font-light text-xs sm:text-sm md:text-xl mt-1 md:mt-2">
                Since 2010, we’ve been at the forefront of building resilient telecom networks across Sindh, Balochistan, and beyond. Our partnerships with major telcos and expertise in tower deployment and fiber optics have made us a trusted name in connectivity and innovation.
              </p>
            </div>

            <div className="flex items-center justify-center md:justify-end w-full">
              <div className="w-[15rem] sm:w-[25rem] md:w-[23rem] lg:w-[30rem]">{telecomLottie.View}</div>
            </div>
          </div>
        </SwiperSlide>
        
        <SwiperSlide>
          <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 items-center justify-center px-4 sm:px-6 md:px-12">
            <div className="flex flex-col items-center justify-center text-center md:text-left gap-2 md:gap-4">
              <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-5xl font-bold leading-snug sm:leading-tight">
                Keeping <span className='text-[rgb(54,137,185)]'>Networks Alive</span> with Reliable Maintenance Solutions
              </h1>
              <p className="font-light text-xs sm:text-sm md:text-xl mt-1 md:mt-2">
                From routine checks to emergency support, our expert teams ensure uninterrupted network performance through proactive, efficient, and scalable telecom maintenance services.
              </p>
            </div>

            <div className="flex items-center justify-center md:justify-end w-full">
              <div className="w-[10rem] sm:w-[25rem] md:w-[14rem] lg:w-[17rem]">{maintainLottie.View}</div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BannerTwo;
