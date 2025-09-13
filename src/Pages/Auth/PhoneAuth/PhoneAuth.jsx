import React, { useState } from "react";
import { auth } from "../../../firebase/firebase.config";
import {
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import { useNavigate } from "react-router";

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
      alert("Phone must start with +61");
      return;
    }

    try {
      const appVerifier = setUpRecaptcha();
      const result = await signInWithPhoneNumber(auth, phone, appVerifier);
      setConfirmationResult(result);
      alert("OTP sent ✅");
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
      alert("Phone auth successful ✅");
      navigate('/dashboard')

    } catch (error) {
      console.error("Invalid OTP", error);
      alert("Invalid OTP");
    }
  };

  return (
    <div className="p-4 max-w-sm mx-auto">
      <h2 className="text-xl font-bold mb-4">Phone Login</h2>

      <form onSubmit={sendOtp}>
        <input
          type="text"
          placeholder="Enter phone (+61...)"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="input w-full mb-2"
        />
        <div id="recaptcha-container"></div>
        <button type="submit" className="bg-purple-600 text-white px-4 py-2 rounded w-full">
          Send OTP
        </button>
      </form>

      {confirmationResult && (
        <form onSubmit={verifyOtp} className="mt-4">
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="input w-full mb-2"
          />
          <button type="submit" className="bg-purple-600 text-white px-4 py-2 rounded w-full">
            Verify OTP
          </button>
        </form>
      )}
    </div>
  );
}
