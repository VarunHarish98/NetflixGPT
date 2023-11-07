import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  let [isSignInForm, setIsSignInForm] = useState(true);

  let toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  let signIn = "Sign In";
  let signUp = "Sign Up";

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ab4b0b22-2ddf-4d48-ae88-c201ae0267e2/384d70af-0a67-470f-a87d-8cd53438e26f/US-en-20231030-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="Netflix-Image"
        />
      </div>
      <form className="bg-gradient-to-b from-black-500 w-5/12 absolute p-12 bg-stone-950 my-36 mx-auto right-0 left-0 align-middle text-white bg-opacity-90">
        <h2 className="text-3xl font-bold p-3">
          {isSignInForm ? signIn : signUp}
        </h2>
        <input
          type="text"
          placeholder="Email or phone number"
          className="p-3 my-2 bg-gray-800 w-full rounded-lg"
        ></input>
        <input
          type="password"
          placeholder="Password"
          className="p-3 my-2 bg-gray-800 w-full rounded-lg"
        ></input>
        <button className="p-2 my-4 bg-red-600 w-full rounded-lg">
          {isSignInForm ? signIn : signUp}
        </button>
        <label className="inline">
          <input type="checkbox"></input>Remember Me
        </label>
        <p className="inline float-right"><a href="">Need Help?</a></p>
        <p className="whitespace-nowrap text-gray">
          New to Netflix?{" "}
          <a onClick={toggleSignInForm} href="">
            Sign-up now.
          </a>
        </p>
      </form>
    </div>
  );
};

export default Login;
