
// import React, { useState, useRef, useEffect } from "react";
// import { auth } from "../../../firebase/firebase.config";
// import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
// import { useNavigate } from "react-router";
// import Swal from "sweetalert2";

// export default function PhoneAuth() {
//   const [phone, setPhone] = useState("");
//   const [otp, setOtp] = useState(new Array(6).fill("")); // 6 digits
//   const [confirmationResult, setConfirmationResult] = useState(null);
//   const navigate = useNavigate();
//   const inputsRef = useRef([]);
//   // window.location.reload();

//   useEffect(() => {
//     const hasReloaded = sessionStorage.getItem("hasReloaded");

//     if (!hasReloaded) {
//       sessionStorage.setItem("hasReloaded", "true");
//       window.location.reload();
//     }
//   }, []);

//   // Setup reCAPTCHA (v9 syntax)
//   const setUpRecaptcha = () => {
//     if (!window.recaptchaVerifier) {
//       window.recaptchaVerifier = new RecaptchaVerifier(
//         auth,
//         "recaptcha-container",
//         {
//           size: "invisible",
//           callback: () => console.log("Recaptcha verified ✅"),
//         }
//       );
//     }
//     return window.recaptchaVerifier;
//   };


//   //old
//   // const setUpRecaptcha = () => {
//   //   if (window.recaptchaVerifier) {
//   //     window.recaptchaVerifier.clear(); // reset old verifier
//   //   }

//   //   window.recaptchaVerifier = new RecaptchaVerifier(
//   //     "recaptcha-container",
//   //     {
//   //       size: "invisible",
//   //       callback: (response) => {
//   //         console.log("Recaptcha verified ✅", response);
//   //       },
//   //       "expired-callback": () => {
//   //         console.log("Recaptcha expired, please try again.");
//   //       }
//   //     },
//   //     auth
//   //   );

//   //   return window.recaptchaVerifier;
//   // };

//   // Send OTP
//   // const sendOtp = async (e) => {
//   //   e.preventDefault();
//   //   if (!phone.startsWith("+61")) {
//   //     Swal.fire({
//   //       position: "center",
//   //       icon: "error",
//   //       title: "Phone must start with +61",
//   //       showConfirmButton: false,
//   //       timer: 1500,
//   //     });
//   //     return;
//   //   }

//   //   try {
//   //     const appVerifier = setUpRecaptcha();
//   //     const result = await signInWithPhoneNumber(auth, phone, appVerifier);
//   //     setConfirmationResult(result);
//   //     Swal.fire({
//   //       position: "center",
//   //       icon: "success",
//   //       title: "OTP has been Sent",
//   //       showConfirmButton: false,
//   //       timer: 1500,
//   //     });
//   //   } catch (error) {
//   //     console.error("Failed to send OTP", error);
//   //     alert("Failed to send OTP: " + error.message);
//   //   }
//   // };


//   const sendOtp = async (e) => {
//     e.preventDefault();

//     if (!phone.startsWith("+61")) {
//       Swal.fire({
//         position: "center",
//         icon: "error",
//         title: "Phone must start with +61",
//         showConfirmButton: false,
//         timer: 1500,
//       });
//       return;
//     }

//     try {
      
//       const appVerifier = setUpRecaptcha(); // always fresh
//       const result = await signInWithPhoneNumber(auth, phone, appVerifier);
//       setConfirmationResult(result);
//       Swal.fire({
//         position: "center",
//         icon: "success",
//         title: "OTP has been Sent",
//         showConfirmButton: false,
//         timer: 1500,
//       });
//     } catch (error) {
//       console.error("Failed to send OTP", error);
//       Swal.fire({
//         position: "center",
//         icon: "error",
//         title: "Failed to send OTP: " + error.message,
//         showConfirmButton: false,
//         timer: 2000,
//       });
//     }
//   };



//   // Handle OTP input
//   const handleOtpChange = (value, index) => {
//     if (/^[0-9]?$/.test(value)) {
//       const newOtp = [...otp];
//       newOtp[index] = value;
//       setOtp(newOtp);

