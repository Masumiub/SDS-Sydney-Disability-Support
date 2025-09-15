import React, { useEffect, useState } from 'react';
import ServicesOverview from '../../Components/ServicesOverview';
import imageHand from '../../assets/imagehand.png'
import { MdCancel, MdCheckCircle } from "react-icons/md";
import axios from 'axios';

const RequestServices = () => {
    const [staffList, setStaffList] = useState([]);

    useEffect(() => {
        const fetchStaff = async () => {
            try {
                const res = await axios.get("https://server-kappa-eight-95.vercel.app/api/users/staff");
                setStaffList(res.data);
            } catch (error) {
                console.error("Error fetching staff", error);
            }
        };
        fetchStaff();
    }, []);

    return (
        <div>
            <div className="w-full mx-auto px-4 py-20">
                {/* Header Section */}
                <div className="mb-8 text-center border-b-1 border-gray-300 pb-20">
                    <h1 className="text-5xl font-semibold text-gray-800 mb-6">Community and Social Participation</h1>
                    <p className="text-gray-600">Join activities, connect with others, and build lasting social networks.</p>

                </div>


                <div className='flex flex-col md:flex-row gap-10 items-center'>


                    <div className="w-full md:w-1/2 px-4 py-8">
                        {/* Header */}
                        <div className="mb-8 ">
                            <h1 className="text-3xl font-bold text-gray-800 mb-2">Request a Service</h1>
                            <p className="text-gray-600">Input details of your requested service</p>
                        </div>

                        {/* Form */}
                        <div className="">
                            {/* Service Type Section */}
                            <div className="mb-8">
                                <h2 className="text-lg  text-gray-800 mb-4">Service Type</h2>
                                <select defaultValue="Pick a color" className="select w-full">
                                    <option>House Cleaning And Other Household Activities</option>
                                    <option>Short Term/Emergency Accommodation</option>
                                    <option>Daily Living</option>
                                    <option>House Cleaning And Other Household Activities</option>
                                    <option>Community and Social Participation</option>
                                    <option>House or Yard Maintenance</option>
                                    <option>Accommodation and Tenancy Support</option>
                                    <option>Support Coordination</option>
                                    <option>Travel and Transport Assistance</option>
                                    <option>Skill Development and Life Transition</option>
                                </select>
                            </div>

                            {/* Details Section */}
                            <div className="mb-8">
                                <h2 className="text-lg  text-gray-800 mb-4">Details</h2>
                                <textarea className="textarea w-full" placeholder="Bio"></textarea>
                            </div>

                            <div className="mb-8">

                                {/* Open the modal using document.getElementById('ID').showModal() method */}
                                <button className=" w-full text-left input" onClick={() => document.getElementById('my_modal_1').showModal()}>Select Staff</button>
                                <dialog id="my_modal_1" className="modal">
                                    <div className="modal-box">
                                        <h3 className="font-bold text-lg">Select Staff</h3>

                                        {staffList.map((staff) => (
                                            <div key={staff.user_id} className="my-4">
                                                <div className="p-6 rounded-2xl shadow-md">
                                                    <div className="flex gap-2">
                                                        <div>
                                                            <img
                                                                src={staff.profile_image_url || "https://i.pinimg.com/736x/bb/e3/02/bbe302ed8d905165577c638e908cec76.jpg0"}
                                                                alt="avatar"
                                                                className="w-15 h-15 rounded-full border-2 border-purple-800"
                                                            />
                                                        </div>
                                                        <div>
                                                            <h1 className="font-bold text-xl">{staff.name}</h1>
                                                            <p className="text-sm text-gray-500">{staff.about_me || "About me ..."}</p>
                                                        </div>
                                                    </div>

                                                    <div className="my-5">
                                                        <div className="flex items-center justify-between text-gray-600 my-2">
                                                            <p>First Aid Certificate</p>
                                                            {staff.compliance_documents?.first_aid_certificate ? <MdCheckCircle className="text-green-500" /> : <MdCancel className="text-gray-500"/>}
                                                        </div>

                                                        <div className="flex items-center justify-between text-gray-600 my-2">
                                                            <p>NDIS Workers Check</p>
                                                            {staff.compliance_documents?.ndis_workers_check ? <MdCheckCircle className="text-green-500" /> : <MdCancel className="text-gray-500"/>}
                                                        </div>

                                                        <div className="flex items-center justify-between text-gray-600 my-2">
                                                            <p>Working with Children Check</p>
                                                            {staff.compliance_documents?.working_with_children_check ? <MdCheckCircle className="text-green-500" /> :<MdCancel className="text-gray-500"/>}
                                                        </div>

                                                        <div className="flex items-center justify-between text-gray-600 my-2">
                                                            <p>Police Check</p>
                                                            {staff.compliance_documents?.police_check ? <MdCheckCircle className="text-green-500" /> : <MdCancel className="text-gray-500"/>}
                                                        </div>

                                                        <div className="flex items-center justify-between text-gray-600 my-2">
                                                            {/* <p>Rating: {staff?.rating || "N/A"}</p>
                                                            <p>{staff?.distance || "Unknown"} km</p> */}
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <button className="btn w-full bg-[#6B2B77] text-white rounded-lg">
                                                            Select Staff
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}


                                        <div className="modal-action">
                                            <form method="dialog">
                                                {/* if there is a button in form, it will close the modal */}
                                                <button className="btn">Close</button>
                                            </form>
                                        </div>
                                    </div>
                                </dialog>
                            </div>

                            {/* Date & Time Section */}
                            <div className="mb-8">
                                <h2 className="text-lg  text-gray-800 mb-4">Date & Time</h2>
                                <input type="text" placeholder="Type here" className="input w-full" />
                            </div>

                            {/* Location Section */}
                            <div className="mb-8">
                                <h2 className="text-lg  text-gray-800 mb-4">Location</h2>
                                <input type="text" placeholder="Type here" className="input w-full" />

                                <div className='flex gap-2 items-center mt-8'>
                                    <input type="checkbox" defaultChecked className="checkbox" />
                                    <p className="text-sm text-gray-600">
                                        You agree to our friendly <span className='underline'>privacy policy.</span>
                                    </p>
                                </div>

                            </div>

                            {/* Submit Button */}
                            <button className="btn w-full bg-[#6B2B77] hover:bg-purple-700 text-white font-semibold  rounded-lg  transition-colors duration-200">
                                Submit
                            </button>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 px-4 py-8">
                        <img src={imageHand} alt="imageHand" className='w-full' />
                    </div>
                </div>

                <ServicesOverview></ServicesOverview>
            </div>
        </div>
    );
};

export default RequestServices;