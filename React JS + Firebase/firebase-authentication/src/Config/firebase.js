// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5o4Kjq-c9L-qPwKSokgewghHa4Jyzz_s",
  authDomain: "smit-firebase-auth.firebaseapp.com",
  projectId: "smit-firebase-auth",
  storageBucket: "smit-firebase-auth.appspot.com",
  messagingSenderId: "751612147513",
  appId: "1:751612147513:web:6a0dee9c8a1ee4542c5ae8",
  measurementId: "G-NV1TQDGF0F",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);
const auth = getAuth(app);
export { auth };
