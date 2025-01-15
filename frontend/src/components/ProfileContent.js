import React from "react";
import UserInfo from "./UserInfo";
import UserAction from "./UserAction";

const ProfileContent = ({ user }) => {
  return (
    <div className="flex flex-col">
      <UserInfo user={user} />
      <div className="flex justify-center">{/* <UserAction /> */}</div>
    </div>
  );
};

export default ProfileContent;
