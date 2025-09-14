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

const StaffDashboard = () => {

   const [UserData, setUserData] = useState("");
    const { user } = useAuth();

    useEffect(() => {
        const fetchUser = async () => {
            try {
                // Replace with logged-in user's ID (from auth.user.uid)
                //const userId = "85OLMx8LsUdGjH4KiOoZk3udzD42";

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


    return (
        <div>
            <div className="w-full mx-auto px-4 py-20">
                {/* Header Section */}
                <div className='flex justify-center mb-6'>
                    <button className='btn rounded-full bg-purple-100 text-[#6B2B77] border-0 btn-xs'> <span className='bg-white rounded-full px-1'>New Updates</span> Download the app now <FaArrowRight /></button>
                </div>
                <div className="mb-10 text-center">
                    <h1 className="text-5xl font-semibold text-gray-800 mb-6">Welcome, {UserData.name || "Staff"}</h1>

                    <div className='flex justify-center my-5 gap-2 p-2'>
                       <input type="checkbox" defaultChecked className="toggle toggle-success" />
                        <p className='text-[#6B2B77]'>Service Availability</p>
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

            <ScheduledServices></ScheduledServices>
        </div>
    );
};

export default StaffDashboard;