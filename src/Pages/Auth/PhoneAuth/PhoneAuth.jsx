import React, { useState } from "react";
import { auth } from "../../../firebase/firebase.config";
import {
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import { useNavigate } from "react-router";
import Swal from 'sweetalert2'



export default function PhoneAuth() {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [confirmationResult, setConfirmationResult] = useState(null);
  const navigate = useNavigate();

  // Setup reCAPTCHA (v9 syntax)
  const setUpRecaptcha = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        auth, // 👈 auth comes first in v9
        "recaptcha-container",
        {
          size: "invisible",
          callback: () => console.log("Recaptcha verified ✅"),
        }
      );
    }
    return window.recaptchaVerifier;
  };

  // Send OTP
  const sendOtp = async (e) => {
    e.preventDefault();
    if (!phone.startsWith("+61")) {
      //alert("Phone must start with +61");
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Phone must start with +61",
        showConfirmButton: false,
        timer: 1500
      });
      return;
    }

    try {
      const appVerifier = setUpRecaptcha();
      const result = await signInWithPhoneNumber(auth, phone, appVerifier);
      setConfirmationResult(result);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "OTP has been Sent",
        showConfirmButton: false,
        timer: 1500
      });

    } catch (error) {
      console.error("Failed to send OTP", error);
      alert("Failed to send OTP: " + error.message);
    }
  };

  // Verify OTP
  const verifyOtp = async (e) => {
    e.preventDefault();
    if (!otp) return alert("Enter the OTP");

    try {
      await confirmationResult.confirm(otp);
      //alert("Phone auth successful ✅");

      Swal.fire({
        position: "center",
        icon: "success",
        title: "Login Successful!",
        showConfirmButton: false,
        timer: 1500
      });
      navigate('/dashboard')

    } catch (error) {
      console.error("Invalid OTP", error);
      //alert("Invalid OTP");
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Invalid OTP!",
        showConfirmButton: false,
        timer: 1500
      });
    }
  };

  return (
    <div className="p-4 max-w-sm mx-auto mt-20">
      <div className='mb-6'>
        <h2 className='text-3xl font-bold'>Log in</h2>
        <p className='mt-2 text-gray-500'>Welcome back! Please enter your details.</p>

        {/* <button className="btn bg-purple-200 text-purple-900  btn-sm mt-4 border-1 border-purple-900">I’m a Participant</button> */}
      </div>

      <form onSubmit={sendOtp}>
        <input
          type="text"
          placeholder="Enter phone (+61...)"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="input w-full mb-2"
        />
        <div id="recaptcha-container"></div>
        <button type="submit" className="bg-[#6B2B77] text-white px-4 py-2 rounded-lg w-full mt-5">
          Send OTP
        </button>
      </form>

      {confirmationResult && (
        <>
          <div className='mb-6 mt-6'>
            <h2 className='text-3xl font-bold'>Verify Number</h2>
            <p className='mt-2 text-gray-500'>To create your account lets first verify that this is your phone number.</p>

          </div>


          <form onSubmit={verifyOtp} className="mt-4">
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="input w-full mb-2"
            />
            <button type="submit" className="bg-[#6B2B77] text-white px-4 py-2 rounded-lg w-full mt-5">
              Verify OTP
            </button>
          </form>

        </>
      )}
    </div>
  );
}
