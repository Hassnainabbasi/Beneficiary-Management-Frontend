// <div className="h-screen flex flex-col lg:flex-row overflow-y-auto">
//   <div
//     className={`${
//       isSidebarOpen ? "translate-x-0" : "-translate-x-full"
//     } bg-gray-900 text-white w-64 p-4 fixed lg:static top-0 left-0 h-full transform transition-transform duration-300 lg:translate-x-0 lg:w-64 mt-24`}
//   >
//     <div className="text-2xl font-bold mb-8">Admin Dashboard</div>
//     <nav>
//       <ul className="space-y-4">
//         <li>
//           <button
//             onClick={() => handleLinkClick("default")}
//             className="flex items-center text-lg font-semibold hover:text-blue-500 transition mb-8 duration-300"
//           >
//             <Home className="mr-2"> </Home> Overview
//           </button>
//         </li>
//         <li className="">
//           <button
//             onClick={() => handleLinkClick("departments")}
//             className="flex items-center text-lg font-semibold hover:text-blue-500 transition duration-300 mb-8"
//           >
//            <i className="fa fa-th-large mr-3" /> Department Staff

//           </button>
//         </li>
//         <li className="">
//           <button
//             onClick={() => handleLinkClick("manageusers")}
//             className="flex items-center text-lg font-semibold hover:text-blue-500 transition duration-300 mb-8"
//           >
//            <UserIcon className="mr-2"/>Manage User
//              </button>
//         </li>
//       </ul>
//     </nav>
//   </div>

//   <button
//     className="bg-blue-600 text-white p-2 fixed top-6 left z-50 rounded-full lg:hidden"

//  onClick={() => setIsSidebarOpen(!isSidebarOpen)}
//   >
//     {isSidebarOpen ? (
//      <MenuIcon size={20} />
//     ) : (
//       <MenuIcon size={20}/>
//      )}
//   </button>

//   <div className="flex-1 flex flex-col">
//     <header className="bg-blue-600 text-white px-4 p-2 fixed top-0 left-0 w-full z-40">
//       <div className="flex justify-between items-center">
//         {isSidebarOpen && (
//         <MenuIcon onClick={() => setIsSidebarOpen(!isSidebarOpen)}/>
//         )}
//     <svg xmlns="http://www.w3.org/2000/svg" width="190" height="80" viewBox="0 0 200 200">
//         <circle cx="100" cy="100" r="95" fill="#1a73e8" stroke="#f1f1f1" stroke-width="7"/>
//         <text x="50%" y="50%" text-anchor="middle" fill="#ffffff" font-family="Arial, sans-serif" font-size="38px" font-weight="bold" dy=".3em">
//           Sayalani
//         </text>
//         <text x="50%" y="75%" text-anchor="middle" fill="#ffffff" font-family="Arial, sans-serif" font-size="16px" dy=".3em">
//           Welfare
//         </text>
//       </svg>
//         <div className="flex items-center space-x-4 w-full max-w-md">
//           <input
//             type="text"
//             placeholder="Search by CNIC or Phone"
//             className="border border-gray-300 text-black rounded px-4 py-2 w-full transition duration-300 ease-in-out focus:ring-2 focus:ring-blue-500 focus:outline-none"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//         </div>
//       </div>
//     </header>

//     <main className="flex-1 overflow-y-auto mt-20 p-6 h-full">
//       {activeComponent === "default" && (
//          <div>
//          <div className="bg-white p-4 shadow flex gap-5 items-center mb-6">
//             <button className="bg-blue-600 text-white px-2 py-2 rounded">AddUser</button>
//             <button className="bg-gray-200 text-gray-800 px-2 py-2 rounded">Allcustomers</button>
//             <button className="bg-gray-200 text-gray-800 px-3 py-2 rounded">Settings</button>
//           </div>
//           <div className="p-4 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
//             <div className="bg-white p-4 rounded-lg shadow-lg text-center">
  //           {ActiverUserDetail ? (
  //           <div className="text-2xl font-bold">
  //          {ActiverUserDetail.length > 0 ? ActiverUserDetail.length : 0}
  //       </div>
  //  ) : (
  //     <div className="text-gray-500">Loading...</div>
  //       )}
