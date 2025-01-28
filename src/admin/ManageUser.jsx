// import React, { useEffect, useState } from 'react'
// import { BASE_URL } from '../constants';

// export default function ManageUser() {
//  const [activeComponent, setActiveComponent] = useState('default');
//   const [userData, setUserdata] = useState([])
//   const [detail ,setDetail] = useState([])
//   const handleLinkClick = (component) => {
//     setActiveComponent(component);
//   };

//    const fetchBeneficiaryInfo = async () => {
     
//       try {
//         const response = await fetch(`${BASE_URL}/auth/register`, {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//           },
//         });
//        console.log(response)
//         const result = await response.json();
//         console.log(result)
//         setDetail(result.users)
//         if (response.ok) {
//           setUserdata(result.userData);
//         } else {
//           setUserdata(null);
//           setError(result.message || "Failed to fetch UserData info");
//         }
//       } catch (error) {
//         console.error("Error fetching UserData info:", error);
//       }
//     };

//     useEffect(() => {
//       fetchBeneficiaryInfo();
//     }, []); // Component load hone ke baad data fetch hoga
    
//     const handleEdit = async (user) => {
//         const updatedUser = { ...user, name: prompt("Enter new name", user.name) || user.name }; // Example: Update only the name
//         try {
//           const response = await fetch(`${BASE_URL}/auth/register/${user._id}`, {
//             method: "PUT",
//             headers: {
//               "Content-Type": "application/json",
//             },
//             body: JSON.stringify(updatedUser),
//           });
      
//           if (response.ok) {
//             alert("User updated successfully");
//             fetchBeneficiaryInfo(); // Reload the updated data
//           } else {
//             alert("Failed to update user");
//           }
//         } catch (error) {
//           console.error("Error updating user:", error);
//         }
//       };
      
//       const handleDelete = async (userId) => {
//         if (!window.confirm("Are you sure you want to delete this user?")) return;
      
//         try {
//           const response = await fetch(`${BASE_URL}/auth/register/${userId}`, {
//             method: "DELETE",
//                 "Content-Type": "application/json"
              
//           });
      
//           if (response.ok) {
//             alert("User deleted successfully");
//             fetchBeneficiaryInfo(); // Reload data after deletion
//           } else {
//             alert("Failed to delete user");
//           }
//         } catch (error) {
//           console.error("Error deleting user:", error);
//         }
//       };
      

//     return (
//     <div className="bg-white p-4 rounded-lg shadow-md mt-6">
//     <div className="text-lg font-bold mb-4">Users Table</div>
//     <div className="overflow-x-auto">
//       <table className="min-w-full bg-white rounded-lg shadow-md">
//         <thead>
//           <tr className="bg-gray-100">
//             <th className="py-3 px-4 text-left text-gray-700">Name</th>
//             <th className="py-3 px-4 text-left text-gray-700">CNIC</th>
//             <th className="py-3 px-4 text-left text-gray-700">Phone</th>
//             <th className="py-3 px-4 text-left text-gray-700">Address</th>
//             <th className="py-3 px-4 text-left text-gray-700">Purpose</th>
//             <th className="py-3 px-4 text-left text-gray-700">Token No</th>
//             <th className="py-3 px-10 text-left text-gray-700">Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {detail.length > 0 ? (
//             detail.map((user, index) => (
//               <tr key={index} className="border-b hover:bg-gray-50">
//                 <td className="py-3 px-4 text-gray-600">{user.name}</td>
//                 <td className="py-3 px-4 text-gray-600">{user.cnic}</td>
//                 <td className="py-3 px-4 text-gray-600">{user.phone}</td>
//                 <td className="py-3 px-4 text-gray-600">{user.address}</td>
//                 <td className="py-3 px-4 text-gray-600">{user.purpose}</td>
//                 <td className="py-3 px-4 text-gray-600">{user.tokenNo}</td>
//                 <td className="py-2 px-4 border-b">
//                         <button
//                           onClick={() => handleEdit(user)}
//                           className="bg-blue-600 text-white px-4 py-2 rounded mr-2"
//                         >
//                           Edit
//                         </button>
//                         <button
//                           onClick={() => handleDelete(user._id)}
//                           className="bg-red-600 text-white px-4 py-2 rounded"
//                         >
//                           Delete
//                         </button>
//               </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="6" className="py-4 px-4 text-center text-gray-500">
//                 No data available
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   </div>

