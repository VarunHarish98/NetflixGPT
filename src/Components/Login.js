import React, { useState, useRef } from "react";
import Header from "./Header";
import { setErrorMessage, validateForm } from "../utils/validate";
import {
  signIn,
  signUp,
  needHelpLabel,
  rememberMeLabel,
  signInLabel,
  signUpLabel,
  netflixBackground,
} from "../constants/constants";
import { useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/userSlice";
import { clickStreamEvent } from "../utils/click-stream";

export const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [isCheckBoxToggle, setIsCheckBoxToggle] = useState(false);
  const [isFormCheck, setIsFormCheck] = useState(null);
  const [guest, setGuest] = useState(false);
  const navigate = useNavigate();
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const dispatch = useDispatch();

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const toggleCheckBox = () => {
    setIsCheckBoxToggle(!isCheckBoxToggle);
  };

  const handleGuest = () => {
    clickStreamEvent("Guest-Login", "Click", "Guest-Login")
    setGuest(true)
    dispatch(addUser({ uid: "Guest", email: "Guest", displayName: "Guest", photoURL: "Guest" }));
    navigate("/browse");
  }

  const handleFormValidation = () => {
    const formRes = validateForm(
      emailRef.current.value,
      passwordRef.current.value,
      nameRef?.current?.value,
      isSignInForm
    );
    setIsFormCheck(formRes);

    // To check if the FirstName not exists, return, prevent further creation of Account
    if (!isSignInForm && !nameRef?.current?.value) return;

    const email = emailRef?.current?.value;
    const password = passwordRef?.current?.value;

    // For Sign-In / Sign-Up Logic
    if (!isSignInForm) {
      // Sign-up logic
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: nameRef.current.value,
            photoURL: "random Url (To-Do)",
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(addUser({ uid, email, displayName, photoURL }));
              clickStreamEvent("Sign-Up" , "Click","Sign-Up")
              navigate("/browse");
            })
            .catch((error) => {
              // An error occurred
              console.log(setErrorMessage(error));
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setIsFormCheck(`${errorMessage} - ${errorCode}`);
        });
    } else {
      // Sign-In Logic
      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          // Signed in
          navigate("/browse");
          clickStreamEvent("Sign-In", "Click","Sign-In")

        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setIsFormCheck(`${errorMessage} - ${errorCode}`);
        });
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen">
      <Header isSignInForm={isSignInForm} />
      <div className="absolute inset-0">
        <img
          src={netflixBackground}
          alt="Netflix-Image"
          className="object-cover w-full h-full"
        />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="bg-gradient-to-b from-black-500 w-11/12 md:w-2/3 lg:w-1/2 xl:w-1/3 p-8 bg-stone-950 text-white bg-opacity-90 rounded-lg absolute z-10"
      >
        <h2 className="text-3xl font-bold mb-4">
          {isSignInForm ? signIn : signUp}
        </h2>
        {!isSignInForm && (
          <input
            ref={nameRef}
            type="text"
            placeholder="Full Name"
            className="p-3 my-2 bg-gray-800 w-full rounded-lg"
          />
        )}
        <input
          ref={emailRef}
          type="text"
          placeholder="Email or phone number"
          className="p-3 my-2 bg-gray-800 w-full rounded-lg"
        />
        <input
          ref={passwordRef}
          type="password"
          placeholder="Password"
          className="p-3 my-2 bg-gray-800 w-full rounded-lg"
        />
        <p className="text-red-500 font-bold">{isFormCheck}</p>
        <button
          className="p-2 my-4 bg-red-600 w-full rounded-lg"
          onClick={handleFormValidation}
        >
          {isSignInForm ? signIn : signUp}
        </button>
        <button
          className="p-2 my-4 bg-purple-600 w-full rounded-lg"
          onClick={handleGuest}
        >
          {needHelpLabel}
        </button>
        {/* Yet to Implement functionality of Checkbox and Need Help Modal */}
        {/* <label className="flex items-center">
          <input
            type="checkbox"
            checked={isCheckBoxToggle}
            onChange={toggleCheckBox}
            className="h-5 w-5 mr-2"
          />
          {rememberMeLabel}
        </label>
        <p className="text-right" onClick={handleGuest}>{needHelpLabel}
        </p> */}
        <p
          onClick={toggleSignInForm}
          className="cursor-pointer mt-8 text-center"
        >
          {isSignInForm ? signInLabel : signUpLabel}
        </p>
      </form>
    </div>
  );
};
