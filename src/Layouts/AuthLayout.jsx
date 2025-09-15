import React from 'react';
import logo from '../assets/logo.png';
import { Link, Outlet } from 'react-router';
import AuthImg from '../assets/AuthImg.png'
import AuthChildImg from '../assets/AuthChildImg.png'
const AuthLayout = () => {
    return (
        <div className=''>
            <div className='w-full mx-auto'>

                <div className='flex flex-col md:flex-row gap-3 justify-center'>
                    <div className='w-full md:w-1/2'>
                        <Link to='/'>
                            <div className='flex gap-1 items-center p-6'>

                                <img src={logo} alt="logo" className='w-12' />
                                <h1 className='text-2xl font-bold text-[#6B2B77]'>SDS</h1>

                            </div>
                        </Link>

                        <div className='h-[calc(100vh-250px)]'>
                            <Outlet></Outlet>
                        </div>
                        <div className='p-6 flex justify-between'>
                            <p className='text-gray-400 text-xs'>©Sydney Disability Support</p>
                            <p className='text-gray-400 text-xs'>info@sydneydisabilitysupport.com</p>
                        </div>

                    </div>

                    <div className='w-full md:w-1/2 flex justify-center'>
                        <img src={AuthChildImg} alt="AuthImg" className='h-screen w-full object-cover hidden md:block rounded-bl-4xl' />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AuthLayout;