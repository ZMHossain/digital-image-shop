import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { handleError, handleSuccess } from "../util";
import { ToastContainer } from "react-toastify";

function SellerDashboard() {
  const [loggedInUser, setLoggedInUser] = useState("");
  const navigate = useNavigate();
  const [productData, setProductData] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    category: "",
    imageUrl: "",
  });

  useEffect(() => {
    setLoggedInUser(localStorage.getItem("loggedInUser"));
  }, []);
  const handleChange = (e) => {
    setProductData({
      ...productData,
      [e.target.name]: e.target.value,
    });
    console.log(productData);
  };
  const handleLogout = (e) => {
    localStorage.removeItem("token");
    localStorage.removeItem("loggedInUser");
    handleSuccess("User Logged Out");
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const sellerId = localStorage.getItem("userId");

    try {
      //   const response = await axios.post("http://localhost:8080/products/add", {
      //     sellerId,
      //     ...productData,
      //   });

      const url = "http://localhost:8080/products/add";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
        body: JSON.stringify({
          name: productData.name,
          description: productData.description,
          price: Number(productData.price),
          stock: Number(productData.stock),
          imageUrl: productData.imageUrl,
        }),
      });

      const result = await response.json();
      console.log(result);

      const { success } = result;
      if (success) {
        alert("Product added successfully");
        // Clear the form after submission
        setProductData({
          name: "",
          description: "",
          price: "",
          category: "",
          imageUrl: "",
        });
      }
    } catch (error) {
      console.error("Error adding product:", error);
      alert("There was an error adding the product");
    }
  };
  const handleSeeCart = () => {
    navigate("/seller-dashboard-cart");
  };

  return (
    <>
      <div className="page-content">
        <h1>Welcome {loggedInUser} to your Seller Account</h1>
        <h2>Seller Dashboard - Add Product</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="">Product Name:</label>
            <input
              type="text"
              name="name"
              value={productData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="">Description:</label>
            <input
              type="text"
              name="description"
              value={productData.description}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="">Price:</label>
            <input
              type="text"
              name="price"
              value={productData.price}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="">Stock:</label>
            <input
              type="text"
              name="stock"
              value={productData.stock}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="">ImageUrl:</label>
            <input
              type="text"
              name="imageUrl"
              value={productData.imageUrl}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Add Product</button>
        </form>
        <button onClick={handleLogout}>Logout</button>
        <button className="cart-button" onClick={handleSeeCart}>
          See Cart
        </button>

        <ToastContainer />
      </div>
    </>
  );
}

export default SellerDashboard;
