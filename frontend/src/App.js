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

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const PrivateRoute = ({ element }) => {
    return isAuthenticated ? element : <Navigate to="/login" />;
  };

  return (
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

          <Route path="/home" element={<PrivateRoute element={<Home />} />} />
        </Route>
        <Route path="/nexcart" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
