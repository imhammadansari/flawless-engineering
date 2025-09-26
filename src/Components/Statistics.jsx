import React from 'react';

const Statistics = () => {
    return (
        <>
        <div className='w-full flex flex-col my-4 md:my-6 px-4 sm:px-3 mb-12 md:px-8 items-center'>

            <h1 className='font-bold text-2xl w-full sm:text-4xl md:text-3xl lg:text-4xl text-bold text-center pb-3 md:pb-5 text-[rgb(37,83,177)]'>Statistics & Performance</h1>
            <div className="w-24 h-1 bg-[rgb(37,83,177)] rounded mb-6 md:mb-10"></div>


            <div>
                <img className='w-auto' src='/stats/statistics.png' />
            </div>

        </div>
        
        </>
    )
}

export default Statistics