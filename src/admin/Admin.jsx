import React, { useEffect, useState } from 'react';
import Customer from './Customer';
import StaffForm from '../pages/departmentStaff/department';
import { BASE_URL } from '../constants';
import ManageUser from './ManageUser';

// export default function AdminDashboard() {
//   const [activeComponent, setActiveComponent] = useState('default');
//   const [userData, setUserdata] = useState([]);
//   const [detail, setDetail] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");

//   const handleLinkClick = (component) => {
//     setActiveComponent(component);
//   };

//   const fetchBeneficiaryInfo = async () => {
//     try {
//       const response = await fetch(`${BASE_URL}/auth/register`, {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });
//       const result = await response.json();
//       setDetail(result.users);
//       if (response.ok) {
//         setUserdata(result.userData);
//       } else {
//         setUserdata(null);
//       }
//     } catch (error) {
//       console.error("Error fetching UserData info:", error);
//     }
//   };

//   const handleSearch = () => {
//     const filteredData = detail.filter(user => 
//       user.cnic.includes(searchTerm) || user.phone.includes(searchTerm)
//     );
//     setDetail(filteredData);
//   };

//   useEffect(() => {
//     fetchBeneficiaryInfo();
//   }, []); 

//   return (
//     <div className="h-screen flex overflow-hidden">
//       <div className="bg-gray-900 text-white w-64 p-4 fixed top-0 left-0 h-full">
//         <div className="text-2xl font-bold mb-6">Admin Dashboard</div>
//         <nav>
//           <ul className="space-y-4">
//           <li>
//               <button onClick={() => handleLinkClick('default')} className="flex items-center text-lg font-semibold hover:text-blue-500 transition duration-300">
//                 <i className="fas fa-users mr-2"></i> Overview
//               </button>
//             </li>
//             <li>
//               <button onClick={() => handleLinkClick('customers')} className="flex items-center text-lg font-semibold hover:text-blue-500 transition duration-300">
//                 <i className="fas fa-users mr-2"></i> Customers
//               </button>
//             </li>
//             <li>
//               <button onClick={() => handleLinkClick('departments')} className="flex items-center text-lg font-semibold hover:text-blue-500 transition duration-300">
//                 <i className="fas fa-cogs mr-2"></i> Departments
//               </button>
//             </li>
          
//             <li>
//               <button onClick={() => handleLinkClick('manageusers')} className="flex items-center text-lg font-semibold hover:text-blue-500 transition duration-300">
//                 <i className="fas fa-users-cog mr-2"></i> Manage Users
//               </button>
//             </li>
//           </ul>
//         </nav>
//       </div>

//       <div className="flex-1 flex flex-col ml-64">
//         <header className="bg-blue-600 text-white p-6 fixed top-0 left-64 right-0 z-10">
//           <div className="flex justify-between items-center">
//             <div className="text-xl font-bold">Admin Dashboard</div>
//             <div className="flex items-center space-x-4">
//               <input
//                 type="text"
//                 placeholder="Search by CNIC or Phone"
//                 className="border border-gray-300 text-black rounded px-4 py-2 w-full max-w-md transition duration-300 ease-in-out focus:ring-2 focus:ring-blue-500 focus:outline-none"
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//               />
//               <button
//                 className="bg-blue-950 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200"
//                 onClick={handleSearch}
//               >
//                 Search
//               </button>
//             </div>
//           </div>
//         </header>

//         <main className="flex-1 overflow-y-auto mt-[4.5rem] bg p-6 relative">
//           <div className="fixed top-[4.5rem] left-64 right-0 h-[calc(100vh-4.5rem)] overflow-y-auto bg-white shadow p-4">
//             {activeComponent === 'default' && (
//               <div>
//                 <div className="bg-white p-4 shadow flex gap-5 items-center mb-6">
//                   <button className="bg-blue-600 text-white px-4 py-2 rounded">Add new post</button>
//                   <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded">All customers</button>
//                   <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded">Settings</button>
//                 </div>

//                 <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
//                   <div className="bg-white p-4 rounded-lg shadow-lg text-center">
//                     <div className="text-2xl font-bold">$2,456</div>
//                     <div className="text-gray-500">Total Sales</div>
//                   </div>
//                   <div className="bg-white p-4 rounded-lg shadow-lg text-center">
//                     <div className="text-2xl font-bold">$1,000</div>
//                     <div className="text-gray-500">Total Expenses</div>
//                   </div>
//                   <div className="bg-white p-4 rounded-lg shadow-lg text-center">
//                     <div className="text-2xl font-bold">6,535</div>
//                     <div className="text-gray-500">Total Visitors</div>
//                   </div>
//                   <div className="bg-white p-4 rounded-lg shadow-lg text-center">
//                     <div className="text-2xl font-bold">1,121</div>
//                     <div className="text-gray-500">Total Users</div>
//                   </div>
//                 </div>

