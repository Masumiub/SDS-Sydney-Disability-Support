import React, { use } from 'react';
import { Link, Links, NavLink, Outlet, useNavigate } from 'react-router';
import { AuthContext } from '../contexts/AuthContext/AuthContext';
import Swal from 'sweetalert2';

const footerSections = [
    {
        title: 'Product',
        links: ['Overview', 'Features', 'Solutions', 'Tutorials', 'Pricing', 'Releases']
    },
    {
        title: 'Company',
        links: ['About us', 'Careers', 'News', 'Media kit', 'Contact']
    },
    {
        title: 'Resources',
        links: ['Blog', 'Newsletter', 'Events', 'Help centre', 'Tutorials', 'Support']
    },
    {
        title: 'Use cases',
        links: ['Startups', 'Enterprise', 'Government', 'SaaS', 'Marketplaces', 'Ecommerce']
    },
    {
        title: 'Social',
        links: ['Twitter', 'LinkedIn', 'Facebook', 'GitHub', 'AngelList', 'Dribbble']
    },
    {
        title: 'Legal',
        links: ['Terms', 'Privacy', 'Cookies', 'Licenses', 'Settings', 'Contact']
    }
];

const DashboardLayout = () => {

    const { user, logout } = use(AuthContext);
    const navigate = useNavigate();


    const handleLogout = () => {
        logout()
            .then(() => {
                //alert('You logged out successfully');
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "You logged out successfully!",
                    showConfirmButton: false,
                    timer: 1500
                });
                setTimeout(() => {
                    navigate('/login');
                }, 1000);
            })
            .catch((error) => {
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: "Failed to logout!",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
    }

    return (
        <div>
            <div className="navbar bg-base-100 border-b-1 border-gray-200 w-full md:w-9/12  mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><a>Home</a></li>
                            <li>
                                <a>My Services</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>

                            <li>
                                <Link to='requestServices'>Request Services</Link>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Status</a></li>
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost text-xl">SDS</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to='/dashboard'>Home</Link></li>
                        <li>

                            <Link to='yourServices'>My Services</Link>

                        </li>

                        <li>

                               <Link to='requestServices'>Request Services</Link>

                        </li>
                        <li><Link to='serviceRequestStatus'>Status</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <div className="dropdown dropdown-end dropdown-hover"> <div className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="User"
                                    src={user.photoURL} title={user ? user.displayName : 'Anonymous'} />
                            </div>
                        </div>
                            <ul
                                className="menu dropdown-content bg-base-200 rounded-box z-1 shadow-lg">
                                <li className='pointer-events-none'>
                                    <p className='text-lg font-semibold'>{user.displayName}</p>
                                </li>
                                <li className='pointer-events-none'> <p>{user.email}</p></li>
                               
                                <li><button onClick={handleLogout} className="btn rounded-full bg-blue-500 text-white border-0 btn-sm mt-2"> Signout</button></li>
                            </ul> </div> : <div className='flex gap-2'>
                            <NavLink to='/' className="btn rounded-full  bg-blue-500 text-white border-0">Login</NavLink>
                            <Link to='/register' className="btn rounded-full">Register</Link>
                        </div>
                    }
                </div>
            </div>

            <div className='w-full md:w-9/12 mx-auto'>
                <Outlet></Outlet>
            </div>

            <footer className="w-full bg-gray-50 text-black py-12 mt-20">
                <div className="w-full md:w-9/12 mx-auto px-4">
                    {/* Main Footer Links */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
                        {footerSections.map((section, index) => (
                            <div key={index} className="text-center md:text-left">
                                <h3 className="font-semibold text-black mb-4 text-sm uppercase tracking-wide">
                                    {section.title}
                                </h3>
                                <ul className="space-y-2">
                                    {section.links.map((link, linkIndex) => (
                                        <li key={linkIndex}>
                                            <a href="#" className="text-gray-500  text-sm transition-colors">
                                                {link}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Bottom Section */}
                    <div className="border-t border-gray-400 pt-8">
                        <div className="flex flex-col md:flex-row justify-between items-center">
                            <div className="flex items-center mb-4 md:mb-0">
                                <span className="text-2xl font-bold mr-2">SDS</span>
                            </div>
                            <div className="text-center md:text-right">
                                <p className="text-gray-500 text-sm">
                                    © 2025 Sydney Disability Support. All rights reserved.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    );
};

export default DashboardLayout;