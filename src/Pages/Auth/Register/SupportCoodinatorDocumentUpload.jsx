import React from 'react';
import { useForm } from 'react-hook-form'
import axios from 'axios';
import Swal from 'sweetalert2';
import { Link } from 'react-router';
import { LuFilePlus2 } from "react-icons/lu";

const SupportCoodinatorDocumentUpload = () => {
    return (
        <div className=''>

            <div className="flex gap-5 rounded-2xl ">
                <div className='w-full '>

                    <div className="card bg-base-100 w-full max-w-sm shrink-0  mx-auto">

                        <div className="card-body">

                            <div className=''>
                                <h1 className='font-bold text-2xl'>Required Documents</h1>
                                <p className='mt-2'>Upload the required documents to create account </p>
                            </div>


                            <fieldset className="fieldset">
                                <form>

                                    <label className="label mt-2 mb-2">First Aid Certificate*</label>
                                    <div className='my-2 bg-gray-200 p-8 rounded-2xl flex flex-col gap-2 justify-center items-center'>

                                        <LuFilePlus2 size={35} className='text-gray-500' />
                                        <p>Select and Upload File</p>
                                    </div>

                                    <label className="label mt-2 mb-2">NDIS Workers Check*</label>
                                    <div className='my-2 bg-gray-200 p-8 rounded-2xl flex flex-col gap-2 justify-center items-center'>

                                        <LuFilePlus2 size={35} className='text-gray-500' />
                                        <p>Select and Upload File</p>
                                    </div>

                                    <label className="label mt-2 mb-2">Working with children Check*</label>
                                    <div className='my-2 bg-gray-200 p-8 rounded-2xl flex flex-col gap-2 justify-center items-center'>

                                        <LuFilePlus2 size={35} className='text-gray-500' />
                                        <p>Select and Upload File</p>
                                    </div>

                                    <label className="label mt-2 mb-2">Police Check(Optional)</label>
                                    <div className='my-2 bg-gray-200 p-8 rounded-2xl flex flex-col gap-2 justify-center items-center'>

                                        <LuFilePlus2 size={35} className='text-gray-500' />
                                        <p>Select and Upload File</p>
                                    </div>


                                    <button className="btn rounded-lg bg-[#6B2B77] text-white border-0 mt-6 w-full" type='submit'>Complete Registration</button>


                                </form>

                            </fieldset>


                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default SupportCoodinatorDocumentUpload;