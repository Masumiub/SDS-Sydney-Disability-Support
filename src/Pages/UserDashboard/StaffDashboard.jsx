import React, { useEffect, useState } from 'react';
import requestServiceIcon from '../../assets/requestService.png';
import viewServices from '../../assets/viewservices.png';
import checkStatus from '../../assets/checkStatus.png';
import useAuth from '../../hooks/useAuth';
import { doc, getDoc } from "firebase/firestore";
import { db } from '../../firebase/firebase.config';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router';
import ScheduledServices from '../../Components/ScheduledServices';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import Loading from '../../Components/Loading';
import calendarIcon from '../../assets/Calendar Mark.png'
import clockIcon from '../../assets/Clock Circle.png'
import mapIcon from '../../assets/Map Point.png'
import PreferredDate from '../../Components/PreferredDate';


const StaffDashboard = () => {

    const [UserData, setUserData] = useState("");
    const { user } = useAuth();


    const axiosSecure = useAxiosSecure();
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        if (!user) return;

        const fetchBookings = async () => {
            try {
                const res = await axiosSecure.get("/api/scheduledServiceforStaff");
                setServices(res.data);
            } catch (error) {
                console.error("Failed to fetch bookings:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchBookings();
    }, [user, axiosSecure]);



    useEffect(() => {
        const fetchUser = async () => {
            try {

                if (!user?.uid) return; //  wait until user is available


                const docRef = doc(db, "users", user.uid);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    const data = docSnap.data();
                    setUserData(data)
                }
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        fetchUser();
    }, [user]); // re-run when user changes


    if (loading) return <Loading></Loading>;

    return (
        <div>
            <div className="w-full mx-auto px-4 py-20">
                {/* Header Section */}
                <div className='flex justify-center mb-6'>
                    <button className='btn rounded-full bg-purple-100 text-[#6B2B77] border-0 btn-xs'> <span className='bg-white rounded-full px-1'>New Updates</span> Download the app now <FaArrowRight /></button>
                </div>
                <div className="mb-10 text-center">
                    <h1 className="text-5xl font-semibold text-gray-800 mb-6">Welcome, {UserData.name || "Staff"}</h1>

                    <div className='flex justify-center my-5 gap-2 p-2 max-w-xs mx-auto bg-[#6B2B77] rounded-2xl'>
                        <input type="checkbox" defaultChecked className="toggle toggle-success" />
                        <p className='text-white'>Service Availability</p>
                    </div>
                    <p className="text-gray-600">Here's a quick view of your upcoming and recent services.</p>

                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Request Service Card */}
                    <div className="bg-purple-50 rounded-3xl p-6 text-center">
                        <div className="flex flex-col items-center mb-4 ">

                            <img src={requestServiceIcon} alt="requestServiceIcon" className='w-12' />
                            <h2 className="text-xl font-semibold text-gray-800">Assigned Services</h2>
                        </div>
                        <p className="text-gray-600 mb-4">Display Assigned Services.</p>
                        <Link to='assignedService' className="inline-flex items-center text-purple-900 font-medium hover:text-purple-800 transition-colors">
                            Show Assigned <span className="ml-1">→</span>
                        </Link>
                    </div>

                    {/* View Services Card */}
                    <div className="bg-purple-50 rounded-3xl p-6 text-center">
                        <div className="flex flex-col items-center mb-4">

                            <img src={viewServices} alt="viewServices" className='w-12' />
                            <h2 className="text-xl font-semibold text-gray-800">Your Clients</h2>
                        </div>
                        <p className="text-gray-600 mb-4">See your booked clients.</p>
                        <Link to='yourClients' className="inline-flex items-center text-purple-900 font-medium hover:text-purple-800 transition-colors">
                            View clients <span className="ml-1">→</span>
                        </Link>
                    </div>


                </div>
            </div>

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
                    {services.map.length == 0 ? <div className='flex justify-center items-center py-30'>No Service Found!</div> :
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
        </div>
    );
};

export default StaffDashboard;