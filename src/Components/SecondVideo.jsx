import React from 'react';

const SecondVideo = () => {
  return (
    <section className="w-full min-h-screen bg-gradient-to-tr from-purple-900 via-gray-900 to-black flex items-center justify-center px-4 py-16">
      <div className="backdrop-blur-md bg-white/5 p-6 rounded-3xl shadow-xl flex flex-col items-center max-w-sm border border-white/10">
        
        {/* Title */}
        <h2 className="text-white text-2xl font-semibold mb-4 text-center">Project Showcase</h2>
        
        {/* Video */}
        <div className="w-[280px] h-[500px] rounded-2xl overflow-hidden shadow-lg border border-white/10">
          <video
            src="/videos/second-video.mp4"  // 🔁 Replace with your video path
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        </div>

        {/* Description */}
        <p className="text-gray-300 mt-4 text-center text-sm">
          At Ishal Enterprises, we provide high-quality construction solutions tailored to meet the unique needs of every project. From foundation to finish, our experienced team ensures timely delivery, structural integrity, and exceptional craftsmanship.
        </p>
      </div>
    </section>
  );
};

export default SecondVideo;
