import React, { useState } from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

function Dropdown({ state }) {
  const [selectedValue, setSelectedValue] = useState(null);

  const handleClick = (event) => {
    setSelectedValue(event.currentTarget);
  };

  const handleClose = () => {
    setSelectedValue(null);
  };
  return (
    <div>
      <Button
        variant="contained"
        onMouseEnter={handleClick}
        onMouseDownCapture={handleClose}
      >
        {state}
      </Button>
      <Menu
        anchorEl={selectedValue}
        open={Boolean(selectedValue)}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
      >
        <MenuItem
          onClick={handleClose}
          color="inherit"
          component={Link}
          to="/myaccount"
        >
          Manage My Account
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          color="inherit"
          component={Link}
          to="/activitylog"
        >
          Activity Log
        </MenuItem>
        <MenuItem onClick={handleClose}>Option 3</MenuItem>
      </Menu>
    </div>
  );
}

export default Dropdown;
