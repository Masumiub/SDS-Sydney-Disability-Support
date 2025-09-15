import React, { use } from 'react';
import logo from '../assets/logo.png'
import { IoIosArrowForward } from "react-icons/io";
import { Link, NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../contexts/AuthContext/AuthContext';
import Swal from 'sweetalert2';
import { RiDashboard3Line } from "react-icons/ri";


const Navbar = () => {

    const { user, logout } = use(AuthContext);
    const navigate = useNavigate();


    console.log(user);


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
        <>
            <div className='bg-[#6B2B77]'>

                <div className='w-full md:w-9/12 mx-auto bg-[#6B2B77] text-white py-4'>
                    <h1 className='text-center text-xs'>Sydney Disability Support is NDIS registered, ensuring truested, quality care for our community</h1>
                </div>
            </div>

            <div className='w-full md:w-9/12 mx-auto'>
                <div className='grid grid-cols-2 lg:grid-cols-5 gap-3 items-center px-3 py-6'>
                    <div className='lg:col-span-2'>
                        <div className='flex gap-1 items-center'>
                            <img src={logo} alt="logo" className='w-12 h-12' />
                            <h1 className='font-bold text-xl text-[#6B2B77]'>Sydney Disability Support</h1>
                        </div>
                    </div>

                    <div className='border-r-1 border-gray-300'>
                        <p className='text-gray-500 text-xs'>Mail Address</p>
                        <p className='font-bold text-xs text-gray-600'>info@sydenydisabilitySupport.com</p>
                    </div>

                    <div className='border-r-1 border-gray-300'>
                        <p className='text-gray-500 text-xs'>Phone number</p>
                        <p className='font-bold text-xs  text-gray-600'>02 8119-5878</p>
                    </div>

                    <div className=''>
                        <p className='text-gray-500 text-xs'>Address</p>
                        <p className='font-bold text-xs text-gray-600'>Shop 9-12 138 Queen Street, Campbelttown NSW 2560</p>
                    </div>


                </div>
            </div>

            <div className='bg-[#6B2B77]'>
                <div className="navbar w-full md:w-9/12 mx-auto bg-[#6B2B77] text-white py-3">
                    <div className="navbar-start ">
                        <div className="dropdown bg-[#6B2B77] text-white">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                <li><a>Home</a></li>
                                <li>
                                    <a>Services and Support</a>
                                    <ul className="p-2">
                                        <li><a>Submenu 1</a></li>
                                        <li><a>Submenu 2</a></li>
                                    </ul>
                                </li>
                                <li><a>Activites/Events</a></li>
                                <li><a>Referral</a></li>
                                <li><a>Join us</a></li>
                                <li><a>About </a></li>
                            </ul>
                        </div>
                        {/* <a className="">Menu</a> */}

                        <ul className="menu menu-horizontal px-1 hidden lg:flex">
                            <li><a>Home</a></li>
                            <li>
                                <details>
                                    <summary>Services and Support</summary>
                                    <ul className="p-2">
                                        <li><a>Submenu 1</a></li>
                                        <li><a>Submenu 2</a></li>
                                    </ul>
                                </details>
                            </li>
                            <li><a>Activites/Events</a></li>
                            <li><a>Referral</a></li>
                            <li><a>Join us</a></li>
                            <li><a>About </a></li>
                        </ul>
                    </div>
                    <div className="navbar-center hidden">
                        {/* <ul className="menu menu-horizontal px-1">
                            <li><a>Home</a></li>
                            <li>
                                <details>
                                    <summary>Services and Support</summary>
                                    <ul className="p-2">
                                        <li><a>Submenu 1</a></li>
                                        <li><a>Submenu 2</a></li>
                                    </ul>
                                </details>
                            </li>
                            <li><a>Activites/Events</a></li>
                            <li><a>Referral</a></li>
                            <li><a>Join us</a></li>
                            <li><a>About </a></li>
                        </ul> */}
                    </div>
                    <div className="navbar-end gap-2">
                        {
                            user ? <div className="dropdown dropdown-end dropdown-hover"> <div className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img
                                        alt="User"
                                        src={user?.photoURL || "https://i.pinimg.com/736x/bb/e3/02/bbe302ed8d905165577c638e908cec76.jpg"} title={user ? user.displayName : 'Anonymous'} />
                                </div>
                            </div>
                                <ul
                                    className="menu dropdown-content bg-base-200 rounded-box z-1 shadow-lg">
                                    <li className='pointer-events-none'>
                                        <p className='text-lg font-semibold'>{user.displayName}</p>
                                    </li>
                                    <li className='pointer-events-none'> <p>{user.email}</p></li>
                                    <li><Link to='/dashboard' className="btn rounded-full bg-[#6B2B77] text-white border-0 btn-sm hover:bg-purple-600 shadow-none" ><RiDashboard3Line size={20} />Dashboard</Link> </li>
                                    <li><button onClick={handleLogout} className="btn rounded-full bg-[#6B2B77] text-white border-0 btn-sm mt-2"> Signout</button></li>
                                </ul> </div> : <div className='flex gap-2'>
                                <NavLink to='/auth/phone' className="btn rounded-full  bg-purple-300 text-purple-900 border-0 shadow-none">Login</NavLink>
                                <Link to='/auth/register' className="btn rounded-full bg-purple-300 text-purple-900 border-0 shadow-none">Register</Link>
                            </div>
                        }
                    </div>
                </div>
            </div>

        </>
    );
};

export default Navbar;