//               <div className="text-gray-500">Active Users</div>
//             </div>
//             <div className="bg-white p-4 rounded-lg shadow-lg text-center">
//               <div className="text-2xl font-bold">$1,000</div>
//               <div className="text-gray-500">Total Expenses</div>
//             </div>
//             <div className="bg-white p-4 rounded-lg shadow-lg text-center">
//               <div className="text-2xl font-bold">6,535</div>
//               <div className="text-gray-500">Total Visitors</div>
//             </div>
//             <div className="bg-white p-4 rounded-lg shadow-lg text-center">
//               <div className="text-2xl font-bold">1,121</div>
//               <div className="text-gray-500">Total Users</div>
//             </div>
//           </div>
// <div className="bg-white p-4 shadow rounded-lg">
//   <div className="text-lg font-bold mb-4">Users Table</div>
//   <div className="overflow-x-auto overflow-y-auto">
//     <table className="min-w-full bg-white rounded-lg shadow-md">
//       <thead>
//         <tr className="bg-gray-100">
//           <th className="py-3 px-4 text-left text-gray-700">Name</th>
//           <th className="py-3 px-4 text-left text-gray-700">CNIC</th>
//           <th className="py-3 px-4 text-left text-gray-700">Phone</th>
//           <th className="py-3 px-4 text-left text-gray-700">Address</th>
//           <th className="py-3 px-4 text-left text-gray-700">Purpose</th>
//           <th className="py-3 px-4 text-left text-gray-700">Token No</th>
//         </tr>
//       </thead>
//       <tbody>
//         {detail.length > 0 ? (
//           detail.map((user, index) => (
//             <tr key={index} className="border-b hover:bg-gray-50">
//               <td className="py-3 px-4">{user.name}</td>
//               <td className="py-3 px-4">{user.cnic}</td>
//               <td className="py-3 px-4">{user.phone}</td>
//               <td className="py-3 px-4">{user.address}</td>
//               <td className="py-3 px-4">{user.purpose}</td>
//               <td className="py-3 px-4">{user.tokenNo}</td>
//             </tr>
//           ))
//         ) : (
//           <tr>
//             <td colSpan="6" className="py-4 text-center">
//               No data found
//             </td>
//           </tr>
//         )}
//       </tbody>
//     </table>
//   </div>
//         </div>
//       </div>
//       )}
//       {activeComponent === "manageusers" && <ManageUser />}
//       {activeComponent === "departments" && <StaffForm />}
//     </main>
//   </div>
// </div>

import React, { useEffect, useState } from "react";
import StaffForm from "../pages/departmentStaff/department";
import { BASE_URL } from "../constants";
import ManageUser from "./ManageUser";
import {
  CalendarIcon,
  Home,
  HomeIcon,
  Menu,
  MenuIcon,
  MessageCircleCode,
  Mic,
  Mic2,
  Mic2Icon,
  MicOff,
  MicVocal,
  Speaker,
  ToggleLeftIcon,
  ToggleRight,
  UserIcon,
  UserPlus,
} from "lucide-react";
import { BsList, BsMenuUp } from "react-icons/bs";
import "font-awesome/css/font-awesome.min.css"; // Make sure Font Awesome is imported
import { Link } from "react-router-dom";
import { CalendarDateRangeIcon } from "@heroicons/react/16/solid";
import { MdOutlineAnnouncement } from "react-icons/md";
import Reception from "../pages/reception/reception";
import CommentSection from "./CommentSection";
import Reports from "./Reports";
import Announcement from "./Announcement";

