// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEKiFVFkxUp7MPgMGkXRVbnTVgHJG_B24",
  authDomain: "netflix-gpt-2d51e.firebaseapp.com",
  projectId: "netflix-gpt-2d51e",
  storageBucket: "netflix-gpt-2d51e.appspot.com",
  messagingSenderId: "584044566816",
  appId: "1:584044566816:web:6352f28e6d8778f50a1f45",
  measurementId: "G-PTSP38MDM2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
