import React, { useContext } from "react";
import { userContext } from "../components/context/context";

import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

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

      <div
        className="flex flex-row  border
       border-rose-500 bg-slate-100 p-0"
      >
        <div className="flex flex-col justify-start items-start p-5">
          <div className="flex flex-col">
            <h1 className=" pt-4 pl-4 ">Hello, {user}</h1>
            <button className=" text-cyan-700 text-2xl pb-2">
              Manage My Account
            </button>

            <button onClick={handleClick} className=" gap-2 pl-3">
              <Link to="/myprofile"> My Profile</Link>
            </button>
            <button className=" pl-3 gap-2">Address book</button>
            <button className="pl-3 gap-2">My Payment options</button>
            <button className="pl-3 gap-2">Nexcart wallet</button>
          </div>
          <div className="flex flex-col justify-start items-start p-5">
            <button className=" text-cyan-700 text-2xl pb-2">My Orders</button>

            <button className="pl-4 gap-2">My Returns</button>
            <button className="pl-4 gap-2">My Cancellations</button>
          </div>
          <div className="flex flex-col justify-start items-start p-5">
            <button className=" text-cyan-700 text-2xl"> My Reviews</button>
          </div>
          <div className="flex flex-col justify-start items-start p-5">
            <button className=" text-cyan-700 text-2xl">
              My Wishlist & Followed Stores
            </button>
          </div>
          <div className="flex flex-col justify-start items-start p-5">
            <button className=" text-cyan-700 text-2xl">Sell on Nexcart</button>
          </div>
        </div>

        <div className="flex flex-col">
          <p className="pb-4 pt-4 text-2xl"> My Profile</p>
          <div className="flex flex-row pr-4">
            <div
              className="flex flex-row bg-white pt-12 pl-8 rounded-md mr-2 w-[850px]
            h-[400px]"
            >
              <div className="flex flex-row ">
                <div className="pr-16">
                  <h1>Full Name</h1>
                  <p>{user}</p>
                  <div className="flex flex-row">
                    <p className="pr-2 text-xl">Personal Profile</p>
                    <button className=" text-blue-600">Edit</button>
                  </div>
                  <p>Email</p>
                  <p>Receive marketing emails</p>
                  <div className="flex flex-col pt-16">
                    <Button
                      className="flex flex-col gap-4 "
                      variant="contained"
                    >
                      Contained
                    </Button>
                    <Button className="flex flex-col m-10" variant="contained">
                      Contained
                    </Button>
                  </div>
                </div>
                <div className="pr-16">
                  <p>{user}</p>
                  <div className="flex flex-row">
                    <p className="pr-2 text-xl">Personal Profile</p>
                    <button className=" text-blue-600">Edit</button>
                  </div>
                  <p>Email</p>
                  <p>Receive marketing emails</p>
                </div>
                <div className="pr-16">
                  <p>{user}</p>
                  <div className="flex flex-row">
                    <p className="pr-2 text-xl">Personal Profile</p>
                    <button className=" text-blue-600">Edit</button>
                  </div>
                  <p>Email</p>
                  <p>Receive marketing emails</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyProfile;
