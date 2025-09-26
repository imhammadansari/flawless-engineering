import React from 'react';
import { HiBuildingOffice } from "react-icons/hi2";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

// import Swal from 'sweetalert2'

const Contact = () => {




    //   const [result, setResult] = React.useState("");

    //   const onSubmit = async (event) => {
    //     event.preventDefault();
    //     setResult("Sending....");
    //     const formData = new FormData(event.target);

    //     formData.append("access_key", "4c73f208-2637-41ca-a50b-d98d8925405d");

    //     const response = await fetch("https://api.web3forms.com/submit", {
    //       method: "POST",
    //       body: formData
    //     });

    //     const data = await response.json();

    //     if (data.success) {
    //       setResult("Form Submitted Successfully");
    //       event.target.reset();
    //       Swal.fire({
    //         title: "Success!",
    //         text: "Messsage sent Successfully!",
    //         icon: "success"
    //       });
    //     } else {
    //       console.log("Error", data);
    //       setResult(data.message);
    //       Swal.fire({
    //         icon: "error",
    //         title: "Oops...",
    //         text: "Something went wrong!",
    //       });
    //     }
    //   };

    return (
        <>
        <div className='relative h-[60vh] w-full'>
                <div className='relative w-full h-[60vh] flex items-center justify-center'>
            <img className='w-full h-full object-cover' src='/contact/image.jpg' />
            </div>

            <div className='inset-0 z-30 bg-black/80 absolute'></div>

            <div className='inset-0 z-40 absolute flex items-center justify-center'>
                <h1 className='text-3xl sm:text-4xl lg:text-4xl text-bold xl:text-6xl pb-1 text-[rgb(37,83,177)]'>Contact Us</h1>

            </div>

            </div>
            <div className="w-full h-full px-6 lg:px-14 py-4 md:py-8 flex flex-col" >

                <div className='w-full h-full grid grid-cols-1 md:grid-cols-3 py-2 md:py-6 gap-8 md:gap-0'>
                    <div className='w-full h-full flex flex-col text-center gap-2 items-center px-2 md:px-4'>
                        <HiBuildingOffice className='text-6xl'/>
                        <h1 className='text-2xl md:text-2xl '>Our Office</h1>
                                <p className='text-base text-gray-600'>Flat # 202, Chapel Garden, Block-M, Abul Hussain Isphani Road</p>

                    </div>
                    
                    <div className='w-full h-full flex flex-col text-center gap-2 items-center px-2 md:px-4'>
                        <MdEmail className='text-6xl'/>
                        <h1 className='text-2xl md:text-2xl '>Email</h1>
                            <p className='text-base text-gray-600'>support@ishalenterprises.com.pk</p>

                    </div>
                    
                    <div className='w-full h-full flex flex-col text-center gap-2 items-center px-2 md:px-4'>
                        <FaPhoneAlt className='text-6xl'/>
                        <h1 className='text-2xl md:text-2xl '>Call Us</h1>
                            <p className='text-base text-gray-600'>+92 3158235669</p>

                    </div>

                </div>
                    
                {/* Parent Div */}
                <div className="flex flex-col lg:flex-row justify-between my-4 md:my-8">
                    {/* Child Div */}
                    <div className="lg:w-1/2">
                        {/* Form Div */}
                        <h1 className="text-start text-gray-600 text-2xl font-bold">Get In Touch</h1>
                        <p className="text-gray-600 text-sm text-start lg:text-base">We're here to help you!</p>
                        <form className="flex flex-col gap-4 pt-4">
                            <div className="flex text-gray-600 text-start flex-col">
                                <h1>Full Name</h1>
                                <input
                                    className="p-2 text-sm lg:text-base border border-gray-600 border-opacity-35 bg-white"
                                    type="text"
                                    name='name'
                                    placeholder="Enter Full Name"
                                    required
                                />
                            </div>

                            <div className="flex text-gray-600 text-start flex-col">
                                <h1>Email Address</h1>
                                <input
                                    className="p-2 text-sm lg:text-base border border-gray-600 border-opacity-35 bg-white"
                                    type="text"
                                    name="email"
                                    placeholder="Enter Email"
                                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                    title="Please enter a valid email address (e.g., example@gmail.com, user@outlook.com)"
                                    required
                                />
                            </div>


                            <div className="flex text-gray-600 text-start flex-col">
                                <h1>Your Message</h1>
                                <textarea
                                    name='message'
                                    required
                                    placeholder='Your message here'
                                    className="border p-2 text-sm lg:text-base border-gray-600 border-opacity-35 bg-white"
                                    rows={4}
                                    cols={4}
                                ></textarea>
                            </div>

                            <div className="">
                                <button type='submit' className="px-8 py-2 hover:bg-none hover:text-[rgb(37,83,177)] text-white bg-gradient-to-br from-[rgba(40,123,172,1)] to-[rgb(37,83,177)]">
                                    Send
                                </button>
                            </div>
                        </form>
                    </div>
                    {/* Form Div */}

                    <div className="flex flex-col gap-4 pt-4 lg:pt-0 items-center">
                        {/* Image Div */}
                        <div className="w-[25rem] lg:w-[28rem]">
                            <img src='/contact/1.jpg' />
                        </div>
                    </div>
                    {/* Image Div */}
                </div>
                {/* Child Div */}
            </div>
            {/* Parent Div */}
        </>
    );
};

export default Contact;
