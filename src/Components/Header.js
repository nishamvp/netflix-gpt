import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, multiLingual } from "../utils/constants";
import { setIsShowSearch } from "../utils/gptSlice";
import { setLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isShowSearch = useSelector((store) => store.gpt.isShowSearch);
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSearch = () => {
    dispatch(setIsShowSearch());
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

  const handleSelect = (e) => {
    dispatch(setLanguage(e.target.value));
  };
  return (
    <div className="absolute z-20 w-full flex flex-col md:flex-row justify-between items-center bg-gradient-to-b from-black">
      <img src={LOGO} alt="Logo" className=" w-32 md:w-52 mx-2 " />
      {user && (
        <div className="flex items-center mr-6 gap-2 md:gap-3 ">
          {isShowSearch && (
            <select
              className="p-1 text-xs md:text-lg md:p-2 m-2 bg-white text-black font-bold rounded-lg"
              onChange={handleSelect}
            >
              {multiLingual.map((lang) => (
                <option key={lang?.identifier} value={lang?.identifier}>
                  {lang?.name}
                </option>
              ))}
            </select>
          )}

          <button
            className=" text-white font-bold bg-red-600 px-2 py-1 text-xs md:text-lg md:px-3 md:py-1 rounded-lg"
            onClick={handleSearch}
          >
            {isShowSearch ? "Home" : "Search"}
          </button>
          <img className="w-7 md:w-10 rounded-full md:rounded-lg" src={user?.photoURL} alt="img" />
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
