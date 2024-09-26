import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { handleError } from "../util";

const Welcome = () => {
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    try {
      const url = "http://localhost:8080/products/products";
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
      <div className="navbar">
        <Navbar />
      </div>
      <h1>Welcome</h1>
      <div>
        {products &&
          products?.map((product) => (
            <div key={product._id}>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>${product.price}</p>
              <img
                src={product.imageUrl}
                alt={product.name}
                style={{ width: "200px" }}
              />
            </div>
          ))}
      </div>
    </>
  );
};

export default Welcome;
