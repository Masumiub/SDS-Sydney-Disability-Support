import React, { useEffect, useState } from 'react';
import useUserRole from '../../hooks/useUserRole';
import useAuth from '../../hooks/useAuth';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase/firebase.config';
import { FaArrowRight } from "react-icons/fa6";
import requestServiceIcon from '../../assets/requestService.png';
import viewServices from '../../assets/viewservices.png';
import checkStatus from '../../assets/checkStatus.png';
import { Link } from 'react-router';
import referralImg from '../../assets/family with a disabled child-amico.png'
import ServicesOverview from '../../Components/ServicesOverview';
import FAQs from '../../Components/FAQs';
import ContactCta from '../../Components/ContactCta';

const SupportCoordinatorDashboard = () => {


    const [userData, setUserData] = useState("");
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
                    setUserData(data)
                }
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        fetchUser();
    }, [user]); // re-run when user changes


    if (roleLoading) return <p className='text-center'><span className="loading loading-spinner text-primary"></span></p>;
    return (
        <div>
            <div className="w-full mx-auto px-4 py-20">
                {/* Header Section */}
                <div className='flex justify-center mb-6'>
                    <button className='btn rounded-full bg-purple-100 text-[#6B2B77] border-0 btn-xs'> <span className='bg-white rounded-full px-1'>New Updates</span> Download the app now <FaArrowRight /></button>
                </div>
                <div className="mb-10 text-center">
                    <h1 className="text-5xl font-semibold text-gray-800 mb-6">Welcome, {userData.name || "Support Coordinator"}</h1>
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


                <div className='my-12 p-10 bg-purple-50 rounded-2xl'>

                    <div className='flex flex-col md:flex-row items-center justify-center gap-5'>

                        <div>
                            <h1 className='font-bold text-3xl'>Referral</h1>
                            <p className='text-gray-600 text-sm my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit facilis nesciunt eligendi voluptates non tempora exercitationem culpa hic. Corporis, aut velit cumque tenetur natus incidunt dolore ut nostrum quod. Necessitatibus!</p>
                            <div className='flex gap-4 my-5'>
                                <Link to='referralForm' className='btn bg-[#6B2B77] text-white rounded-lg'>Refer Someone</Link>
                                <Link to='previousReferred' className='btn bg-[#6B2B77] text-white rounded-lg'>View Previous Referred</Link>
                            </div>
                        </div>

                        <div>
                            <img src={referralImg} alt="referralImg" className='w-80'/>
                        </div>
                    </div>
                </div>


                <ServicesOverview></ServicesOverview>
                <FAQs></FAQs>
                <ContactCta></ContactCta>
            </div>

        </div>
    );
};

export default SupportCoordinatorDashboard;