import React from 'react';
import stepsImg from '../assets/family with a disabled child-amico.png'


const StepsForNDIS = () => {
    return (
        <div className='py-20 px-6'>
            <div className='flex flex-col gap-10 md:flex-row items-center'>
                <div className='w-full md:w-1/2'>
                    <h2 className='text-3xl font-bold text-[#6B2B77]'> Steps on becoming NDIS Participant at Sydney Disability Support.</h2>

                    <div className='mt-8 mb-6'>

                        <div className='flex gap-3'>
                            <div className='bg-base-200 p-3 rounded-full w-15 h-10 flex justify-center items-center shadow-2xl'>
                                <h1 className='font-bold text-[#6B2B77]'>1</h1>
                            </div>
                            <div>
                                <h3 className='font-bold'>Bring NDIS Plan</h3>

                                <p className='mt-4 text-gray-500 text-sm'>In order for Sydney Disability Support to assess your eligibility, and to see whether we can plan provide those services, it is imperative that you bring your NDIS plan.</p>
                            </div>
                        </div>


                        <div className='flex gap-3 mt-8'>
                            <div className='bg-base-200 p-3 rounded-full w-15 h-10 flex justify-center items-center shadow-2xl'>
                                <h1 className='font-bold text-[#6B2B77]'>2</h1>
                            </div>
                            <div>
                                <h3 className='font-bold'>Attend Induction</h3>

                                <p className='mt-4 text-gray-500 text-sm'>Management will conduct induction, to go through organisation’s policies, your rights and your responsibilities.</p>
                            </div>
                        </div>


                        <div className='flex gap-3 mt-8'>
                            <div className='bg-base-200 p-3 rounded-full w-15 h-10 flex justify-center items-center shadow-2xl'>
                                <h1 className='font-bold text-[#6B2B77]'>3</h1>
                            </div>
                            <div>
                                <h3 className='font-bold'>Sign Mandatory Documents</h3>

                                <p className='mt-4 text-gray-500 text-sm'>You need to sign the service agreement, consent form. Sign the handbook terms, fill out registration forms, acknowledgement forms.</p>
                            </div>
                        </div>




                    </div>
                </div>

                <div className='w-full md:w-1/2'>
                    <div className='flex justify-center'>
                        <img src={stepsImg} alt="stepsImg" className='w-80'/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StepsForNDIS;