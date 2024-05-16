import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => setIsSignInForm(!isSignInForm);

  return (
    <div>
      <Header />
      <div className="bg-black color-whi text-white absolute">
        <img
          className="opacity-50"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ff5587c5-1052-47cf-974b-a97e3b4f0656/065df910-dec3-46ae-afa8-7ad2b52dce40/IN-en-20240506-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt=""
        />
      </div>
      <form
        autoComplete="off"
        spellCheck="false"
        action="Login"
        className="absolute w-1/4 p-12 bg-black my-32 mx-auto right-0 left-0 rounded-lg bg-opacity-70 text-white"
      >
        <h1 className="font-bold text-3xl py-4 text- text-center  ">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-4 my-4 rounded-sm bg-gray-700 "
          />
        )}
        <input
          type="email"
          placeholder="Email"
          className="w-full p-4 my-4 rounded-sm bg-gray-700 "
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-4 my-4 rounded-sm bg-gray-700 "
          autoComplete="off"
        />
        <button
          type="submit"
          className="w-full p-4 my-6 rounded-lg bg-red-700 cursor-pointer"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}{" "}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign In Now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
