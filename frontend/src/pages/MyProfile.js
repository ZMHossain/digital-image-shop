import React, { useContext } from "react";
import { userContext } from "../components/context/context";

import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import SideBar from "../components/SideBar";
import UserAction from "../components/UserAction";
import ProfileContent from "../components/ProfileContent";

const MyProfile = () => {
  const { user } = useContext(userContext);
  const handleClick = () => {
    console.log("run");
  };

  return (
    <>
      <div className="p-0 m-0 text-xl">
        <p>Categories</p>
      </div>
      <div className=" bg-slate-100  flex flex-row">
        <SideBar />
        <div className=" bg-white rounded-md p-10 mt-12 h-[420px] ">
          <ProfileContent user={user} />
        </div>
      </div>
    </>
  );
};

export default MyProfile;
