import React from 'react';
import ServicesOverview from '../../Components/ServicesOverview';
import imageHand from '../../assets/imagehand.png'


const RequestServices = () => {
    return (
        <div>
            <div className="w-full mx-auto px-4 py-20">
                {/* Header Section */}
                <div className="mb-8 text-center">
                    <h1 className="text-5xl font-semibold text-gray-800 mb-6">Community and Social Participation</h1>
                    <p className="text-gray-600">Join activities, connect with others, and build lasting social networks.</p>

                </div>


                <div className='flex flex-col md:flex-row gap-10 items-center'>


                    <div className="w-full md:w-1/2 px-4 py-8">
                        {/* Header */}
                        <div className="mb-8">
                            <h1 className="text-3xl font-bold text-gray-800 mb-2">Request a Service</h1>
                            <p className="text-gray-600">Input details of your requested service</p>
                        </div>

                        {/* Form */}
                        <div className="">
                            {/* Service Type Section */}
                            <div className="mb-8">
                                <h2 className="text-lg font-semibold text-gray-800 mb-4">Service Type</h2>
                                <select defaultValue="Pick a color" className="select w-full">
                                    <option disabled={true}>Pick a color</option>
                                    <option>Crimson</option>
                                    <option>Amber</option>
                                    <option>Velvet</option>
                                </select>
                            </div>

                            {/* Details Section */}
                            <div className="mb-8">
                                <h2 className="text-lg font-semibold text-gray-800 mb-4">Details</h2>
                                <textarea className="textarea w-full" placeholder="Bio"></textarea>
                            </div>

                            {/* Date & Time Section */}
                            <div className="mb-8">
                                <h2 className="text-lg font-semibold text-gray-800 mb-4">Date & Time</h2>
                                <input type="text" placeholder="Type here" className="input w-full" />
                            </div>

                            {/* Location Section */}
                            <div className="mb-8">
                                <h2 className="text-lg font-semibold text-gray-800 mb-4">Location</h2>
                                <input type="text" placeholder="Type here" className="input w-full" />
                                <p className="text-sm text-gray-600">
                                    You agree to our friendly privacy policy.
                                </p>
                            </div>

                            {/* Submit Button */}
                            <button className="btn w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold  rounded-lg  transition-colors duration-200">
                                Submit
                            </button>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 px-4 py-8">
                    <img src={imageHand} alt="imageHand"  className='w-full'/>
                    </div>
                </div>

                <ServicesOverview></ServicesOverview>
            </div>
        </div>
    );
};

export default RequestServices;