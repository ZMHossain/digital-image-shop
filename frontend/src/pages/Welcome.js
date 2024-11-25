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
      <div className="m-8 p-16">
        <h1 className=" flex justify-center font-sans mb-12 text-5xl">
          Welcome to NexCart
        </h1>
        <div className=" flex flex-wrap justify-center">
          {products &&
            products?.map((product) => (
              <div
                key={product._id}
                className=" w-60 m-3 p-0 border border-gray-300 rounded-md shadow-[5px] box-border overflow-hidden "
              >
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-[250px] object-cover"
                />
                <p className="pl-2">{product.name}</p>
                <p className="pl-2">{product.description}</p>
                <p className="text-2xl p-1">
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

export default Welcome;
