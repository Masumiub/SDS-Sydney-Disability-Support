import React, { use, useEffect, useState } from 'react';
import { Link, Links, NavLink, Outlet, useNavigate } from 'react-router';
import { AuthContext } from '../contexts/AuthContext/AuthContext';
import Swal from 'sweetalert2';
import logo from '../assets/logo.png'
import Footer from '../Components/Footer';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase.config';
import useUserRole from '../hooks/useUserRole';


const DashboardLayout = () => {

    const { user, logout } = use(AuthContext);
    const [contractPersonName, setContractPersonName] = useState("");
    const [userData, setUserData] = useState("")
    const navigate = useNavigate();

    const { role, roleLoading } = useUserRole()

    useEffect(() => {
        const fetchUser = async () => {
            try {

                if (!user?.uid) return; //  wait until user is available


                const docRef = doc(db, "users", user.uid);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    const data = docSnap.data();
                    setUserData(data);
                    if (data.contract_persons && data.contract_persons.length > 0) {
                        setContractPersonName(data.contract_persons[0].name);
                    }
                }
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        fetchUser();
    }, [user]); // re-run when user changes

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
                    navigate('/');
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

                            {
                                !roleLoading && (role == 'support coordinator' || role == 'participant') &&
                                <>
                                    <li><Link to='/dashboard'>Home</Link></li>
                                    <li>
                                        <Link to='yourServices'>My Services</Link>
                                    </li>

                                    <li>
                                        <Link to='requestServices'>Request Services</Link>
                                    </li>
                                    <li><a>Status</a></li>
                                </>
                            }
                            {
                                !roleLoading && role == 'staff' &&
                                <>
                                    <li><Link to='/dashboard'>Home</Link></li>
                                    <li><Link to='assignedService'>Assigned</Link></li>
                                    <li><Link to='yourClients'>Your Clients</Link></li>
                                </>
                            }
                        </ul>
                    </div>
                    <div className='flex gap-1 items-center'>
                        <img src={logo} alt="logo" className='w-12' />
                        <Link to='/' className="text-xl font-bold text-[#6B2B77]">SDS</Link>
                    </div>


                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">

                        {
                            !roleLoading && (role == 'support coordinator' || role == 'participant') &&
                            <>
                                <li><Link to='/dashboard'>Home</Link></li>
                                <li>
                                    <Link to='yourServices'>My Services</Link>
                                </li>

                                <li>
                                    <Link to='requestServices'>Request Services</Link>
                                </li>
                                <li><Link to='serviceRequestStatus'>Status</Link></li>
                            </>
                        }
                        {
                            !roleLoading && role == 'staff' &&
                            <>
                                <li><Link to='/dashboard'>Home</Link></li>
                                <li><Link to='assignedService'>Assigned</Link></li>
                                <li><Link to='yourClients'>Your Clients</Link></li>
                            </>
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <div className="dropdown dropdown-end dropdown-hover"> <div className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="User"
                                    src={userData.profile_image_url || "https://i.pinimg.com/736x/bb/e3/02/bbe302ed8d905165577c638e908cec76.jpg"} title={user ? user.displayName : 'Anonymous'} />
                            </div>
                        </div>

                            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-72 p-2 shadow-sm">
                                <li className='border-b-1 border-gray-200'><p className='text-xs'>{contractPersonName || userData?.name || "User"}</p></li>
                                <li className='border-b-1 border-gray-200'><p className='text-xs'>{userData?.email}</p></li>
                                <li className='border-b-1 border-gray-200'><Link to='manageProfile' className='text-xs'>Manage Profile</Link></li>
                                <li><button onClick={handleLogout} className='text-xs'>Signout</button></li>
                            </ul>

                        </div> : <div className='flex gap-2'>
                            <NavLink to='/auth/login' className="btn rounded-lg  bg-purple-600 text-white border-0">Login</NavLink>
                            <Link to='/auth/register' className="btn rounded-full">Register</Link>
                        </div>
                    }
                </div>
            </div>

            <div className='w-full md:w-9/12 mx-auto'>
                <Outlet></Outlet>
            </div>

            <Footer></Footer>

        </div>
    );
};

export default DashboardLayout;