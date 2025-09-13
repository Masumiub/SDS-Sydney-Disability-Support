import React, { useEffect, useState } from 'react';
import { FaPlusCircle, FaHistory, FaClipboardCheck } from 'react-icons/fa';
import ScheduledServices from '../../Components/ScheduledServices';
import ServicesOverview from '../../Components/ServicesOverview';
import ReadyToApply from '../../Components/ReadyToApply';
import FAQs from '../../Components/FAQs';
import ContactCta from '../../Components/ContactCta';
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../../firebase/firebase.config";
import { FaArrowRight } from "react-icons/fa6";
import requestServiceIcon from '../../assets/requestService.png';
import viewServices from '../../assets/viewservices.png';
import checkStatus from '../../assets/checkStatus.png';
import useAuth from '../../hooks/useAuth';
import { Link } from 'react-router';
import useUserRole from "../../hooks/useUserRole";
import StaffDashboard from './StaffDashboard';

const UserDashboard = () => {

    const [contractPersonName, setContractPersonName] = useState("");
    const { user } = useAuth();
    const { role, roleLoading } = useUserRole();
    console.log(role)


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
                    if (data.contract_persons && data.contract_persons.length > 0) {
                        setContractPersonName(data.contract_persons[0].name);
                    }
                }
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        fetchUser();
    }, [user]); // re-run when user changes


    if (roleLoading) return <p>Loading dashboard...</p>;

    return (
        <>
        {
            role == 'staff' ? (
                <StaffDashboard></StaffDashboard>) :
                    (
                    <div>
                        <div className="w-full mx-auto px-4 py-20">
                            {/* Header Section */}
                            <div className='flex justify-center mb-6'>
                                <button className='btn rounded-full bg-purple-100 text-[#6B2B77] border-0 btn-xs'> <span className='bg-white rounded-full px-1'>New Updates</span> Download the app now <FaArrowRight /></button>
                            </div>
                            <div className="mb-10 text-center">
                                <h1 className="text-5xl font-semibold text-gray-800 mb-6">Welcome, {contractPersonName || "Participant"}</h1>
                                <p className="text-gray-600">Here's a quick view of your upcoming and recent services.</p>

                            </div>

                            {/* Cards Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {/* Request Service Card */}
                                <div className="bg-purple-50 rounded-3xl p-6 text-center">
                                    <div className="flex flex-col items-center mb-4 ">

                                        <img src={requestServiceIcon} alt="requestServiceIcon" className='w-12' />
                                        <h2 className="text-xl font-semibold text-gray-800">Request Service</h2>
                                    </div>
                                    <p className="text-gray-600 mb-4">Submit a new support request.</p>
                                    <Link to='requestServices' className="inline-flex items-center text-purple-900 font-medium hover:text-purple-800 transition-colors">
                                        Request now <span className="ml-1">→</span>
                                    </Link>
                                </div>

                                {/* View Services Card */}
                                <div className="bg-purple-50 rounded-3xl p-6 text-center">
                                    <div className="flex flex-col items-center mb-4">
                                        {/* <div className="bg-purple-100 p-3 rounded-full mb-4">
                                <FaHistory className="text-2xl text-purple-600" />
                            </div> */}
                                        <img src={viewServices} alt="viewServices" className='w-12' />
                                        <h2 className="text-xl font-semibold text-gray-800">View Services</h2>
                                    </div>
                                    <p className="text-gray-600 mb-4">See your service history.</p>
                                    <Link to='yourServices' className="inline-flex items-center text-purple-900 font-medium hover:text-purple-800 transition-colors">
                                        View here <span className="ml-1">→</span>
                                    </Link>
                                </div>

                                {/* Check Status Card */}
                                <div className="bg-purple-50 rounded-3xl p-6 text-center">
                                    <div className="flex flex-col items-center mb-4">
                                        {/* <div className="bg-purple-100 p-3 rounded-full mr-4">
                                <FaClipboardCheck className="text-2xl text-purple-600" />
                            </div> */}
                                        <img src={checkStatus} alt="checkStatus" className='w-12' />
                                        <h2 className="text-xl font-semibold text-gray-800">Check Status</h2>
                                    </div>
                                    <p className="text-gray-600 mb-4">Track your active requests.</p>
                                    <Link to='serviceRequestStatus' className="inline-flex items-center text-purple-900 font-medium hover:text-purple-800 transition-colors">
                                        Check now <span className="ml-1">→</span>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <ScheduledServices></ScheduledServices>

                        <div className='bg-base-200 rounded-2xl px-5'>
                            <ServicesOverview></ServicesOverview>
                        </div>

                        <ReadyToApply></ReadyToApply>
                        <FAQs></FAQs>
                        <ContactCta></ContactCta>
                    </div>
                    )
            
        }
        </>

    );
};

export default UserDashboard;