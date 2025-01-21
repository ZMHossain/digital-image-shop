import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

const ActivityLog = () => {
  const navigate = useNavigate();
  const handleWeeklyRoutine = () => {
    navigate("/weeklyroutine");
  };
  const handleDailyRoutine = () => {
    navigate("/dailyroutine");
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <button
        className=" bg-purple-800 text-white text-lg 
          rounded-md p-2 m-2 w-[25%] hover:bg-purple-900"
        onClick={handleWeeklyRoutine}
      >
        Weekly Routine
      </button>
      <button
        className=" bg-purple-800 text-white text-lg 
          rounded-md p-2 m-2 w-[25%] hover:bg-purple-900"
        onClick={handleDailyRoutine}
      >
        Daily Routine
      </button>
    </div>
  );
};

export default ActivityLog;
