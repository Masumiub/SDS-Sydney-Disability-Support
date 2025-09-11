import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-[#6B2B77] text-white pt-20 pb-8 mt-10 rounded-tl-4xl ">
      <div className="w-full md:w-9/12 mx-auto px-4">


        {/* Links Sections */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">

        {/* Newsletter Section */}
        <div className="mb-8">

            <div>
                <h1 className='text-white font-bold text-xl'>Sydney Disability Support</h1>
            </div>
          <h3 className="text-xs mb-4 my-6">
            Connect with us for updates on services, events, and resources. Follow up and subscribe today.
          </h3>

        </div>


          {/* Important Links */}
          <div>
            <h4 className="font-bold  mb-4">Important Links</h4>
            <ul className="space-y-2">
              {['Home Page', 'Join Us', 'Activities / Events', 'Contact', 'Account Deletion'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:underline text-xs">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* About Company */}
          <div>
            <h4 className="font-bold mb-4">About Company</h4>
            <ul className="space-y-2">
              {['About', 'Terms and Conditions', 'FAQ', 'Privacy policy', 'User Complains'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:underline text-xs">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="font-bold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {['Services and Support', 'Support Coordination', 'Travel and Transport Assistance'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:underline text-xs">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Select and Listen & Copyright */}
        <div className=" pt-6 border-t border-white/20">

          <div className="text-center">
            <p className='text-center text-xs'>© 2024-2025 Sydney Disability Support. All rights reserved</p>
          </div>

        </div>


      </div>
    </footer>
  );
};

export default Footer;