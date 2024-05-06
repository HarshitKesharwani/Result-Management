import React from "react";

import Sidebarstud from "./Sidebarstud";
import { IoArrowForwardOutline } from "react-icons/io5";
export default function Student() {
  return (
    <>
      <Sidebarstud />
      <div className="p-4 sm:ml-64">
        <div className="p-4  border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          <div className="grid grid-cols-3 gap-4 mb-4">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    Subject
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Midterm-I
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Midterm-II
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Assignment-I
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Assignment-II
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Engg.Maths
                  </th>
                  <td class="px-6 py-4">58</td>
                  <td class="px-6 py-4">55</td>
                  <td class="px-6 py-4">18</td>
                  <td class="px-6 py-4">17</td>
                </tr>
                <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Engg Physics
                  </th>
                  <td class="px-6 py-4">58</td>
                  <td class="px-6 py-4">55</td>
                  <td class="px-6 py-4">18</td>
                  <td class="px-6 py-4">17</td>
                </tr>
                <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Engg.chemistry
                  </th>
                  <td class="px-6 py-4">58</td>
                  <td class="px-6 py-4">55</td>
                  <td class="px-6 py-4">18</td>
                  <td class="px-6 py-4">17</td>
                </tr>
                <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    DSA
                  </th>
                  <td class="px-6 py-4">58</td>
                  <td class="px-6 py-4">55</td>
                  <td class="px-6 py-4">18</td>
                  <td class="px-6 py-4">17</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4"></div>

          <div className="grid grid-cols-2 gap-4"></div>
        </div>
      </div>
    </>
  );
}
