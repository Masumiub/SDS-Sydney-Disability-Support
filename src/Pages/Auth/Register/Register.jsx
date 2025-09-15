import React, { useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from 'react-router';
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { useForm } from 'react-hook-form'
import axios from 'axios';
import Swal from 'sweetalert2';
import useAuth from '../../../hooks/useAuth';
import useAxios from '../../../hooks/useAxios';


const Register = () => {

    const [showPassword, setShowPassword] = useState(false);
    const { register, handleSubmit, formState: { errors }, watch } = useForm();
    const [nameError, setNameError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const { signInWithGoogle } = useAuth()
    const axiosInstance = useAxios();

    const [profilePic, setProfilePic] = useState('');
    const { createUser, updateUserProfile } = useAuth();

    const navigate = useNavigate();

    const onSubmit = async (data) => {
        const { name, email, password } = data;
        const terms = watch('terms');

        setNameError('');
        setPasswordError('');

        if (name.length < 3) {
            setNameError('Name should be at least 3 characters long!');
            Swal.fire('Invalid Name', 'Name should be at least 3 characters long!', 'error');
            return;
        }

        if (password.length < 6) {
            setPasswordError('Password should be at least 6 characters long!');
            Swal.fire('Invalid Password', 'Password should be at least 6 characters long!', 'error');
            return;
        }
        if (!/[A-Z]/.test(password)) {
            setPasswordError('Password must contain at least one uppercase letter.');
            Swal.fire('Invalid Password', 'Password must contain at least one uppercase letter.', 'error');
            return;
        }
        if (!/[a-z]/.test(password)) {
            setPasswordError('Password must contain at least one lowercase letter.');
            Swal.fire('Invalid Password', 'Password must contain at least one lowercase letter.', 'error');
            return;
        }
        if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
            setPasswordError('Password must contain at least one special character.');
            Swal.fire('Invalid Password', 'Password must contain at least one special character.', 'error');
            return;
        }

        if (!terms) {
            Swal.fire('Terms Required', 'You must accept the terms and conditions!', 'error');
            return;
        }


        try {
            const result = await createUser(email, password);
            const userInfo = {
                email,
                name,
                role: 'user',
                created_at: new Date().toISOString(),
                last_log_in: new Date().toISOString(),
            };
            await axiosInstance.post('/users', userInfo);

            await updateUserProfile({
                displayName: name,
                photoURL: profilePic
            });

            Swal.fire({
                position: "center",
                icon: "success",
                title: "Welcome to Tournest!",
                showConfirmButton: false,
                timer: 1500
            });
            navigate('/');
        } catch (err) {
            Swal.fire({
                position: "center",
                icon: "error",
                title: "Failed to register!",
                showConfirmButton: false,
                timer: 1500
            });
        }
    };


    // const handleSignInWithGoogle = () => {
    //     signInWithGoogle()
    //         .then(async result => {
    //             const user = result.user;
    //             //console.log(result.user);

    //             const userInfo = {
    //                 email: user.email,
    //                 name: user.displayName,
    //                 role: 'user',
    //                 created_at: new Date().toISOString(),
    //                 last_log_in: new Date().toISOString()
    //             }

    //             const res = await axiosInstance.post('/users', userInfo);

    //             navigate('/')

    //             Swal.fire({
    //                 position: "center",
    //                 icon: "success",
    //                 title: "Welcome to Tournest!",
    //                 showConfirmButton: false,
    //                 timer: 1500
    //             });
    //         })
    //         .catch(error => {
    //             Swal.fire({
    //                 position: "center",
    //                 icon: "error",
    //                 title: "Failed to signin with google!",
    //                 showConfirmButton: false,
    //                 timer: 1500
    //             });
    //         })
    // }

    const handleImageUpload = async (e) => {
        const image = e.target.files[0];
        //console.log(image);

        const formData = new FormData();

        formData.append('image', image)

        const imageURL = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_imgBB_key}`
        const res = await axios.post(imageURL, formData);

        setProfilePic(res.data.data.url);
    }


    return (
        <div className=''>

            <div className="flex gap-5 rounded-2xl ">
                <div className='w-full '>

                    <div className="card bg-base-100 w-full max-w-sm shrink-0  mx-auto">

                        <div className="card-body">

                            <div className=''>
                                <h1 className='font-bold text-2xl'>Create Account</h1>
                                <p className='mt-2'>Sign up to create your account </p>
                            </div>


                            <fieldset className="fieldset">
                                <form onSubmit={handleSubmit(onSubmit)}>

                                    <div className='flex justify-center h-25 w-25 rounded-full bg-purple-100 mx-auto p-2 mt-3'>
                                        <div className='text-center'>
                                            <div className='flex justify-center'>
                                            <img src="https://i.pinimg.com/736x/bb/e3/02/bbe302ed8d905165577c638e908cec76.jpg" alt="avatar" className='w-12 h-12 rounded-full opacity-30'/>
                                            </div>
                                            <p className='text-xs text-gray-500'>Add Profile Picture</p>
                                        </div>
                                    </div>

                                    <label className="label mt-2 mb-2">Name*</label>
                                    <input type="text" className="input w-full " placeholder="Full Name" name='name' {...register('name', { required: true })} />
                                    {nameError && <p className='text-red-500'>{nameError}</p>}


                                    <label className="label mt-2 mb-2">Address</label>
                                    <input type="text" className="input w-full " placeholder="Select an address" name='address' required />

                                    <label className="label mt-2 mb-2">Phone Number*</label>
                                    <input type="text" className="input w-full " placeholder="Phone Number" name='number' {...register('number', { required: true })} />
                                    {
                                        errors.email?.type === 'required' && <p className='text-red-500'>Number is required!</p>
                                    }

                                    <label className="label mt-2 mb-2">Email*</label>
                                    <input type="email" className="input w-full " placeholder="Please enter email" name='email' {...register('email', { required: true })} />


                                    <label className="label mt-2 mb-2">Language</label>
                                    <select className="select w-full text-gray-400">
                                        <option>English</option>
                                        <option>Bangla</option>
                                        <option>Arabic</option>
                                    </select>

                                    <label className="label mt-2 mb-2">Hobby</label>
                                    <select className="select w-full text-gray-400">
                                        <option>Swimming</option>
                                        <option>Cycling</option>
                                        <option>Gradening</option>
                                    </select>


                                    <button className="btn rounded-lg bg-[#6B2B77] text-white border-0 mt-6 w-full" type='submit'>Create account</button>

                                    {/* <button onClick={handleSignInWithGoogle} className="btn mt-4 w-full rounded-lg" type='submit'><FcGoogle />Continue with Google</button> */}
                                </form>

                            </fieldset>

                            <div className='text-center mt-4'>
                                <p>Already have an account? <Link to='/auth/login' className='text-blue-500'>Log in</Link> </p>

                            </div>

                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Register;