//       if (value && index < 5) {
//         inputsRef.current[index + 1].focus();
//       }
//     }
//   };

//   // Verify OTP
//   const verifyOtp = async (e) => {
//     e.preventDefault();
//     const fullOtp = otp.join("");
//     if (fullOtp.length < 6) {
//       return Swal.fire({
//         position: "center",
//         icon: "error",
//         title: "Enter complete OTP",
//         showConfirmButton: false,
//         timer: 1500,
//       });
//     }

//     try {
//       await confirmationResult.confirm(fullOtp);
//       Swal.fire({
//         position: "center",
//         icon: "success",
//         title: "Login Successful!",
//         showConfirmButton: false,
//         timer: 1500,
//       });
//       navigate("/dashboard");
//     } catch (error) {
//       console.error("Invalid OTP", error);
//       Swal.fire({
//         position: "center",
//         icon: "error",
//         title: "Invalid OTP!",
//         showConfirmButton: false,
//         timer: 1500,
//       });
//     }
//   };

//   return (
//     <div className="p-4 max-w-sm mx-auto mt-20">
//       {!confirmationResult && (
//         <>
//           <div className="mb-6">
//             <h2 className="text-3xl font-bold">Log in</h2>
//             <p className="mt-2 text-gray-500">
//               Welcome back! Please enter your details.
//             </p>
//           </div>

//           <form onSubmit={sendOtp}>
//             <input
//               type="text"
//               placeholder="Enter phone (+61...)"
//               value={phone}
//               onChange={(e) => setPhone(e.target.value)}
//               className="input w-full mb-2"
//             />
//             {/* ✅ Recaptcha container */}
//             <div id="recaptcha-container"></div>


//             <button
//               type="submit"
//               className="bg-[#6B2B77] text-white px-4 py-2 rounded-lg w-full mt-5"
//             >
//               Send OTP
//             </button>
//           </form>
//         </>
//       )}

//       {confirmationResult && (
//         <>
//           <div className="mb-6 mt-6">
//             <h2 className="text-3xl font-bold">Verify Number</h2>
//             <p className="mt-2 text-gray-500">
//               To create your account let’s first verify that this is your phone
//               number.
//             </p>
//           </div>

//           <form onSubmit={verifyOtp} className="mt-4">
//             <div className="flex justify-between gap-2 mb-4">
//               {otp.map((digit, index) => (
//                 <input
//                   key={index}
//                   type="text"
//                   maxLength="1"
//                   value={digit}
//                   onChange={(e) => handleOtpChange(e.target.value, index)}
//                   ref={(el) => (inputsRef.current[index] = el)}
//                   className="w-10 h-10 text-center border rounded-md"
//                 />
//               ))}
//             </div>
//             <button
//               type="submit"
//               className="bg-[#6B2B77] text-white px-4 py-2 rounded-lg w-full mt-5"
//             >
//               Verify OTP
//             </button>
//           </form>
//         </>
//       )}
//     </div>
//   );
// }


import React, { useState, useRef, useEffect } from "react";
import { auth } from "../../../firebase/firebase.config";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

