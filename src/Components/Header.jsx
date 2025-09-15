import React from 'react';
import logo from '../assets/logo.png'
import { Link } from 'react-router';
import './Header.css'

const Header = () => {
    return (

        <>
            <div className='headerSection'>
                <div className='py-40 w-full md:w-9/12 mx-auto px-6'>
                    <div className='w-full md:w-1/2 text-white'>

                        <div className='bg-white rounded-2xl  w-20 p-3'>
                            <img src={logo} alt="logo" className='w-20' />
                        </div>


                        <h1 className='text-5xl font-bold mt-6' >Sydney Disability Support</h1>
                        <p className='mt-3 mb-8'>Empowering Lives, Enabiling Dreams. Discovr a community where dignity, respect and empowerment are at the heart of everything we do</p>

                        <div className='flex gap-5 items-center'>
                            <Link className='btn rounded-full text-purple-900 border-0 shadow-none p-6'>Learn More</Link>

                            <div>
                                <p className='font-bold'>02 8119 5878</p>
                                <p>Free consulation</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full md:w-9/12 mx-auto border-b-1 border-gray-200'>
                <div className='flex flex-col gap-10 md:flex-row py-6 px-6'>

                    <div className='w-full md:w-1/2'>
                        <p className='text-gray-500'>Looking for an agent?  <span className='text-purple-800'>Talk to our specialised agent</span>  </p>
                    </div>

                    <div className='w-full md:w-1/2 lg:text-right'>
                        <p className='text-gray-500'>Your Journey to Independence  <span className='text-purple-800'>Begins Here</span>  </p>
                    </div>

                </div>
            </div>

        </>
    );
};

export default Header;