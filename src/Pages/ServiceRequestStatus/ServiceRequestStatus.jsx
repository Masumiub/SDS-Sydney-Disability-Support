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

                <div>
                    <h3 className='text-2xl mb-4 font-bold mt-4'>Status</h3>
                    <Tabs>
                        <TabList>
                            <Tab>Open</Tab>
                            <Tab>Pending Approval</Tab>
                            <Tab>Approved</Tab>
                            <Tab>Completed</Tab>
                            <Tab>Closed</Tab>
                            <Tab>Cancelled</Tab>
                        </TabList>

                        <TabPanel>
                            <ScheduledServices></ScheduledServices>
                        </TabPanel>
                        <TabPanel>
                            <h2>Any content 2</h2>
                        </TabPanel>
                        <TabPanel>
                            <h2>Any content 2</h2>
                        </TabPanel>

                        <TabPanel>
                            <h2>Any content 2</h2>
                        </TabPanel>
                    </Tabs>

                </div>

                <ServicesOverview></ServicesOverview>
            </div>
        </div>
    );
};

export default ServiceRequestStatus;