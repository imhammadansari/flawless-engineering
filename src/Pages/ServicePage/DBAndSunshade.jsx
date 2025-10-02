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
    title: "⚡ Custom DB (Distribution Board) Fabrication",
    desc: "Tailor-made DBs designed for safe and efficient power distribution, supporting telecom, residential, and commercial needs.",
    points: [
      "Single-phase & three-phase DBs",
      "Integrated MCBs, MCCBs, SPD & earthing systems",
      "Compact, weather-resistant enclosures",
      "Wiring, labeling & circuit protection",
    ],
  },
  {
    title: "☀️ Sunshade & Shelter Fabrication",
    desc: "Durable shelters & enclosures built to safeguard telecom and electrical equipment from harsh environments.",
    points: [
      "Custom sizes for towers, BTS & DG shelters",
      "Galvanized or powder-coated steel",
      "Site-friendly installation",
      "Ventilated to prevent overheating",
    ],
  },
  {
    title: "🔩 Mounting & Accessories",
    desc: "Fabrication & installation of brackets, stands, and steel frames for electrical gear, solar systems & telecom accessories.",
    points: [],
  },
];

const DBAndSunshade = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const slideImages = ["/db-sunshade/2.jpeg"];

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
                        "DB & SUNSHADE FABRICATIONS",  // type
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
            <strong>Flawless Engineering</strong> delivers{" "}
            <strong>custom DB & Sunshade Fabrication</strong> services designed
            to ensure safety, reliability, and durability. With decades of
            proven experience, we support telecom networks, residential, and
            commercial facilities across Pakistan.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:text-lg leading-relaxed"
          >
            Our fabrication solutions are trusted by industry leaders, built to
            withstand extreme conditions, and engineered for long-term
            performance.
          </motion.p>
        </section>

        {/* Services */}
        <section className="py-6 bg-gray-50 rounded-lg shadow-sm">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
            What We Offer
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
                <p className="text-gray-600 text-sm mb-2">{s.desc}</p>
                {s.points.length > 0 && (
                  <ul className="list-disc pl-6 text-sm text-gray-600 space-y-1">
                    {s.points.map((p, idx) => (
                      <li key={idx}>{p}</li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Where We Work */}
<section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-10">
  {/* Left Side - Text */}
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true, amount: 0.3 }}
    className="flex flex-col gap-6"
  >
    <h2 className="font-bold text-3xl md:text-4xl text-gray-800">
      Where We Work
    </h2>
    <p className="text-gray-600 leading-relaxed">
      <strong>Flawless Engineering</strong> has a strong footprint across 
      Pakistan, delivering reliable DB & Sunshade Fabrication projects in 
      challenging terrains and diverse regions.
    </p>

    {/* Locations */}
    <ul className="grid grid-cols-2 gap-3 text-gray-700 list-disc pl-5">
      <li>Upper Dir</li>
      <li>Lower Dir</li>
      <li>Urban Agency</li>
      <li>Bajaur Agency</li>
      <li>Swat</li>
      <li>Buner</li>
      <li>Chitral</li>
      <li>Gilgit</li>
    </ul>

    {/* Clients */}
    <div className="mt-6">
      <h3 className="font-semibold text-xl text-gray-800 mb-3">Our Clients</h3>
      <ul className="flex flex-wrap gap-3 text-gray-700">
        <li className="bg-gray-100 px-4 py-2 rounded-md shadow-sm">Zong 4G</li>
        <li className="bg-gray-100 px-4 py-2 rounded-md shadow-sm">Jazz</li>
        <li className="bg-gray-100 px-4 py-2 rounded-md shadow-sm">Nokia</li>
        <li className="bg-gray-100 px-4 py-2 rounded-md shadow-sm">Engro Enfrashare</li>
        <li className="bg-gray-100 px-4 py-2 rounded-md shadow-sm">DHA Rawalpindi</li>
      </ul>
    </div>
  </motion.div>

  {/* Right Side - Image */}
  <motion.div
    initial={{ opacity: 0, x: 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true, amount: 0.3 }}
    className="flex justify-center"
  >
    <img
      className="w-full md:w-4/5 rounded-lg shadow-lg border border-gray-200"
      src="/services/sunshade-db.png"
      alt="DB and Sunshade Fabrication"
    />
  </motion.div>
</section>


        {/* Closing Statement */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-lg leading-relaxed text-center max-w-4xl mx-auto"
        >
          At Flawless Engineering,{" "}
          <strong>our fabrication solutions are more than metalwork</strong> —
          they represent a commitment to safety, precision, and reliability.
        </motion.p>

        {/* Gallery */}
        <section className="py-8 bg-gray-100 rounded-lg shadow-sm">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Our Gallery
          </h2>
          <div className="columns-2 md:columns-2 gap-4 space-y-4">
            <img src="/db-sunshade/1.jpeg" className="rounded-md shadow-md" />
            <img src="/db-sunshade/2.jpeg" className="rounded-md shadow-md" />
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="flex flex-col gap-4 mt-8">
          <h2 className="font-bold text-2xl text-center mb-4">
            Built to Support Our Vision
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            We aim to build{" "}
            <strong>reliable, long-lasting infrastructure</strong> that empowers
            telecom operators, industries, and communities with uninterrupted
            connectivity.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-center"
          >
            Every DB & sunshade we fabricate is{" "}
            <strong>a step toward a smarter, safer, and connected Pakistan</strong>.
          </motion.p>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default DBAndSunshade;
