import React from 'react';
import ServicesOverview from '../../Components/ServicesOverview';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ScheduledServices from '../../Components/ScheduledServices';
import { FaArrowRight } from 'react-icons/fa';



const ServiceRequestStatus = () => {
    return (
        <div>
            <div className="w-full mx-auto px-4 py-20">
                {/* Header Section */}
                <div className='flex justify-center mb-6'>
                    <button className='btn rounded-full bg-purple-100 text-[#6B2B77] border-0 btn-xs'> <span className='bg-white rounded-full px-1'>New Updates</span> Download the app now <FaArrowRight /></button>
                </div>
                <div className="mb-8 text-center">
                    <h1 className="text-5xl font-semibold text-gray-800 mb-6">Service Request Status</h1>
                    <p className="text-gray-600">Stay up to date with your service requests — see what’s pending, in progress, or completed, all in one place.</p>

                </div>

                <div className='mt-30'>
                    {/* <h3 className='text-2xl mb-4 font-bold mt-4'>Status</h3> */}

                    {/* name of each tab group should be unique */}
                    <div className="tabs tabs-box">
                        <input type="radio" name="my_tabs_6" className="tab" aria-label="Open" defaultChecked />
                        <div className="tab-content bg-base-100 border-base-300 p-6">Open</div>

                        <input type="radio" name="my_tabs_6" className="tab" aria-label="Pending Approval" />
                        <div className="tab-content bg-base-100 border-base-300 p-6">Pending Approval</div>

                        <input type="radio" name="my_tabs_6" className="tab" aria-label="Approved" />
                        <div className="tab-content bg-base-100 border-base-300 p-6">Approved</div>

                        <input type="radio" name="my_tabs_6" className="tab" aria-label="Completed" />
                        <div className="tab-content bg-base-100 border-base-300 p-6">Completed</div>

                        <input type="radio" name="my_tabs_6" className="tab" aria-label="Closed" />
                        <div className="tab-content bg-base-100 border-base-300 p-6">Closed</div>

                        <input type="radio" name="my_tabs_6" className="tab" aria-label="Cancelled" />
                        <div className="tab-content bg-base-100 border-base-300 p-6">Cancelled</div>
                    </div>

                </div>

                <ServicesOverview></ServicesOverview>
            </div>
        </div>
    );
};

export default ServiceRequestStatus;