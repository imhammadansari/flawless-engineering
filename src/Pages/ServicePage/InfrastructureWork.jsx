import React, { useEffect } from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const services = [
  {
    title: "Telecom Tower Foundations & Civil Work",
    desc: "Complete civil engineering services from site surveying to foundation casting, designed to endure tough environments.",
  },
  {
    title: "FTTS & Long-Haul Fiber Deployment",
    desc: "High-speed fiber optic networks across Sindh, Balochistan, and beyond, including trenching, ducting, splicing, and testing.",
  },
  {
    title: "BTS Room Construction & Equipment Shelters",
    desc: "State-of-the-art control centers with power, ventilation, and security systems ensuring network reliability.",
  },
  {
    title: "Power Solutions & Electrical Work",
    desc: "Integrated power systems including DG sets, solar panels, and hybrid solutions for off-grid telecom sites.",
  },
  {
    title: "Urban & Rural Telecom Infrastructure",
    desc: "Expertise in dense urban and remote areas with minimal environmental impact and maximum coverage.",
  },
];

const whyChooseUs = [
  {
    title: "Proven Track Record",
    desc: "300+ towers and 900+ FTTS sites delivered nationwide",
  },
  {
    title: "Nationwide Reach",
    desc: "Serving metropolitan and high-risk remote areas",
  },
  {
    title: "Skilled Workforce",
    desc: "Certified engineers and technicians with extensive experience",
  },
  {
    title: "Quality & Safety Commitment",
    desc: "Strict QA/QC and HSE protocols followed",
  },
  {
    title: "Environmentally Responsible",
    desc: "Promoting tower sharing, carbon footprint reduction, and optimization",
  },
];

const slideImages = ["/services-page/telecom.jpeg"];

const InfrastructureWork = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />

      {/* Hero */}
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
                        "Infrastructure Work",  // type
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

      {/* Intro & Second Paragraph */}
      <section className="px-6 md:px-20 py-12">
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-lg leading-relaxed"
        >
          <strong>Flawless Engineering</strong> leads Pakistan’s telecom and civil
          infrastructure development with cutting-edge solutions. We empower
          digital connectivity and support growing communication networks across
          the nation.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-lg leading-relaxed"
        >
          From urban centers to challenging terrains — including the mountains of
          Chitral, deserts of Tharparkar, and coastal Karachi — our expertise
          enables robust and sustainable infrastructure projects nationwide.
        </motion.p>
      </section>

      {/* Services */}
      <section className="px-6 md:px-20 py-12 bg-gray-50">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          Our Services
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

      {/* Why Choose Us */}
      <section className="px-6 md:px-20 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          Why Choose Us?
        </h2>

        {/* Left side - boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {whyChooseUs.map((w, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="bg-blue-50 p-6 rounded-lg shadow-sm hover:shadow-md"
            >
              <h3 className="font-bold text-lg mb-2">{w.title}</h3>
              <p className="text-gray-700 text-sm">{w.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>


      {/* Closing Paragraph */}
      <section className="px-6 md:px-20 py-12 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed"
        >
          At Flawless Engineering, we build smart, reliable, future-ready
          infrastructure that powers seamless communication and digital
          inclusion across Pakistan. Whether telecom operators, government
          bodies, or enterprises — our solutions align perfectly with your
          strategic goals.
        </motion.p>
      </section>

      {/* Gallery */}
      <section className="px-6 md:px-20 py-12 bg-gray-100">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          Our Gallery
        </h2>

        <div className="columns-1 md:columns-2 gap-4 space-y-4">
          <img src="/infrastructure-work/2.jpg" alt="Gallery" className="rounded-md shadow-md" />
          <img src="/infrastructure-work/3.jpg" alt="Gallery" className="rounded-md shadow-md" />
          <img src="/infrastructure-work/4.jpg" alt="Gallery" className="rounded-md shadow-md" />
          <img src="/infrastructure-work/5.jpg" alt="Gallery" className="rounded-md shadow-md" />
        </div>


      </section>

      <Footer />
    </>
  );
};

export default InfrastructureWork;
