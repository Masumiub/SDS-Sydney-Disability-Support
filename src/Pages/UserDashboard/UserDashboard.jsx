import React from 'react';
import { FaPlusCircle, FaHistory, FaClipboardCheck } from 'react-icons/fa';
import ScheduledServices from '../../Components/ScheduledServices';
import ServicesOverview from '../../Components/ServicesOverview';
import ReadyToApply from '../../Components/ReadyToApply';
import FAQs from '../../Components/FAQs';
import ContactCta from '../../Components/ContactCta';


const UserDashboard = () => {
    return (
        <div>
            <div className="w-full mx-auto px-4 py-20">
                {/* Header Section */}
                <div className="mb-8 text-center">
                    <h1 className="text-5xl font-semibold text-gray-800 mb-6">Welcome, Luke</h1>
                    <p className="text-gray-600">Here's a quick view of your upcoming and recent services.</p>
                    
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Request Service Card */}
                    <div className="bg-purple-50 rounded-lg p-6 text-center">
                        <div className="flex flex-col items-center mb-4 ">
                            <div className="bg-purple-100 p-3 rounded-full mb-4">
                                <FaPlusCircle className="text-2xl text-purple-600" />
                            </div>
                            <h2 className="text-xl font-semibold text-gray-800">Request Service</h2>
                        </div>
                        <p className="text-gray-600 mb-4">Submit a new support request.</p>
                        <a href="#" className="inline-flex items-center text-purple-600 font-medium hover:text-purple-800 transition-colors">
                            Request now <span className="ml-1">→</span>
                        </a>
                    </div>

                    {/* View Services Card */}
                    <div className="bg-purple-50 rounded-lg p-6 text-center">
                        <div className="flex flex-col items-center mb-4">
                            <div className="bg-purple-100 p-3 rounded-full mb-4">
                                <FaHistory className="text-2xl text-purple-600" />
                            </div>
                            <h2 className="text-xl font-semibold text-gray-800">View Services</h2>
                        </div>
                        <p className="text-gray-600 mb-4">See your service history.</p>
                        <a href="#" className="inline-flex items-center text-purple-600 font-medium hover:text-purple-800 transition-colors">
                            View here <span className="ml-1">→</span>
                        </a>
                    </div>

                    {/* Check Status Card */}
                    <div className="bg-purple-50 rounded-lg p-6 text-center">
                        <div className="flex flex-col items-center mb-4">
                            <div className="bg-purple-100 p-3 rounded-full mr-4">
                                <FaClipboardCheck className="text-2xl text-purple-600" />
                            </div>
                            <h2 className="text-xl font-semibold text-gray-800">Check Status</h2>
                        </div>
                        <p className="text-gray-600 mb-4">Track your active requests.</p>
                        <a href="#" className="inline-flex items-center text-purple-600 font-medium hover:text-purple-800 transition-colors">
                            Check now <span className="ml-1">→</span>
                        </a>
                    </div>
                </div>
            </div>

            <ScheduledServices></ScheduledServices>
            <ServicesOverview></ServicesOverview>
            <ReadyToApply></ReadyToApply>
            <FAQs></FAQs>
            <ContactCta></ContactCta>
        </div>
    );
};

export default UserDashboard;