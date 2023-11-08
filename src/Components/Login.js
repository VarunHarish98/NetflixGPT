import React, { useState, useRef } from "react";
import Header from "./Header";
import { validateForm } from "../utils/validate";

import {
  signIn,
  signUp,
  needHelpLabel,
  rememberMeLabel,
  signInLabel,
  signUpLabel,
} from "../constants/constants";
import { fireBaseAuth } from "../config/firebaseAuth";

export const Login = () => {
  let [isSignInForm, setIsSignInForm] = useState(true);
  let [isCheckBoxToggle, setIsCheckBoxToggle] = useState(false);
  let [isFormCheck, setIsFormCheck] = useState(null);
  let nameRef = useRef(null);
  let emailRef = useRef(null);
  let passwordRef = useRef(null);

  let toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  let toggleCheckBox = () => {
    setIsCheckBoxToggle(!isCheckBoxToggle);
  };

  let handleFormValidation = () => {
    let formRes = validateForm(
      emailRef.current.value,
      passwordRef.current.value,
      nameRef?.current?.value,
      isSignInForm
    );
    setIsFormCheck(formRes);

    //For Sign-In / Sign-Up Logic
    fireBaseAuth(
      formRes,
      emailRef.current.value,
      passwordRef.current.value,
      isSignInForm,
      setIsFormCheck
    );
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ab4b0b22-2ddf-4d48-ae88-c201ae0267e2/384d70af-0a67-470f-a87d-8cd53438e26f/US-en-20231030-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="Netflix-Image"
        />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault(); //Imp for form submission/validation
        }}
        className="bg-gradient-to-b from-black-500 w-4/12 absolute p-12 bg-stone-950 my-36 mx-auto right-0 left-0 align-middle text-white bg-opacity-90"
      >
        <h2 className="text-3xl font-bold p-2">
          {isSignInForm ? signIn : signUp}
        </h2>
        {!isSignInForm && (
          <input
            ref={nameRef}
            type="text"
            placeholder="Full Name"
            className="p-3 my-2 bg-gray-800 w-full rounded-lg"
          ></input>
        )}
        <input
          ref={emailRef}
          type="text"
          placeholder="Email or phone number"
          className="p-3 my-2 bg-gray-800 w-full rounded-lg"
        ></input>
        <input
          ref={passwordRef}
          type="password"
          placeholder="Password"
          className="p-3 my-2 bg-gray-800 w-full rounded-lg"
        ></input>
        <p className="text-red-500 text-bold">{isFormCheck}</p>
        <button
          className="p-2 my-4 bg-red-600 w-full rounded-lg"
          onClick={handleFormValidation}
        >
          {isSignInForm ? signIn : signUp}
        </button>
        <label className="form-checkbox h-5 w-5">
          <input
            type="checkbox"
            checked={isCheckBoxToggle}
            onChange={toggleCheckBox}
          ></input>
          {rememberMeLabel}
        </label>
        <p className="inline float-right">
          <a href="">{needHelpLabel}</a>
        </p>
        <p onClick={toggleSignInForm} className="cursor-pointer mt-8">
          {isSignInForm ? signInLabel : signUpLabel}
        </p>
      </form>
    </div>
  );
};
