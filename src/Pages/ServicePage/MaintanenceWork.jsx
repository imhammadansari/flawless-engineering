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
    title: "🛠️ Routine Preventive Maintenance",
    desc: "Scheduled inspections, system diagnostics, and performance checks to identify and resolve issues before they affect operations.",
  },
  {
    title: "⚡ Power System Maintenance",
    desc: "Servicing DG sets, solar systems, batteries, and electrical panels to ensure a consistent and reliable power supply.",
  },
  {
    title: "🏗️ Shelter & Site Repairs",
    desc: "Upkeep and repairs of BTS shelters, fencing, grounding systems, and tower structures for site stability.",
  },
  {
    title: "🔧 Corrective Maintenance",
    desc: "Fast response repairs for damaged or underperforming equipment, ensuring minimal downtime and service disruption.",
  },
  {
    title: "📡 Fiber Link Testing & Repairs",
    desc: "OTDR testing, link assessments, and splicing to fix signal losses and ensure seamless connectivity.",
  },
];

const MaintanenceWork = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const slideImages = ["/services-page/maintanenc.jpeg"];

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
                        "TELECOM MAINTENANCE SERVICES",  // type
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
            At <strong>Ishal Enterprises</strong>, we know that{" "}
            <strong>building infrastructure is only the beginning</strong>. True
            reliability comes from maintaining it. Our{" "}
            <strong>Maintenance Work services</strong> ensure telecom and civil
            infrastructure run at peak performance — minimizing downtime and
            maximizing asset life.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:text-lg leading-relaxed"
          >
            We specialize in{" "}
            <strong>preventive, corrective, and emergency maintenance</strong>{" "}
            for towers, power systems, shelters, and fiber networks across both
            urban and remote areas of Pakistan.
          </motion.p>
        </section>

        {/* Services */}
        <section className="py-6 bg-gray-50 rounded-lg shadow-sm">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
            Our Maintenance Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
              >
                <h3 className="font-bold text-lg mb-2">{s.title}</h3>
                <p className="text-gray-600 text-sm">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Why Clients Trust Us */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-6">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-4"
          >
            <h2 className="font-bold text-2xl">Why Clients Trust Us</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>24/7 support teams ready for urgent repairs</li>
              <li>Skilled technicians in telecom systems and power electronics</li>
              <li>Data-driven logs for tracking performance & upgrades</li>
              <li>Nationwide coverage — from deserts to mountains</li>
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
              src="/services/maintanence-work.jpeg"
              alt="Maintenance Work"
            />
          </motion.div>
        </section>

        {/* Commitment */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-lg leading-relaxed text-center max-w-4xl mx-auto"
        >
          With every maintenance contract,{" "}
          <strong>Ishal Enterprises stays committed</strong> to delivering
          continuous connectivity and long-term reliability. Our{" "}
          <strong>vision for Pakistan’s digital growth</strong> depends on both
          what we build and how well we maintain it.
        </motion.p>

        {/* Gallery */}
        <section className="py-8 bg-gray-100 rounded-lg shadow-sm">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Our Gallery
          </h2>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
            <img src="/maintanence-work/1.jpeg" className="rounded-md shadow-md" />
            <img src="/maintanence-work/2.jpeg" className="rounded-md shadow-md" />
            <img src="/maintanence-work/3.jpeg" className="rounded-md shadow-md" />
          </div>

        </section>
      </div>

      <Footer />
    </>
  );
};

export default MaintanenceWork;
