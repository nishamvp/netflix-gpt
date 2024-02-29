import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidation } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_IMG, USER_AVATAR } from "../utils/constants";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [validationMessage, setValidationMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const username = useRef(null);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = checkValidation(
      username?.current?.value,
      email.current.value,
      password.current.value,
      isSignUp
    );
    setValidationMessage(message);
    if (message) return message;
    if (isSignUp) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: username.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setValidationMessage(error);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setValidationMessage(errorCode + " " + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then(() => {
          // Signed in
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setValidationMessage(errorCode + " " + errorMessage);
        });
    }
  };

  return (
    <div className="bg-black relative z-0 w-full h-full ">
      <Header />
      <div className=" w-full h-full  ">
        <img
          src={BG_IMG}
          alt="Background"
          className="opacity-40 w-full h-full object-cover"
        />
        <div className="lg:w-4/12 md:w-6/12 max-sm:w-10/12 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-60 rounded-lg mt-10">
          {/* Content */}
          <form
            className="max-w-10/12 max-sm:w-10/12 max-lg:w-10/12 max-xl:w-10/12 max-2xl:w-10/12  m-auto mt-10 text-white"
            onSubmit={handleSubmit}
          >
            <h1 className=" text-3xl font-semibold mb-4">
              {isSignUp ? "Sign Up" : "Sign In"}
            </h1>
            {isSignUp && (
              <input
                ref={username}
                className="w-full mb-4 p-3 outline-none rounded-lg bg-[#333333] placeholder:text-[#656565]"
                type="text"
                placeholder="Full Name"
              />
            )}
            <input
              ref={email}
              className="w-full mb-4 p-3 outline-none rounded-lg bg-[#333333] placeholder:text-[#656565]"
              type="email"
              placeholder="Email"
            />
            <input
              ref={password}
              className="w-full mb-8 p-3 outline-none rounded-lg bg-[#333333] placeholder:text-[#656565]"
              type="password"
              placeholder="Password"
            />
            <p className="text-red-800 font-bold text-lg">
              {validationMessage}
            </p>
            <button className="p-3 bg-red-700 w-full rounded-lg text-white mb-4">
              {isSignUp ? "Sign Up" : "Sign In"}
            </button>
            <p className="pb-4 m-auto text-center mb-12">
              {isSignUp ? "Already Registered?" : "Not Registered Yet?"}
              <span
                onClick={() => setIsSignUp(!isSignUp)}
                className="cursor-pointer"
              >
                {isSignUp ? " Sign In Now" : " Sign Up Now"}
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
