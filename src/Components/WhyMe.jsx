import React from 'react';

const features = [
  {
    id: 1,
    title: "Ensuring All Sites are HSE Compliant",
    desc: "Ensuring all sites are HSE compliant by following strict health, safety, and environmental standards at every stage of work.",
    icon: "/focus-icons/icons8-guarantee-96.png",
  },
  {
    id: 2,
    title: "Improving Governance & Eliminating Theft",
    desc: "Improving governance and eliminating theft by enforcing transparent processes, strict monitoring, and accountability at all levels.",
    icon: "/focus-icons/icons8-improve-96.png",
  },
  {
    id: 3,
    title: "Solving Critical Telecom Problems with Teamwork",
    desc: "Solving critical telecom problems through effective teamwork, collaboration, and timely decision-making.",
    icon: "/focus-icons/icons8-teamwork-96.png",
  },
  {
    id: 4,
    title: "Services offered by 24/7 with Quality Work",
    desc: "Offering 24/7 services with a commitment to quality work, reliability, and customer satisfaction.",
    icon: "/focus-icons/icons8-support-96.png",
  },
];

const WhyMe = () => {
  return (
    <section className="w-full px-4 py-12 bg-white">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-[rgb(37,83,177)]">
          Industry Focus
        </h2>
        <div className="w-24 h-1 bg-[rgb(37,83,177)] mt-2 mx-auto rounded" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {features.map((item, index) => (
          <div
            key={item.id}
            className="relative bg-gray-100 shadow-md rounded-lg p-6 pl-16 group overflow-hidden hover:shadow-xl transition-all duration-300"
          >
            {/* Left vertical bar */}
            <div className="absolute top-0 left-0 h-full w-2 bg-gradient-to-b from-[rgb(37,83,177)] to-blue-400 rounded-r"></div>

            {/* Number Badge */}
            <div className="absolute -top-3 -left-3 bg-[rgb(37,83,177)] text-white w-10 h-10 flex items-center justify-center rounded-full text-base font-semibold z-10 shadow-lg">
              {item.id}
            </div>

            {/* Icon */}
            <img src={item.icon} alt={item.title} className="w-12 h-12 mb-4" />

            {/* Title */}
            <h3 className="text-xl font-semibold text-[rgb(37,83,177)] mb-2">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-gray-700 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyMe;
