import React from 'react';
import readyserviceImg from '../assets/readyservice.png'


const ReadyToApply = () => {
  return (
    <div className="w-full  py-17">
      <div className="w-full mx-auto flex flex-col md:flex-row gap-10 items-center">

        <div className="w-full md:w-1/2">
          {/* Header */}
          <div className=" mb-8">
            <p className='mb-4 text-[#6B2B77]'>Launch faster</p>

            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Ready to Apply for Services?
            </h2>
          </div>

          {/* Content */}
        <div className="space-y-6 text-gray-500  leading-relaxed">
            <p>
              Taking the next step towards the right support has never been
              easier. At Sydney Disability Support, we offer a wide range of
              NDIS-compliant services designed to meet your unique needs.
              Whether you're looking for help with daily living, building new
              skills, joining community activities, or accessing transport and
              housing support. We're here to walk the journey with you.
            </p>
            
            <p>
              With just a few clicks, you can explore all available services, learn
              how each one can support your goals, and submit your application
              directly through our secure platform. Our team will review your
              request and connect with you to make sure you get the right
              assistance, at the right time.
            </p>
          </div>

          {/* CTA Button */}
          <div className=" mt-10">
            <button className="btn bg-[#6B2B77] hover:bg-purple-700 text-white font-semibold  rounded-lg transition-colors duration-20 px-15">
              View Services
            </button>
          </div>
        </div>
       
        <div className='w-full md:w-1/2'>
              <img src={readyserviceImg} alt="readyserviceImg" className='w-full'/>
        </div>
      </div>
    </div>
  );
};

export default ReadyToApply;