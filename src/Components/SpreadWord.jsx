import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { Link } from 'react-router';
import stepsImg from '../assets/family with a disabled child-amico.png'


const SpreadWord = () => {
    return (
        <div className='bg-purple-200 py-10 rounded-2xl'>
            <div className='flex flex-col md:flex-row gap-10 px-20 items-center'>
                <div className='w-full md:w-1/2 text-center md:text-left'>
                    <h2 className='text-3xl text-[#6B2B77] mb-8 font-bold'>Spread the Word</h2>

                    <p className='my-6 text-sm text-gray-600'>Your referral can make a significant difference in someone’s life. Help us build a stronger, more supportive community by referring someone today.</p>

                    <Link className='btn rounded-full border-1 border-[#6B2B77] shadow-none bg-purple-200 text-[#6B2B77]'>Refer a friend now <IoIosArrowForward /></Link>
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

export default SpreadWord;