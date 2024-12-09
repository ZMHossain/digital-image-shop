import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../components/context/context";

const SideBar = ({ handleClick }) => {
  const { user } = useContext(userContext);

  return (
    <div>
      <div className="flex flex-col justify-start items-start p-5">
        <div className="flex flex-col">
          <h1 className="pt-4 pl-4">Hello, {user}</h1>
          <button className="text-cyan-700 text-2xl pb-2">
            Manage My Account
          </button>
          <button onClick={handleClick} className="gap-2 pl-3">
            <Link to="/myprofile">My Profile</Link>
          </button>
          <button className="pl-3 gap-2">Address Book</button>
          <button className="pl-3 gap-2">My Payment Options</button>
          <button className="pl-3 gap-2">Nexcart Wallet</button>
        </div>
        <div className="flex flex-col justify-start items-start p-5">
          <button className="text-cyan-700 text-2xl pb-2">My Orders</button>
          <button className="pl-4 gap-2">My Returns</button>
          <button className="pl-4 gap-2">My Cancellations</button>
        </div>
        <div className="flex flex-col justify-start items-start p-5">
          <button className="text-cyan-700 text-2xl">My Reviews</button>
        </div>
        <div className="flex flex-col justify-start items-start p-5">
          <button className="text-cyan-700 text-2xl">
            My Wishlist & Followed Stores
          </button>
        </div>
        <div className="flex flex-col justify-start items-start p-5">
          <button className="text-cyan-700 text-2xl">Sell on Nexcart</button>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
