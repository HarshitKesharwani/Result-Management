import React from "react";
import Navbar from "./Navbar";
import { FaUserAlt } from "react-icons/fa";
import Sidebar from "./Sidebar";

export default function Teacher() {
  return (
    <>
      <Sidebar />

      <div className="p-4 sm:ml-64">
        <div className="p-4  border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800 relative top-6 ">
              <p className="text-2xl text-white dark:text-gray-500">
                Registered Users
              </p>
            </div>
            <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800 relative top-6">
              <p className="text-2xl text-white dark:text-gray-500">
                Subject Listed
              </p>
            </div>
            <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800 relative top-6">
              <p className="text-2xl text-white dark:text-gray-500">
                Total Classes Listed
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4"></div>

          <div className="grid grid-cols-2 gap-4"></div>
        </div>
      </div>
    </>
  );
}
