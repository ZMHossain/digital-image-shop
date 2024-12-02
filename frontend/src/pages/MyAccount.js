import React, { useContext } from "react";
import { userContext } from "../components/context/context";

const MyAccount = () => {
  const user = useContext(userContext);
  console.log(user);
  return (
    <>
      <div
        className="flex flex-col h-screen border
       border-rose-500 mt-32 bg-slate-100"
      >
        <p>Hi {user}</p>
        MyAccount
      </div>
    </>
  );
};

export default MyAccount;
