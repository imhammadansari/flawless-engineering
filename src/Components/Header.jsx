import React, { useState } from 'react';
import MenuBar from './MenuBar';
import { Link, useNavigate } from 'react-router-dom';
import { IoMenu } from 'react-icons/io5';
// import { IoMenu } from "react-icons/io5";

const Header = () => {
    const [menu, setMenu] = useState(false);
    const [showServices, setShowServices] = useState(false);
    const [showMedia, setShowMedia] = useState(false);
    const navigate = useNavigate();

    const handleNavigate = (path) => {
        navigate(path);
        setShowServices(false);
        setShowMedia(false);
    };

    const hideMenu = () => setMenu(false);
    const showMenu = () => setMenu(!menu);

    const services = [
        { name: "Infrastructure Work", path: "/services/infrastructure-work" },
        { name: "Civil Work Construction", path: "/services/civil-work" },
        { name: "Pole Light Installation", path: "/services/pole-light" },
        // { name: "Site Surveys for Acquiring Lands", path: "/services/site-surveys" },
        { name: "Telecom Solutions & Services", path: "/services/telecom" },
        // { name: "LOSRs Surveys MW Planning & CW Design", path: "/services/losrs-surveys" },
        // { name: "Diesel Generator Rent", path: "/services/dg-rental" },
        { name: "DB & Sunshade Fabrications", path: "/services/db-sunshade-fabrics" },
        { name: "Solar Structure & Panel Installation", path: "/services/solar-work" },
        { name: "Home Costruction & Renovation", path: "/services/home-construction-renovation" },
        // { name: "General Products Supply", path: "/services/general-products" },
    ];

    const mediaItems = [
        { name: "Gallery", path: "/media/gallery" },
        { name: "ISO Certificates", path: "/media/iso-certificates" }
    ];

    return (
        <>
            <div className='w-full flex bg-white justify-between h-auto py-2 pl-2 md:pl-7 pr-2 md:pr-12 lg:pr-16 sticky top-0 z-50 bg-gradient-to-r from-gray-100 via-gray-200 to-white shadow-md shadow-black'>
                <div className='items-center flex pl-2 md:pl-4'>
                    <Link className='cursor-pointer' to='/'>
                        {/* <img className='w-[13rem] md:w-auto' src='/logo-ishal-removebg-preview.png' alt='Logo' /> */}
                        <img className='w-16 h-16 lg:w-20 lg:h-20' src="/logo.png" alt="" />
                    </Link>
                </div>

                <div className='flex w-1/2 items-center justify-end'>
                    <ul className='hidden md:flex text-xl text-[#472c75] text-lg gap-6 relative'>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>

                        {/* Services Dropdown */}
                        <li className="relative cursor-pointer" onClick={() => {
                            setShowServices(!showServices);
                            setShowMedia(false);
                        }}>
                            <span>Services</span>
                            <span>{showServices ? "▲" : "▼"}</span>
                            {showServices && (
                                <ul className="absolute top-full right-0 mt-2 bg-white border shadow-lg rounded-md w-52 z-50">
                                    {services.map((service, index) => (
                                        <li
                                            key={index}
                                            onClick={() => handleNavigate(service.path)}
                                            className="px-4 py-2 text-sm hover:bg-blue-100 cursor-pointer text-gray-700"
                                        >
                                            {service.name}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>

                        {/* Media Dropdown */}
                        <li className="relative cursor-pointer" onClick={() => {
                            setShowMedia(!showMedia);
                            setShowServices(false);
                        }}>
                            <span>Media</span>
                            <span>{showMedia ? "▲" : "▼"}</span>
                            {showMedia && (
                                <ul className="absolute top-full right-0 mt-2 bg-white border shadow-lg rounded-md w-52 z-50">
                                    {mediaItems.map((item, index) => (
                                        <li
                                            key={index}
                                            onClick={() => handleNavigate(item.path)}
                                            className="px-4 py-2 text-sm hover:bg-blue-100 cursor-pointer text-gray-700"
                                        >
                                            {item.name}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>

                        <li><Link to="/contact">Contact</Link></li>
                    </ul>

                    {/* Mobile Menu Icon */}
                    <ul className='flex md:hidden'>
                        <IoMenu className='text-4xl text-[#472c75]' onClick={showMenu} />
                    </ul>
                </div>
            </div>

            {/* Mobile Menu */}
            {menu && (
                <MenuBar hideMenu={hideMenu} />
            )}
        </>
    );
};

export default Header;
