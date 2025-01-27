
import React, { useState } from 'react';
import Customer from './Customer';
import StaffForm from '../pages/departmentStaff/department';

export default function AdminDashboard() {
  const [activeComponent, setActiveComponent] = useState('default');

  const handleLinkClick = (component) => {
    setActiveComponent(component);
  };

  return (
    <div className="h-screen flex overflow-hidden">
      {/* Sidebar */}
      <div className="bg-gray-900 text-white w-64 p-4 fixed top-0 left-0 h-full">
        <div className="text-2xl font-bold mb-6">Admin Dashboard</div>
        <nav>
          <ul>
            <li className="mb-4">
              <a
                href="#"
                className="flex items-center"
                onClick={() => handleLinkClick('customers')}
              >
                <i className="fas fa-users mr-2" /> Customers
              </a>
            </li>
            <li className="mb-4">
              <a
                href="#"
                className="flex items-center"
                onClick={() => handleLinkClick('departments')}
              >
                <i className="fas fa-cog mr-2" /> Departments
              </a>
            </li>
            {/* <li className="mb-4">
              <a
                href="#"
                className="flex items-center"
                onClick={() => handleLinkClick('nnnns')}
              >
                <i className="fas fa-file-alt mr-2" /> nnnns
              </a>
            </li> */}
            <li className="mb-4">
              <a
                href="#"
                className="flex items-center"
                onClick={() => handleLinkClick('settings')}
              >
                <i className="fas fa-cog mr-2" /> Settings
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col ml-64">
        {/* Header */}
        <header className="bg-blue-600 text-white p-6 fixed top-0 left-64 right-0 z-10">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold">Admin Dashboard</div>
            <div className="flex items-center space-x-4">
              <input
                type="text"
                placeholder="Search by CNIC, Phone, or Name"
                className="border border-gray-300 rounded px-4 py-2"
              />
              <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded">
                Search
              </button>
            </div>
          </div>
        </header>

        {/* Scrollable Dashboard Area */}
        <main className="flex-1 overflow-y-auto mt-[4.5rem] bg p-6 relative">
          {/* Fixed Content Div */}
          <div className="fixed top-[4.5rem] left-64 right-0 h-[calc(100vh-4.5rem)] overflow-y-auto bg-white shadow p-4">
            {activeComponent === 'default' && (
                   <>
                   <div className="bg-white p-4 shadow flex justify-between items-center">
                     <div className="flex space-x-4">
                       <button className="bg-blue-600 text-white px-4 py-2 rounded">
                         Add new post
                       </button>
                       <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded">
                         All customers
                       </button>
                       <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded">
                         Settings
                       </button>
                     </div>
                     <div className="flex items-center space-x-4">
                       <input
                         type="text"
                         placeholder="Search customers"
                         className="border border-gray-300 rounded px-4 py-2"
                       />
                       <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded">
                         Small button
                       </button>
                     </div>
                   </div>
                   <div className="p-4 grid grid-cols-4 gap-4">
                     <div className="bg-white p-4 rounded shadow text-center">
                       <div className="text-2xl font-bold">$2,456</div>
                       <div className="text-gray-500">Total Sales</div>
                     </div>
                     <div className="bg-white p-4 rounded shadow text-center">
                       <div className="text-2xl font-bold">$1,000</div>
                       <div className="text-gray-500">Total Expenses</div>
                     </div>
                     <div className="bg-white p-4 rounded shadow text-center">
                       <div className="text-2xl font-bold">6,535</div>
                       <div className="text-gray-500">Total Visitors</div>
                     </div>
                     <div className="bg-white p-4 rounded shadow text-center">
                       <div className="text-2xl font-bold">1,121</div>
                       <div className="text-gray-500">Total Users</div>
                     </div>
                   </div>
                   <div className="p-4">
               <div className="bg-white p-4 rounded shadow">
                 <div className="text-lg font-bold mb-4">Farm table</div>
                 <div className="overflow-x-auto">
                   <table className="min-w-full bg-white">
                     <thead>
                       <tr>
                         <th className="py-2 px-4 border-b">Farm ID</th>
                         <th className="py-2 px-4 border-b">Farm Name</th>
                         <th className="py-2 px-4 border-b">TODAY</th>
                         <th className="py-2 px-4 border-b">TODAY</th>
                         <th className="py-2 px-4 border-b">TODAY</th>
                       </tr>
                     </thead>
                     <tbody>
                       <tr>
                         <td className="py-2 px-4 border-b">1</td>
                         <td className="py-2 px-4 border-b">Quis autem vel</td>
                         <td className="py-2 px-4 border-b">Lorem ipsum dolor</td>
                         <td className="py-2 px-4 border-b">Commodi consequatur</td>
                         <td className="py-2 px-4 border-b">
                           <button className="bg-blue-600 text-white px-4 py-2 rounded">
                             Edit
                           </button>
                         </td>
                       </tr>
                       <tr>
                         <td className="py-2 px-4 border-b">2</td>
                         <td className="py-2 px-4 border-b">Ut enim ad minima</td>
                         <td className="py-2 px-4 border-b">Lorem ipsum dolor</td>
                         <td className="py-2 px-4 border-b">Commodi consequatur</td>
                         <td className="py-2 px-4 border-b">
                           <button className="bg-blue-600 text-white px-4 py-2 rounded">
                             Edit
                           </button>
                         </td>
                       </tr>
                       <tr>
                         <td className="py-2 px-4 border-b">3</td>
                         <td className="py-2 px-4 border-b">Quis autem vel</td>
                         <td className="py-2 px-4 border-b">Lorem ipsum dolor</td>
                         <td className="py-2 px-4 border-b">Commodi consequatur</td>
                         <td className="py-2 px-4 border-b">
                           <button className="bg-blue-600 text-white px-4 py-2 rounded">
                             Edit
                           </button>
                         </td>
                       </tr>
                       <tr>
                         <td className="py-2 px-4 border-b">4</td>
                         <td className="py-2 px-4 border-b">Ut enim ad minima</td>
                         <td className="py-2 px-4 border-b">Lorem ipsum dolor</td>
                         <td className="py-2 px-4 border-b">Commodi consequatur</td>
                         <td className="py-2 px-4 border-b">
                           <button className="bg-blue-600 text-white px-4 py-2 rounded">
                             Edit
                           </button>
                         </td>
                       </tr>
                     
                     </tbody>
                   </table>
                 </div>
               </div>
             </div>
                 </>
            )}

            {activeComponent === 'customers' && (
              <div>
                <Customer />
              </div>
            )}

            {activeComponent === 'departments' && (
              <div>
                <StaffForm />
              </div>
            )}


            {activeComponent === 'settings' && (
              <div>
                <h2>Settings</h2>
                <p>Update system settings here.</p>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
