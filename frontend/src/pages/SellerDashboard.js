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
      <div className="h-screen w-full flex justify-center items-center ">
        <div className=" bg-white shadow-lg m-8 p-16 shadow-slate-500 rounded-md">
          <h1 className=" text-3xl font-semibold font-mono p-2 text-fuchsia-800">
            Welcome {loggedInUser} to your Seller Account
          </h1>
          <h2 className="flex justify-center items-center p-3 text-xl font-medium text-indigo-600">
            Please Add Product With Detailed Informations
          </h2>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-2 justify-center items-center"
          >
            <div className="flex  mt-4">
              <label htmlFor="" className=" font-medium text-xl">
                Product Name:
              </label>
              <input
                type="text"
                name="name"
                value={productData.name}
                onChange={handleChange}
                required
                className="border border-black ml-2 rounded-md font-semibold"
              />
            </div>
            <div>
              <label htmlFor="" className=" font-medium text-xl">
                Description:
              </label>
              <input
                type="text"
                name="description"
                value={productData.description}
                onChange={handleChange}
                required
                className="border border-black ml-[35px] rounded-md font-semibold"
              />
            </div>
            <div>
              <label htmlFor="" className=" font-medium text-xl">
                Price:
              </label>
              <input
                type="text"
                name="price"
                value={productData.price}
                onChange={handleChange}
                required
                className="border border-black ml-[94px] rounded-md font-semibold"
              />
            </div>
            <div>
              <label htmlFor="" className=" font-medium text-xl">
                Stock:
              </label>
              <input
                type="text"
                name="stock"
                value={productData.stock}
                onChange={handleChange}
                required
                className="border border-black ml-[87px] rounded-md font-semibold"
              />
            </div>

            <div>
              <label htmlFor="" className=" font-medium text-xl">
                ImageUrl:
              </label>
              <input
                type="text"
                name="imageUrl"
                value={productData.imageUrl}
                onChange={handleChange}
                required
                className="border border-black ml-[53px] rounded-md font-semibold"
              />
            </div>
            <button
              type="submit"
              className="bg-purple-500 text-xl font-semibold hover:bg-purple-600 focus:outline-none m-4 p-2 rounded-md flex justify-center items-center w-[200px]"
            >
              Add Product
            </button>
          </form>
          <div className="flex justify-center gap-3">
            <button
              onClick={handleLogout}
              className="flex justify-center items-center text-lg text-blue-600 hover:text-blue-800"
            >
              Logout
            </button>
            <button
              className="flex justify-center items-center text-lg underline decoration-orange-800  "
              onClick={handleSeeCart}
            >
              See Cart
            </button>
          </div>

          <ToastContainer />
        </div>
      </div>
    </>
  );
}

export default SellerDashboard;
