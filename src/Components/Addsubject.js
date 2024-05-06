import React from "react";
import Sidebar from "./Sidebar";

export default function Addsubject() {
  return (
    <>
      <Sidebar />
      <div className="p-4 sm:ml-64">
        <div className="p-4  border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          <div className="grid grid-cols-3 gap-4 mb-4"></div>
          <h1>Add Subject to class</h1>

          <form>
            <div class="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                <label
                  for="Subject name"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:gray-900"
                >
                  Subject name
                </label>
                <input
                  type="text"
                  id="subname"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Engg.MathsI"
                  required
                />
              </div>

              <label
                for="countries"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Select an option
              </label>
              <select
                id="countries"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>Select class</option>
                <option value="US">CS1</option>
                <option value="CA">CS2</option>
                <option value="FR">CSAIML</option>
                <option value="DE">CSDS</option>
              </select>
            </div>

            <button
              type="addsubject"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              Add subject
            </button>
          </form>

          <div className="grid grid-cols-2 gap-4 mb-4"></div>

          <div className="grid grid-cols-2 gap-4"></div>
        </div>
      </div>
    </>
  );
}
