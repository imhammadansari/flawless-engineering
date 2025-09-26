import React from 'react';
import { Link } from 'react-router-dom';

const CoreValues = () => {
    return (
        <>
        <div className='w-full flex flex-col bg-gray-100 my-6 md:my-10 py-20 md:py-24 px-4 sm:px-3 md:px-28 items-center'>
             <h1 className='text-3xl sm:text-4xl md:text-3xl lg:text-4xl text-bold xl:text-5xl pb-4 md:pb-7 text-center text-[rgb(37,83,177)]'>
    CORE VALUES
  </h1>
  <div className="w-24 h-1 bg-[rgb(37,83,177)] rounded mb-6 md:mb-10"></div>

  <p className='text-[rgb(38,50,70)] pt-2 pb-10'>We are laying down strong foundations and core principles to strengthen Ishaal Enterprises as a more reliable, more resilient, and more trusted service provider in Pakistan’s engineering and telecom sectors. As part of this ongoing commitment, we follow five core values that reflect our collective belief, define our professional culture, and guide how we operate and grow every day.</p>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-6'>
                
                <div className='flex flex-col items-center rounded-lg bg-gray-100 py-2 md:py-4 px-2 md:px-4 md:px-4 transition-shadow duration-300 ease-in-out hover:shadow-[0_0_8px_8px_rgba(28,38,39,0.1)] md:hover:shadow-[0_0_5px_5px_rgba(28,38,39,0.08)]'>
                    <img className=' pb-4' src='/core-values/icons8-courage-symbol-96.png' />
                    <h1 className='text-lg text-[rgb(38,50,70)] md:text-[24px]'>Courage</h1>
                    <p className='text-sm md:text-base text-gray-600'>At Ishaal Enterprises, courage means facing challenges head-on—whether in remote terrains, high-risk environments, or complex projects. We are not afraid to take bold steps, make tough decisions, or explore new ways of delivering value. Our courage drives innovation, progress, and long-term success for both our clients and our team..</p>

                </div>
                
                <div className='flex flex-col items-center rounded-lg bg-gray-100 py-2 md:py-4 px-2 md:px-4 md:px-4 transition-shadow duration-300 ease-in-out hover:shadow-[0_0_8px_8px_rgba(28,38,39,0.1)] md:hover:shadow-[0_0_5px_5px_rgba(28,38,39,0.08)]'>
                    <img className='pb-4' src='/core-values/icons8-safety-96.png' />
                    <h1 className='text-lg text-[rgb(38,50,70)] md:text-[24px]'>Safety</h1>
                    <p className='text-sm md:text-base text-gray-600'>Safety is at the heart of everything we do at Ishaal Enterprises. Whether on-site or in the office, we prioritize the well-being of our teams, clients, and communities. We follow strict safety protocols, invest in training, and foster a culture where every individual takes responsibility for maintaining a safe working environment—because no success is worth risking lives.</p>

                </div>
                
                <div className='flex flex-col items-center rounded-lg bg-gray-100 py-2 md:py-4 px-2 md:px-4 transition-shadow duration-300 ease-in-out hover:shadow-[0_0_8px_8px_rgba(28,38,39,0.1)] md:hover:shadow-[0_0_5px_5px_rgba(28,38,39,0.08)]'>
  <img className=' pb-4' src='/core-values/icons8-team-96.png' />
  <h1 className='text-lg text-[rgb(38,50,70)] md:text-[24px]'>One Team</h1>
  <p className='text-sm md:text-base text-gray-600'>
    At Ishaal Enterprises, we believe success is built on collaboration. We operate as One Team—united across departments, disciplines, and project sites. By sharing knowledge, supporting one another, and working toward common goals, we deliver stronger results and create a culture of mutual respect, trust, and accountability.
  </p>
</div>

                
                <div className='flex flex-col items-center rounded-lg bg-gray-100 py-2 md:py-4 px-2 md:px-4 md:px-4 transition-shadow duration-300 ease-in-out hover:shadow-[0_0_8px_8px_rgba(28,38,39,0.1)] md:hover:shadow-[0_0_5px_5px_rgba(28,38,39,0.08)]'>
                    <img className='pb-4' src='/core-values/icons8-integrity-96.png' />
                    <h1 className='text-lg text-[rgb(38,50,70)] md:text-[24px]'>Integrity</h1>
                    <p className='text-sm md:text-base text-gray-600'>Integrity is the foundation of trust at Ishaal Enterprises. We conduct our business with honesty, transparency, and accountability—no matter the circumstance. We honor our commitments, uphold ethical standards, and ensure that every decision we make reflects our responsibility to clients, partners, and communities.</p>

                </div>
                
            </div>

        </div>
        </>

    )
}

export default CoreValues