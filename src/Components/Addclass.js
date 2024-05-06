import React from "react";
import Sidebar from "./Sidebar";

export default function Addclass() {
  return (
    <>
      <Sidebar />
      <div className="p-4 sm:ml-64">
        <div className="p-4  border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          <div className="grid grid-cols-3 gap-4 mb-4"></div>
          <h1>Create Class</h1>

          <form>
            <div class="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                <label
                  for="class_name"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:gray-900"
                >
                  Class name
                </label>
                <input
                  type="text"
                  id="class_name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="CS1"
                  required
                />
              </div>
              <div>
                <label
                  for="incharge_name"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:gray-900"
                >
                  Incharge_name
                </label>
                <input
                  type="text"
                  id="incharge_name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Vikas Gupta"
                  required
                />
              </div>
              <div>
                <label
                  for="branch"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:gray-900"
                >
                  Branch
                </label>
                <input
                  type="text"
                  id="branch"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="CSE"
                  required
                />
              </div>
            </div>

            <button
              type="addclass"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              Add class
            </button>
          </form>

          <div className="grid grid-cols-2 gap-4 mb-4"></div>

          <div className="grid grid-cols-2 gap-4"></div>
        </div>
      </div>
    </>
  );
}
