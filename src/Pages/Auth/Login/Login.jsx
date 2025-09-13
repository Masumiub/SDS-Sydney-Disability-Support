import React, { useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from 'react-router';
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { useForm } from 'react-hook-form'
import useAuth from '../../../hooks/useAuth';
import Swal from 'sweetalert2';




const Login = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');

    const { signInWithGoogle, signinUser } = useAuth()
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from || '/dashboard';

    const { register,
        formState: { errors },
        handleSubmit } = useForm();

    const onSubmit = data => {
        //console.log(data);
        signinUser(data.email, data.password)
            .then(result => {
                //console.log(result.user)
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Logging Successful",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(from)
            })
            .catch(error => {
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: `Failed to Login!${error} `,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
            )
    }

    const handleSignInWithGoogle = () => {
        signInWithGoogle()
            .then(result => {
                //console.log(result.user)
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Hello! Welcome to SDS.",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(from)
            })
            .catch(error => {
                {
                    Swal.fire({
                        position: "center",
                        icon: "error",
                        title: `Failed to Login!${error} `,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

    return (
        <div className='mt-20'>
            <div className=' text-center'>
            </div>

            <div className="flex gap-5  rounded-2xl  mb-5">

                <div className='w-full '>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 mx-auto">
                        <div className="card-body">
                            <div className=''>
                                <h2 className='text-3xl font-bold'>Log in</h2>
                                <p className='mt-2 text-gray-500'>Welcome back! Please enter your details.</p>
                            </div>
                            <fieldset className="fieldset">

                                <form onSubmit={handleSubmit(onSubmit)}>

                                    <label className="label mt-2 mb-2">Email</label>
                                    <input
                                        type="email"
                                        className="input w-full"
                                        placeholder="Email"
                                        name="email" {...register('email')}
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />

                                    <label className="label mt-2 mb-2">Password</label>

                                    <div className='relative'>

                                        <input type={showPassword ? 'text' : 'password'}
                                            className="input w-full " placeholder="Password" name='password' {...register('password', { required: true, minLength: 6 })} />

                                        <button onClick={() => { setShowPassword(!showPassword) }}
                                            className='btn btn-xs absolute top-2 right-2 border-0' type="button"> {showPassword ? <IoEyeOff size={20} /> : <IoEye size={20} />} </button>
                                    </div>

                                    {
                                        errors.password?.type === 'required' && <p className='text-red-500 mt-2'>Password is required!</p>
                                    }
                                    {
                                        errors.password?.type === 'minLength' && <p className='text-red-500 mt-2'>Password must be 6 characters long!</p>
                                    }


                                    <div className='mt-2'><Link to='/forgetPassword' state={{ email }} className="link link-hover">Forgot password?</Link></div>


                                    <button className="btn mt-4 w-full rounded-lg bg-[#6B2B77] border-0 text-white" type='submit'>Sign in</button>

                                    <button onClick={handleSignInWithGoogle} className="btn w-full rounded-lg mt-4" type='submit'> <FcGoogle /> Login with Google</button>
                                </form>

                            </fieldset>

                            <div className='text-center mt-4'>
                                <p>Don't have an account? <Link to='/auth/register' className='text-[#6B2B77]'>Sign up</Link> </p>
                            </div>

                        </div>
                    </div>
                </div>


            </div>


        </div>
    );
};

export default Login;