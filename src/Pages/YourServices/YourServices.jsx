import React from 'react';
import ScheduledServices from '../../Components/ScheduledServices';
import ServicesOverview from '../../Components/ServicesOverview';
import { FaArrowRight } from 'react-icons/fa';

const YourServices = () => {
    return (
        <div>
            <div className="w-full mx-auto px-4 py-20">
                {/* Header Section */}

                <div className='flex justify-center mb-6'>
                    <button className='btn rounded-full bg-purple-100 text-[#6B2B77] border-0 btn-xs'> <span className='bg-white rounded-full px-1'>New Updates</span> Download the app now <FaArrowRight /></button>
                </div>


                <div className="mb-8 text-center border-b-1 border-gray-300 pb-25">
                    <h1 className="text-5xl font-semibold text-gray-800 mb-6">Your Services</h1>
                    <p className="text-gray-600">Here's a quick view of your upcoming and recent services.</p>

                </div>

                <ScheduledServices></ScheduledServices>

                <ServicesOverview></ServicesOverview>

            </div>
        </div>
    );
};

export default YourServices;