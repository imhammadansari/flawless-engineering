import React, { useEffect, useState } from 'react';
import Header from '../Components/Header';
import CoreValues from '../Components/CoreValues';
import Footer from '../Components/Footer'
import Statistics from '../Components/Statistics';
import OrganizationHierarcy from '../Components/OrganizationHierarcy';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { TypeAnimation } from 'react-type-animation';

const AboutPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const slideImages = [
    "/about/about-1.jpg",
  ];

  return (

    <>
      <Header />
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
                    <TypeAnimation
                      sequence={[
                        "About Us",  // type
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


      <div className='w-full md:min-h-screen flex flex-col gap-2 md:gap-4 pt-10 md:pt-8 px-4 md:px-6 lg:px-8 items-center justify-center'>
        <div className='w-full md:w-4/5 h-full flex flex-col'>

          <h1 className='text-3xl sm:text-4xl lg:text-4xl py-6 md:py-14 xl:text-5xl pb-1 text-center text-[#472c75]'>
            FLAWLESS ENGINEERING
          </h1>

          <p className='pt-2 md:pt-4 text-sm md:text-base text-gray-600'>
            Flawless Engineering is a forward-thinking infrastructure and engineering company redefining precision, performance, and professionalism. With a legacy rooted in quality, we specialize in delivering impactful, end-to-end solutions across telecom, energy, and civil infrastructure sectors.
          </p>

          <p className='pt-2 md:pt-4 lg:text-base text-gray-600'>
            Established with a mission to build smarter, faster, and more efficiently, Flawless Engineering has consistently met the evolving demands of modern infrastructure. From telecom tower rollouts to solar integrations, our work is guided by innovation, safety, and sustainability.
          </p>

          <p className='pt-4 lg:text-base text-gray-600'>
            Our core services include:
            <ul className='list-disc pl-6 md:pl-8 pt-2 md:pt-4 font-bold'>
  <li>
    Infrastructure Work – <span className="font-normal">End-to-end infrastructure development with precision and durability.</span>
  </li>
  <li>
    Civil Work Construction – <span className="font-normal">Complete civil engineering solutions, from foundations to turnkey projects.</span>
  </li>
  <li>
    Safe City Pole Installation – <span className="font-normal">Specialized in installing poles and structures for Safe City projects, ensuring reliable security infrastructure.</span>
  </li>
  <li>
    Telecom Solutions & Services – <span className="font-normal">Fiber deployment, tower rollouts, and advanced telecom systems.</span>
  </li>
  <li>
    DB & Sunshade Fabrications – <span className="font-normal">Customized distribution boards and durable sunshade structures.</span>
  </li>
  <li>
    Solar Structure & Panel Installation – <span className="font-normal">Sustainable solar solutions, including panel installation and structural design.</span>
  </li>
  <li>
    Home Construction & Renovation – <span className="font-normal">Modern home building and renovation services with quality craftsmanship.</span>
  </li>
</ul>
          </p>

          <p className='pt-2 md:pt-4 lg:text-base text-gray-600'>
            Trusted by leading names in telecom, energy, and public sector development, Flawless Engineering has delivered milestone projects across Pakistan’s most challenging terrains. We bring together expert teams, advanced tools, and smart planning to deliver on time and beyond expectations.
          </p>

          <p className='pt-2 md:pt-4 lg:text-base text-gray-600'>
            Our name reflects our commitment: Flawless execution, zero compromise. Whether it's a high-capacity fiber network or a solar-powered rural hub, our engineering reflects durability, innovation, and integrity.
          </p>

          <p className='pt-2 md:pt-4 lg:text-base text-gray-600'>
            At Flawless Engineering, we don't just construct infrastructure—we construct progress. We believe in empowering industries, communities, and future generations through infrastructure that performs today and sustains tomorrow.
          </p>
        </div>

        {/* CEO Section (unchanged) */}
        <div className="w-full md:w-4/5 mx-auto min-h-screen flex flex-col md:flex-row items-center justify-center py-8 gap-6">
          {/* Text Section */}
          <div className="w-full md:w-2/3 flex flex-col justify-center">
            <h1 className="text-xl md:text-2xl lg:text-3xl text-[#472c75] pb-2">
              Message from the CEO
            </h1>

            <p className="text-sm md:text-base text-gray-700 leading-relaxed pb-2">
              Dear Team, As the leader of this company, I believe true leadership is not about authority but about
              service—serving our vision, our values, and, most importantly, each of you. Success is not built on the efforts of one but on the collective passion and dedication of all.
            </p>

            <p className="text-sm md:text-base text-gray-700 leading-relaxed pb-2">
              Let us remain committed to integrity and fairness in everything we do. Our actions today will define
              the legacy we leave for tomorrow. Remember, every challenge is an opportunity to grow, and every
              decision we make is a thread in the fabric of our shared success.
            </p>

            <p className="text-sm md:text-base text-gray-700 leading-relaxed pb-2">
              I encourage each of you to lead by example in your own roles—act with humility, strive for excellence,
              and always stay true to what is right. When we govern ourselves with purpose and honesty, we build
              trust, foster collaboration, and inspire greatness.
            </p>

            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              Together, we can achieve not only remarkable outcomes but also create an environment where innovation,
              respect, and shared vision thrive. This is the heart of our company and the foundation for our future.
              <br /><br />
              Thank you for your unwavering dedication and trust in this journey.
              <br /><br />
              <span className="font-semibold">With respect and determination,</span><br />
              <span className="font-bold text-[#472c75]">Mr. Ali Shouja</span>
            </p>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/3 flex items-center justify-center">
            <img
              src="/ceo.jpeg"
              alt="CEO"
              loading="lazy"
              className="w-[350px] h-[450px] sm:w-[400px] sm:h-[600px] md:w-60 md:h-80 lg:w-72 lg:h-96 object-cover rounded-xl shadow-lg border border-gray-300"
            />
          </div>
        </div>
      </div>



      {/* <OrganizationHierarcy /> */}


      <div className='w-full flex flex-col my-24 md:flex-row gap-2 md:gap-10 pt-4 md:pt-0 lg:pb-8 px-2 md:px-20 lg:px-40'>

        {/* Mission Section */}
        <div className='w-full justify-center flex flex-col'>
          <h1 className='text-3xl text-center md:text-start md:text-2xl lg:text-[44px] font-bold pb-1 text-[#472c75]'>Our Mission</h1>

          <p className='pt-1 text-sm md:text-base lg:text-xl text-gray-600'>
            At Flawless Engineering, our mission is to deliver high-performance engineering, telecom, and infrastructure solutions with absolute precision. We strive to drive progress through cutting-edge technology, skilled execution, and a relentless focus on quality, safety, and sustainability.
          </p>

          <p className='pt-2 text-sm md:text-base lg:text-xl text-gray-600'>
            We empower our clients by building smart, efficient, and future-ready systems—ensuring value creation, operational excellence, and a long-term positive impact on communities and industries.
          </p>
        </div>

        {/* Mission Image */}
        <div className='w-full flex gap-3 items-center justify-end'>
          <img
            className='md:w-7/8 lg:w-5/6'
            src='/about/mission.jpg'
            alt='Mission - Flawless Engineering'
            loading='lazy'
          />
        </div>
      </div>

      {/* Vision Section */}
      <div className='w-full flex bg-gray-100 py-20 md:py-14 flex-col mb-12 md:flex-row gap-2 md:gap-10 px-2 md:px-20 lg:px-40'>

        {/* Vision Image */}
        <div className='w-full max-h-full flex gap-3 items-center justify-start'>
          <img
            className='md:w-7/8 lg:w-7/8'
            src='/about/vision.jpg'
            alt='Vision - Flawless Engineering'
            loading='lazy'
          />
        </div>

        {/* Vision Content */}
        <div className='w-full justify-center flex flex-col'>
          <h1 className='text-3xl text-center md:text-start md:text-2xl lg:text-[44px] font-bold pb-1 text-[#472c75]'>Our Vision</h1>

          <p className='pt-1 text-sm md:text-base lg:text-xl text-gray-600'>
            To become Pakistan’s most trusted name in engineering, telecom, and clean energy solutions—driving digital transformation, powering sustainable infrastructure, and shaping resilient, connected communities.
          </p>

          <p className='pt-2 text-sm md:text-base lg:text-xl text-gray-600'>
            Our vision is rooted in excellence, led by innovation, and powered by purpose—to engineer the future, flawlessly.
          </p>
        </div>
      </div>

      {/* Future Section */}
      <div className='w-full flex flex-col my-12 md:flex-row gap-2 md:gap-10 pt-4 md:pt-0 lg:pb-8 px-2 md:px-20 lg:px-40'>

        {/* Future Image */}
        <div className='w-full max-h-full flex gap-3 items-center justify-start'>
          <img
            className='md:w-7/8 lg:w-7/8'
            src='/about/future.jpg'
            alt='Future - Flawless Engineering'
            loading='lazy'
          />
        </div>

        {/* Future Content */}
        <div className='w-full justify-center flex flex-col'>
          <h1 className='text-3xl text-center md:text-start md:text-2xl lg:text-[44px] font-bold pb-1 text-[#472c75]'>The Future</h1>

          <p className='pt-1 text-sm md:text-base lg:text-xl text-gray-600'>
            Flawless Engineering is focused on becoming a next-generation infrastructure leader—expanding our portfolio into smart cities, renewable energy systems, and advanced telecom technologies.
          </p>

          <p className='pt-2 md:pt-4 text-sm md:text-base lg:text-lg text-gray-600'>
            We are investing in modern tools, automation, and skilled talent to transform the way infrastructure is designed and delivered. Our future lies in building green, efficient, and intelligent systems that uplift communities, accelerate connectivity, and strengthen national progress.
          </p>
        </div>
      </div>


      {/* <Statistics /> */}

      <CoreValues />

      <Footer />
    </>
  )
}

export default AboutPage