export default function AdminDashboard() {
  const [activeComponent, setActiveComponent] = useState("default");
  const [detail, setDetail] = useState([]); // Filtered data for display
  const [originalDetail, setOriginalDetail] = useState([]); // Backup of original data
  const [searchTerm, setSearchTerm] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State for mobile sidebar toggle
  const [ActiverUserDetail, setActiverUserDetail] = useState([]);

  const fetchAllInfo = async () => {
    try {
      const response = await fetch(`${BASE_URL}/auth/onlineUsers`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response);
      const result = await response.json();
      console.log(result);
      setActiverUserDetail(result);
      if (response.ok) {
        setUserdata(result.onlineUsers);
      } else {
        setUserdata(null);
      }
    } catch (error) {
      console.error("Error fetching UserData info:", error);
    }
  };
  const handleLinkClick = (component) => {
    setActiveComponent(component);
  };

  const fetchBeneficiaryInfo = async () => {
    try {
      const response = await fetch(`${BASE_URL}/auth/register`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const result = await response.json();
      if (response.ok) {
        setOriginalDetail(result.users); // Store the original data
        setDetail(result.users); // Initialize display data
      } else {
        console.error("Failed to fetch users");
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    if (!searchTerm) {
      setDetail(originalDetail);
    } else {
      const filteredData = originalDetail.filter(
        (user) =>
          user.cnic.includes(searchTerm) || user.phone.includes(searchTerm)
      );
      setDetail(filteredData);
    }
  }, [searchTerm, originalDetail]);

  useEffect(() => {
    fetchBeneficiaryInfo();
  }, []);

  return (
    <div className="flex flex-1 w-full">
      <div
        className={`bg-blue-500 text-white w-64 min-h-screen fixed md:static z-50 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 ease-in-out`}
      >
        <nav className="mt-5">
          <div className=" p-5 text-2xl font-bold">Admin</div>

          <div className="flex flex-col">
            <button
              className="flex items-center text-lg font-semibold p-2 hover:bg-white hover:text-blue-500  focus:bg-white focus:text-blue-500 rounded-md transition px-4 mb-4 duration-300"
              onClick={() => handleLinkClick("default")}
            >
              <Home className="mr-2"> </Home> Overview
            </button>
            <button
              onClick={() => handleLinkClick("departmentstaff")}
              className="flex items-center text-lg font-semibold focus:bg-white p-2 focus:text-blue-500 rounded-md hover:text-blue-500 transition px-4 mb-4 duration-300"
            >
              <i className="fa fa-th-large mr-2" />
              Department Staff
            </button>
            <button
              className="flex items-center text-lg font-semibold focus:bg-white p-2 focus:text-blue-500 rounded-md hover:text-blue-500 transition px-4 mb-4 duration-300"
              onClick={() => handleLinkClick("reception")}
            >
              <CalendarIcon className="mr-2" /> Receptions
            </button>
            <button
              className="flex items-center text-lg font-semibold focus:bg-white p-2 focus:text-blue-500 rounded-md hover:text-blue-500 transition px-4 mb-4 duration-300"
              onClick={() => handleLinkClick("manageusers")}
            >
              <UserPlus className="mr-2" /> Manage Users
            </button>
            <button
              className="flex items-center text-lg font-semibold focus:bg-white p-2 focus:text-blue-500 rounded-md hover:text-blue-500 transition px-4 mb-4 duration-300"
              onClick={() => handleLinkClick("report")}
            >
              <MdOutlineAnnouncement className="mr-2" /> Reports
            </button>
            <button
              className="flex items-center text-lg font-semibold focus:bg-white p-2 focus:text-blue-500 rounded-md hover:text-blue-500 transition px-3 mb-4 duration-300"
              onClick={() => handleLinkClick("announcement")}
            >
              <Mic className="mr-2" />
              Announcement
            </button>
            <button
              className="flex items-center text-lg font-semibold focus:bg-white p-2 focus:text-blue-500 rounded-md hover:text-blue-500 transition px-3 mb-4 duration-300"
              onClick={() => handleLinkClick("comments")}
            >
              <MessageCircleCode className="mr-2" />
              Comments
            </button>
          </div>
        </nav>
      </div>

      {activeComponent === "default" && (
        <div className="flex-1 p-6">
          <div className="flex items-center mb-6 w-full justify-between">
            <h1 className="text-3xl font-semibold">Dashboard</h1>
            <button
              className="md:hidden flex justify-end p-4 text-white bg-blue-500 top-4  rounded-full shadow-lg"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              <BsList size={24} />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <div className="bg-white p-4 rounded shadow">
              <div className="flex items-center">
                <i className="fas fa-chart-bar text-4xl text-green-500"></i>
                <div className="ml-4">
                  {ActiverUserDetail ? (
                    <div className="text-2xl text-center font-bold">
                      {ActiverUserDetail.length > 0
                        ? ActiverUserDetail.length
                        : 0}
                    </div>
                  ) : (
                    <div className="text-gray-500">Loading...</div>
                  )}
                  <p className="text-gray-500">Daily Visits</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <div className="flex items-center">
                <i className="fas fa-shopping-cart text-4xl text-blue-500"></i>
                <div className="ml-4">
                  <p className="text-2xl font-semibold">52,160</p>
                  <p className="text-gray-500">Sales</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <div className="flex items-center">
                <i className="fas fa-comments text-4xl text-red-500"></i>
                <div className="ml-4">
                  <p className="text-2xl font-semibold">15,823</p>
                  <p className="text-gray-500">Comments</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <div className="flex items-center">
                <i className="fas fa-users text-4xl text-yellow-500"></i>
                <div className="ml-4">
                  <p className="text-2xl font-semibold">36,752</p>
                  <p className="text-gray-500">No. of Visits</p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <div className="bg-white p-4 rounded shadow">
              <img
                alt="Bar chart showing data from 2006 to 2012 with varying values"
                src="https://cms.boardmix.com/images/articles/percentage-bar-graph-example-01.png"
              />
            </div>
            <div className="bg-white p-4 rounded shadow">
              <img
                alt="Donut chart showing in-store sales with a value of 30"
                src="https://cbx-prod.b-cdn.net/COLOURBOX53781029.jpg?width=800&height=800&quality=70"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white p-4 shadow rounded-lg">
              <div className="text-lg font-bold mb-4">Users Table</div>
              <div className="overflow-x-auto overflow-y-auto">
                <table className="min-w-full bg-white rounded-lg shadow-md">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="py-3 px-4 text-left text-gray-700">
                        Name
                      </th>
                      <th className="py-3 px-4 text-left text-gray-700">
                        CNIC
                      </th>
                      <th className="py-3 px-4 text-left text-gray-700">
                        Phone
                      </th>
                      <th className="py-3 px-4 text-left text-gray-700">
                        Address
                      </th>
                      <th className="py-3 px-4 text-left text-gray-700">
                        Purpose
                      </th>
                      <th className="py-3 px-4 text-left text-gray-700">
                        Token
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {detail.length > 0 ? (
                      detail.map((user, index) => (
                        <tr key={index} className="border-b hover:bg-gray-50">
                          <td className="py-3 px-4">{user.name}</td>
                          <td className="py-3 px-4">{user.cnic}</td>
                          <td className="py-3 px-4">{user.phone}</td>
                          <td className="py-3 px-4">{user.address}</td>
                          <td className="py-3 px-4">{user.purpose}</td>
                          <td className="py-3 px-4">{user.tokenNo}</td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="6" className="py-4 text-center">
                          No data found
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h2 className="text-xl font-semibold p-2 mb-4">Tasks Panel</h2>
              <ul>
                <li className="flex justify-between items-center mb-4 py-2 border-b">
                  <div className="flex items-center">
                    <i className="fas fa-comment text-gray-500 mr-2"></i>
                    <span>Commented on a post</span>
                  </div>
                  <span className="text-gray-500 text-sm">7 minutes ago</span>
                </li>
                <li className="flex justify-between items-center mb-4 py-2 border-b">
                  <div className="flex items-center">
                    <i className="fas fa-truck text-gray-500 mr-2"></i>
                    <span>Order 392 shipped</span>
                  </div>
                  <span className="text-gray-500 text-sm">16 minutes ago</span>
                </li>
                <li className="flex justify-between items-center mb-4 py-2 border-b">
                  <div className="flex items-center">
                    <i className="fas fa-file-invoice-dollar text-gray-500 mr-2"></i>
                    <span>Invoice 653 has paid</span>
                  </div>
                  <span className="text-gray-500 text-sm">36 minutes ago</span>
                </li>
                <li className="flex justify-between items-center mb-4 py-2 border-b">
                  <div className="flex items-center">
                    <i className="fas fa-user-plus text-gray-500 mr-2"></i>
                    <span>A new user has been added</span>
                  </div>
                  <span className="text-gray-500 text-sm">1 hour ago</span>
                </li>
                <li className="flex justify-between items-center mb-4 py-2 border-b">
                  <div className="flex items-center">
                    <i className="fas fa-user-plus text-gray-500 mr-2"></i>
                    <span>A new user has added</span>
                  </div>
                  <span className="text-gray-500 text-sm">1.23 hour ago</span>
                </li>
                <li className="flex justify-between items-center py-2">
                  <div className="flex items-center">
                    <i className="fas fa-globe text-gray-500 mr-2"></i>
                    <span>Saved the world</span>
                  </div>
                  <span className="text-gray-500 text-sm">yesterday</span>
                </li>
              </ul>
              <a className="text-blue-500 mt-4 inline-block" href="#">
                More Tasks
              </a>
            </div>
          </div>
          <footer className="mt-6 text-center text-gray-500">
            ©2015 Inventory Management System Inc. All rights reserved.
          </footer>
        </div>
      )}
      {activeComponent === "departmentstaff" && (
        <div className="bg-gray-50 flex justify-center md:px-64 mt-5">
          <div className="flex items-start justify-center">
            <button
              className="md:hidden text-center text-white bg-blue-500 top-4  rounded-full shadow-lg"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              <BsList size={24} />
            </button>
            <StaffForm />
          </div>
        </div>
      )}
      {activeComponent === "manageusers" && (
        <div className="bg-gray-50 flex flex-1 items-center justify-center">
          <ManageUser />
        </div>
      )}
      {activeComponent === "reception" && (
        <div className="bg-gray-50 flex flex-1 items-center justify-center">
          <Reception />
        </div>
      )}
      {activeComponent === "report" && (
        <div className="bg-gray-50 flex flex-1 items-center justify-center">
          <Reports />
        </div>
      )}
      {activeComponent === "announcement" && <Announcement />}
      {activeComponent === "comments" && <CommentSection />}
    </div>
  );
}
