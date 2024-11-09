import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { handleError, handleSuccess } from "../util";
import { ToastContainer } from "react-toastify";

const Welcome = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const fetchProducts = async () => {
    try {
      const url = "http://localhost:8080/products/allproducts";
      const response = await fetch(url);
      const result = await response.json();
      // Log the result to verify it's the expected array
      console.log(result);

      // Make sure result is an array before setting it to state
      if (Array.isArray(result)) {
        setProducts(result);
      } else {
        console.error("API returned something other than an array");
        setProducts([]); // Default to an empty array if result is not an array
      }
    } catch (error) {
      handleError(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  const addToCart = (product) => {
    setCart([...cart, product]);
    handleSuccess("Product added to cart!");
  };

  return (
    <>
      <Navbar />
      <div style={{ marginTop: "30px", padding: "250px" }}>
        <h1
          style={{
            display: "flex",
            justifyContent: "center",
            fontFamily: "sans-serif",
            marginBottom: "20px",
            fontSize: "50px",
          }}
        >
          Welcome to NexCart
        </h1>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between", // or "space-around"
          }}
        >
          {products &&
            products?.map((product) => (
              <div
                key={product._id}
                style={{
                  width: "250px",
                  margin: "10px",
                  padding: "0px",
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  boxShadow: "5px",
                  boxSizing: "border-box",
                  overflow: "hidden",
                }}
              >
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  style={{ width: "100%", height: "250px", objectFit: "cover" }}
                />
                <p style={{ paddingLeft: "8px" }}>{product.name}</p>
                <p style={{ paddingLeft: "8px" }}>{product.description}</p>
                <p style={{ fontSize: "25px", padding: "5px" }}>
                  <strong>${product.price}</strong>
                </p>
                {/* <button
                  onClick={() => addToCart(product)}
                  style={{
                    backgroundColor: "#4CAF50",
                    color: "white",
                    padding: "10px",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                >
                  Add to Cart
                </button> */}
              </div>
            ))}
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Welcome;
