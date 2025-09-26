import React from 'react';

const Achievements = () => {
    return (
        <>
        <div className='w-full flex flex-col my-4 md:my-6 px-4 sm:px-3 md:px-8 items-center'>
            <h1 className='font-bold text-2xl w-full sm:text-4xl md:text-3xl lg:text-4xl pb-4 md:pb-7 text-bold text-center text-[rgb(37,83,177)]'>Achievements & Success</h1>
            <div className="w-24 h-1 bg-[rgb(37,83,177)] rounded mb-6 md:mb-10"></div>


            <div>
                <img className='hidden md:flex' src='/achievements/achievements-pc.jpeg' />
                <img className='md:hidden' src='/achievements/achievements-mobile.png' />
            </div>

        </div>
        
        </>
    )
}

export default Achievements