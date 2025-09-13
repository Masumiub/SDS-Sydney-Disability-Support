import React from 'react';
import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router';
import calendarIcon from '../assets/Calendar Mark.png'
import clockIcon from '../assets/Clock Circle.png'
import mapIcon from '../assets/Map Point.png'

const ScheduledServices = () => {
  const services = [
    {
      title: "Skills Development and Life Transitions",
      date: "13 Jul",
      time: "10:30 PM",
      address: "Sydney, NSW"
    },
    {
      title: "Community and Social Participation",
      date: "13 Jul",
      time: "10:30 PM",
      address: "Sydney, NSW"
    }
  ];

  return (
    <div className="w-full mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="mb-6">
        <h2 className="text-[#6B2B77]">Scheduled</h2>
        <div className="mt-2">
          <h3 className="text-3xl font-semibold text-gray-700">Next Scheduled Service</h3>
          <p className="text-gray-600 mt-1">Find your next scheduled service at a glance from here.</p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
            {/* Service Title */}
            <div className='flex items-start gap-3 justify-between'>
            <h4 className="text-lg font-semibold text-[#6B2B77] mb-4">{service.title}</h4>
            <button className='btn btn-xs rounded-full bg-purple-100  text-purple-700'>Scheduled</button>
            </div>

            {/* Service Details */}
            <div className="space-y-3">
              {/* Date */}
              <div className="flex items-center">
                {/* <FaCalendarAlt className="text-purple-600 mr-3" /> */}
                <img src={calendarIcon} alt="calendarIcon" className='w-4 mr-2'/>
                <span className="text-gray-700">Date:</span>
                <span className="ml-2 font-medium">{service.date}</span>
              </div>
              
              {/* Time */}
              <div className="flex items-center">
                {/* <FaClock className="text-purple-600 mr-3" /> */}
                <img src={clockIcon} alt="clockIcon" className='w-4 mr-2'/>
                <span className="text-gray-700">Time:</span>
                <span className="ml-2 font-medium">{service.time}</span>
              </div>
              
              {/* Address */}
              <div className="flex items-center">
                {/* <FaMapMarkerAlt className="text-purple-600 mr-3" /> */}
                <img src={mapIcon} alt={mapIcon} className='w-4 mr-2' />
                <span className="text-gray-700">Address:</span>
                <span className="ml-2 font-medium">{service.address}</span>
              </div>
            </div>
            
            {/* See Details Button */}
            <div className="mt-6 pt-2">
                <Link to='serviceDetails'>
              <button className="w-full bg-[#6B2B77] text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors font-medium">
                See details
              </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScheduledServices;