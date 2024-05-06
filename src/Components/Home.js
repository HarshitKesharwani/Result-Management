import React from "react";
import { PiStudentFill } from "react-icons/pi";
import { GiTeacher } from "react-icons/gi";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
export default function () {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div className=" bg-gray-900 h-screen">
        <div className="text-center relative top-11 text-3xl border-black font-mono text-white">
          Login to Gyan Ganga Grades
        </div>
        <div className=" flex-col md:hidden">
          <div
            className="bg-blue-200 h-36 my-14 w-36 mx-20 rounded-md place-content-center max-w-xs transition duration-300 ease-in-out hover:scale-110"
            onClick={() => navigate("/Logs")}
          >
            <PiStudentFill className="relative left-6 top-6 text-8xl" />
            <h3 className="relative text-center top-3 ">Student</h3>
          </div>
          <div
            className="bg-blue-200 h-36 my-14 w-36 mx-20 rounded-md text-center "
            onClick={() => navigate("/Logt")}
          >
            <GiTeacher className="relative left-6 top-4 text-8xl" />
            <h3 className="relative text-center top-4">Teacher</h3>
          </div>
        </div>

        <div className=" hidden md:flex  md:block ml-80 relative top-24">
          <div
            className="bg-blue-200 h-64 my-14 w-64 mx-20 rounded-md hover:bg-blue-400 active:bg-blue-500 focus:outline-none max-w-xs transition duration-300 ease-in-out hover:scale-110"
            onClick={() => navigate("/Logs")}
          >
            <PiStudentFill className="relative left-16 top-11 text-9xl" />
            <h3 className="relative text-center top-10 text-lg">Student</h3>
          </div>
          <div
            className="bg-blue-200 h-64 my-14 w-64 mx-20 rounded-md  hover:bg-blue-400 active:bg-blue-500 focus:outline-none max-w-xs transition duration-300 ease-in-out hover:scale-110"
            onClick={() => navigate("/Logt")}
          >
            <GiTeacher className="relative left-16 top-11 text-9xl" />
            <h3 className="relative text-center top-11 text-lg">Teacher</h3>
          </div>
        </div>
      </div>
    </>
  );
}
