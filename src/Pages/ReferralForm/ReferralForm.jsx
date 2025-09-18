import React, { useEffect, useState } from 'react';
import ServicesOverview from '../../Components/ServicesOverview';
import imageHand from '../../assets/imagehand.png'
import useAuth from '../../hooks/useAuth';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase/firebase.config';
import axios from 'axios';


const ReferralForm = () => {
    const { user } = useAuth();
    const [userData, setUserData] = useState("")

    const [services, setServices] = useState([]);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        serviceId: "",
        serviceDetails: "",
    });


    useEffect(() => {
        const fetchUser = async () => {
            try {
                if (!user?.uid) return; // 

                const docRef = doc(db, "users", user.uid);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    const data = docSnap.data();
                    setUserData(data);
                }
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        fetchUser();
    }, [user]);

    useEffect(() => {
        const fetchServices = async () => {
            try {
                const res = await axios.get("https://server-kappa-eight-95.vercel.app/api/services");
                setServices(res.data);
            } catch (err) {
                console.error("Failed to fetch services:", err);
            }
        };

        fetchServices();
    }, []);
    
    console.log(services)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Find selected service details
        const selectedService = services.find(
            (s) => s.service_id === formData.serviceId
        );

        const referralData = {
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            phone: formData.phone,
            serviceDetails: formData.serviceDetails,
            service_id: selectedService?.service_id || "",
            service_name: selectedService?.name || "",
            referred_by: user.uid, // 
            referred_date: new Date().toISOString(),
            status: "Open",
        };

        try {
            const res = await fetch("https://server-kappa-eight-95.vercel.app/api/referrals", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(referralData),
            });

            if (!res.ok) throw new Error("Failed to submit referral");

            alert("Referral submitted successfully!");
            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                serviceId: "",
                serviceDetails: "",
            });
        } catch (err) {
            console.error(err);
            alert("Something went wrong!");
        }
    };

    return (
        <div>
            <div className="w-full mx-auto px-4 py-20">
                {/* Header Section */}
                <div className="mb-8 text-center border-b-1 border-gray-300 pb-20">
                    <h1 className="text-5xl font-semibold text-gray-800 mb-6">Refer Your Clients</h1>
                    <p className="text-gray-600">Join activities, connect with others, and build lasting social networks.</p>

                </div>


                <div className='flex flex-col lg:flex-row gap-10 items-center'>


                    <div className="w-full lg:w-1/2 px-4 py-8">


                        <form
                            onSubmit={handleSubmit}
                            className="w-full px-4 py-8 space-y-6"
                        >
                            <div>
                                <h2 className="text-lg text-gray-800 mb-2">First Name</h2>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    placeholder="Type here"
                                    className="input w-full"
                                    required
                                />
                            </div>

                            <div>
                                <h2 className="text-lg text-gray-800 mb-2">Last Name</h2>
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    placeholder="Type here"
                                    className="input w-full"
                                    required
                                />
                            </div>

                            <div>
                                <h2 className="text-lg text-gray-800 mb-2">Email</h2>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Type your email here"
                                    className="input w-full"
                                    required
                                />
                            </div>

                            <div>
                                <h2 className="text-lg text-gray-800 mb-2">Phone</h2>
                                <input
                                    type="text"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="+61..."
                                    className="input w-full"
                                    required
                                />
                            </div>

                            <div>
                                <h2 className="text-lg text-gray-800 mb-2">Service Type</h2>
                                <select
                                    name="serviceId"
                                    value={formData.serviceId}
                                    onChange={handleChange}
                                    className="select w-full"
                                    required
                                >
                                    <option value="">Select a service</option>
                                    {services.map((service) => (
                                        <option key={service.service_id} value={service.service_id}>
                                            {service.name}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <h2 className="text-lg text-gray-800 mb-2">Service Details</h2>
                                <textarea
                                    name="serviceDetails"
                                    value={formData.serviceDetails}
                                    onChange={handleChange}
                                    className="textarea w-full"
                                    placeholder="Enter service details..."
                                    required
                                ></textarea>
                            </div>

                            <div className="flex gap-2 items-center">
                                <input type="checkbox" defaultChecked className="checkbox" />
                                <p className="text-sm text-gray-600">
                                    You agree to our friendly{" "}
                                    <span className="underline">privacy policy.</span>
                                </p>
                            </div>

                            <button
                                type="submit"
                                className="btn w-full bg-[#6B2B77] hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors duration-200"
                            >
                                Refer
                            </button>
                        </form>
                    </div>

                    <div className="w-full lg:w-1/2 px-4 py-8">
                        <img src={imageHand} alt="imageHand" className='w-full' />
                    </div>

                </div>


            </div>


        </div>

    );
};

export default ReferralForm;