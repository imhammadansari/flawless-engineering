import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaLinkedinIn, FaHome, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";



const Footer = () => {
  return (
    <>
      <div className='flex flex-col lg:flex-row gap-10 py-16 px-4 lg:px-14 lg:py-20 justify-between' style={{
        background: "linear-gradient(to right, #e8e8ea, #f0f0f1, #ffffff)",
      }}>

        <div className='flex flex-col w-full lg:w-1/3'>
          <img className='w-20 h-20' src="/logo.png" alt="" />
          <p className='text-sm lg:text-sm text-gray-600'>Flawless Engineering is a trusted name in telecom, energy, and civil infrastructure solutions across Pakistan. With a commitment to innovation, quality, and sustainability, we deliver projects that empower industries, communities, and future generations.</p>
        </div>

        <div className='flex flex-col w-full lg:w-1/4 items-start'>
          <h1 className='font-bold text-lg md:text-base text-gray-600 lg:text-lg text-start pb-2'>Flawless Engineering</h1>
          <div className='flex flex-col text-sm lg:text-sm text-gray-600 text-start gap-2'>
            <Link className='hover:text-[#472c75]' to='/services/civil-work'>Civil Work Construction</Link>
            <Link className='hover:text-[#472c75]' to='/services/site-surveys'>Site Surveys for Acquiring Lands</Link>
            <Link className='hover:text-[#472c75]' to='/services/pole-light'>Pole Light Installtion</Link>
            <Link className='hover:text-[#472c75]' to='/services/solar-work'>Solar Structure & Panel Installation</Link>
            <Link className='hover:text-[#472c75]' to='/services/home-construction-renovation'>Home Construction & Renovation</Link>
            <Link className='hover:text-[#472c75]' to='/services/db-sunshade-fabrics'>DB & Sunshade Fabrications</Link>
            <Link className='hover:text-[#472c75]' to='/services/dg-rental'>Diesel Generators Rent</Link>
            <Link className='hover:text-[#472c75]' to='/services/telecom'>Telecom Solutions & Services</Link>
            <Link className='hover:text-[#472c75]' to='/services/infrastructure-work'>Infrastructure Work</Link>
            {/* <Link className='hover:text-[#472c75]' to='/services/losrs-surveys'>LOSRs Surveys MW Planning & CW Design</Link>
            <Link className='hover:text-[#472c75]' to='/services/general-products'>General Products Supply</Link> */}
          </div>
        </div>

        <div className='flex flex-col w-full lg:w-1/3 items-start'>
          <h1 className='font-bold text-lg pb-2 lg:pb-0 md:text-base text-gray-600 lg:text-base text-start lg:pb-2'>Contact Us</h1>
          <div className='flex flex-col text-xs lg:text-xl text-gray-600 text-start md:gap-4'>
            <div className='flex gap-4'>
              <FaHome className='text-2xl' />
              <div className='flex flex-col lg:gap-2'>
                <strong className='text-base lg:text-sm'>Head Office:</strong>
                <p className='text-base lg:text-sm'>Zia Masjid  Stop Near, Bakri CNG Qureshi, Plaza, Rawalpindi</p>
              </div>
            </div>

            <div className='flex gap-4 pt-2 lg:pt-0'>
              <FaPhoneAlt className='text-base' />
              <p className='text-base lg:text-sm w-4/5'>+92 3158235669</p>
            </div>

            <div className='flex gap-4 pt-2 lg:pt-0'>
              <MdEmail className='text-2xl pt-1 lg:pt-0' />
              {/* <p className='text-base lg:text-sm w-4/5'>support@ishalenterprises.com.pk</p> */}
            </div>
          </div>
        </div>

        <div className='flex flex-col w-full lg:w-1/6 items-start'>
          <h1 className='font-bold text-lg md:text-base lg:text-base text-gray-600 text-start lg:pb-2'>Social Media</h1>
          <div className='flex flex-col cursor-pointer pt-2 lg:pt-0 text-xs text-start gap-2 text-gray-600 lg:text-base'>
            <Link to=''><FaFacebook className='w-8 h-8' /></Link>
            <Link to=''> <FaLinkedinIn className='w-8 h-8' /> </Link>
          </div>
        </div>
      </div>

    </>
  )
}

export default Footer