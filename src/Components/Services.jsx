import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
    return (
        <>
        <div className='w-full flex flex-col my-20 my-16 px-4 sm:px-3 md:px-8 items-center'>
            
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6'>
                
                <Link to='/services/db-sunshade-fabrics' className='flex flex-col rounded-lg bg-gray-100 py-2 md:py-4 px-2 md:px-4 shadow-[0_0_8px_8px_rgba(28,38,39,0.1)] md:shadow-[0_0_5px_5px_rgba(28,38,39,0.08)]'>
                    <img className='w-[22.5rem] pb-4' src='/services/db-sunshade.jpeg' />
                    <h1 className='text-lg text-[rgb(38,50,70)] md:text-[22px]'>DB & Sunshade Fabrications</h1>
                    <p className='text-sm md:text-base text-gray-600'>
                        At Flawless Engineering, we design and fabricate custom Distribution Boards (DBs) to ensure safe and efficient power distribution for telecom, residential, and commercial sites. Our DBs are engineered for durability, precise load management, and maximum safety. Alongside this, we manufacture high-quality sunshades and shelters that safeguard sensitive electrical and telecom equipment against harsh weather, ensuring reliable performance and long-term protection.
                    </p>
                </Link>
                
                <Link to='/services/solar-work' className='flex flex-col bg-gray-100 rounded-lg py-2 md:py-4 px-2 md:px-4 shadow-[0_0_8px_8px_rgba(28,38,39,0.1)] md:shadow-[0_0_5px_5px_rgba(28,38,39,0.08)]'>
                    <img className='w-96 pb-4' src='/banner/solar-two.jpeg' />
                    <h1 className='text-lg text-[rgb(38,50,70)] md:text-[22px] '>Solar Structures & Panel Installation</h1>
                    <p className='text-sm md:text-base text-gray-600'>
                        Flawless Engineering provides end-to-end solar solutions — from structural fabrication to complete solar panel installation. Whether for homes, businesses, or telecom infrastructure, our solar systems are designed for efficiency, sustainability, and cost savings. With professional design, installation, and aftercare services, we deliver renewable energy solutions that ensure consistent power supply even in remote or off-grid locations.
                    </p>
                </Link>

                <Link to='/services/home-construction-renovation' className='flex flex-col rounded-lg bg-gray-100 py-2 md:py-4 px-2 md:px-4 shadow-[0_0_8px_8px_rgba(28,38,39,0.1)] md:shadow-[0_0_5px_5px_rgba(28,38,39,0.08)]'>
                    <img className='w-96 pb-4' src='/banner/home-construction.jpeg' />
                    <h1 className='text-lg text-[rgb(38,50,70)] md:text-[22px]'>Home Construction & Renovation</h1>
                    <p className='text-sm md:text-base text-gray-600'>
                        Flawless Engineering specializes in modern home construction and renovation services. From building dream homes from the ground up to transforming existing spaces, we focus on high-quality materials, innovative designs, and timely project delivery. Our skilled team ensures every project aligns with the client’s vision while maintaining strength, style, and long-term value.
                    </p>
                </Link>
                
                <Link to='/services/civil-work' className='flex flex-col rounded-lg bg-gray-100 py-2 md:py-4 px-2 md:px-4 shadow-[0_0_8px_8px_rgba(28,38,39,0.1)] md:shadow-[0_0_5px_5px_rgba(28,38,39,0.08)]'>
                    <img className='w-96 pb-4' src='/banner/civil-work.jpeg' />
                    <h1 className='text-lg text-[rgb(38,50,70)] md:text-[22px]'>Civil Work Construction</h1>
                    <p className='text-sm md:text-base text-gray-600'>
                        From foundations to complete site preparation, Flawless Engineering delivers reliable civil construction services. Our expertise covers telecom towers, residential projects, and commercial infrastructure, ensuring every structure is built to last. With strict quality control and advanced construction methods, we provide solid groundwork for successful and sustainable developments.
                    </p>
                </Link>
                
                <Link to='/services/pole-light' className='flex flex-col rounded-lg bg-gray-100 py-2 md:py-4 px-2 md:px-4 shadow-[0_0_8px_8px_rgba(28,38,39,0.1)] md:shadow-[0_0_5px_5px_rgba(28,38,39,0.08)]'>
                    <img className='w-96 pb-4' src='/pole-light/main.jpeg' />
                    <h1 className='text-lg text-[rgb(38,50,70)] md:text-[22px]'>Pole Light Construction</h1>
                    <p className='text-sm md:text-base text-gray-600'>
                        From foundations to complete site preparation, Flawless Engineering delivers reliable civil construction services. Our expertise covers telecom towers, residential projects, and commercial infrastructure, ensuring every structure is built to last. With strict quality control and advanced construction methods, we provide solid groundwork for successful and sustainable developments.
                    </p>
                </Link>
                
                <Link to='/services/infrastructure-work' className='flex flex-col bg-gray-100 rounded-lg py-2 md:py-4 px-2 md:px-4 shadow-[0_0_8px_8px_rgba(28,38,39,0.1)] md:shadow-[0_0_5px_5px_rgba(28,38,39,0.08)]'>
                    <img className='w-96 pb-4' src='/banner/infrastructure.jpeg' />
                    <h1 className='text-lg text-[rgb(38,50,70)] md:text-[22px]'>Infrastructure Development</h1>
                    <p className='text-sm md:text-base text-gray-600'>
                        Flawless Engineering brings extensive experience in infrastructure development, delivering projects from concept to completion. Our work includes planning, land acquisition, structural development, and final deployment. By combining technical expertise with a commitment to quality, we ensure smooth execution of projects that strengthen connectivity and support modern living.
                    </p>
                </Link>

                <Link to='/services/telecom' className='flex flex-col rounded-lg bg-gray-100 py-2 md:py-4 px-2 md:px-4 shadow-[0_0_8px_8px_rgba(28,38,39,0.1)] md:shadow-[0_0_5px_5px_rgba(28,38,39,0.08)]'>
                    <img className='w-96 pb-4' src='/banner/telecom-two.jpeg' />
                    <h1 className='text-lg text-[rgb(38,50,70)] md:text-[22px]'>Telecom Solutions & Services</h1>
                    <p className='text-sm md:text-base text-gray-600'>
                        Flawless Engineering offers comprehensive telecom solutions, covering installation, optimization, and maintenance of telecom infrastructure. Our services ensure smooth connectivity and uninterrupted operations for mobile networks, internet providers, and enterprise communication systems. With proactive and reactive maintenance strategies, we reduce downtime and extend equipment life, guaranteeing reliable performance.
                    </p>
                </Link>
            </div>
        </div>
        </>
    )
}

export default Services;
