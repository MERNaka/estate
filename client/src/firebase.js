// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "estate-14c1b.firebaseapp.com",
  projectId: "estate-14c1b",
  storageBucket: "estate-14c1b.appspot.com",
  messagingSenderId: "947306611331",
  appId: "1:947306611331:web:07c99f58053fbef4b451b6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);