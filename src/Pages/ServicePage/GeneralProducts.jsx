import React, { useEffect, useState } from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

const GeneralProducts = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
const slideImages = [
    "/general-products/main.jpeg",
  ];

    return (

        <>
            <Header />
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
                          <div className="absolute inset-0 bg-black/30 px-4 md:px-0 bg-opacity-40 flex items-center justify-center">
                            <h1 className="text-white text-center text-3xl sm:text-4xl md:text-5xl font-bold">
                               GENERAL PRODUCTS SUPPLY
                            </h1>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>

            <div className='w-full md:min-h-screen flex flex-col gap-2 md:gap-4 pb-4 py-4 md:py-6 lg:pb-8 px-2 md:px-12 lg:px-28'>

                <div className='w-full h-full flex flex-col'>
                    <p className='pt-2 md:text-lg'><strong>Ishal Enterprises,</strong> is a well established Manufacturer's Agent and
                        General Trading, supplier of government, private organizations and
                        NGOs. since its establishment in 2010 We have done remarkably since
                        then in supply of many type of products. Our Happy clientele will tell
                        the tale of our success.
                    </p>

                    <p className='pt-2 md:text-lg'>The supplies we have done consist of but not limited to Uniforms,
                        Stationary, Stitching Gadgets Furniture and Fixtures, Safety
                        Equipments, IT Products and Electronics. We have huge network of
                        resources to pool together best out of market. we don't only procure
                        the product but provide a comprehensive service to our customers for
                        the long run. we never think our work is a supply we think our relation
                        with customer is based on trust and continuos transactions.
                    </p>

                    <p className='pt-2 md:text-lg'>Our Marketing strategy helps to obtain and supply these high quality
                        products at very competitive prices to our customers and potential
                        buyers. We have established excellent relationship with the suppliers,
                        associates, affiliates and partners in the market. Honesty, Sincerity,
                        Integrity, Flexibility, Reliability and Credibility are the main
                        characteristics of Ishal Enterprises.
                    </p>

                    <p className='pt-2 md:text-lg'>Our Experience and ability to negotiate and procure at very best rates
                        makes us the better choice for our clients. We have presence in 7 cities
                        in Pakistan and can handle projects from all over Pakistan. We have our
                        own warehouses in Karachi to store goods and deliver on time.
                    </p>

                    <p className='pt-2 md:text-lg'>Nothing beats the hardworking and intellectual ability to perform under
                        pressure and keeping work as smooth as possible to meet deadline,
                        This is what we have learned in our past experience.
                    </p>


                </div>

                <h1 className='font-bold text-xl md:text-2xl pb-4 md:pb-2 text-center'>What We Offer:</h1>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:grid-col-3 gap-8 md:gap-6'>

                    <div to='/services/db-sunshade-fabrics' className='flex flex-col rounded-lg items-center bg-gray-100 py-2 md:py-4 px-2 md:px-4 shadow-[0_0_8px_8px_rgba(28,38,39,0.1)] md:shadow-[0_0_5px_5px_rgba(28,38,39,0.08)]'>
                        <img className='w-[22.5rem] pb-4' src='/general-products/15.jpeg' />
                        <h1 className='font-bold text-lg md:text-xl'>Uniforms</h1>
                        <p className='text-sm md:text-base text-gray-600'>At Ishal Enterprises, we supply high-quality uniforms designed for various sectors including students, security personnel, healthcare professionals, waiters, and industrial workers. Our uniforms combine comfort, durability, and professional appearance to meet the specific requirements of each field. Whether it's schoolwear that ensures a neat look, security uniforms that reflect authority, or healthcare apparel focused on hygiene and ease of movement — we tailor every product for functionality and style. Trusted by institutions and organizations, our uniform solutions help maintain identity, discipline, and efficiency across all work environments.</p>

                    </div>

                    <div to='/services/db-sunshade-fabrics' className='flex flex-col rounded-lg items-center bg-gray-100 py-2 md:py-4 px-2 md:px-4 shadow-[0_0_8px_8px_rgba(28,38,39,0.1)] md:shadow-[0_0_5px_5px_rgba(28,38,39,0.08)]'>
                        <img className='w-[22.5rem] pb-4' src='/general-products/8.jpg' />
                        <h1 className='font-bold text-lg md:text-xl'>Stationary</h1>
                        <p className='text-sm md:text-base text-gray-600'>At Ishal Enterprises, we provide a complete range of stationery supplies for offices, schools, and other institutions. From notebooks, pens, and files to whiteboards, markers, and desk organizers — our products are selected for quality, usability, and affordability. Whether it's for a professional workspace, classroom environment, or administrative setup, our stationery ensures smooth day-to-day operations. We aim to support productivity and organization with reliable supplies that meet the demands of every setting.</p>

                    </div>

                    <div to='/services/db-sunshade-fabrics' className='flex flex-col rounded-lg items-center bg-gray-100 py-2 md:py-4 px-2 md:px-4 shadow-[0_0_8px_8px_rgba(28,38,39,0.1)] md:shadow-[0_0_5px_5px_rgba(28,38,39,0.08)]'>
                        <img className='w-[22.5rem] pb-4' src='/general-products/ac.avif' />
                        <h1 className='font-bold text-lg md:text-xl'>Electronics</h1>
                        <p className='text-sm md:text-base text-gray-600'>At Ishal Enterprises, we offer a selection of reliable electronics including fans, air conditioners, and air coolers to ensure comfort and efficiency in any environment. Our products are sourced from trusted brands, delivering performance, energy efficiency, and durability. Whether it's cooling large office spaces, maintaining a comfortable home environment, or equipping commercial setups, our electronics solutions are designed to meet diverse needs with ease and reliability.</p>

                    </div>

                    <div to='/services/db-sunshade-fabrics' className='flex flex-col rounded-lg items-center bg-gray-100 py-2 md:py-4 px-2 md:px-4 shadow-[0_0_8px_8px_rgba(28,38,39,0.1)] md:shadow-[0_0_5px_5px_rgba(28,38,39,0.08)]'>
                        <img className='w-[22.5rem] pb-4' src='/general-products/26.jpg' />
                        <h1 className='font-bold text-lg md:text-xl'>Furniture</h1>
                        <p className='text-sm md:text-base text-gray-600'>At Ishal Enterprises, we provide durable and functional furniture solutions for offices, schools, and institutional use. Our range includes desks, chairs, tables, and storage units crafted from high-quality materials like iron and engineered wood to ensure long-lasting performance. Designed for comfort, efficiency, and space optimization, our furniture enhances productivity in work and learning environments. Whether it's ergonomic office setups or sturdy school furnishings, we deliver customized solutions to meet your specific needs.</p>

                    </div>

                    <div to='/services/db-sunshade-fabrics' className='flex flex-col rounded-lg items-center bg-gray-100 py-2 md:py-4 px-2 md:px-4 shadow-[0_0_8px_8px_rgba(28,38,39,0.1)] md:shadow-[0_0_5px_5px_rgba(28,38,39,0.08)]'>
                        <img className='w-[22.5rem] pb-4' src='/general-products/27.jpg' />
                        <h1 className='font-bold text-lg md:text-xl'>Stitching Gadgets</h1>
                        <p className='text-sm md:text-base text-gray-600'>At Ishal Enterprises, we offer a complete range of stitching solutions including sewing machines, stitching gadgets, and raw materials. Whether for industrial use or small-scale tailoring, our products ensure precision, durability, and smooth operation. From high-performance sewing machines to essential tools like scissors, threads, needles, and fabric materials, we provide everything needed for efficient and quality stitching. Trusted by professionals and institutions alike, our stitching solutions support both productivity and creativity.</p>

                    </div>

                    <div to='/services/db-sunshade-fabrics' className='flex flex-col rounded-lg items-center bg-gray-100 py-2 md:py-4 px-2 md:px-4 shadow-[0_0_8px_8px_rgba(28,38,39,0.1)] md:shadow-[0_0_5px_5px_rgba(28,38,39,0.08)]'>
                        <img className='w-[22.5rem] pb-4' src='/general-products/25-2.jpg' />
                        <h1 className='font-bold text-lg md:text-xl'>Safety Equipments</h1>
                        <p className='text-sm md:text-base text-gray-600'>At Ishal Enterprises, we provide a comprehensive range of safety equipment to ensure security and protection across various environments. Our offerings include high-quality CCTV surveillance systems, safety barriers, fire extinguishers, helmets, gloves, reflective jackets, and other essential safety gear. Whether it's for construction sites, offices, schools, or industrial facilities, our safety solutions are designed to prevent hazards, monitor activity, and maintain a secure atmosphere. With a focus on reliability and compliance, our equipment is trusted to safeguard people, property, and operations.</p>

                    </div>

                    <div to='/services/db-sunshade-fabrics' className='flex flex-col rounded-lg items-center bg-gray-100 py-2 md:py-4 px-2 md:px-4 shadow-[0_0_8px_8px_rgba(28,38,39,0.1)] md:shadow-[0_0_5px_5px_rgba(28,38,39,0.08)]'>
                        <img className='w-[22.5rem] pb-4' src='/general-products/laptop-2.jpg' />
                        <h1 className='font-bold text-lg md:text-xl'>IT Products</h1>
                        <p className='text-sm md:text-base text-gray-600'>At Ishal Enterprises, we supply a wide range of IT products to meet the demands of modern workplaces, educational institutions, and commercial setups. Our inventory includes laptops, desktop computers, printers, networking devices, and other general IT accessories. Sourced from reliable brands, our products ensure high performance, durability, and smooth operation. Whether you're setting up an office, upgrading school labs, or enhancing digital infrastructure, our IT solutions are tailored to support efficiency, connectivity, and productivity.</p>

                    </div>

                    <div to='/services/db-sunshade-fabrics' className='flex flex-col rounded-lg items-center bg-gray-100 py-2 md:py-4 px-2 md:px-4 shadow-[0_0_8px_8px_rgba(28,38,39,0.1)] md:shadow-[0_0_5px_5px_rgba(28,38,39,0.08)]'>
                        <img className='w-[22.5rem] pb-4' src='/general-products/electronics.jpg' />
                        <h1 className='font-bold text-lg md:text-xl'>Kitchen Electronics</h1>
                        <p className='text-sm md:text-base text-gray-600'>At Ishal Enterprises, we offer a variety of reliable and efficient kitchen electronics designed to make cooking and food preparation easier and faster. Our range includes appliances such as microwave ovens, blenders, electric kettles, toasters, and other essential kitchen gadgets. Ideal for homes, restaurants, and commercial kitchens, our products are selected for their durability, energy efficiency, and user-friendly features. With trusted performance and modern design, our kitchen electronics help create a more convenient and productive cooking experience.</p>

                    </div>

                    <div to='/services/db-sunshade-fabrics' className='flex flex-col rounded-lg items-center bg-gray-100 py-2 md:py-4 px-2 md:px-4 shadow-[0_0_8px_8px_rgba(28,38,39,0.1)] md:shadow-[0_0_5px_5px_rgba(28,38,39,0.08)]'>
                        <img className='w-[22.5rem] pb-4' src='/general-products/11.jpg' />
                        <h1 className='font-bold text-lg md:text-xl'>Management Services</h1>
                        <p className='text-sm md:text-base text-gray-600'>At Ishal Enterprises, we provide professional Management Services tailored to support the smooth operation and maintenance of residential, commercial, and industrial spaces. Our services include electrical work, solar panel installation, plumbing, warehouse setup and management, building maintenance, and IT infrastructure support. Backed by skilled professionals and a commitment to quality, we ensure timely and efficient service delivery. Whether it’s installing energy-efficient systems, maintaining facility operations, or managing critical utilities, our comprehensive solutions are designed to meet your unique needs with reliability and expertise.</p>

                    </div>

                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 py-4 md:my-8 items-center justify-center'>
                    <div className='flex flex-col gap-2 my-4 md:my-8'>
                        <h1 className='font-bold text-xl md:text-2xl'>Our Key Objective</h1>
                        <p>Quality in all the commodities and products we offer, and as expected
                            by our customers. Price competitiveness in all the commodities and
                            products we offer. Reliability of supply from source.</p>

                        <p>Earn a reputation of a trusted supplier with benefitting clients by
                            procuring of products at best rates and earning for ourselves by sale
                            on reasonable rates.</p>
                    
                        <h1 className='font-bold text-xl md:text-2xl'>Mission & Vission</h1>
                        <p>Our Mission is to provide our clients utmost perfect and time saving
 solution for their general products requirements.</p>

                        <p>One window solution to all general requirement of a organization. time
 saving les hectic solutions.</p>
                        
                        <h1 className='font-bold text-xl md:text-2xl'>Achievements</h1>
                        <p>The principles and standards of Nauman Enterprises has made the
 company one of the most reliable trader and supplier in Pakistan and
 we are able to satisfy all our clients who are based in Karachi, Lahore,
 Islamabad, Hyderabad and other cities.</p>

                    </div>



                    <div className='flex items-center justify-end'>
                        <img className='w-full md:w-2/3' src='/general-products/main.jpeg' />

                    </div>

                </div>
            </div>
            <Footer />
        </>
    )
}

export default GeneralProducts