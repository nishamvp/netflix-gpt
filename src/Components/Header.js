import React from "react";
import {  useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate('/')
    }).catch((error) => {
      console.log(error)
    });;
  };
  return (
    <div className="absolute z-10 w-full flex justify-between items-center bg-gradient-to-b from-black">
      <img
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Logo"
        className="w-52 mx-2 "
      />
      {user && (
        <div className="flex items-center mr-6 gap-3">
          <img className="w-10 rounded-full" src={user?.photoURL} alt="img" />
          <p className="text-white font-bold ">{user?.displayName}</p>
          <button onClick={handleSignOut} className="text-white font-bold ">
            SignOut
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
