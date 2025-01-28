import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../constants';

export default function ManageUser() {
 const [activeComponent, setActiveComponent] = useState('default');
  const [userData, setUserdata] = useState([])
  const [detail ,setDetail] = useState([])
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
       console.log(response)
        const result = await response.json();
        console.log(result)
        setDetail(result.users)
        if (response.ok) {
          setUserdata(result.userData);
        } else {
          setUserdata(null);
          setError(result.message || "Failed to fetch UserData info");
        }
      } catch (error) {
        console.error("Error fetching UserData info:", error);
      }
    };

    useEffect(() => {
      fetchBeneficiaryInfo();
    }, []); // Component load hone ke baad data fetch hoga
    
    const handleEdit = async (user) => {
        const updatedUser = { ...user, name: prompt("Enter new name", user.name) || user.name }; // Example: Update only the name
        try {
          const response = await fetch(`${BASE_URL}/auth/register/${user._id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedUser),
          });
      
          if (response.ok) {
            alert("User updated successfully");
            fetchBeneficiaryInfo(); // Reload the updated data
          } else {
            alert("Failed to update user");
          }
        } catch (error) {
          console.error("Error updating user:", error);
        }
      };
      
      const handleDelete = async (userId) => {
        if (!window.confirm("Are you sure you want to delete this user?")) return;
      
        try {
          const response = await fetch(`${BASE_URL}/auth/register/${userId}`, {
            method: "DELETE",
                "Content-Type": "application/json"
              
          });
      
          if (response.ok) {
            alert("User deleted successfully");
            fetchBeneficiaryInfo(); // Reload data after deletion
          } else {
            alert("Failed to delete user");
          }
        } catch (error) {
          console.error("Error deleting user:", error);
        }
      };
      

    return (
        <div className="p-4">
        <div className="bg-white p-4 rounded shadow">
          <div className="text-lg font-bold mb-4">Users Table</div>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b">Name</th>
                  <th className="py-2 px-4 border-b">CNIC</th>
                  <th className="py-2 px-4 border-b">Phone</th>
                  <th className="py-2 px-4 border-b">Address</th>
                  <th className="py-2 px-4 border-b">Purpose</th>
                  <th className="py-2 px-4 border-b">Token No</th>
                  <th className="py-2 px-4 border-b">Actions</th>
                </tr>
              </thead>
              <tbody>
                {detail.length > 0 ? (
                  detail.map((user, index) => (
                    <tr key={index}>
                      <td className="py-2 px-4 border-b">{user.name}</td>
                      <td className="py-2 px-4 border-b">{user.cnic}</td>
                      <td className="py-2 px-4 border-b">{user.phone}</td>
                      <td className="py-2 px-4 border-b">{user.address}</td>
                      <td className="py-2 px-4 border-b">{user.purpose}</td>
                      <td className="py-2 px-4 border-b">{user.tokenNo}</td>
                      <td className="py-2 px-4 border-b">
                        <button
                          onClick={() => handleEdit(user)}
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
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="8" className="py-4 px-4 text-center text-gray-500">
                      No data available
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      

  )
}
