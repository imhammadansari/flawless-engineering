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
    title: "⚡ Complete Safe City Pole Installation",
    desc: "From foundation to wiring, we provide end-to-end installation of pole lights for streets, highways, societies, and commercial areas.",
  },
  {
    title: "🔌 Electrical Wiring & Cabling",
    desc: "Safe and efficient underground and overhead wiring systems ensuring reliable power distribution to every pole light.",
  },
  {
    title: "💡 LED & Solar Lighting Solutions",
    desc: "Energy-efficient LED and solar-powered pole lights to reduce costs and promote sustainable lighting infrastructure.",
  },
  {
    title: "🛠️ Maintenance & Repairs",
    desc: "Regular inspections, bulb replacements, and electrical fault repairs to keep pole lights functioning optimally.",
  },
  {
    title: "📊 Project Management",
    desc: "Professional handling of small to large-scale pole light projects with quality checks and timely delivery.",
  },
];

const PoleLightConstruction = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const slideImages = ["/pole-light/7.jpg", "/pole-light/2.jpeg"];

  return (
    <>
      <Header />

      {/* Hero Slider */}
      <div className="w-full relative">
        <Swiper
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          modules={[Navigation, Autoplay]}
          className="w-full h-[300px] sm:h-[400px] md:h-[700px] 2xl:h-[900px]"
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
                        "Safe City Pole Installation",
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
            <strong>Flawless Engineering</strong> specializes in professional
            <strong> Safe City Pole Installation </strong> services across Pakistan.
            Our expertise covers everything from design and foundation works to
            wiring, lighting, and ongoing maintenance, ensuring safe and
            reliable street and area illumination.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:text-lg leading-relaxed"
          >
            Whether for highways, societies, industrial zones, or public areas,
            our teams deliver cost-effective and energy-efficient pole lighting
            solutions — including modern LED and solar-powered systems — with
            quality assurance and timely execution.
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
      We execute Safe City Pole Installation projects in urban, rural, and
      industrial areas across Pakistan — ensuring safe, reliable, and
      sustainable outdoor lighting.
    </p>
    <ul className="list-disc pl-6 space-y-1">
      <li>Highways, motorways, and main roads</li>
      <li>Residential societies and gated communities</li>
      <li>Commercial and industrial zones</li>
      <li>Parks, public areas, and institutions</li>
      <li>Upper Dir, Lower Dir, Urban Agency, Bajaur Agency</li>
      <li>Swat, Buner, Chitral, and Gilgit</li>
    </ul>
  </motion.div>

  <motion.div
    initial={{ opacity: 0, x: 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
    className="flex justify-center"
  >
    <img
      className="w-full md:w-4/5 rounded-lg shadow-lg"
      src="/pole-light/8.jpg"
      alt="Save City Pole Installation"
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
          With <strong>Flawless Engineering</strong>, your pole light
          installations are guaranteed to be durable, efficient, and
          cost-effective — lighting up communities, roads, and institutions with
          excellence.
        </motion.p>

        {/* Gallery */}
        <section className="py-8 bg-gray-100 rounded-lg shadow-sm">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Project Gallery
          </h2>
          <div className="columns-2 md:columns-4 gap-4 space-y-4">
            <img src="/pole-light/3.jpeg" className="rounded-md shadow-md" />
            <img src="/pole-light/4.jpeg" className="rounded-md shadow-md" />
            <img src="/pole-light/5.jpeg" className="rounded-md shadow-md" />
            <img src="/pole-light/6.jpeg" className="rounded-md shadow-md" />
          </div>

          <div className="columns-1 md:columns-2 gap-4 space-y-4">
            <img src="/pole-light/1.jpeg" className="rounded-md shadow-md" />
            <img src="/pole-light/2.jpeg" className="rounded-md shadow-md" />
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="flex flex-col gap-4 mt-8">
          <h2 className="font-bold text-2xl text-center mb-4">
            Our Mission & Vision
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            Our mission is to provide sustainable and efficient pole lighting
            systems that improve safety, security, and visibility in public and
            private spaces.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-center"
          >
            Our vision is a brighter, safer Pakistan powered by modern,
            energy-efficient, and environmentally friendly lighting solutions.
          </motion.p>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default PoleLightConstruction;
