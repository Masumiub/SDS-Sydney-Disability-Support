import React from 'react';
import ServicesOverview from '../../Components/ServicesOverview';
import imageHand from '../../assets/imagehand.png'


const ReferralForm = () => {
    return (
        <div>
            <div className="w-full mx-auto px-4 py-20">
                {/* Header Section */}
                <div className="mb-8 text-center border-b-1 border-gray-300 pb-20">
                    <h1 className="text-5xl font-semibold text-gray-800 mb-6">Refer Your Clients</h1>
                    <p className="text-gray-600">Join activities, connect with others, and build lasting social networks.</p>

                </div>


                <div className='flex flex-col md:flex-row gap-10 items-center'>


                    <div className="w-full md:w-1/2 px-4 py-8">


                        {/* Form */}
                        <div className="">

                            <div className="mb-8">
                                <h2 className="text-lg  text-gray-800 mb-4">First Name</h2>
                                <input type="text" placeholder="Type here" className="input w-full" />
                            </div>

                            <div className="mb-8">
                                <h2 className="text-lg  text-gray-800 mb-4">Last Name</h2>
                                <input type="text" placeholder="Type here" className="input w-full" />
                            </div>

                            <div className="mb-8">
                                <h2 className="text-lg  text-gray-800 mb-4">Email</h2>
                                <input type="email" placeholder="Type your email here" className="input w-full" />
                            </div>

                            <div className="mb-8">
                                <h2 className="text-lg  text-gray-800 mb-4">Phone</h2>
                                <input type="text" placeholder="+61..." className="input w-full" />
                            </div>

                            {/* Service Type Section */}
                            <div className="mb-8">
                                <h2 className="text-lg  text-gray-800 mb-4">Service Type</h2>
                                <select defaultValue="Pick a color" className="select w-full">
                                    <option>House Cleaning And Other Household Activities</option>
                                    <option>Short Term/Emergency Accommodation</option>
                                    <option>Daily Living</option>
                                    <option>House Cleaning And Other Household Activities</option>
                                    <option>Community and Social Participation</option>
                                    <option>House or Yard Maintenance</option>
                                    <option>Accommodation and Tenancy Support</option>
                                    <option>Support Coordination</option>
                                    <option>Travel and Transport Assistance</option>
                                    <option>Skill Development and Life Transition</option>
                                </select>
                            </div>

                            {/* Details Section */}
                            <div className="mb-8">
                                <h2 className="text-lg  text-gray-800 mb-4">Service Details</h2>
                                <textarea className="textarea w-full" placeholder="Bio"></textarea>
                            </div>



                            {/* Location Section */}
                            <div className="mb-8">

                                <div className='flex gap-2 items-center mt-8'>
                                    <input type="checkbox" defaultChecked className="checkbox" />
                                    <p className="text-sm text-gray-600">
                                        You agree to our friendly <span className='underline'>privacy policy.</span>
                                    </p>
                                </div>

                            </div>

                            {/* Submit Button */}
                            <button className="btn w-full bg-[#6B2B77] hover:bg-purple-700 text-white font-semibold  rounded-lg  transition-colors duration-200">
                                Refer
                            </button>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 px-4 py-8">
                        <img src={imageHand} alt="imageHand" className='w-full' />
                    </div>
                </div>

                
            </div>
        </div>
    );
};

export default ReferralForm;