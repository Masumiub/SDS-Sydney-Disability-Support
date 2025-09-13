import React from 'react';
import logo from '../assets/logo.png';
import { Link, Outlet } from 'react-router';
import AuthImg from '../assets/AuthImg.png'

const AuthLayout = () => {
    return (
        <div className='h-screen'>
            <div className='w-full mx-auto '>

                <div className='flex flex-col md:flex-row gap-10'>
                    <div className='w-full md:w-1/2'>
                        <Link to='/'>
                            <div className='flex gap-1 items-center p-6'>

                                <img src={logo} alt="logo" className='w-12' />
                                <h1 className='text-2xl font-bold text-[#6B2B77]'>SDS</h1>

                            </div>
                        </Link>
                        <div>
                            <Outlet></Outlet>
                        </div>
                    </div>

                    <div className='w-full md:w-1/2'>
                        <img src={AuthImg} alt="AuthImg" className='w-full' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;