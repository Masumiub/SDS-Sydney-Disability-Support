import React, { useEffect, useState } from 'react';
import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router';
import calendarIcon from '../assets/Calendar Mark.png'
import clockIcon from '../assets/Clock Circle.png'
import mapIcon from '../assets/Map Point.png'
import useAuth from '../hooks/useAuth';
import useAxiosSecure from '../hooks/useAxiosSecure';
import Loading from './Loading';
import PreferredDate from './PreferredDate';

const ScheduledServices = () => {
  // const services = [
  //   {
  //     title: "Skills Development and Life Transitions",
  //     date: "13 Jul",
  //     time: "10:30 PM",
  //     address: "Sydney, NSW"
  //   },
  //   {
  //     title: "Community and Social Participation",
  //     date: "13 Jul",
  //     time: "10:30 PM",
  //     address: "Sydney, NSW"
  //   }
  // ];


  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    if (!user) return;

    const fetchBookings = async () => {
      try {
        const res = await axiosSecure.get("/api/bookings");
        setServices(res.data);
      } catch (error) {
        console.error("Failed to fetch bookings:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, [user, axiosSecure]);

  if (loading) return <Loading></Loading>;

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
        {services.map.length == 0 ? <div className='flex justify-center items-center py-30'>No Serice Found!</div> :
          services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg shadow-md p-6 border border-gray-200"
            >
              {/* Service Title */}
              <div className="flex items-start gap-3 justify-between">
                <h4 className="text-lg font-semibold text-[#6B2B77] mb-4">
                  {service.service_type || "Service"}
                </h4>
                <button className="btn btn-xs rounded-full bg-purple-100  text-purple-700">
                  {service.status}
                </button>
              </div>

              {/* Service Details */}
              <div className="space-y-3">
                {/* Date */}
                <div className="flex items-center">
                  <img src={calendarIcon} alt="calendarIcon" className="w-4 mr-2" />
                  <span className="text-gray-700">Date:</span>
                  <span className="ml-2 font-medium">

                    <PreferredDate preferredDates={service.preferred_date} />

                  </span>
                </div>

                {/* Time */}
                <div className="flex items-center">
                  <img src={clockIcon} alt="clockIcon" className="w-4 mr-2" />
                  <span className="text-gray-700">Time:</span>
                  <span className="ml-2 font-medium">
                    {service.time_of_day} - {service.time_of_day_end}
                  </span>
                </div>

                {/* Address */}
                <div className="flex items-center">
                  <img src={mapIcon} alt={mapIcon} className="w-4 mr-2" />
                  <p className="text-gray-700">Address:<span className="ml-2 font-medium">
                    {service.address_model?.address}
                  </span></p>

                </div>
              </div>

              {/* See Details Button */}
              <div className="mt-6 pt-2">
                <Link to={`/dashboard/service/${service.id}`}>
                  <button className="w-full bg-[#6B2B77] text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors font-medium">
                    See details
                  </button>
                </Link>
              </div>
            </div>
          ))
        }
      </div>

    </div>
  );
};

export default ScheduledServices;