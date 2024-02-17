import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  return (
    <div className="bg-black relative z-0 w-full h-full ">
      <Header />
      <div className=" w-full h-full  ">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/5cc9ec21-d7a5-4a49-ab1d-c9b5ab1b124f/AE-en-20240212-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="Background"
          className="opacity-40 w-full h-full bg-cover"
        />
        <div className="lg:w-4/12 md:w-6/12 max-sm:w-10/12 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-60 rounded-lg mt-10">
          {/* Content */}
          <form className="max-w-10/12 max-sm:w-10/12 max-lg:w-10/12 max-xl:w-10/12 max-2xl:w-10/12  m-auto mt-10 text-white">
            <h1 className=" text-3xl font-semibold mb-4">{isSignUp?"Sign Up":"Sign In"}</h1>
            {isSignUp && (
              <input
                className="w-full mb-4 p-3 outline-none rounded-lg bg-[#333333] placeholder:text-[#656565]"
                type="text"
                placeholder="Full Name"
              />
            )}
            <input
              className="w-full mb-4 p-3 outline-none rounded-lg bg-[#333333] placeholder:text-[#656565]"
              type="email"
              placeholder="Email"
            />
            <input
              className="w-full mb-8 p-3 outline-none rounded-lg bg-[#333333] placeholder:text-[#656565]"
              type="email"
              placeholder="Password"
            />
            <button className="p-3 bg-red-700 w-full rounded-lg text-white mb-4">
              {isSignUp?"Sign Up":"Sign In"}
            </button>
            <p className="pb-4 m-auto text-center mb-12">
            {isSignUp?"Already Registered?":"Not Registered Yet?"}
              <span
                onClick={() => setIsSignUp(!isSignUp)}
                className="cursor-pointer"
              >
                {isSignUp?" Sign In Now":" Sign Up Now"}
              </span>
            </p>
          </form>
        </div>
        <div className="absolute bottom-5 text-green-500">Hello</div>
      </div>
    </div>
  );
};

export default Login;
