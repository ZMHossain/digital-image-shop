import React, { useContext } from "react";

import { userContext } from "../components/context/context";

import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import SideBar from "../components/SideBar";
import UserAction from "../components/UserAction";
import ProfileContent from "../components/ProfileContent";
import { useState } from "react";

const MyProfile = () => {
  const { user } = useContext(userContext);
  const [selectedFile, setSelectedFile] = useState(null);
  const handleFileUpload = async (e) => {
    const file = e.target.files;
    setSelectedFile(file);
    console.log(`file = ${file}`);
    const formData = new FormData();
    formData.append("profilePicture", file);
    console.log(`formData = ${formData}`);
  };

  const handleClick = () => {};

  return (
    <>
      <div className="p-0 m-0 text-xl">
        <p>Categories</p>
      </div>
      <div className=" bg-slate-100  flex flex-row">
        <SideBar />
        <div className=" bg-white rounded-md p-10 mt-12 h-[420px] ">
          <ProfileContent user={user} />
          <input
            className="flex flex-col"
            type="file"
            accept="image/*"
            onChange={handleFileUpload}
          />
        </div>
      </div>
    </>
  );
};

export default MyProfile;
