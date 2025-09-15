import React from 'react';
import ServicesOverview from '../../Components/ServicesOverview';
import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaInfoCircle, FaQuestionCircle } from 'react-icons/fa';
import imgpic from '../../assets/image 1604.png'
import workIcon from '../../assets/Linear/School/Case Round.png'
import calendarIcon from '../../assets/Calendar Mark.png'
import clockIcon from '../../assets/Clock Circle.png'
import { IoLocationOutline } from 'react-icons/io5';

const ServiceDetails = () => {
    return (
        <div>
            <div className="w-full max-w-6xl mx-auto px-4 py-20 ">
                {/* Header Section */}
                <div className="mb-8 text-center">
                    <h1 className="text-5xl font-semibold text-gray-800 mb-6">Service Details</h1>
                    <p className="text-gray-600">Join activities, connect with others, and build lasting social networks.</p>

                </div>

                <div className='flex flex-col md:flex-row gap-10 items-center'>
                    <div className='w-full md:w-1/2 py-5'>
                        {/* Header */}
                        <div className="mb-8">
                            <p className='text-xs text-gray-500 mb-4'>SERVICE TYPE</p>


                            <div className='flex gap-1 items-center mb-2'>
                                <img src={workIcon} alt="workIcon" className='w-5 h-5' />
                                <h1 className="text-gray-800">Skills Development and Life Transitions</h1>
                            </div>

                        </div>

                        <div className="">
                            {/* Scheduled On Section */}
                            <div className="mb-8 border-t border-gray-200 pt-8">

                                <p className='text-xs text-gray-500 mb-4'> SCHEDULED ON</p>
                                <div className="space-y-2 text-gray-700">
                                    <div className="flex items-center gap-1">
                                        <img src={calendarIcon} alt="calendarIcon" className='w-5 h-5' />
                                        <span>July 30, 2024</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <img src={clockIcon} alt="calendarIcon" className='w-5 h-5' />
                                        <span>10:30 PM</span>
                                    </div>
                                </div>
                            </div>

                            {/* Details Section */}
                            <div className="mb-8 border-t border-gray-200 pt-8">

                                <p className='text-xs text-gray-500 mb-4'> DETAILS</p>

                                <div className="text-gray-700 space-y-3">
                                    <p>Looking for help regarding social participation near Sydney.</p>
                                    <p>The individual is of mid age and very much interested for SDS services.</p>
                                </div>
                            </div>

                            {/* Location Section */}
                            <div className="mb-8 border-t border-gray-200 pt-8">
                                <p className='text-xs text-gray-500 mb-4'> LOCATION</p>

                                <div className="space-y-2 text-gray-700">
                                    <div className="flex items-center gap-1">
                                        <IoLocationOutline size={20}/>
                                        <span>Abbotsford, VIC</span>
                                    </div>
                                </div>
                            </div>

                            {/* Help Section */}
                            <div className="border-t border-gray-200 pt-6">
                                <p className='text-xs text-gray-500 mb-4'> HELP</p>
                                <div className="flex items-center justify-between">

                                    <button className="py-2  rounded transition-colors duration-200">
                                        Contact Support
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='w-full md:w-1/2'>
                        <img src={imgpic} alt="imgpic" className='w-full' />
                    </div>
                </div>

            </div>

            <ServicesOverview></ServicesOverview>
        </div>
    );
};

export default ServiceDetails;