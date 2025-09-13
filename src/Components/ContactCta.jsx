import React from 'react';
import avatar1 from '../assets/Avatar1.png'
import avatar2 from '../assets/Avatar2.png'
import avatar3 from '../assets/Avatar3.png'

const ContactCta = () => {
  return (
    <div className="w-full bg-gray-100 py-16 rounded-2xl">

      <div className='flex justify-center'>
        <div className="avatar-group -space-x-6">
          <div className="avatar">
            <div className="w-12">
              <img src={avatar2} />
            </div>
          </div>
          <div className="avatar z-10">
            <div className="w-12">
              <img src={avatar1}  />
            </div>
          </div>
          <div className="avatar">
            <div className="w-12">
              <img src={avatar3} />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-4xl mx-auto px-4 text-center">
        {/* Header */}
        <h2 className="text-3xl text-gray-800 mb-4 mt-3">
          Still have questions?
        </h2>

        {/* Description */}
        <p className=" text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          Can't find the answer you're looking for? Please chat to our friendly team.
        </p>

        {/* CTA Button */}
        <button className=" btn bg-[#6B2B77] hover:bg-purple-700 text-white rounded-lg transition-colors duration-200">
          Get in touch
        </button>
      </div>
    </div>
  );
};

export default ContactCta;