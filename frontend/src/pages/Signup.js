import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { handleError, handleSuccess } from "../util";

function Signup() {
  const [signupInfo, setSignupInfo] = useState({
    name: "",
    email: "",
    password: "",
    accountType: "seller",
  });

  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;

    const copySignupInfo = { ...signupInfo };
    copySignupInfo[name] = value;
    setSignupInfo(copySignupInfo);
  };
  // console.log("loginInfo ->", loginInfo);

  const handleSignup = async (e) => {
    e.preventDefault();
    const { name, email, password, accountType } = signupInfo;

    if (!name || !email || !password || !accountType) {
      return handleError("name,email,password and Account type are required");
    }
    try {
      const url = "http://localhost:8080/auth/signup";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signupInfo),
      });

      const result = await response.json();
      const { success, message, error } = result;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      } else if (error) {
        const detail = error?.details[0].message;

        handleError(detail);
      } else if (!success) {
        handleError(message);
      }
      console.log(result);
    } catch (err) {
      handleError(err);
    }
  };

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="bg-white rounded-lg p-8 w-full max-w-sm shadow-2xl shadow-slate-500">
        <h1 className="text-3xl font-semibold mb-2">SignUp</h1>
        <form onSubmit={handleSignup} className="flex flex-col gap-2">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-lg mb-1"></label>
            <input
              onChange={handleChange}
              type="text"
              name="name"
              autoFocus
              placeholder="Enter your name"
              value={signupInfo.name}
              className="w-full text-lg p-2 border-b border-black placeholder-italic
              placeholder-text-sm focus:outline-none"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-lg mb-1"></label>
            <input
              onChange={handleChange}
              type="email"
              name="email"
              placeholder="Enter your email"
              value={signupInfo.email}
              className="w-full text-lg p-2 border-b border-black 
              placeholder-text-sm focus:outline-none  "
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="text-lg mb-1"></label>
            <input
              onChange={handleChange}
              type="password"
              name="password"
              placeholder="Enter your password"
              value={signupInfo.password}
              className="w-full text-lg p-2 border-b border-black 
              placeholder-text-sm focus:outline-none"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="password"
              className=" text-base text-indigo-900 font-semibold mb-1"
            >
              Add a Profile Picture
            </label>
            <input
              onChange={handleChange}
              type="file"
              name="password"
              placeholder="Enter your password"
              value={signupInfo.password}
              className="w-full mt-1  
              "
            />
          </div>
          <div className="mt-1">
            {/* <Dropdown /> */}
            <label htmlFor="cars" className="text-lg mb-1">
              Choose the id type:
            </label>
            <select
              className="border-b m-3"
              name="accountType"
              id="cars"
              value={signupInfo.accountType} // Bind the state value to the dropdown
              onChange={handleChange}
            >
              <option value="seller">Seller</option>
              <option value="buyer">Buyer</option>
            </select>
          </div>
          <button
            type="submit"
            className="bg-purple-800 text-white text-lg 
          rounded-md p-2 mt-2 hover:bg-purple-900"
          >
            Signup
          </button>
          <span>
            Already have an account?
            <Link to="/login" className="text-blue-800">
              Login
            </Link>
          </span>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
}

export default Signup;
