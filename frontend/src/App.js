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

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const PrivateRoute = ({ element }) => {
    console.log(isAuthenticated);

    return isAuthenticated ? element : <Navigate to="/login" />;
  };

  return (
    <div className="App">
      <RefreshHandler setIsAuthenticated={setIsAuthenticated} />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Navigate to="/login" />} />

          <Route path="/seller-dashboard" element={<SellerDashboard />} />

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