import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => {
      unsubscribe();
    };
  }, [dispatch, navigate]);
  return (
    <div className="absolute z-20 w-full flex justify-between items-center bg-gradient-to-b from-black">
      <img
        src={LOGO}
        alt="Logo"
        className="w-52 mx-2 "
      />
      {user && (
        <div className="flex items-center mr-6 gap-3">
          <img className="w-10 rounded-lg" src={user?.photoURL} alt="img" />
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
