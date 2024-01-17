import React, { useState } from "react";
import { auth } from "../config/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleGPTSearchView } from "../redux/gptSlice";
import {
  GPTButtonName,
  GPTHomepage,
  LANG_SUPPORTED,
} from "../constants/constants";
import { saveUserLanguage } from "../redux/appSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGPTButton = useSelector((store) => store.gpt?.showGPTSearch);
  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
        // Sign-out successful.
      })
      .catch((error) => {
        navigate("/error");
        // An error happened - even then navigate.
      });
  };
  const handleGPTSearch = () => {
    dispatch(toggleGPTSearchView());
  };
  const handleOnChange = (e) => {
    dispatch(saveUserLanguage(e.target?.value));
  };

  return (
    <div className="relative h-screen w-screen z-10">
      <img
        className="w-44"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Logo"
      />

      {user && (
        <div className="flex p-4 z-10">
          {showGPTButton && (
            <select
              className="p-2 m-2 bg-red-600 text-white rounded-lg"
              onChange={handleOnChange}
            >
              {LANG_SUPPORTED.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            onClick={handleGPTSearch}
            className="p-4 m-2 bg-red-600 rounded-lg text-white"
          >
            {showGPTButton ? GPTHomepage : GPTButtonName}
          </button>
          <img
            alt="User-Icon"
            className="w-14 h-14"
            src="https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp"
          />
          <button onClick={handleSignout} className="font-bold text-white">
            Sign-Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
