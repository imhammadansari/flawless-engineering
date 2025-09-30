import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row pb-4 py-6 lg:pb-8 px-2 md:px-6 lg:px-8">
      <div className="w-full text-black h-full flex flex-col gap-4 md:flex-row px-2 md:px-6 lg:px-8 xl:px-10">
        {/* Left Side Content */}
        <div className="w-full md:w-1/2 h-full flex flex-col">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-3xl lg:text-4xl text-bold xl:text-5xl pb-1 text-[#472c75]"
          >
            About Us
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="pt-2 lg:text-base text-gray-600"
          >
            <strong>Flawless Engineering,</strong> Founded in January 2010, has
            steadily evolved into one of Pakistan’s most reliable names in
            telecom infrastructure, construction, and maintenance services...
          </motion.p>

          <motion.p
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="pt-2 lg:text-base text-gray-600"
          >
            In <strong>2021</strong> we achieved a major milestone through our
            partnership in the NOKIA USF projects...
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="pt-2 lg:text-base text-gray-600"
          >
            In <strong>2023</strong>, our team handled the{" "}
            <strong>NOKIA</strong> Dismantling Scope and continued with NOKIA
            Sharing Sites expansion...
          </motion.p>

          <motion.p
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="pt-2 lg:text-base text-gray-600"
          >
            Over the years, we've provided{" "}
            <strong>telecom tower construction and maintenance</strong> for
            clients like <strong>Zong 4G, Telenor, Huawei, and Nokia</strong>...
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="pt-2 lg:text-base text-gray-600"
          >
            We also offer solar panel installation services for{" "}
            <strong>residential, commercial, and telecom sites</strong>...
          </motion.p>

          <motion.p
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            viewport={{ once: true }}
            className="pt-2 lg:text-base text-gray-600"
          >
            In addition, we provide high-quality{" "}
            <strong>
              private residential construction, custom DB fabrication, sunshade
              shelters, and DG rental services
            </strong>{" "}
            — trusted by institutions like <strong>SIUT and NBP</strong>...
          </motion.p>
        </div>

        {/* Right Side Images */}
        <div className="w-full md:w-1/2 h-full flex flex-col gap-3 items-center justify-end">
          <div className="flex flex-col gap-4">
            {/* Top Image */}
            <motion.img
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="w-full md:w-[25rem] lg:w-[28.5rem]"
              src="/civil-page/4.jpg"
              alt="civil-construction"
              loading="lazy"
              width={456}
              height={300}
            />

            {/* Two Side-by-Side Images */}
            <div className="flex gap-2">
              <motion.div
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="w-1/2"
              >
                <img
                  className="md:w-52 lg:w-56"
                  src="/civil-page/7.jpg"
                  alt="Towers"
                  loading="lazy"
                  width={224}
                  height={150}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="w-1/2"
              >
                <img
                  className="md:w-52 lg:w-56"
                  src="/civil-page/5.jpg"
                  alt="Maintenance"
                  loading="lazy"
                  width={224}
                  height={150}
                />
              </motion.div>
            </div>

            {/* Bottom Section */}
            <motion.img
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="w-full md:w-[25rem] lg:w-[28.5rem]"
              src="/db-sunshade/12.jpeg"
              alt="civil-construction"
              loading="lazy"
              width={456}
              height={300}
            />

            <div className="flex gap-2">
              <motion.div
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="w-1/2"
              >
                <img
                  className="md:w-52 lg:w-56"
                  src="/solar-panel/1.jpg"
                  alt="Solar"
                  loading="lazy"
                  width={224}
                  height={150}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="w-1/2"
              >
                <img
                  className="md:w-52 lg:w-56"
                  src="/site-surveys/15.jpg"
                  alt="Survey"
                  loading="lazy"
                  width={224}
                  height={150}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
