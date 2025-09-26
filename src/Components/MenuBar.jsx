import React, { useState } from 'react';
import { IoArrowBackCircle } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';

const MenuBar = ({ hideMenu }) => {
  const navigate = useNavigate();
  const [showServices, setShowServices] = useState(false);
  const [showMedia, setShowMedia] = useState(false);

   const services = [
        { name: "Infrastructure Work", path: "/services/infrastructure-work" },
        { name: "Civil Work Construction", path: "/services/civil-work" },
        { name: "Site Surveys for Acquiring Lands", path: "/services/site-surveys" },
        { name: "Telecom Solutions & Services", path: "/services/telecom" },
        { name: "LOSRs Surveys MW Planning & CW Design", path: "/services/losrs-surveys" },
        { name: "Diesel Generator Rent", path: "/services/dg-rental" },
        { name: "DB & Sunshade Fabrications", path: "/services/db-sunshade-fabrics" },
        { name: "Solar Structure & Panel Installation", path: "/services/solar-work" },
        { name: "Home Costruction & Renovation", path: "/services/home-construction-renovation" },
        { name: "General Products Supply", path: "/services/general-products" },
    ];

  const mediaItems = [
    { name: "Gallery", path: "/media/gallery" },
    { name: "ISO Certificates", path: "/media/iso-certificates" }
  ];

  const handleNavigate = (path) => {
    navigate(path.startsWith('/') ? path : `/services/${path}`);
    hideMenu();
  };

  return (
    <div className='fixed inset-0 z-50 overflow-hidden'>
      {/* background overlay */}
      <div className='absolute inset-0 bg-black/20' onClick={hideMenu}></div>

      {/* right side menu (w-1/2) */}
      <div className='absolute right-0 top-0 h-full w-1/2 bg-white shadow-lg'>
        <div className='p-4'>
          <IoArrowBackCircle
            className='pb-4 text-5xl text-gray-700 hover:text-blue-600 cursor-pointer'
            onClick={hideMenu}
          />
          <ul className='flex flex-col gap-4 text-gray-800 text-base'>

            <li>
              <Link to="/" onClick={hideMenu}>Home</Link>
            </li>

            <li>
              <Link to="/about" onClick={hideMenu}>About</Link>
            </li>

            {/* Services dropdown */}
            <li>
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => {
                  setShowServices(!showServices);
                  setShowMedia(false);
                }}
              >
                <span>Services</span>
                <span>{showServices ? "▲" : "▼"}</span>
              </div>

              {showServices && (
                <ul className="mt-2 ml-2 space-y-2 text-sm text-gray-700">
                  {services.map((service, index) => (
                    <li
                      key={index}
                      onClick={() => handleNavigate(service.path)}
                      className="cursor-pointer hover:text-blue-600"
                    >
                      {service.name}
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* Media dropdown */}
            <li>
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => {
                  setShowMedia(!showMedia);
                  setShowServices(false);
                }}
              >
                <span>Media</span>
                <span>{showMedia ? "▲" : "▼"}</span>
              </div>

              {showMedia && (
                <ul className="mt-2 ml-2 space-y-2 text-sm text-gray-700">
                  {mediaItems.map((item, index) => (
                    <li
                      key={index}
                      onClick={() => handleNavigate(item.path)}
                      className="cursor-pointer hover:text-blue-600"
                    >
                      {item.name}
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li>
              <Link to="/contact" onClick={hideMenu}>Contact</Link>
            </li>

          </ul>
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
