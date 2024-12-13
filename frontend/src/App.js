import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import { useState } from "react";
import RefreshHandler from "./RefreshHandler";
import Welcome from "./pages/Welcome";
import SellerDashboard from "./pages/SellerDashboard";
import Layout from "./components/Layout";
import SellerDashboardCart from "./pages/SellerDashboardCart";
import BuyerDashboard from "./pages/BuyerDashboard";
import MyAccount from "./pages/MyAccount";
import { userContext } from "./components/context/context";
import MyProfile from "./pages/MyProfile";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const PrivateRoute = ({ element }) => {
    return isAuthenticated ? element : <Navigate to="/login" />;
  };
  const [user, setUser] = useState(null);
  const [loginInfo, setLoginInfo] = useState("");

  return (
    <>
      <userContext.Provider value={{ user, setUser, loginInfo, setLoginInfo }}>
        <div className="App">
          <RefreshHandler setIsAuthenticated={setIsAuthenticated} />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Navigate to="/login" />} />

              <Route path="/seller-dashboard" element={<SellerDashboard />} />
              <Route path="/buyer-dashboard" element={<BuyerDashboard />} />
              <Route
                path="/seller-dashboard-cart"
                element={<SellerDashboardCart />}
              />
              <Route path="/myaccount" element={<MyAccount />} />
              <Route path="/myprofile" element={<MyProfile />} />
              <Route
                path="/home"
                element={<PrivateRoute element={<Home />} />}
              />
            </Route>
            <Route path="/nexcart" element={<Welcome />} />

            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </userContext.Provider>
    </>
  );
}

export default App;