//   )
// }
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../constants";

export default function ManageUser() {
  const [detail, setDetail] = useState([]);
  const [editingUserId, setEditingUserId] = useState(null);
  const [editFormData, setEditFormData] = useState({});
  const [loading, setLoading] = useState(false);

  const fetchBeneficiaryInfo = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${BASE_URL}/auth/register`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();
      setDetail(result.users);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching user data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBeneficiaryInfo();
  }, []);

  const handleEditClick = (user) => {
    setEditingUserId(user._id);
    setEditFormData({ ...user }); // Populate form data with the selected user's data
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setEditFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    try {
      const response = await fetch(`${BASE_URL}/auth/register/${editingUserId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editFormData),
      });

      if (response.ok) {
        alert("User updated successfully");
        setEditingUserId(null);
        fetchBeneficiaryInfo(); // Refresh the table
      } else {
        alert("Failed to update user");
      }
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  const handleCancel = () => {
    setEditingUserId(null);
    setEditFormData({});
  };

  const handleDelete = async (userId) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;

    try {
      const response = await fetch(`${BASE_URL}/auth/register/${userId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        alert("User deleted successfully");
        fetchBeneficiaryInfo();
      } else {
        alert("Failed to delete user");
      }
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
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
              <th className="py-3 px-4 text-left text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="7" className="py-4 px-4 text-center text-blue-600">
                  Loading...
                </td>
              </tr>
            ) : detail.length > 0 ? (
              detail.map((user) => (
                <tr key={user._id} className="border-b hover:bg-gray-50">
                  {editingUserId === user._id ? (
                    <>
                      <td className="py-3 px-4">
                        <input
                          type="text"
                          name="name"
                          value={editFormData.name || ""}
                          onChange={handleFormChange}
                          className="border rounded px-2 py-1 w-full"
                        />
                      </td>
                      <td className="py-3 px-4">
                        <input
                          type="text"
                          name="cnic"
                          value={editFormData.cnic || ""}
                          onChange={handleFormChange}
                          className="border rounded px-2 py-1 w-full"
                        />
                      </td>
                      <td className="py-3 px-4">
                        <input
                          type="text"
                          name="phone"
                          value={editFormData.phone || ""}
                          onChange={handleFormChange}
                          className="border rounded px-2 py-1 w-full"
                        />
                      </td>
                      <td className="py-3 px-4">
                        <input
                          type="text"
                          name="address"
                          value={editFormData.address || ""}
                          onChange={handleFormChange}
                          className="border rounded px-2 py-1 w-full"
                        />
                      </td>
                      <td className="py-3 px-4">
                        <input
                          type="text"
                          name="purpose"
                          value={editFormData.purpose || ""}
                          onChange={handleFormChange}
                          className="border rounded px-2 py-1 w-full"
                        />
                      </td>
                      <td className="py-3 px-4">
                        <input
                          type="text"
                          name="tokenNo"
                          value={editFormData.tokenNo || ""}
                          onChange={handleFormChange}
                          className="border rounded px-2 py-1 w-full"
                        />
                      </td>
                      <td className="py-3 px-4">
                        <button
                          onClick={handleSave}
                          className="bg-green-600 text-white px-4 py-2 rounded mr-2"
                        >
                          Save
                        </button>
                        <button
                          onClick={handleCancel}
                          className="bg-gray-600 text-white px-4 py-2 rounded"
                        >
                          Cancel
                        </button>
                      </td>
                    </>
                  ) : (
                    <>
                      <td className="py-3 px-4 text-gray-600">{user.name}</td>
                      <td className="py-3 px-4 text-gray-600">{user.cnic}</td>
                      <td className="py-3 px-4 text-gray-600">{user.phone}</td>
                      <td className="py-3 px-4 text-gray-600">{user.address}</td>
                      <td className="py-3 px-4 text-gray-600">{user.purpose}</td>
                      <td className="py-3 px-4 text-gray-600">{user.tokenNo}</td>
                      <td className="py-3 px-4">
                        <button
                          onClick={() => handleEditClick(user)}
                          className="bg-blue-600 text-white px-4 py-2 rounded mr-2"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(user._id)}
                          className="bg-red-600 text-white px-4 py-2 rounded"
                        >
                          Delete
                        </button>
                      </td>
                    </>
                  )}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="py-4 px-4 text-center text-gray-500">
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
