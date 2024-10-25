import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import IconButton from "@mui/material/IconButton";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedData = localStorage.getItem("loggedInUser", "name");
    console.log(storedData);

    if (storedData) {
      setUser(storedData);
    }
  }, []);

  const handleSellerDashboardClick = () => {
    const isSellerAuthenticated = localStorage.getItem("sellerAuth"); // Check auth status for seller
    console.log(isSellerAuthenticated);
    if (isSellerAuthenticated) {
      navigate("/seller-dashboard"); // If already authenticated, navigate to seller dashboard
    } else {
      navigate("/login", { state: { type: "seller" } }); // Navigate to login with seller type
    }
  };

  const handleBuyerDashboardClick = () => {
    const isBuyerAuthenticated = localStorage.getItem("buyerAuth"); // Check auth status for buyer

    if (isBuyerAuthenticated) {
      navigate("/buyer-dashboard"); // If already authenticated, navigate to buyer dashboard
    } else {
      navigate("/login", { state: { type: "buyer" } }); // Navigate to login with buyer type
    }
  };

  return (
    <AppBar position="fixed" sx={{ top: 0, left: 0 }}>
      <Toolbar>
        <Typography variant="h2" sx={{ flexGrow: 1 }}>
          NexCart
        </Typography>
        <Button color="inherit" component={Link} to="/">
          {user ? "Settings" : "Home"}
        </Button>

        <Button color="inherit" component={Link} to="/login">
          {user ? user : "Login"}
        </Button>
        <Button color="inherit" component={Link} to="/signup">
          {user ? "Become a Seller" : "Signup"}
        </Button>
        <Button
          onClick={handleSellerDashboardClick}
          color="inherit"
          // component={Link}
          // to="/seller-dashboard"
        >
          {user ? "Help" : "Seller Dashboard"}
        </Button>
        <Button
          onClick={handleBuyerDashboardClick}
          color="inherit"
          // component={Link}
          // to="/buyer-dashboard"
        >
          Buyer Dashboard
        </Button>
        {/* Add Search Icon */}
        <IconButton color="inherit">
          <SearchIcon />
        </IconButton>

        {/* Add Shopping Cart Icon */}
        <IconButton color="inherit" component={Link} to="/cart">
          <ShoppingCartIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
