import React from 'react';
import { LuFilePlus2 } from 'react-icons/lu';

const Verification = () => {
    return (
        <div className=''>

            <div className="flex gap-5 rounded-2xl ">
                <div className='w-full '>

                    <div className="card bg-base-100 w-full max-w-sm shrink-0  mx-auto">

                        <div className="card-body">

                            <div className=''>
                                <h1 className='font-bold text-2xl'>Verification Identity </h1>
                                <p className='mt-2 text-sm text-gray-500'>We do not store any identity information. Your data is securly destroyed after verification.</p>
                            </div>


                            <fieldset className="fieldset">
                                <form>

                                    
                                    <div className='mt-4 bg-gray-200 p-8 rounded-2xl flex flex-col gap-2 justify-center items-center'>

                                        <LuFilePlus2 size={35} className='text-gray-500' />
                                        <p className='text-center text-gray-600'>Please upload your PhotoID, Driver's license or passport for identity verification</p>
                                    </div>


                                    <button className="btn rounded-lg bg-[#6B2B77] text-white border-0 mt-6 w-full" type='submit'>Submit</button>


                                </form>

                            </fieldset>


                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Verification;