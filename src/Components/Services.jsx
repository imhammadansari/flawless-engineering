import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
    return (
        <>
        <div className='w-full flex flex-col my-20 my-16 px-4 sm:px-3 md:px-8 items-center'>
            {/* <div className='flex gap-2 w-full'>
            <hr class="h-px my-5 sm:my-6 md:my-5 lg:my-6 bg-[rgb(37,83,177)] border-1 w-1/2 md:w-full text-[rgb(37,83,177)]" />
            <h1 className='font-bold text-2xl w-full sm:text-4xl md:text-3xl lg:text-4xl text-bold text-center pb-8 text-[rgb(37,83,177)]'>Our Services</h1>
            <hr class="h-px my-5 sm:my-6 md:my-5 lg:my-6 bg-[rgb(37,83,177)] border-1 w-1/2 md:w-full text-[rgb(37,83,177)]" />

            </div> */}

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:grid-col-3 gap-8 md:gap-6'>
                
                <Link to='/services/db-sunshade-fabrics' className='flex flex-col rounded-lg bg-gray-100 py-2 md:py-4 px-2 md:px-4 shadow-[0_0_8px_8px_rgba(28,38,39,0.1)] md:shadow-[0_0_5px_5px_rgba(28,38,39,0.08)]'>
                    <img className='w-[22.5rem] pb-4' src='/services/db-sunshade.jpeg' />
                    <h1 className='text-lg text-[rgb(38,50,70)] md:text-[22px]'>DB & Sunshade Fabrications</h1>
                    <p className='text-sm md:text-base text-gray-600'>At Ishal Enterprises, we offer expert DB (Distribution Board) fabrication tailored to the specific power distribution needs of telecom and residential projects. Our custom-built DBs ensure safety, reliability, and efficient load management. Additionally, we provide sunshade and shelter fabrication to protect sensitive telecom equipment and electrical setups from harsh weather conditions. Built with durable materials and precision, our solutions are trusted by clients like Zong, Telenor, and PPHI for both performance and longevity.</p>

                </Link>
                
                <Link to='/services/site-surveys' className='flex flex-col bg-gray-100 rounded-lg py-2 md:py-4 px-2 md:px-4 shadow-[0_0_8px_8px_rgba(28,38,39,0.1)] md:shadow-[0_0_5px_5px_rgba(28,38,39,0.08)]'>
                    <img className='w-96 pb-4' src='/services/site-survey.jpeg' />
                    <h1 className='text-lg text-[rgb(38,50,70)] md:text-[22px]'>Site Surveys for Acquiring Lands</h1>
                    <p className='text-sm md:text-base text-gray-600'>A core strength lies in conducting meticulous site surveys for acquiring lands to deploy telco towers. This 
                        crucial initial step involves detailed assessments of potential locations, factoring in geographical 
                        suitability, accessibility, and regulatory compliance, as demonstrated by their work on NOKIA USF and 
                        CMPAK long-haul FTTS projects. Their thorough approach ensures optimal site selection for efficient tower
                         deployment.</p>

                </Link>
                
                <Link to='/services/solar-work' className='flex flex-col bg-gray-100 rounded-lg py-2 md:py-4 px-2 md:px-4 shadow-[0_0_8px_8px_rgba(28,38,39,0.1)] md:shadow-[0_0_5px_5px_rgba(28,38,39,0.08)]'>
                    <img className='w-96 pb-4' src='/services/solar-panel.jpeg' />
                    <h1 className='text-lg text-[rgb(38,50,70)] md:text-[22px] '>Solar Structure & Solar Panel Installation</h1>
                    <p className='text-sm md:text-base text-gray-600'>The Company offer reliable solar panel installation services for residential, commercial, and telecom sites. Our solar solutions are designed to reduce electricity costs, promote clean energy, and ensure uninterrupted power supply—especially in remote or off-grid areas. From assessment and system design to installation and maintenance, we provide end-to-end services tailored to meet each client’s energy needs efficiently and affordably.</p>

                </Link>

                
                <Link to='/services/home-construction-renovation' className='flex flex-col rounded-lg bg-gray-100 py-2 md:py-4 px-2 md:px-4 shadow-[0_0_8px_8px_rgba(28,38,39,0.1)] md:shadow-[0_0_5px_5px_rgba(28,38,39,0.08)]'>
                    <img className='w-96 pb-4' src='/services/home-construction.jpeg' />
                    <h1 className='text-lg text-[rgb(38,50,70)] md:text-[22px]'>Home Constrcution & Renovation</h1>
                    <p className='text-sm md:text-base text-gray-600'>The Company also specializes in private home construction and renovation, delivering high-quality, durable, and modern living spaces. Whether building from the ground up or upgrading existing structures, we focus on tailored designs, premium materials, and timely execution. Our experienced team ensures each project reflects the client’s vision while maintaining structural integrity, comfort, and long-term value.</p>

                </Link>
                
                {/* Second Column */}
                <Link to='/services/dg-rental' className='flex flex-col rounded-lg bg-gray-100 py-2 md:py-4 px-2 md:px-4 shadow-[0_0_8px_8px_rgba(28,38,39,0.1)] md:shadow-[0_0_5px_5px_rgba(28,38,39,0.08)]'>
                    <img className='w-96 pb-4' src='/services/dg-rental.jpeg' />
                    <h1 className='text-lg text-[rgb(38,50,70)] md:text-[22px]'>Diesel Generators Rental</h1>
                    <p className='text-sm md:text-base text-gray-600'>Ishal Enterprises provides diesel generator rental services to ensure continuous power supply for telecom sites, commercial operations, and events. Our well-maintained generators are available in various capacities to meet different power needs, especially in areas with unstable or no grid access. Trusted by institutions like SIUT and NBP, our DG rental solutions are reliable, cost-effective, and supported by timely maintenance and technical assistance.</p>

                </Link>
                
                <Link to='/services/civil-work' className='flex flex-col rounded-lg bg-gray-100 py-2 md:py-4 px-2 md:px-4 shadow-[0_0_8px_8px_rgba(28,38,39,0.1)] md:shadow-[0_0_5px_5px_rgba(28,38,39,0.08)]'>
                    <img className='w-96 pb-4' src='/services/civil-work.jpeg' />
                    <h1 className='text-lg text-[rgb(38,50,70)] md:text-[22px]'>Civil Work Construction</h1>
                    <p className='text-sm md:text-base text-gray-600'>The company possesses deep expertise in civil works, encompassing all foundational and structural elements essential for telecom sites. This includes thorough site preparation, precise foundation laying, and other critical structural developments that form the physical backbone of any telecommunications installation. Their robust civil works ensure the durability and stability of over 250 towers and 700+ FTTS sites.</p>

                </Link>
                
                {/* Third Column */}
                
                <Link to='/services/infrastructure-work' className='flex flex-col bg-gray-100 rounded-lg py-2 md:py-4 px-2 md:px-4 shadow-[0_0_8px_8px_rgba(28,38,39,0.1)] md:shadow-[0_0_5px_5px_rgba(28,38,39,0.08)]'>
                    <img className='w-96 pb-4' src='/services/infrastructure-work.jpeg' />
                    <h1 className='text-lg text-[rgb(38,50,70)] md:text-[22px]'>Infrastructure Work</h1>
                    <p className='text-sm md:text-base text-gray-600'>Ishal Enterprises excels in delivering comprehensive infrastructure work, leveraging their decade-plus of
                         experience since 2010. Their expertise spans the full project lifecycle, from initial planning and site
                          acquisition to the final deployment and activation of critical telecom infrastructure. This ensures a
                           seamless and efficient build-out of connectivity networks across diverse terrains in Pakistan.</p>

                </Link>

                <Link to='/services/losrs-surveys' className='flex flex-col rounded-lg bg-gray-100 py-2 md:py-4 px-2 md:px-4 shadow-[0_0_8px_8px_rgba(28,38,39,0.1)] md:shadow-[0_0_5px_5px_rgba(28,38,39,0.08)]'>
                    <img className='w-96 pb-4' src='/services/surveys-mw.jpeg' />
                    <h1 className='text-lg text-[rgb(38,50,70)] md:text-[22px]'>LOSRs Surveys MW Planning CW Design</h1>
                    <p className='text-sm md:text-base text-gray-600'>Their capabilities extend to performing critical LOSRs (Line of Sight Reports) surveys, vital for effective microwave planning and robust network design. This includes intricate MW (Microwave) planning and comprehensive CW (Civil Works) design, ensuring optimal signal propagation and the development of resilient physical infrastructure. Their expertise underpins the technical backbone of connectivity solutions nationwide.</p>

                </Link>
                
                <Link to='/services/maintanence-work' className='flex flex-col rounded-lg bg-gray-100 py-2 md:py-4 px-2 md:px-4 shadow-[0_0_8px_8px_rgba(28,38,39,0.1)] md:shadow-[0_0_5px_5px_rgba(28,38,39,0.08)]'>
                    <img className='w-96 pb-4' src='/services/maintanence-work.jpeg' />
                    <h1 className='text-lg text-[rgb(38,50,70)] md:text-[22px]'>Telecom Solutions & Services</h1>
                    <p className='text-sm md:text-base text-gray-600'>Ishal Enterprises provides extensive telecom work services, ensuring the continuous and reliable operation of vital telecommunications infrastructure. Their commitment to excellence and efficiency, as highlighted in their mission, translates into proactive and reactive maintenance strategies. This minimizes downtime, prolongs equipment lifespan, and ensures consistent network performance for uninterrupted connectivity.</p>

                </Link>
                
                {/* <Link className='flex flex-col rounded-lg items-center bg-gray-100 py-2 md:py-4 px-2 md:px-4 shadow-[0_0_8px_8px_rgba(28,38,39,0.1)] md:shadow-[0_0_5px_5px_rgba(28,38,39,0.08)]'>
                    <img className='w-64 pb-4' src='/services/sar.jpeg' />
                    <h1 className='text-lg text-[rgb(38,50,70)] md:text-[22px]'>SARs, TSSRs</h1>
                    <p className='text-sm md:text-base text-gray-600'>Ishal Enterprises demonstrates strong proficiency in preparing and managing SARs (Site Acquisition Requests) and TSSRs (Technical Site Survey Reports). These essential documents capture all necessary technical specifications and requirements for new sites, enabling efficient planning and execution of telecom infrastructure projects. Their meticulous documentation supports the smooth progression of complex deployments across Pakistan.</p>

                </Link> */}
{/*                 
                <Link to='/services/general-products' className='flex flex-col rounded-lg bg-gray-100 py-2 md:py-4 px-2 md:px-4 shadow-[0_0_8px_8px_rgba(28,38,39,0.1)] md:shadow-[0_0_5px_5px_rgba(28,38,39,0.08)]'>
                    <img className='w-96 pb-4' src='/general-products/main.jpeg' />
                    <h1 className='text-lg text-[rgb(38,50,70)] md:text-[22px]'>General Products Supply</h1>
                    <p className='text-sm md:text-base text-gray-600'>At Ishal Enterprises, we provide reliable supply of essential products including uniforms, stationery, stitching tools, furniture, safety equipment, IT accessories, and electronics. With a focus on quality and timely delivery, our general supplies support smooth operations across sectors. Trusted by leading organizations, we ensure every product meets industry standards — aligning with our mission to deliver dependable and cost-effective solutions for everyday needs.</p>

                </Link> */}
                

            </div>

        </div>
        </>

    )
}

export default Services