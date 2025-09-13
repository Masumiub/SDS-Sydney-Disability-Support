import React from 'react';
import faqsImg from '../assets/FAQs-amico.png'
const FAQs = () => {
    return (
        <div className='my-20 flex flex-col md:flex-row gap-10 items-center'>
            <div className='w-full md:w-1/2'>
                <div className='flex justify-center'>
                    <img src={faqsImg} alt="faqsImg" className='w-80' />
                </div>

            </div>

            <div className='w-full md:w-1/2'>
                <h2 className='text-3xl text-[#6B2B77] mb-8 font-bold pl-5'>Have a question?</h2>

                <div className="collapse collapse-plus bg-base-100 border-b border-base-300 mt-12">
                    <input type="radio" name="my-accordion-3" defaultChecked />
                    <div className="collapse-title font-semibold text-[#6B2B77]">What is SYDNEY DISABILITY SUPPORT?</div>
                    <div className="collapse-content text-sm text-gray-500">SYDNEY DISABILITY SUPPORT is dedicated to empowering, encouraging, and enabling individuals with disabilities and those who are ageing to enhance their quality of life with dignity and respect. We provide a range of NDIS support services tailored to meet individual needs.</div>
                </div>
                <div className="collapse collapse-plus bg-base-100 border-b border-base-300">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title font-semibold text-[#6B2B77]">Who can access your services?</div>
                    <div className="collapse-content text-sm">Click on "Forgot Password" on the login page and follow the instructions sent to your email.</div>
                </div>
                <div className="collapse collapse-plus bg-base-100 border-b border-base-300">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title font-semibold text-[#6B2B77]">How are services tailored to my needs?</div>
                    <div className="collapse-content text-sm">Go to "My Account" settings and select "Edit Profile" to make changes.</div>
                </div>

                <div className="collapse collapse-plus bg-base-100 border-b border-base-300">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title font-semibold text-[#6B2B77]">How do I start receiving services from SYDNEY DISABILITY SUPPORT?</div>
                    <div className="collapse-content text-sm">Go to "My Account" settings and select "Edit Profile" to make changes.</div>
                </div>

                <div className="collapse collapse-plus bg-base-100 border-b border-base-300">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title font-semibold text-[#6B2B77]">How are services funded?</div>
                    <div className="collapse-content text-sm">Go to "My Account" settings and select "Edit Profile" to make changes.</div>
                </div>


                <div className="collapse collapse-plus bg-base-100 border-b border-base-300">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title font-semibold text-[#6B2B77]">Are there any out-of-pocket costs?</div>
                    <div className="collapse-content text-sm">Go to "My Account" settings and select "Edit Profile" to make changes.</div>
                </div>
            </div>
        </div>
    );
};

export default FAQs;