import React, { useEffect } from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const SolarPanel = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const slideImages = ["/banner/solar-banner.jpg", "/banner/solar-banner-two.jpg"];

  return (
    <>
      <Header />

      {/* Hero Section */}
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
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-white text-center text-3xl sm:text-4xl md:text-5xl font-bold px-4"
                  >

                    <TypeAnimation
                      sequence={[
                        "Solar Structure & Panel Installation",  // type
                        2000,        // wait 2s
                        "",          // clear
                        1000,        // wait before retyping
                      ]}
                      wrapper="span"
                      cursor={true}
                      speed={60}
                      repeat={Infinity} // infinite loop
                    />
                  </motion.h1>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Main Content */}
      <div className="w-full flex flex-col gap-20 px-4 md:px-12 lg:px-28 py-16">

        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <p className="text-lg leading-relaxed">
            At <strong>Flawless Engineering</strong>, we provide complete{" "}
            <strong>Solar Structure & Panel Installation</strong> services to
            power businesses, homes, and telecom sites with reliable, sustainable,
            and cost-effective energy solutions. With grid reliability often
            limited, our solar expertise ensures uninterrupted, eco-friendly
            operations across Pakistan.
          </p>
        </motion.div>

        {/* Section 1 - What We Offer */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.img
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            src="/banner/solar.jpeg"
            alt="Solar Installation"
            className="rounded-lg shadow-lg"
          />
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            <h2 className="text-2xl font-bold">What We Offer</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Solar Assessment & Design:</strong> Energy audits and
                optimized system planning.
              </li>
              <li>
                <strong>On-Grid, Off-Grid & Hybrid Systems:</strong> Tailored for
                savings, off-grid reliability, or 24/7 hybrid power.
              </li>
              <li>
                <strong>Professional Installation:</strong> Secure mounting,
                efficient alignment, and complete system setup.
              </li>
              <li>
                <strong>Maintenance & Support:</strong> Cleaning, performance
                checks, and quick response support.
              </li>
              <li>
                <strong>Solar for Telecom:</strong> Reliable power for towers and
                remote sites, reducing diesel costs.
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Section 2 - Where We Work */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            <h2 className="text-2xl font-bold">Where We Work</h2>
            <p>
              We have deployed solar projects across Pakistan, ranging from
              remote villages to major industrial and urban setups:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Telecom sites in Tharparkar, Chitral, and Khuzdar</li>
              <li>Industrial areas in Jamshoro, Nooriabad, Karachi, Hyderabad</li>
              <li>Schools & institutions like IBA Sukkur and TCF Schools</li>
              <li>Urban homes and businesses in Karachi, Hyderabad, Sanghar</li>
            </ul>
          </motion.div>
          <motion.img
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            src="/solar-panel/1.jpg"
            alt="Solar Sites"
            className="rounded-lg shadow-lg"
          />
        </div> */}

        {/* Section 3 - Why Choose Us */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            <h2 className="text-2xl font-bold">Why Choose Flawless Engineering?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Proven experience in nationwide solar projects</li>
              <li>Trusted by leading telcos, banks, and institutions</li>
              <li>Expert in telecom, industrial, and residential solutions</li>
              <li>Use of high-quality panels, inverters, and batteries</li>
              <li>Focus on long-term sustainability and cost efficiency</li>
            </ul>
          </motion.div>

          <motion.img
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            src="/banner/solar-two.jpeg"
            alt="Why Choose Us"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-center mb-6">Solar Projects</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "/solar-panel/1.jpeg",
              "/solar-panel/2.jpeg",
              "/solar-panel/3.jpeg",
              "/solar-panel/4.jpeg",
              ].map((src, i) => (
              <motion.img
                key={i}
                src={src}
                alt="Solar Project"
                className="rounded-lg shadow-md"
                whileHover={{ scale: 1.05 }}
              />
            ))}
          </div>
        </motion.div>

        {/* Closing */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center py-6"
        >
          <h2 className="text-2xl font-bold mb-2">Empowering a Greener Future</h2>
          <p>
            With every solar project, Flawless Engineering takes Pakistan closer
            to clean, reliable, and independent energy. Our mission is not just
            to install panels, but to build a brighter, greener tomorrow.
          </p>
        </motion.div>
      </div>

      <Footer />
    </>
  );
};

export default SolarPanel;
