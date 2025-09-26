import React, { useEffect } from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const SiteSurveys = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const slideImages = ["/banner/4.jpeg"];

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
                        "Site Surveys & Land Acquisition",  // type
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
            At <strong>Flawless Engineering</strong>, we know the first step to
            any successful telecom or infrastructure project is selecting the
            right site. Our{" "}
            <strong>Site Survey & Land Acquisition services</strong> ensure that
            organizations can identify, assess, and secure land that meets
            technical, legal, and business requirements.
          </p>
        </motion.div>

        {/* Section 1 - Where We Operate */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.img
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            src="/services/site-surveys.jpeg"
            alt="Survey Work"
            className="rounded-lg shadow-lg"
          />
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            <h2 className="text-2xl font-bold">Where We Operate</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Khuzdar, Tharparkar, Chitral, and Jamshoro</li>
              <li>Sanghar, Nooriabad, and Balochistan belt</li>
              <li>Industrial corridors such as Jamshoro and Nooriabad</li>
              <li>Urban cities like Karachi, Lahore, and Hyderabad</li>
            </ul>
            <p>
              With nationwide presence and local expertise, we handle logistical,
              legal, and community-level challenges efficiently.
            </p>
          </motion.div>
        </div>

        {/* Section 2 - Our Expertise */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            <h2 className="text-2xl font-bold">Our Expertise</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Location Identification:</strong> Terrain, access, and
                network suitability.
              </li>
              <li>
                <strong>Technical Surveys:</strong> SARs & TSSRs with complete
                data capture.
              </li>
              <li>
                <strong>Legal Compliance:</strong> NOCs, ownership documents, and
                municipal approvals.
              </li>
              <li>
                <strong>Structural Feasibility:</strong> Soil, utilities, and site
                analysis.
              </li>
              <li>
                <strong>Stakeholder Negotiation:</strong> Transparent dealings with
                landowners & authorities.
              </li>
            </ul>
          </motion.div>
          <motion.img
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            src="/site-surveys/2.jpeg"
            alt="Expertise"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Section 3 - Why Choose Us */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.img
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            src="/site-surveys/3.jpeg"
            alt="Why Choose Us"
            className="rounded-lg shadow-lg"
          />
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            <h2 className="text-2xl font-bold">Why Choose Flawless Engineering?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Proven Field Experience:</strong> Skilled in diverse and
                tough terrains.
              </li>
              <li>
                <strong>Regulatory Knowledge:</strong> Deep understanding of land
                laws & compliance.
              </li>
              <li>
                <strong>Modern Tools:</strong> GIS mapping & satellite analysis.
              </li>
              <li>
                <strong>Complete Service:</strong> From survey to land handover.
              </li>
              <li>
                <strong>Trusted Partner:</strong> Preferred by operators &
                government entities.
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-center mb-6">
            Survey Snapshots
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "/site-surveys/1.jpeg",
              "/site-surveys/2.jpeg",
              "/site-surveys/3.jpeg",
              "/site-surveys/4.jpeg",
              "/site-surveys/7.jpeg",
              "/site-surveys/8.jpeg",
              "/site-surveys/10.jpeg",
              "/site-surveys/12.jpeg",
            ].map((src, i) => (
              <motion.img
                key={i}
                src={src}
                alt="Survey Snapshot"
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
          <h2 className="text-2xl font-bold mb-2">
            Building the First Step Toward Connectivity
          </h2>
          <p>
            Every project begins with land, and we ensure it’s the right one.
            With our surveys and acquisition expertise, your infrastructure is
            built on a solid foundation.
          </p>
        </motion.div>
      </div>

      <Footer />
    </>
  );
};

export default SiteSurveys;
