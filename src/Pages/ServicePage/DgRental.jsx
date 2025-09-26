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
    title: "⚡ Wide Range of Generators",
    desc: "From 15kVA to 250kVA+ diesel generators available for short-term and long-term rentals.",
  },
  {
    title: "🛠️ Full Support & Maintenance",
    desc: "24/7 support, fuel management, and on-site maintenance to ensure uninterrupted operations.",
  },
  {
    title: "🚚 Quick Delivery & Setup",
    desc: "Fast deployment with complete installation at your location for immediate use.",
  },
  {
    title: "🔇 Silent & Weatherproof Units",
    desc: "Soundproof and weather-resistant enclosures, perfect for urban and remote deployments.",
  },
  {
    title: "📅 Flexible Rental Plans",
    desc: "Customized rental plans tailored to both short-term projects and long-term contracts.",
  },
];

const DgRental = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const slideImages = ["/dg-rental/4.jpg", "/dg-rental/5.jpg", "/services/dg-rental-2.jpg"];

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
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center px-4">
                  <h1 className="text-white text-center text-3xl sm:text-4xl md:text-5xl font-bold">
                    
                    <TypeAnimation
                        sequence={[
                          "DIESEL GENERATOR RENTAL",  // type
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

      {/* Main Content */}
      <div className="w-full flex flex-col gap-8 pb-6 md:pb-12 px-4 md:px-12 lg:px-28 py-10">
        
        {/* Intro */}
        <section className="flex flex-col gap-6">
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="md:text-lg leading-relaxed"
          >
            <strong>Flawless Engineering</strong> provides reliable{" "}
            <strong>Diesel Generator Rental Services</strong> to ensure businesses,
            telecom sites, hospitals, and infrastructure projects never face downtime.
            Our generator fleet is maintained to the highest standards of{" "}
            <strong>fuel efficiency, safety, and runtime reliability</strong>.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:text-lg leading-relaxed"
          >
            Whether it’s for <strong>temporary site development</strong> or{" "}
            <strong>long-term power backup</strong>, we deliver DG solutions that keep
            operations running — even in remote, off-grid, or energy-deficient areas.
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

        {/* Trusted Clients / Coverage */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-6">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-4"
          >
            <h2 className="font-bold text-2xl">Trusted Across Pakistan</h2>
            <p>
              Our DG Rental services are trusted by{" "}
              <strong>Zong, Ufone, NBP, SIUT, and other leading organizations</strong>.
              From urban centers to remote locations, we provide uninterrupted power
              where it matters most.
            </p>
            <p>
              We’ve powered{" "}
              <strong>telecom sites, hospitals, banks, and construction projects</strong>,
              ensuring continuous operations even in areas with poor grid access.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <img
              className="w-full md:w-2/3 rounded-lg shadow-lg"
              src="/services/dg-rental-2.jpg"
              alt="DG Rental"
            />
          </motion.div>
        </section>

        {/* Gallery */}
        <section className="py-8 bg-gray-100 rounded-lg shadow-sm">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Our Gallery
          </h2>
          <div className="columns-2 md:columns-3 gap-4 space-y-4">
            <img src="/dg-rental/4.jpg" className="rounded-md shadow-md" />
            <img src="/dg-rental/5.jpg" className="rounded-md shadow-md" />
            <img src="/services/dg-rental-2.jpg" className="rounded-md shadow-md" />
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="flex flex-col gap-4 mt-8">
          <h2 className="font-bold text-2xl text-center mb-4">
            Powering Our Vision
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            Our mission is to deliver{" "}
            <strong>dependable, sustainable, and accessible energy solutions</strong>{" "}
            to support businesses and communities nationwide.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-center"
          >
            With every generator deployed, we move closer to{" "}
            <strong>a more resilient, energy-secure Pakistan</strong>.
          </motion.p>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default DgRental;
