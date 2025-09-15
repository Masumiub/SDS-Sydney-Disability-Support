import React from 'react';
import disableImg from '../assets/Product presentation-amico.png'
import { IoIosArrowForward } from 'react-icons/io';


const HowItWorks = () => {
    return (
        <div className='flex flex-col md:flex-row gap-10 my-20 items-center px-6'>
            <div className='w-full md:w-1/2'>
                <h2 className='text-3xl text-[#6B2B77] mb-8 font-bold'>How it Works</h2>


                <div className=''>

                    <div className='mb-8'>
                        <h3 className='font-bold mt-3'>Personalised Support</h3>

                        <p className='mt-4 text-gray-500 text-sm'>Our support is tailored to meet your individual needs. We work in partnership with you to explore all options and apply effective methodologies to help you manage your funding package and achieve your goals.</p>
                    </div>

                    <div className='mb-8'>
                        <h3 className='font-bold mt-3'>Individual Approach</h3>

                        <p className='mt-4 text-gray-500 text-sm'>We recognise that every individual is unique. Your aspirations and support requirements are different from others, and we will customise our services accordingly.</p>
                    </div>

                    <div className='mb-8'>
                        <h3 className='font-bold mt-3'>Financial Independence</h3>

                        <p className='mt-4 text-gray-500 text-sm'>We assist you in becoming independent in managing your financial services, ensuring that you have control over your resources.</p>
                    </div>

                    <button className='btn bg-purple-200 rounded-full text-purple-800 p-6 border-0'>Check our Services and Support <IoIosArrowForward /></button>

                </div>

            </div>

            <div className='w-full md:w-1/2'>
                <div className='flex justify-center'>
                    <img src={disableImg} alt="disableImg" className='w-80' />
                </div>

            </div>


        </div>
    );
};

export default HowItWorks;