import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { handleError, handleSuccess } from "../util";
import { ToastContainer } from "react-toastify";

const SellerDashboardCart = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const userName = localStorage.getItem("loggedInUser");
      const url = `http://localhost:8080/products/user/${userName}`;
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

  return (
    <>
      <Navbar />
      <div className="m-8 p-16">
        <h1 className=" flex justify-center font-sans mb-12 text-5xl">
          Welcome to Seller Dashboard
        </h1>
        <div className=" flex flex-wrap justify-center">
          {products &&
            products?.map((product) => (
              <div
                key={product._id}
                className="w-[250px] m-[10px] p-0 border-gray-300 rounded-md
                 shadow-md box-border overflow-hidden"
              >
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-[250px] object-cover"
                />
                <p className="pl-2">{product.name}</p>
                <p className="pl-2">{product.description}</p>
                <p className="p-[5px] text-2xl">
                  <strong>${product.price}</strong>
                </p>
              </div>
            ))}
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default SellerDashboardCart;
