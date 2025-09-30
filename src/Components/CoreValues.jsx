import React from 'react';
import { Link } from 'react-router-dom';

const CoreValues = () => {
    return (
        <>
        <div className='w-full flex flex-col bg-gray-100 my-6 md:my-10 py-20 md:py-24 px-4 sm:px-3 md:px-28 items-center'>
             <h1 className='text-3xl sm:text-4xl md:text-3xl lg:text-4xl text-bold xl:text-5xl pb-4 md:pb-7 text-center text-[#472c75]'>
                CORE VALUES
             </h1>
             <div className="w-24 h-1 bg-[#472c75] rounded mb-6 md:mb-10"></div>

             <p className='text-[rgb(38,50,70)] pt-2 pb-10'>
               At Flawless Engineering, our values define who we are and how we deliver. 
               They guide our culture, shape our decisions, and inspire us to build infrastructure 
               that lasts. Every project reflects these principles, ensuring trust, quality, and progress. 
             </p>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-6'>
                
                <div className='flex flex-col items-center rounded-lg bg-gray-100 py-2 md:py-4 px-2 md:px-4 transition-shadow duration-300 ease-in-out hover:shadow-[0_0_8px_8px_rgba(28,38,39,0.1)] md:hover:shadow-[0_0_5px_5px_rgba(28,38,39,0.08)]'>
                    <img className=' pb-4' src='/core-values/icons8-courage-symbol-96.png' />
                    <h1 className='text-lg text-[rgb(38,50,70)] md:text-[24px]'>Courage</h1>
                    <p className='text-sm md:text-base text-gray-600'>
                      Courage at Flawless means stepping into challenges with confidence and innovation. 
                      Whether it’s high-risk projects, complex terrains, or introducing new technologies, 
                      we push boundaries to deliver results that move industries forward.
                    </p>
                </div>
                
                <div className='flex flex-col items-center rounded-lg bg-gray-100 py-2 md:py-4 px-2 md:px-4 transition-shadow duration-300 ease-in-out hover:shadow-[0_0_8px_8px_rgba(28,38,39,0.1)] md:hover:shadow-[0_0_5px_5px_rgba(28,38,39,0.08)]'>
                    <img className='pb-4' src='/core-values/icons8-safety-96.png' />
                    <h1 className='text-lg text-[rgb(38,50,70)] md:text-[24px]'>Safety</h1>
                    <p className='text-sm md:text-base text-gray-600'>
                      Safety is at the core of every Flawless project. From site operations 
                      to engineering practices, we protect our people, clients, and communities 
                      by upholding the highest safety standards and fostering a culture of care.
                    </p>
                </div>
                
                <div className='flex flex-col items-center rounded-lg bg-gray-100 py-2 md:py-4 px-2 md:px-4 transition-shadow duration-300 ease-in-out hover:shadow-[0_0_8px_8px_rgba(28,38,39,0.1)] md:hover:shadow-[0_0_5px_5px_rgba(28,38,39,0.08)]'>
                    <img className=' pb-4' src='/core-values/icons8-team-96.png' />
                    <h1 className='text-lg text-[rgb(38,50,70)] md:text-[24px]'>One Team</h1>
                    <p className='text-sm md:text-base text-gray-600'>
                      We believe in unity and collaboration. At Flawless, every department, 
                      discipline, and partner works as One Team—driving stronger results, 
                      building trust, and ensuring success through collective effort.
                    </p>
                </div>

                <div className='flex flex-col items-center rounded-lg bg-gray-100 py-2 md:py-4 px-2 md:px-4 transition-shadow duration-300 ease-in-out hover:shadow-[0_0_8px_8px_rgba(28,38,39,0.1)] md:hover:shadow-[0_0_5px_5px_rgba(28,38,39,0.08)]'>
                    <img className='pb-4' src='/core-values/icons8-integrity-96.png' />
                    <h1 className='text-lg text-[rgb(38,50,70)] md:text-[24px]'>Integrity</h1>
                    <p className='text-sm md:text-base text-gray-600'>
                      Integrity defines Flawless Engineering. We act with honesty, fairness, 
                      and transparency in every project, ensuring that our clients, partners, 
                      and communities can always trust in our commitment and delivery.
                    </p>
                </div>
            </div>
        </div>
        </>
    )
}

export default CoreValues
