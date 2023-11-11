import React from "react";
import { auth } from "../config/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
        // Sign-out successful.
      })
      .catch((error) => {
        navigate("/");
        // An error happened - even then navigate.
      });
  };

  return (
    <div className="absolute justify-between flex w-screen px-8 py-2 bg-gradient-to-b from-black-800 z-10">
      <img
        className="w-44"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Logo"
      />

      (
        <div className="flex p-2">
          <img
            alt="User-Icon"
            className="w-14 h-14"
            src="https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp"
          />
          <button onClick={handleSignout} className="font-bold text-white">
            Sign-Out
          </button>
        </div>
      )
    </div>
  );
};

export default Header;
