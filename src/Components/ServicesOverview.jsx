import React from 'react';
import { FaUsers, FaCar, FaHome, FaHandsHelping, FaGraduationCap, FaClipboardList } from 'react-icons/fa';

const ServicesOverview = () => {
  const services = [
    {
      icon: <FaUsers className="text-2xl text-purple-600" />,
      title: "Community and Social Participation",
      description: "Join activities, connect with others, and build lasting social networks.",
      link: "Learn more →"
    },
    {
      icon: <FaCar className="text-2xl text-purple-600" />,
      title: "Travel and Transport Assistance",
      description: "Access safe, reliable transport to get where you need to go.",
      link: "Learn more →"
    },
    {
      icon: <FaHandsHelping className="text-2xl text-purple-600" />,
      title: "Daily Living and Personal Care",
      description: "Get support with everyday tasks to maintain comfort and independence.",
      link: "Learn more →"
    },
    {
      icon: <FaHome className="text-2xl text-purple-600" />,
      title: "Accommodation and Tenancy Support",
      description: "Find and maintain safe, suitable housing with expert guidance.",
      link: "Learn more →"
    },
    {
      icon: <FaGraduationCap className="text-2xl text-purple-600" />,
      title: "Skills Development and Life Transitions",
      description: "Learn new skills and gain confidence to manage life's changes.",
      link: "Learn more →"
    },
    {
      icon: <FaClipboardList className="text-2xl text-purple-600" />,
      title: "Plan Management and Coordination",
      description: "Manage your NDIS plan and connect with the right supports.",
      link: "Learn more →"
    }
  ];

  return (
    <div className="w-full mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="mb-8">
        <h2 className=" text-gray-800">Services</h2>
        <div className="mt-2">
          <h3 className="text-3xl font-semibold text-gray-700">Check Other Service</h3>
          <p className="text-gray-500 mt-4">
            Browse and discover other SDS services that may support your goals and daily needs.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div key={index} className="py-6">
            {/* Service Icon */}
            <div className="mb-4">
              {service.icon}
            </div>
            
            {/* Service Title */}
            <h4 className="text-lg font-semibold text-gray-800 mb-3">{service.title}</h4>
            
            {/* Service Description */}
            <p className="text-gray-600 mb-4">{service.description}</p>
            
            {/* Learn More Link */}
            <a href="#" className="inline-flex items-center text-purple-600 font-medium hover:text-purple-800 transition-colors">
              {service.link}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesOverview;