import React from 'react';
import ScheduledServices from '../../Components/ScheduledServices';
import ServicesOverview from '../../Components/ServicesOverview';

const YourServices = () => {
    return (
        <div>
            <div className="w-full mx-auto px-4 py-20">
                {/* Header Section */}
                <div className="mb-8 text-center">
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