// Layout.js
import React from "react";

import { Outlet } from "react-router-dom"; // This will render the child route components
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <>
      <Navbar /> {/* Navbar will be shown on every page */}
      <div style={{ marginTop: "100px" }}>
        {/* Space for Navbar */}
        <Outlet /> {/* This is where the nested routes will be rendered */}
      </div>
    </>
  );
};

export default Layout;
