import React from 'react';

const ContactCta = () => {
  return (
    <div className="w-full bg-gray-100 py-16 rounded-2xl">

      <div className='flex justify-center'>

      </div>

      <div className="w-full max-w-4xl mx-auto px-4 text-center">
        {/* Header */}
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Still have questions?
        </h2>
        
        {/* Description */}
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          Can't find the answer you're looking for? Please chat to our friendly team.
        </p>
        
        {/* CTA Button */}
        <button className=" btn bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors duration-200">
          Get in touch
        </button>
      </div>
    </div>
  );
};

export default ContactCta;