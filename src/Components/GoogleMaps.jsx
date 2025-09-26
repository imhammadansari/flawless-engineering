import React from 'react';

const GoogleMaps = () => {
    return (
        <>

        <div className='py-4 flex flex-col items-center justify-center'>
            <h1 className='text-2xl md:text-3xl lg:text-3xl font-bold pb-3 md:pb-5 text-[rgb(37,83,177)]'>Our Location</h1>
            <div className="w-24 h-1 bg-[rgb(37,83,177)] rounded mb-6 md:mb-10"></div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3617.5569310056726!2d67.08908747443274!3d24.947159441784656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f550f555b1b%3A0xd300914ba3d5da67!2sChapal%20Gardens!5e0!3m2!1sen!2s!4v1754304925750!5m2!1sen!2s" width="100%" height="500" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>

        </>
    )
}

export default GoogleMaps;

