import React from "react";
import Button from "@mui/material/Button";

const UserAction = () => {
  return (
    <div className="flex flex-col w-44 gap-6 pt-24 justify-center items-center">
      <Button variant="contained">Edit Profile</Button>
      <Button variant="contained">Reset Password</Button>
    </div>
  );
};

export default UserAction;
