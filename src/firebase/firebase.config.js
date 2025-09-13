import { initializeApp } from "firebase/app";
import {getAuth, RecaptchaVerifier} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey:import.meta.env.VITE_apiKey,
  authDomain:import.meta.env.VITE_authDomain,
  projectId:import.meta.env.VITE_projectId,
  storageBucket:import.meta.env.VITE_storageBucket,
  messagingSenderId:import.meta.env.VITE_messagingSenderId,
  appId:import.meta.env.VITE_appId,
  measurementId:import.meta.env.VITE_measurementId
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);



// Setup Recaptcha
export const setUpRecaptcha = (number) => {
  const recaptchaVerifier = new RecaptchaVerifier(
    "recaptcha-container", // must match a <div> in your component
    {
      size: "invisible", // or "normal" for visible captcha
      callback: (response) => {
        console.log("Recaptcha verified ✅");
      }
    },
    auth
  );

  return window.confirmationResult = auth.signInWithPhoneNumber(number, recaptchaVerifier);
};