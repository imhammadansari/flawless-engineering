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
    title: "🏠 Full-Scale Home Construction",
    desc: "End-to-end residential construction: planning, structural works, MEP and finishing to deliver homes ready for occupancy.",
  },
  {
    title: "🧱 Renovation & Remodeling",
    desc: "Partial or full-property renovations: kitchens, bathrooms, extensions and exterior upgrades with minimal disruption.",
  },
  {
    title: "🎨 Interior Design & Finishes",
    desc: "Bespoke interior fit-outs — cabinetry, flooring, lighting and paintwork tailored to your style and budget.",
  },
  {
    title: "🛠️ Structural Repair & Reinforcement",
    desc: "Waterproofing, crack repairs, retrofitting and load-bearing reinforcement to extend life and safety of buildings.",
  },
  {
    title: "🔧 Maintenance & Project Management",
    desc: "Transparent project management, quality control, and post-handover maintenance for long-term performance.",
  },
];

const HomeConstruction = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const slideImages = ["/banner/2.jpg", "/banner/11.jpg"];

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
          {slideImages.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-full">
                <img
                  src={img}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center px-4">
                  <h1 className="text-white text-center text-3xl sm:text-4xl md:text-5xl font-bold">

                    <TypeAnimation
                      sequence={[
                        "HOME CONSTRUCTION & RENOVATION",  // type
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
            <strong>Flawless Engineering</strong> builds and renovates residential
            properties with attention to structure, finish and livability. Our
            teams combine modern design, skilled craftsmen and reliable project
            controls to deliver comfortable, safe and beautiful homes.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:text-lg leading-relaxed"
          >
            From new builds to complete remodels, we handle everything from
            architectural coordination to MEP, finishes and handover — always
            with clear timelines and quality-first execution.
          </motion.p>
        </section>

        {/* Services */}
        <section className="py-6 bg-gray-50 rounded-lg shadow-sm">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
            Our Services
          </h2>
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
            <h2 className="font-bold text-2xl">Where We Work</h2>
            <p>
              Flawless Engineering executes residential projects across urban
              and remote areas — from Karachi and Hyderabad to Jamshoro,
              Nooriabad and demanding zones like Chitral and Tharparkar.
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Urban developments and gated communities</li>
              <li>Individual homes and multi-unit residences</li>
              <li>Staff housing for institutions and corporate facilities</li>
              <li>Renovations in constrained or heritage sites</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <img
              className="w-full md:w-2/3 rounded-lg shadow-lg"
              src="/services/home-constructions.jpg"
              alt="Home Construction"
            />
          </motion.div>
        </section>

        {/* Closing */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-lg leading-relaxed text-center max-w-4xl mx-auto"
        >
          At Flawless Engineering, we deliver homes that last — combining
          structural integrity, practical design and human-centered finishes so
          families can live comfortably for years to come.
        </motion.p>

        {/* Gallery */}
        <section className="py-8 bg-gray-100 rounded-lg shadow-sm">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Project Gallery
          </h2>
          <div className="columns-2 md:columns-4 gap-4 space-y-4">
            <img src="/home-construction/1.png" className="rounded-md shadow-md" />
            <img src="/home-construction/2.png" className="rounded-md shadow-md" />
            <img src="/home-construction/3.png" className="rounded-md shadow-md" />
            <img src="/home-construction/6.jpg" className="rounded-md shadow-md" />
            <img src="/home-construction/7.jpg" className="rounded-md shadow-md" />
            <img src="/home-construction/8.jpg" className="rounded-md shadow-md" />
            <img src="/home-construction/9.jpg" className="rounded-md shadow-md" />
            <img src="/home-construction/4.jpg" className="rounded-md shadow-md" />
            <img src="/home-construction/5.jpg" className="rounded-md shadow-md" />
            <img src="/services/home-constructions.jpg" className="rounded-md shadow-md" />
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="flex flex-col gap-4 mt-8">
          <h2 className="font-bold text-2xl text-center mb-4">Our Mission & Vision</h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            We aim to enhance living standards through quality construction,
            thoughtful design and reliable delivery — building neighborhoods and
            homes that stand the test of time.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-center"
          >
            Our vision is a better-built Pakistan where safe, functional and
            beautiful homes are accessible to every community.
          </motion.p>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default HomeConstruction;