//                 {/* User Data Table */}
//                 <div className="bg-white p-4 rounded-lg shadow-md mt-6">
//                   <div className="text-lg font-bold mb-4">Users Table</div>
//                   <div className="overflow-x-auto">
//                     <table className="min-w-full bg-white rounded-lg shadow-md">
//                       <thead>
//                         <tr className="bg-gray-100">
//                           <th className="py-3 px-4 text-left text-gray-700">Name</th>
//                           <th className="py-3 px-4 text-left text-gray-700">CNIC</th>
//                           <th className="py-3 px-4 text-left text-gray-700">Phone</th>
//                           <th className="py-3 px-4 text-left text-gray-700">Address</th>
//                           <th className="py-3 px-4 text-left text-gray-700">Purpose</th>
//                           <th className="py-3 px-4 text-left text-gray-700">Token No</th>
//                         </tr>
//                       </thead>
//                       <tbody>
//                         {detail.length > 0 ? (
//                           detail.map((user, index) => (
//                             <tr key={index} className="border-b hover:bg-gray-50">
//                               <td className="py-3 px-4 text-gray-600">{user.name}</td>
//                               <td className="py-3 px-4 text-gray-600">{user.cnic}</td>
//                               <td className="py-3 px-4 text-gray-600">{user.phone}</td>
//                               <td className="py-3 px-4 text-gray-600">{user.address}</td>
//                               <td className="py-3 px-4 text-gray-600">{user.purpose}</td>
//                               <td className="py-3 px-4 text-gray-600">{user.tokenNo}</td>
//                             </tr>
//                           ))
//                         ) : (
//                           <tr>
//                             <td colSpan="6" className="py-4 px-4 text-center text-gray-500">
//                               No data available
//                             </td>
//                           </tr>
//                         )}
//                       </tbody>
//                     </table>
//                   </div>
//                 </div>
//               </div>
//             )}

//             {activeComponent === 'customers' && <Customer />}
//             {activeComponent === 'manageusers' && <ManageUser />}
//             {activeComponent === 'departments' && <StaffForm />}
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }
export default function AdminDashboard() {
  const [activeComponent, setActiveComponent] = useState('default');
  const [userData, setUserdata] = useState([]);
  const [detail, setDetail] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleLinkClick = (component) => {
    setActiveComponent(component);
  };

  const fetchBeneficiaryInfo = async () => {
    try {
      const response = await fetch(`${BASE_URL}/auth/register`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();
      setDetail(result.users);
      if (response.ok) {
        setUserdata(result.userData);
      } else {
        setUserdata(null);
      }
    } catch (error) {
      console.error("Error fetching UserData info:", error);
    }
  };

  const handleSearch = () => {
    const filteredData = detail.filter(user => 
      user.cnic.includes(searchTerm) || user.phone.includes(searchTerm)
    );
    setDetail(filteredData);
  };

  useEffect(() => {
    fetchBeneficiaryInfo();
  }, []); 

  return (
    <div className="h-screen flex overflow-hidden flex-col lg:flex-row">
      <div className="bg-gray-900 text-white w-full lg:w-64 p-4 fixed lg:static top-0 left-0 h-full lg:h-auto">
        <div className="text-2xl font-bold mb-6">Admin Dashboard</div>
        <nav>
          <ul className="space-y-4">
            <li>
              <button onClick={() => handleLinkClick('default')} className="flex items-center text-lg font-semibold hover:text-blue-500 transition duration-300">
                <i className="fas fa-users mr-2"></i> Overview
              </button>
            </li>
            <li>
              <button onClick={() => handleLinkClick('customers')} className="flex items-center text-lg font-semibold hover:text-blue-500 transition duration-300">
                <i className="fas fa-users mr-2"></i> Customers
              </button>
            </li>
            <li>
              <button onClick={() => handleLinkClick('departments')} className="flex items-center text-lg font-semibold hover:text-blue-500 transition duration-300">
                <i className="fas fa-cogs mr-2"></i> Departments
              </button>
            </li>
            <li>
              <button onClick={() => handleLinkClick('manageusers')} className="flex items-center text-lg font-semibold hover:text-blue-500 transition duration-300">
                <i className="fas fa-users-cog mr-2"></i> Manage Users
              </button>
            </li>
          </ul>
        </nav>
      </div>

      <div className="flex-1 flex flex-col ml-0 lg:ml-64">
        <header className="bg-blue-600 text-white p-6 fixed lg:static top-0 left-0 right-0 z-10">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold">Admin Dashboard</div>
            <div className="flex items-center space-x-4 w-full max-w-md">
              <input
                type="text"
                placeholder="Search by CNIC or Phone"
                className="border border-gray-300 text-black rounded px-4 py-2 w-full sm:w-64 lg:w-96 transition duration-300 ease-in-out focus:ring-2 focus:ring-blue-500 focus:outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button
                className="bg-blue-950 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200"
                onClick={handleSearch}
              >
                Search
              </button>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto mt-[4.5rem] p-6 relative">
          <div className="fixed top-[4.5rem] left-0 right-0 lg:left-64 lg:w-auto w-full h-[calc(100vh-4.5rem)] overflow-y-auto bg-white shadow p-4">
            {activeComponent === 'default' && (
              <div>
                <div className="bg-white p-4 shadow flex gap-5 items-center mb-6">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded">Add new post</button>
                  <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded">All customers</button>
                  <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded">Settings</button>
                </div>

                <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow-lg text-center">
                    <div className="text-2xl font-bold">$2,456</div>
                    <div className="text-gray-500">Total Sales</div>
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

                {/* User Data Table */}
                <div className="bg-white p-4 rounded-lg shadow-md mt-6">
                  <div className="text-lg font-bold mb-4">Users Table</div>
                  <div className="overflow-x-auto">
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
                              <td className="py-3 px-4 text-gray-600">{user.name}</td>
                              <td className="py-3 px-4 text-gray-600">{user.cnic}</td>
                              <td className="py-3 px-4 text-gray-600">{user.phone}</td>
                              <td className="py-3 px-4 text-gray-600">{user.address}</td>
                              <td className="py-3 px-4 text-gray-600">{user.purpose}</td>
                              <td className="py-3 px-4 text-gray-600">{user.tokenNo}</td>
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td colSpan="6" className="py-4 px-4 text-center text-gray-500">
                              No data available
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {activeComponent === 'customers' && <Customer />}
            {activeComponent === 'manageusers' && <ManageUser />}
            {activeComponent === 'departments' && <StaffForm />}
          </div>
        </main>
      </div>
    </div>
  );
}
