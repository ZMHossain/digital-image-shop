import React, { useState } from "react";

const WeeklyRouitine = () => {
  const [buttonText, setButtonText] = useState("Normal");
  const [isEditing, setIsEditing] = useState(false);
  const [inputText, setInputText] = useState(buttonText);
<<<<<<< HEAD
=======
  console.log(inputText);

>>>>>>> 3fa18075f2700141ca2b9773c6cb6675c6dac0c3
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [task, setTask] = useState("Normal");
  const handleEdit = () => {
<<<<<<< HEAD
    setIsEditing(!isEditing);
    if (isEditing) {
=======
    if (!isEditing) {
      console.log(!isEditing);

>>>>>>> 3fa18075f2700141ca2b9773c6cb6675c6dac0c3
      setButtonText(inputText);
      console.log(buttonText);
    } else {
      setInputText(buttonText);
      console.log(inputText);
    }
  };
  const handleTextChange = (e) => {
    setInputText(e.target.value);
  };
  return (
<<<<<<< HEAD
    <div className="m-1  flex flex-col justify-center items-center ">
      <h1 className=" font-extrabold font-serif p-8 text-6xl">
        SCHEDULE OF THIS WEEK
      </h1>
      <div class="grid grid-cols-8 gap-2 w-full max-w-7xl border border-gray-300">
        <div class="col-span-1 row-span-2  font-bold bg-gray-100 px-4 py-2 border-b border-gray-300 flex flex-col justify-center items-center">
          Saturday
        </div>
        <div class="font-bold px-4 py-2 border-b bg-gray-100 flex  justify-center items-center border-gray-300">
          {isEditing ? (
            <input
              type="text"
              value={inputText}
              onChange={handleTextChange}
              className="border border-gray-300 rounded w-[100%]"
            />
          ) : (
            <button
              className=" bg-purple-800 text-white text-sm 
=======
    <>
      {" "}
      <div className="m-1  flex flex-col justify-center items-center ">
        <h1 className=" font-extrabold font-serif p-8 text-6xl">
          SCHEDULE OF THIS WEEK
        </h1>
        <div class="grid grid-cols-8 gap-2 w-full max-w-7xl border border-gray-300">
          <div class="col-span-1 row-span-2  font-bold bg-gray-100 px-4 py-2 border-b border-gray-300 flex flex-col justify-center items-center">
            Saturday
          </div>
          <div class="font-bold px-4 py-2 border-b bg-gray-100 flex  justify-center items-center border-gray-300">
            {isEditing ? (
              <input
                type="text"
                value={inputText}
                onChange={handleTextChange}
                className="border border-gray-300 rounded px-4 py-2"
              />
            ) : (
              <button
                className=" bg-purple-800 text-white text-sm 
>>>>>>> 3fa18075f2700141ca2b9773c6cb6675c6dac0c3
          rounded-md p-1 m-1  hover:bg-purple-900"
              >
                {buttonText}
              </button>
            )}

            <button
              onClick={handleEdit}
              className=" text-blue-600 text-sm 
          rounded-md p-1 m-2  hover:text-purple-900 transition-transform duration-200 active:scale-95"
<<<<<<< HEAD
          >
            {isEditing ? "Save" : "Edit"}
          </button>
        </div>
        <div class="font-bold px-4 py-2 border-b bg-gray-100 flex flex-col justify-center items-center border-gray-300">
          <button>Z</button>
        </div>{" "}
        <div class="font-bold px-4 py-2 border-b bg-gray-100 flex flex-col justify-center items-center border-gray-300">
          <button>Z</button>
        </div>{" "}
        <div class="font-bold px-4 py-2 border-b bg-gray-100 flex flex-col justify-center items-center border-gray-300">
          <button>Z</button>
        </div>{" "}
        <div class="font-bold px-4 py-2 border-b bg-gray-100 flex flex-col justify-center items-center border-gray-300">
          <button>Z</button>
        </div>{" "}
        <div class="font-bold px-4 py-2 border-b bg-gray-100 flex flex-col justify-center items-center border-gray-300">
          <button>Z</button>
        </div>
        <div class="font-bold px-4 py-2 border-b bg-gray-100 flex flex-col justify-center items-center border-gray-300">
          <button>Z</button>
=======
            >
              {isEditing ? "Save" : "Edit"}
            </button>
          </div>
          <div class="font-bold px-4 py-2 border-b bg-gray-100 flex flex-col justify-center items-center border-gray-300">
            <button>Z</button>
          </div>{" "}
          <div class="font-bold px-4 py-2 border-b bg-gray-100 flex flex-col justify-center items-center border-gray-300">
            <button>Z</button>
          </div>{" "}
          <div class="font-bold px-4 py-2 border-b bg-gray-100 flex flex-col justify-center items-center border-gray-300">
            <button>Z</button>
          </div>{" "}
          <div class="font-bold px-4 py-2 border-b bg-gray-100 flex flex-col justify-center items-center border-gray-300">
            <button>Z</button>
          </div>{" "}
          <div class="font-bold px-4 py-2 border-b bg-gray-100 flex flex-col justify-center items-center border-gray-300">
            <button>Z</button>
          </div>
          <div class="font-bold px-4 py-2 border-b bg-gray-100 flex flex-col justify-center items-center border-gray-300">
            <button>Z</button>
          </div>
>>>>>>> 3fa18075f2700141ca2b9773c6cb6675c6dac0c3
        </div>
      </div>
    </>
  );
};

export default WeeklyRouitine;
