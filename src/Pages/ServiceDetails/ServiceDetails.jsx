import React from 'react';
import ServicesOverview from '../../Components/ServicesOverview';
import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaInfoCircle, FaQuestionCircle } from 'react-icons/fa';
import imgpic from '../../assets/image 1604.png'

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
                            <h1 className="text-xl font-bold text-gray-800 mb-2">Skills Development and Life Transitions</h1>
                        </div>

                        <div className="">
                            {/* Scheduled On Section */}
                            <div className="mb-8">
                                <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                                    <FaCalendarAlt className="text-purple-600 mr-2" />
                                    SCHEDULED ON
                                </h2>
                                <div className="space-y-2 text-gray-700 ml-6">
                                    <div className="flex items-center">
                                        <FaCalendarAlt className="text-purple-400 mr-3" />
                                        <span>July 30, 2024</span>
                                    </div>
                                    <div className="flex items-center">
                                        <FaClock className="text-purple-400 mr-3" />
                                        <span>10:30 PM</span>
                                    </div>
                                </div>
                            </div>

                            {/* Details Section */}
                            <div className="mb-8">
                                <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                                    <FaInfoCircle className="text-purple-600 mr-2" />
                                    DETAILS
                                </h2>
                                <div className="text-gray-700 ml-6 space-y-3">
                                    <p>Looking for help regarding social participation near Sydney.</p>
                                    <p>The individual is of mid age and very much interested for SDS services.</p>
                                </div>
                            </div>

                            {/* Location Section */}
                            <div className="mb-8">
                                <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                                    <FaMapMarkerAlt className="text-purple-600 mr-2" />
                                    LOCATION
                                </h2>
                                <div className="space-y-2 text-gray-700 ml-6">
                                    <div className="flex items-center">
                                        <div className="w-5 h-5 border-2 border-gray-400 rounded mr-3 flex items-center justify-center">
                                            <div className="w-3 h-3 bg-gray-400 rounded-sm"></div>
                                        </div>
                                        <span>Abbotsford, VIC</span>
                                    </div>
                                </div>
                            </div>

                            {/* Help Section */}
                            <div className="border-t border-gray-200 pt-6">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center text-gray-600">
                                        <FaQuestionCircle className="mr-2" />
                                        <span>HELP</span>
                                    </div>
                                    <button className=" font-semibold py-2 px-4 rounded transition-colors duration-200">
                                        Contact Support
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='w-full md:w-1/2'>
                        <img src={imgpic} alt="imgpic" className='w-full'/>
                    </div>
                </div>

            </div>

            <ServicesOverview></ServicesOverview>
        </div>
    );
};

export default ServiceDetails;