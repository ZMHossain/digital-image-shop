import React, { useContext } from "react";
import { userContext } from "../components/context/context";

const MyAccount = () => {
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
        className="flex flex-col  border
       border-rose-500 bg-slate-100 p-0"
      >
        <h1 className=" pt-4 pl-4 ">Hello, {user}</h1>

        <div className="flex flex-col justify-start items-start p-5">
          <button className=" text-cyan-700 text-2xl pb-2">
            Manage My Account
          </button>

          <button onClick={handleClick} className=" gap-2 pl-3">
            My Profile
          </button>
          <button className=" pl-3 gap-2">Address book</button>
          <button className="pl-3 gap-2">My Payment options</button>
          <button className="pl-3 gap-2">Nexcart wallet</button>
        </div>
        <div className="flex flex-col justify-start items-start p-5">
          <button className=" text-cyan-700 text-2xl pb-2">
            Manage My Account
          </button>

          <button onClick={handleClick} className="pl-4 gap-2">
            My Orders
          </button>
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
    </>
  );
};

export default MyAccount;
