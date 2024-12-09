import React from "react";

const UserInfo = ({ user }) => {
  return (
    <div className="flex flex-row">
      {Array.from({ length: 3 }).map((_, index) => (
        <div className="pr-16" key={index}>
          <h1>Full name</h1>
          <p>{user}</p>
          <p>Personal Profile</p>
          <button>Edit</button>
          <p>Recieve Marketing Emails</p>
        </div>
      ))}
    </div>
  );
};

export default UserInfo;
