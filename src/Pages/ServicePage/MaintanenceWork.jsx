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
    title: "🛠️ Preventive Maintenance",
    desc: "Regular inspections and performance testing to keep telecom and energy systems running smoothly with zero surprises.",
  },
  {
    title: "⚡ Power & Energy Solutions",
    desc: "Maintenance of DG sets, solar systems, batteries, and panels to guarantee uninterrupted and efficient power delivery.",
  },
  {
    title: "🏗️ Civil & Site Upkeep",
    desc: "Repair and strengthening of shelters, fencing, grounding, and towers for long-term site durability.",
  },
  {
    title: "🔧 Rapid Corrective Actions",
    desc: "Swift troubleshooting and repairs to restore faulty systems quickly and minimize service interruptions.",
  },
  {
    title: "📡 Fiber Network Support",
    desc: "Advanced OTDR testing, fault localization, and fiber splicing to restore seamless data connectivity.",
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
                        "TELECOM & INFRASTRUCTURE MAINTENANCE",
                        2000,
                        "",
                        1000,
                      ]}
                      wrapper="span"
                      cursor={true}
                      speed={60}
                      repeat={Infinity}
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
            At <strong>Flawless Engineering</strong>, we believe{" "}
            <strong>building is only half the journey</strong>. True value comes
            from keeping infrastructure reliable and efficient. Our{" "}
            <strong>maintenance services</strong> ensure uninterrupted telecom
            and civil operations while extending the life of critical assets.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:text-lg leading-relaxed"
          >
            We provide{" "}
            <strong>
              preventive, corrective, and emergency maintenance
            </strong>{" "}
            for telecom sites, energy systems, shelters, and fiber networks —
            delivering reliability across cities, rural areas, and remote
            terrains.
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
            <h2 className="font-bold text-2xl">Why Choose Flawless Engineering</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>24/7 response teams for emergencies</li>
              <li>Certified technicians with telecom & energy expertise</li>
              <li>Smart reporting and data-driven performance logs</li>
              <li>Nationwide presence — from plains to high-altitude sites</li>
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
              src="/maintanence-work/main.jpeg"
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
          At <strong>Flawless Engineering</strong>, our{" "}
          <strong>commitment to maintenance</strong> is about more than fixing
          problems — it’s about preventing them. We stand by our promise to
          provide uninterrupted connectivity and reliability that fuels{" "}
          <strong>Pakistan’s digital and industrial growth</strong>.
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

          <div className="columns-1 md:columns-3 gap-4 space-y-4 pt-2 md:pt-4">
            <img src="/maintanence-work/4.jpeg" className="rounded-md shadow-md" />
            <img src="/maintanence-work/5.jpeg" className="rounded-md shadow-md" />
            <img src="/maintanence-work/6.jpeg" className="rounded-md shadow-md" />
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default MaintanenceWork;