export default function PhoneAuth() {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [recaptchaVerifier, setRecaptchaVerifier] = useState(null);
  const navigate = useNavigate();
  const inputsRef = useRef([]);

  // Clean up reCAPTCHA on component unmount
  useEffect(() => {
    return () => {
      if (window.recaptchaVerifier) {
        window.recaptchaVerifier.clear();
        window.recaptchaVerifier = null;
      }
    };
  }, []);

  // Reset reCAPTCHA when user logs out or starts new authentication
  useEffect(() => {
    if (!confirmationResult) {
      resetRecaptcha();
    }
  }, [confirmationResult]);

  const resetRecaptcha = () => {
    // Clear existing reCAPTCHA
    if (window.recaptchaVerifier) {
      window.recaptchaVerifier.clear();
      window.recaptchaVerifier = null;
    }
    
    // Remove any existing reCAPTCHA container
    const oldContainer = document.getElementById('recaptcha-container');
    if (oldContainer) {
      oldContainer.innerHTML = '';
    }
  };

  const setUpRecaptcha = () => {
    // Clean up any existing reCAPTCHA first
    resetRecaptcha();
    
    // Create new reCAPTCHA container if it doesn't exist
    let container = document.getElementById('recaptcha-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'recaptcha-container';
      container.style.display = 'none';
      document.body.appendChild(container);
    }

    // Create new verifier
    const verifier = new RecaptchaVerifier(
      auth,
      'recaptcha-container',
      {
        size: 'invisible',
        callback: () => {
          console.log("Recaptcha verified ✅");
        },
        'expired-callback': () => {
          console.log("Recaptcha expired");
          resetRecaptcha();
        }
      }
    );

    window.recaptchaVerifier = verifier;
    return verifier;
  };

  const sendOtp = async (e) => {
    e.preventDefault();

    if (!phone.startsWith("+61")) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Phone must start with +61",
        showConfirmButton: false,
        timer: 1500,
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
        timer: 1500,
      });
    } catch (error) {
      console.error("Failed to send OTP", error);
      
      // Reset reCAPTCHA on error
      resetRecaptcha();
      
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Failed to send OTP. Please try again.",
        showConfirmButton: false,
        timer: 2000,
      });
    }
  };

  // Add a function to handle going back to phone input
  const handleBackToPhone = () => {
    resetRecaptcha();
    setConfirmationResult(null);
    setOtp(new Array(6).fill(""));
  };


//   // Handle OTP input
  const handleOtpChange = (value, index) => {
    if (/^[0-9]?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < 5) {
        inputsRef.current[index + 1].focus();
      }
    }
  };

  // Verify OTP
  const verifyOtp = async (e) => {
    e.preventDefault();
    const fullOtp = otp.join("");
    if (fullOtp.length < 6) {
      return Swal.fire({
        position: "center",
        icon: "error",
        title: "Enter complete OTP",
        showConfirmButton: false,
        timer: 1500,
      });
    }

    try {
      await confirmationResult.confirm(fullOtp);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Login Successful!",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/dashboard");
    } catch (error) {
      console.error("Invalid OTP", error);
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Invalid OTP!",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  return (
    <div className="p-4 max-w-sm mx-auto mt-20">
      {!confirmationResult && (
        <>
          <div className="mb-6">
            <h2 className="text-3xl font-bold">Log in</h2>
            <p className="mt-2 text-gray-500">
              Welcome back! Please enter your details.
            </p>
          </div>

          <form onSubmit={sendOtp}>
            <input
              type="text"
              placeholder="Enter phone (+61...)"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="input w-full mb-2"
            />
            
            {/* Hidden reCAPTCHA container */}
            <div id="recaptcha-container"></div>

            <button
              type="submit"
              className="bg-[#6B2B77] text-white px-4 py-2 rounded-lg w-full mt-5"
            >
              Send OTP
            </button>
          </form>
        </>
      )}

      {confirmationResult && (
        <>
          <div className="mb-6 mt-6">
            <h2 className="text-3xl font-bold">Verify Number</h2>
            <p className="mt-2 text-gray-500">
              To create your account let's first verify that this is your phone
              number.
            </p>
            
            {/* Show the phone number being verified */}
            <p className="text-sm text-gray-600 mt-2">Verifying: {phone}</p>
            
            {/* Back button to change phone number */}
            <button
              type="button"
              onClick={handleBackToPhone}
              className="text-blue-500 text-sm mt-2 underline"
            >
              Change phone number
            </button>
          </div>

          <form onSubmit={verifyOtp} className="mt-4">
            <div className="flex justify-between gap-2 mb-4">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength="1"
                  value={digit}
                  onChange={(e) => handleOtpChange(e.target.value, index)}
                  ref={(el) => (inputsRef.current[index] = el)}
                  className="w-10 h-10 text-center border rounded-md"
                />
              ))}
            </div>
            <button
              type="submit"
              className="bg-[#6B2B77] text-white px-4 py-2 rounded-lg w-full mt-5"
            >
              Verify OTP
            </button>
          </form>
        </>
      )}
    </div>
  );
}