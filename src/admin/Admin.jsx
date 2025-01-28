
import React, { useEffect, useState } from "react";
import StaffForm from "../pages/departmentStaff/department";
import { BASE_URL } from "../constants";
import ManageUser from "./ManageUser";
import { Menu, MenuIcon, ToggleLeftIcon, ToggleRight } from "lucide-react";
import { BsMenuUp } from "react-icons/bs";

export default function AdminDashboard() {
  const [activeComponent, setActiveComponent] = useState("default");
  const [detail, setDetail] = useState([]); // Filtered data for display
  const [originalDetail, setOriginalDetail] = useState([]); // Backup of original data
  const [searchTerm, setSearchTerm] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State for mobile sidebar toggle
  const [ActiverUserDetail , setActiverUserDetail] = useState([])


const fetchAllInfo = async () => {
 try {
   const response = await fetch(`${BASE_URL}/auth/onlineUsers`, {
     method: "GET",
     headers: {
       "Content-Type": "application/json",
     },
   });
   console.log(response)
   const result = await response.json();
   console.log(result)
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
      // If search term is empty, reset to original data
      setDetail(originalDetail);
    } else {
      // Filter data by CNIC or phone
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
    <div className="h-screen flex flex-col lg:flex-row overflow-y-auto">
      <div
        className={`${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } bg-gray-900 text-white w-64 p-4 fixed lg:static top-0 left-0 h-full transform transition-transform duration-300 lg:translate-x-0 lg:w-64 mt-24`}
      >
        <div className="text-2xl font-bold mb-6">Admin Dashboard</div>
        <nav>
          <ul className="space-y-4">
            <li>
              <button
                onClick={() => handleLinkClick("default")}
                className="flex items-center text-lg font-semibold hover:text-blue-500 transition duration-300"
              >
                <i className="fas fa-users mr-2"></i> Overview
              </button>
            </li>
            <li>
              <button
                onClick={() => handleLinkClick("departments")}
                className="flex items-center text-lg font-semibold hover:text-blue-500 transition duration-300"
              >
                <i className="fas fa-cogs mr-2"></i> Departments
              </button>
            </li>
            <li>
              <button
                onClick={() => handleLinkClick("manageusers")}
                className="flex items-center text-lg font-semibold hover:text-blue-500 transition duration-300"
              >
                <i className="fas fa-users-cog mr-2"></i> Manage Users
              </button>
            </li>
          </ul>
        </nav>
      </div>

      <button
        className="bg-blue-600 text-white p-2 fixed top-6 left z-50 rounded-full lg:hidden"
        
     onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? (
         <MenuIcon size={20} />
        ) : (
          <MenuIcon size={20}/>
         )}
      </button>

      <div className="flex-1 flex flex-col">
        <header className="bg-blue-600 text-white px-4 p-2 fixed top-0 left-0 w-full z-40">
          <div className="flex justify-between items-center">
            {isSidebarOpen && (
            <MenuIcon onClick={() => setIsSidebarOpen(!isSidebarOpen)}/>
            )}
        <svg xmlns="http://www.w3.org/2000/svg" width="190" height="80" viewBox="0 0 200 200">
            <circle cx="100" cy="100" r="95" fill="#1a73e8" stroke="#f1f1f1" stroke-width="7"/>
            <text x="50%" y="50%" text-anchor="middle" fill="#ffffff" font-family="Arial, sans-serif" font-size="38px" font-weight="bold" dy=".3em">
              Sayalani
            </text>
            <text x="50%" y="75%" text-anchor="middle" fill="#ffffff" font-family="Arial, sans-serif" font-size="16px" dy=".3em">
              Welfare
            </text>
          </svg>
            <div className="flex items-center space-x-4 w-full max-w-md">
              <input
                type="text"
                placeholder="Search by CNIC or Phone"
                className="border border-gray-300 text-black rounded px-4 py-2 w-full transition duration-300 ease-in-out focus:ring-2 focus:ring-blue-500 focus:outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto mt-20 p-6 h-full">
          {activeComponent === "default" && (
             <div>
             <div className="bg-white p-4 shadow flex gap-5 items-center mb-6">
                <button className="bg-blue-600 text-white px-2 py-2 rounded">AddUser</button>
                <button className="bg-gray-200 text-gray-800 px-2 py-2 rounded">Allcustomers</button>
                <button className="bg-gray-200 text-gray-800 px-3 py-2 rounded">Settings</button>
              </div>
              <div className="p-4 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-lg text-center">
                {ActiverUserDetail ? (
                <div className="text-2xl font-bold">
               {ActiverUserDetail.length > 0 ? ActiverUserDetail.length : 0}
            </div>
       ) : (
          <div className="text-gray-500">Loading...</div>
            )}
                  <div className="text-gray-500">Active Users</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-lg text-center">
                  <div className="text-2xl font-bold">$1,000</div>
                  <div className="text-gray-500">Total Expenses</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-lg text-center">
                  <div className="text-2xl font-bold">6,535</div>
                  <div className="text-gray-500">Total Visitors</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-lg text-center">
                  <div className="text-2xl font-bold">1,121</div>
                  <div className="text-gray-500">Total Users</div>
                </div>
              </div>
            <div className="bg-white p-4 shadow rounded-lg">
              <div className="text-lg font-bold mb-4">Users Table</div>
              <div className="overflow-x-auto overflow-y-auto">
                <table className="min-w-full bg-white rounded-lg shadow-md">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="py-3 px-4 text-left text-gray-700">Name</th>
                      <th className="py-3 px-4 text-left text-gray-700">CNIC</th>
                      <th className="py-3 px-4 text-left text-gray-700">Phone</th>
                      <th className="py-3 px-4 text-left text-gray-700">Address</th>
                      <th className="py-3 px-4 text-left text-gray-700">Purpose</th>
                      <th className="py-3 px-4 text-left text-gray-700">Token No</th>
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
          </div>
          )}
          {activeComponent === "manageusers" && <ManageUser />}
          {activeComponent === "departments" && <StaffForm />}
        </main>
      </div>
    </div>
  );
}
