import React, { useEffect } from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const services = [
  {
    title: "📶 LOS Surveys",
    desc: "On-ground and drone-assisted Line-of-Sight surveys to validate microwave paths, check obstructions, and produce accurate path profiles.",
  },
  {
    title: "📡 Microwave (MW) Link Planning",
    desc: "Link-budget calculations, frequency planning, antenna selection and redundancy design to maximize throughput and reliability.",
  },
  {
    title: "🏗️ Civil Work (CW) Design",
    desc: "Site-specific civil designs — tower foundations, shelters, grounding, access and drainage — built to safety and compliance standards.",
  },
  {
    title: "🛰️ Path Profiling & Terrain Analysis",
    desc: "High-resolution terrain modelling and Fresnel zone analysis to eliminate interference and reduce rework on site.",
  },
  {
    title: "🚁 Drone Surveying & Reporting",
    desc: "Rapid aerial mapping for inaccessible sites, producing georeferenced imagery and detailed deliverables for planners and engineers.",
  },
];

const LosSurveys = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const slideImages = ["/services-page/surveys-mw.jpeg"];

  return (
    <>
      <Header />

      {/* Hero Slider */}
      <div className="w-full relative">
        <Swiper
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          modules={[Navigation, Autoplay]}
          className="w-full h-[300px] sm:h-[400px] md:h-[600px]"
        >
          {slideImages.map((img, idx) => (
            <SwiperSlide key={idx}>
              <div className="relative w-full h-full">
                <img src={img} alt={`Slide ${idx + 1}`} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center px-4">
                  <h1 className="text-white text-center text-3xl sm:text-4xl md:text-5xl font-bold">
                    
                    <TypeAnimation
                      sequence={[
                        "LOS SURVEYS · MW PLANNING · CW DESIGN",  // type
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

      <div className="w-full flex flex-col gap-8 pb-6 md:pb-12 px-4 md:px-12 lg:px-28 py-10">
        {/* Intro */}
        <section className="flex flex-col gap-6">
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="md:text-lg leading-relaxed"
          >
            <strong>Flawless Engineering</strong> provides precision Line-of-Sight (LOS)
            surveys, microwave backhaul planning and civil work design that together
            enable reliable wireless networks. Our technical approach reduces risk,
            shortens rollout time and lowers lifecycle costs for operators and
            infrastructure owners.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:text-lg leading-relaxed"
          >
            We combine field expertise, drone imagery, and engineering-grade modelling
            tools to produce actionable deliverables — from path clearances and link
            budgets to foundation drawings and site access plans.
          </motion.p>
        </section>

        {/* Services */}
        <section className="py-6 bg-gray-50 rounded-lg shadow-sm">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">What We Provide</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
              >
                <h3 className="font-bold text-lg mb-2">{s.title}</h3>
                <p className="text-gray-600 text-sm">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Where We Work */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-6">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-4"
          >
            <h2 className="font-bold text-2xl">Where We Operate</h2>
            <p>
              Flawless Engineering executes LOS and MW projects nationwide — from
              dense urban rooftops to remote high-altitude and desert sites. Our
              teams routinely survey and design for locations with restricted access
              and challenging topography.
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Remote mountain valleys such as Chitral</li>
              <li>Desert regions like Tharparkar</li>
              <li>Coastal & high-humidity zones including Karachi</li>
              <li>Industrial clusters (Jamshoro, Nooriabad) and urban centers</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <img className="w-full md:w-2/3 rounded-lg shadow-lg" src="/services-page/surveys-mw.jpeg" alt="LOS Survey" />
          </motion.div>
        </section>

        {/* Closing */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-lg leading-relaxed text-center max-w-4xl mx-auto"
        >
          Flawless Engineering delivers end-to-end survey, planning and design services that
          de-risk rollouts and accelerate deployment. From survey reports to civil drawings,
          our deliverables are practical, compliant and ready for implementation.
        </motion.p>

        {/* Gallery */}
        <section className="py-8 bg-gray-100 rounded-lg shadow-sm">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Project Gallery</h2>
          <div className="columns-2 md:columns-3 gap-4 space-y-4">
            <motion.img
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              src="/site-surveys/1.jpeg"
              alt="Survey 1"
              className="rounded-md shadow-md mb-4"
            />
            <motion.img
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              src="/site-surveys/12.jpeg"
              alt="Survey 2"
              className="rounded-md shadow-md mb-4"
            />
            <motion.img
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              src="/site-surveys/8.jpeg"
              alt="Survey 3"
              className="rounded-md shadow-md mb-4"
            />
            <motion.img
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              src="/portfolio/3.jpg"
              alt="Survey 4"
              className="rounded-md shadow-md mb-4"
            />
            <motion.img
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              src="/site-surveys/19.jpg"
              alt="Survey 5"
              className="rounded-md shadow-md mb-4"
            />
            <motion.img
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              src="/portfolio/photo-1.jpg"
              alt="Survey 6"
              className="rounded-md shadow-md mb-4"
            />
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="flex flex-col gap-4 mt-8">
          <h2 className="font-bold text-2xl text-center mb-4">Supporting a Connected Future</h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            Our mission is to enable resilient wireless networks through accurate surveys,
            pragmatic planning and robust design — delivering the technical foundation for
            Pakistan’s digital connectivity.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-center"
          >
            By combining field expertise and engineering rigor, Flawless Engineering reduces
            deployment risk and accelerates time-to-service for operators and infrastructure owners.
          </motion.p>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default LosSurveys;
