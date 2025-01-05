import React, { useContext, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { handleError, handleSuccess } from "../util";
import { userContext } from "../components/context/context";

function Login() {
  const { setLoginInfo: setGlobalLoginInfo } = useContext(userContext);
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
    accountType: "seller",
  });

  const navigate = useNavigate();
  const location = useLocation(); // Used to get the user type passed from navbar (seller or buyer)
  const handleChange = (e) => {
    const { name, value } = e.target;

    const copyLoginInfo = { ...loginInfo };
    copyLoginInfo[name] = value;
    setLoginInfo(copyLoginInfo);
  };
  // console.log("loginInfo ->", loginInfo);

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password, accountType } = loginInfo;
    if (!email || !password || !accountType) {
      return handleError("email, password and account type are required");
    }
    try {
      const url = "http://localhost:8080/auth/login";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginInfo),
      });

      const result = await response.json();
      const { success, message, jwtToken, name, error, _id } = result;

      if (success) {
        setGlobalLoginInfo(loginInfo);
        handleSuccess(message);
        localStorage.setItem("loginInfo", JSON.stringify(loginInfo));
        localStorage.setItem("token", jwtToken);
        localStorage.setItem("loggedInUser", name);

        // Check user type from response or location state
        // if (location.state && location.state.type === "seller") {
        if (loginInfo.accountType === "seller") {
          localStorage.setItem("sellerAuth", true); // Optional: set a flag for seller authentication

          navigate("/seller-dashboard"); // Redirect to seller dashboard
          // } else if (location.state && location.state.type === "buyer") {
        } else if (loginInfo.accountType === "buyer") {
          localStorage.setItem("buyerAuth", true); // Optional: set a flag for buyer authentication
          navigate("/nexcart"); // Redirect to buyer dashboard
        } else {
          setTimeout(() => {
            navigate("/home");
          }, 1000);
        }
      } else if (error) {
        const detail = error?.details[0].message;

        handleError(detail);
      } else if (!success) {
        handleError(message);
        if (response.error === "No account found") {
          // If no account exists, navigate to signup
          navigate("/signup", { state: { type: location.state.type } }); // Redirect to signup page
        }
      } else {
        // Handle other login errors
        alert("Invalid credentials or some other error");
      }
    } catch (err) {
      handleError(err);
    }
  };

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg w-full max-w-sm shadow-2xl shadow-slate-500">
        <h1 className=" text-3xl font-semibold mb-2 text-blue-600">Login</h1>

        <form onSubmit={handleLogin} className="flex flex-col gap-2">
          <div className="flex flex-col ">
            <label htmlFor="email" className="text-lg mb-1">
              Email
            </label>
            <input
              onChange={handleChange}
              type="email"
              name="email"
              placeholder="Enter your email"
              value={loginInfo.email}
              className="w-full text-lg p-2 border-b border-black placeholder-italic placeholder-text-sm focus:outline-none"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="text-lg mb-1">
              Password
            </label>
            <input
              onChange={handleChange}
              type="password"
              name="password"
              placeholder="Enter your password"
              value={loginInfo.password}
              className="w-full text-lg p-2 border-b border-black placeholder-italic placeholder-text-sm focus:outline-none"
            />
          </div>
          <div className="mt-4">
            {/* <Dropdown /> */}
            <label htmlFor="cars" className="text-lg mb-1">
              Choose the id type :
            </label>
            <select
              className="border-b m-3"
              name="accountType"
              id="cars"
              value={loginInfo.accountType} // Bind the state value to the dropdown
              onChange={handleChange}
            >
              <option value="seller">Seller</option>
              <option value="buyer">Buyer</option>
            </select>
          </div>
          <button
            type="submit"
            className="bg-purple-800 text-white text-lg rounded-md p-2 mt-2 hover:bg-purple-900"
          >
            Login
          </button>
          <span>
            Don't have an account?
            <Link to="/signup" className="text-blue-800">
              Signup
            </Link>
          </span>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
}

export default Login;
