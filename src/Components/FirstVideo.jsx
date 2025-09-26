import React from 'react';

const FirstVideo = () => {
  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-[rgba(40,123,172,1)] to-[rgb(37,83,177)] flex items-center justify-center px-4 my-6 md:my-12">
      <div className="max-w-6xl w-full flex flex-col-reverse md:flex-row items-center py-6 gap-10">

        {/* Text Content */}
        <div className="text-white text-center md:text-left max-w-full md:max-w-lg lg:max-w-2xl xl:max-w-3xl">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-1 md:mb-2 lg:mb-4">We Provide Best Services</h2>
          <p className="text-sm md:text-base lg:text-lg text-gray-300">
            At Ishal Enterprises, our extensive experience in infrastructure and telecom deployments positions us uniquely for delivering reliable solar solutions. We understand the energy challenges faced across remote and urban areas of Pakistan, and we specialize in deploying solar-powered systems tailored for telecom towers and infrastructure sites. With a commitment to quality, sustainability, and innovation, our team ensures efficient, cost-effective, and long-lasting solar installations that reduce operational costs and carbon footprint—making us the trusted choice for energy-smart telecom and construction projects.
          </p>
        </div>

        {/* Video Inside Phone Frame */}
        <div className="h-[500px] md:w-[300px] md:h-[520px] lg:w-[300px] lg:h-[520px] bg-black rounded-[2rem] p-2 shadow-2xl border-4 border-gray-700 overflow-hidden relative">
          <video
            src="/videos/first-vid.mp4" // 📌 Replace with your actual video path
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover rounded-[1.7rem]"
          />
        </div>
      </div>
    </section>
  );
};

export default FirstVideo;
