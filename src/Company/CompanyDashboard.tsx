// import { SetStateAction, useState } from 'react';
import { useState, useEffect } from "react";

interface User {
  name?: string;
  username?: string;
  email: string;
  COMPLAINT: string;
  rows: string;
}

export default function CompanyDashboard() {
  // State to manage the user status (active or deactivated)
  const [userStatus, setUserStatus] = useState<string>("Active");
  const [users, setUsers] = useState<User[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const usersPerPage = 5; // Number of users to display per page

  const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setUserStatus(event.target.value);
  };

  useEffect(() => {
    // Fetch user data from the Flask API
    fetch("http://localhost:5000/api/users")
      .then((response) => response.json())
      .then((data: User[]) => setUsers(data))
      .catch((error) => console.error("Error fetching user data:", error));
  }, []);


  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  // Change page
  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };


  return (
    <>
      <div className="bg-gray-50 lg:ml-64" id="main-content">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5 p-[2%] pt-[7%]">
          <div className="rounded-md border border-stroke bg-white p-[8%] shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="flex w-16 items-center border justify-center rounded-full bg-meta-2 dark:bg-meta-4">
              <svg
                className="fill-primary dark:fill-blue-500"
                width="26"
                height="18"
                viewBox="0 0 22 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 15.1156C4.19376 15.1156 0.825012 8.61876 0.687512 8.34376C0.584387 8.13751 0.584387 7.86251 0.687512 7.65626C0.825012 7.38126 4.19376 0.918762 11 0.918762C17.8063 0.918762 21.175 7.38126 21.3125 7.65626C21.4156 7.86251 21.4156 8.13751 21.3125 8.34376C21.175 8.61876 17.8063 15.1156 11 15.1156ZM2.26876 8.00001C3.02501 9.27189 5.98126 13.5688 11 13.5688C16.0188 13.5688 18.975 9.27189 19.7313 8.00001C18.975 6.72814 16.0188 2.43126 11 2.43126C5.98126 2.43126 3.02501 6.72814 2.26876 8.00001Z"
                  fill=""
                />
                <path
                  d="M11 10.9219C9.38438 10.9219 8.07812 9.61562 8.07812 8C8.07812 6.38438 9.38438 5.07812 11 5.07812C12.6156 5.07812 13.9219 6.38438 13.9219 8C13.9219 9.61562 12.6156 10.9219 11 10.9219ZM11 6.625C10.2437 6.625 9.625 7.24375 9.625 8C9.625 8.75625 10.2437 9.375 11 9.375C11.7563 9.375 12.375 8.75625 12.375 8C12.375 7.24375 11.7563 6.625 11 6.625Z"
                  fill=""
                />
              </svg>
            </div>

            <div className="mt-4 flex items-end justify-between">
              <div>
                <h4 className="text-title-md font-bold text-black dark:text-white">
                  $3.456K
                </h4>
                <span className="text-sm font-medium">Total views</span>
              </div>

              <span className="flex items-center gap-1 text-sm font-medium text-meta-3">
                0.43%
                <svg
                  className="fill-meta-3"
                  width="10"
                  height="11"
                  viewBox="0 0 10 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.35716 2.47737L0.908974 5.82987L5.0443e-07 4.94612L5 0.0848689L10 4.94612L9.09103 5.82987L5.64284 2.47737L5.64284 10.0849L4.35716 10.0849L4.35716 2.47737Z"
                    fill=""
                  />
                </svg>
              </span>
            </div>
          </div>

          
        </div>

        <div className="mb-2 text-xl font-semibold dark:text-black p-[2%]">
          <div className="relative overflow-y-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr className="rounded-md">
                  <th scope="col" className="px-6 py-3 rounded-l-md">
                    User name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Email
                  </th>
                  <th scope="col" className="px-6 py-3">
                    pricing
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3">
                    complaint
                  </th>
                  <th scope="col" className="px-6 py-3">
                    complaint feedback
                  </th>
                  <th scope="col" className="px-6 py-3">
                    complaint Status
                  </th>
                  <th scope="col" className="px-6 py-3 rounded-r-md">
                    send
                  </th>
                </tr>
              </thead>
              <tbody>

              {currentUsers.map((user) => (
                  <tr key={user.username} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">

                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black"
                    >
                      {(user.username || user.name)?.trim() ||
                        "Name not available"}
                    </th>
                    <td className="px-6 py-4 dark:text-black">
                      {user.email || "email not available"}
                    </td>
                    <td className="px-6 py-4 dark:text-black">pricing</td>

                    <td className="px-6 py-4 dark:text-black">
                      <select
                        value={userStatus}
                        onChange={handleStatusChange}
                        className="bg-white rounded-md py-1"
                      >
                        <option value="Active">Active</option>
                        <option value="Deactivated">Deactivated</option>
                      </select>
                    </td>
                    <td className="px-6 py-4 dark:text-black">

                      <button type="button" className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">preview complaint{user.COMPLAINT || "email not available"}</button>

                    </td>
                    <td className="px-6 py-4 dark:text-black">
                      <button
                        type="button"
                        className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                      >
                        feedback complaint
                      </button>
                    </td>
                    <td className="px-6 py-4 dark:text-black">
                      <select
                        value={userStatus}
                        onChange={handleStatusChange}
                        className="bg-white rounded-md py-1"
                      >
                        <option value="Active">resolved</option>
                        <option value="Deactivated">not resolved</option>
                      </select>
                    </td>
                    <td className="px-6 py-4 dark:text-black">
                      <button
                        type="button"
                        className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                      >
                        send
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 flex justify-end">
            <button
              type="button"
              className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <span className="mx-4">
              Page {currentPage} of {Math.ceil(users.length / usersPerPage)}
            </span>
            <button
              type="button"
              className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === Math.ceil(users.length / usersPerPage)}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
