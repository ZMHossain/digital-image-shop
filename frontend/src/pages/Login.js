import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { handleError, handleSuccess } from "../util";

function Login() {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
    accountType: "seller",
  });

  const navigate = useNavigate();
  const location = useLocation(); // Used to get the user type passed from navbar (seller or buyer)
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
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
        handleSuccess(message);
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
          navigate("/buyer-dashboard"); // Redirect to buyer dashboard
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

      console.log(result);
    } catch (err) {
      handleError(err);
    }
  };
  console.log("run");
  console.log(localStorage);
  return (
    <div className="container">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            onChange={handleChange}
            type="email"
            name="email"
            placeholder="Enter your email"
            value={loginInfo.email}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            onChange={handleChange}
            type="password"
            name="password"
            placeholder="Enter your password"
            value={loginInfo.password}
          />
        </div>
        <div className="cars">
          {/* <Dropdown /> */}
          <label htmlFor="cars">Choose the id type:</label>
          <select
            name="accountType"
            id="cars"
            value={loginInfo.accountType} // Bind the state value to the dropdown
            onChange={handleChange}
          >
            <option value="seller">Seller</option>
            <option value="buyer">Buyer</option>
          </select>
        </div>
        <button type="submit">Login</button>
        <span>
          Don't have an account?
          <Link to="/signup">Signup</Link>
        </span>
      </form>
      <ToastContainer />
    </div>
  );
}

export default Login;
