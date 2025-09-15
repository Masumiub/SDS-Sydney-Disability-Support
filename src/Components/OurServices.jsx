import React from 'react';
import icon from '../assets/community-engagement.png'

const OurServices = () => {
    return (
        <div className='px-6'>
            <h2 className='text-3xl font-bold text-[#6B2B77]'>Our Services and Offerings.</h2>

            <p className='mt-10 text-gray-500'>We offer a range of NDIS support categories to assist you.</p>

            <p className='mt-8 text-[#6B2B77] font-bold underline'>SEE ALL SERVICES</p>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mt-12'>
                
                <div className='text-center py-4'>
                    <div className='flex justify-center'>
                        <img src={icon} alt="icon" className='w-15' />
                    </div>

                    <p className='font-medium mt-3'>Community and Social Participation</p>
                </div>


                <div className='text-center py-4'>
                    <div className='flex justify-center'>
                        <img src={icon} alt="icon" className='w-15' />
                    </div>
                    <p className='font-medium mt-3'>Daily Living and Personal Care</p>
                </div>


                <div className='text-center py-4'>
                    <div className='flex justify-center'>
                        <img src={icon} alt="icon" className='w-15' />
                    </div>
                    <p className='font-medium mt-3'>Skills Development and Life Transitions</p>
                </div>


                <div className='text-center py-4'>
                    <div className='flex justify-center'>
                        <img src={icon} alt="icon" className='w-15' />
                    </div>
                    <p className='font-medium mt-3'>Travel and Transport Assistance</p>
                </div>


                <div className='text-center py-4'>
                    <div className='flex justify-center'>
                        <img src={icon} alt="icon" className='w-15' />
                    </div>
                    <p className='font-medium mt-3'>Accommodation and Tenancy Support</p>
                </div>


                <div className='text-center py-4'>
                    <div className='flex justify-center'>
                        <img src={icon} alt="icon" className='w-15' />
                    </div>
                    <p className='font-medium mt-3'>Support Coordination</p>
                </div>



            </div>
        </div>
    );
};

export default OurServices;