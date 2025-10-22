import React, { useEffect, useState } from 'react';
import Header from '../Components/Header';
import CoreValues from '../Components/CoreValues';
import Footer from '../Components/Footer'
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
        <div className="w-full md:w-4/5 mx-auto h-full flex flex-col px-4 md:px-6 lg:px-10 text-gray-700">

  {/* Heading */}
  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-[#472c75] py-6 md:py-12 tracking-wide">
    FLAWLESS ENGINEERING
  </h1>

  {/* Intro */}
  <div className="space-y-4 text-sm md:text-base leading-relaxed">
    <p>
      <span className="font-semibold text-[#472c75]">Flawless Engineering</span> is a forward-thinking infrastructure and engineering company redefining precision, performance, and professionalism. With a legacy rooted in quality, we deliver impactful, end-to-end solutions across telecom, energy, and civil infrastructure sectors.
    </p>

    <p>
      Established in <span className="font-semibold text-[#472c75]">September 2023</span>, our mission is to build smarter, faster, and more efficiently. From telecom tower rollouts to solar integrations, our work is guided by innovation, safety, and sustainability.
    </p>
  </div>

  {/* Divider */}
  <div className="w-20 h-1 bg-[#472c75] mx-auto my-6 rounded-full"></div>

  {/* Services */}
  <div className="mt-4">
    <h2 className="text-2xl md:text-3xl font-bold text-[#472c75] mb-4 text-center">
      Our Core Services
    </h2>

    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 list-disc pl-6 text-gray-700">
      <li><span className="font-semibold">Infrastructure Work:</span> End-to-end infrastructure development with precision and durability.</li>
      <li><span className="font-semibold">Civil Work Construction:</span> Complete civil engineering solutions, from foundations to turnkey projects.</li>
      <li><span className="font-semibold">Safe City Pole Installation:</span> Installation of poles and structures ensuring reliable security infrastructure.</li>
      <li><span className="font-semibold">Telecom Solutions & Services:</span> Fiber deployment, tower rollouts, and advanced telecom systems.</li>
      <li><span className="font-semibold">DB & Sunshade Fabrications:</span> Customized distribution boards and durable sunshade structures.</li>
      <li><span className="font-semibold">Solar Structure & Panel Installation:</span> Sustainable solar solutions, including panel installation and design.</li>
      <li><span className="font-semibold">Home Construction & Renovation:</span> Modern home building and renovation services with quality craftsmanship.</li>
      <li><span className="font-semibold">Site Acquisition & NOC Acquiring:</span> Full support for telecom site permissions and NOC documentation.</li>
      <li><span className="font-semibold">Saaf Suthra Punjab:</span> Active participation in government and private sanitation projects for a cleaner environment.</li>
      <li><span className="font-semibold">General Supply:</span> Procurement and delivery of engineering, construction, and maintenance materials.</li>
      <li><span className="font-semibold">Horticulture & Landscape:</span> Designing and maintaining green environments for public and private spaces.</li>
      <li><span className="font-semibold">Banks Renovation:</span> Interior and exterior renovation of bank branches ensuring professional and secure setups.</li>
    </ul>
  </div>

  {/* Divider */}
  <div className="w-20 h-1 bg-[#472c75] mx-auto my-8 rounded-full"></div>

  {/* Achievements */}
  <div className="space-y-4 text-sm md:text-base leading-relaxed">
    <p>
      Trusted by leading names in telecom, energy, and public sector development, we’ve delivered milestone projects across Pakistan’s most challenging terrains — including <span className="font-semibold">Saaf Suthra Punjab</span>, <span className="font-semibold">bank renovations</span>, <span className="font-semibold">general supply</span>, and <span className="font-semibold">landscaping initiatives</span>.
    </p>

    <p>
      Our name reflects our promise: <span className="italic font-semibold text-[#472c75]">Flawless execution, zero compromise.</span> Whether it's a high-capacity fiber network or a solar-powered rural hub, our engineering reflects durability, innovation, and integrity.
    </p>

    <p>
      At Flawless Engineering, we don’t just construct infrastructure — we construct progress. We believe in empowering industries, communities, and future generations through infrastructure that performs today and sustains tomorrow.
    </p>
  </div>

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
              <span className="font-bold text-[#472c75]">Mr. Ali Shoujah</span>
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



      <OrganizationHierarcy />


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