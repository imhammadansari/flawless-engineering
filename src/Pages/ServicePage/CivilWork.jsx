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
    title: "🏗️ Site Development & Earthworks",
    desc: "Leveling, excavation, trenching, compaction, and drainage for ready-to-build construction sites — even in challenging terrain.",
  },
  {
    title: "🧱 Foundations & Structural Works",
    desc: "Precision-engineered concrete foundations and structural construction for telecom towers, shelters, and control units.",
  },
  {
    title: "🧰 Shelters & Building Construction",
    desc: "Durable BTS rooms, guard rooms, boundary walls, and internal roads, ensuring resilience in harsh climates.",
  },
  {
    title: "⚡ Power & Utility Infrastructure",
    desc: "Power rooms, earthing pits, transformer bases, and duct systems for safe, reliable, and efficient operations.",
  },
  {
    title: "🔩 Ancillary Installations",
    desc: "Fencing, cable trays, lightning arresters, and site accessories to ensure complete project readiness.",
  },
];

const CivilWork = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const slideImages = [
    "/banner/civil-work-banner.jpg",
    "/banner/construction-two.jpg",
    "/banner/construction-three.jpg",
  ];

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
                        "CIVIL WORK CONSTRUCTION",  // type
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
            <strong>Flawless Engineering</strong> delivers specialized{" "}
            <strong>Civil Work solutions</strong> that form the backbone of telecom
            and infrastructure development across Pakistan. With more than a decade
            of expertise, we provide resilient, scalable, and cost-effective
            engineering services — from the mountains of Chitral to the bustling
            hubs of Karachi.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:text-lg leading-relaxed"
          >
            Our dedication to <strong>quality, safety, and timely delivery</strong>{" "}
            ensures that every project stands strong against environmental challenges
            while meeting the highest industry benchmarks.
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
      Flawless Engineering has executed Civil Work projects across Pakistan,
      covering:
    </p>
    <ul className="list-disc pl-6 space-y-1">
      <li>Remote northern zones like Chitral and Gilgit</li>
      <li>Mountain regions including Upper Dir and Lower Dir</li>
      <li>Agencies such as Urban Agency and Bajaur Agency</li>
      <li>Valleys and districts like Swat and Buner</li>
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
      src="/civil-page/main.jpeg"
      alt="Civil Works"
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
          At Flawless Engineering, our goal is to{" "}
          <strong>build smart, sustainable, and future-ready infrastructure</strong>{" "}
          that empowers Pakistan’s telecom operators, enterprises, and government
          bodies to expand their networks with confidence.
        </motion.p>

        {/* Gallery */}
        <section className="py-8 bg-gray-100 rounded-lg shadow-sm">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Our Gallery
          </h2>
          <div className="columns-2 md:columns-4 gap-4 space-y-4">
            <img src="/civil-page/1.jpeg" className="rounded-md shadow-md" />
            <img src="/civil-page/2.jpeg" className="rounded-md shadow-md" />
            <img src="/civil-page/3.jpeg" className="rounded-md shadow-md" />
            <img src="/civil-page/4.jpeg" className="rounded-md shadow-md" />
          </div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4 pt-2 md:pt-4">
            <img src="/civil-page/5.jpeg" className="rounded-md shadow-md" />
            <img src="/civil-page/6.jpeg" className="rounded-md shadow-md" />
            <img src="/civil-page/7.jpeg" className="rounded-md shadow-md" />
          </div>

          <div className="columns-1 md:columns-2 lg:columns-4 gap-4 space-y-4 pt-2 md:pt-4">
            <img src="/civil-page/8.jpeg" className="rounded-md shadow-md" />
            <img src="/civil-page/9.jpeg" className="rounded-md shadow-md" />
            <img src="/civil-page/10.jpeg" className="rounded-md shadow-md" />
            <img src="/civil-page/11.jpeg" className="rounded-md shadow-md" />
          </div>

          <div className="columns-1 md:columns-2 lg:columns-4 gap-4 space-y-4 pt-2 md:pt-4">
            <img src="/civil-page/14.jpeg" className="rounded-md shadow-md" />
            <img src="/civil-page/15.jpeg" className="rounded-md shadow-md" />
            <img src="/civil-page/16.jpeg" className="rounded-md shadow-md" />
            <img src="/civil-page/17.jpeg" className="rounded-md shadow-md" />
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="flex flex-col gap-4 mt-8">
          <h2 className="font-bold text-2xl text-center mb-4">
            Driven by Our Mission & Vision
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            Guided by our mission, we deliver{" "}
            <strong>affordable, high-quality civil solutions</strong> that enable
            Pakistan’s leading operators to scale faster and connect more lives.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-center"
          >
            Our vision is to drive{" "}
            <strong>digital transformation</strong> by combining international
            best practices, advanced tools, and local expertise to build
            infrastructure for today and tomorrow.
          </motion.p>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default CivilWork;
