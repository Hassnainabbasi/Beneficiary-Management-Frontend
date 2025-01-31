// import React, { useEffect, useState } from 'react'
// import { BASE_URL } from '../constants';

// export default function SearchCustomer() {
//  const [originalDetail, setOriginalDetail] = useState([]); // Backup of original data
//    const [searchTerm, setSearchTerm] = useState("");
//     const [detail, setDetail] = useState([]); // Filtered data for display
//       const [ActiverUserDetail, setActiverUserDetail] = useState([]);
     
//    const fetchBeneficiaryInfo = async () => {
//      try {
//        const response = await fetch(`${BASE_URL}/auth/register`, {
//          method: "GET",
//          headers: { "Content-Type": "application/json" },
//        });
//        const result = await response.json();
//        if (response.ok) {
//          setOriginalDetail(result.users); 
//          setDetail(result.users); 
//        } else {
//          console.error("Failed to fetch users");
//        }
//      } catch (error) {
//        console.error("Error fetching user data:", error);
//      }
//    };

//    const fetchAllInfo = async () => {
//       try {
//         const response = await fetch(`${BASE_URL}/auth/onlineUsers`, {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//           },
//         });
//         console.log(response);
//         const result = await response.json();
//         console.log(result);
//         setActiverUserDetail(result);
//         if (response.ok) {
//         } else {
//         }
//       } catch (error) {
//         console.error("Error fetching UserData info:", error);
//       }
//     };

//     useEffect(() => {
//        fetchBeneficiaryInfo();
//      }, []);
   
//    useEffect(() => {
//      if (!searchTerm) {
//        setDetail(originalDetail);
//      } else {
//        const filteredData = originalDetail.filter(
//          (user) =>
//            user.cnic.includes(searchTerm) || user.phone.includes(searchTerm)
//        );
//        setDetail(filteredData);
//      }
//    }, [searchTerm, originalDetail]);
 
//     return (
//       <div className="flex items-center space-x-4 w-full max-w-md">
//         <div>
//           <input
//             type="text"
//             placeholder="Search by CNIC or Phone"
//             className="border border-gray-300 text-black rounded px-4 py-2 w-full transition duration-300 ease-in-out focus:ring-2 focus:ring-blue-500 focus:outline-none"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//         </div>
//         <div className="bg-white p-4 shadow rounded-lg">
//           <div className="text-lg font-bold mb-4">Users Table</div>
//           <div className="overflow-x-auto overflow-y-auto">
//             <table className="min-w-full bg-white rounded-lg shadow-md">
//               <thead>
//                 <tr className="bg-gray-100">
//                   <th className="py-3 px-4 text-left text-gray-700">Name</th>
//                   <th className="py-3 px-4 text-left text-gray-700">CNIC</th>
//                   <th className="py-3 px-4 text-left text-gray-700">Phone</th>
//                   <th className="py-3 px-4 text-left text-gray-700">Address</th>
//                   <th className="py-3 px-4 text-left text-gray-700">Purpose</th>
//                   <th className="py-3 px-4 text-left text-gray-700">
//                     Token No
//                   </th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {detail.length > 0 ? (
//                   detail.map((user, index) => (
//                     <tr key={index} className="border-b hover:bg-gray-50">
//                       <td className="py-3 px-4">{user.name}</td>
//                       <td className="py-3 px-4">{user.cnic}</td>
//                       <td className="py-3 px-4">{user.phone}</td>
//                       <td className="py-3 px-4">{user.address}</td>
//                       <td className="py-3 px-4">{user.purpose}</td>
//                       <td className="py-3 px-4">{user.tokenNo}</td>
//                     </tr>
//                   ))
//                 ) : (
//                   <tr>
//                     <td colSpan="6" className="py-4 text-center">
//                       No data found
//                     </td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     );
// }
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../constants";

export default function SearchCustomer() {
  const [originalDetail, setOriginalDetail] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [detail, setDetail] = useState([]);

  const fetchBeneficiaryInfo = async () => {
    try {
      const response = await fetch(`${BASE_URL}/auth/register`);
      const result = await response.json();
      if (response.ok) {
        setOriginalDetail(result.users);
        setDetail(result.users);
      } else {
        console.error("Failed to fetch users");
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    fetchBeneficiaryInfo();
  }, []);

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

  return (
    <div className="flex flex-col items-center p-4 w-full max-w-3xl mx-auto">
      <input
        type="text"
        placeholder="Search by CNIC or Phone"
        className="border border-gray-300 text-black rounded px-4 py-2 w-full sm:w-3/4 md:w-2/3 lg:w-1/2 transition focus:ring-2 focus:ring-blue-500 focus:outline-none"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="bg-white mt-6 w-full overflow-hidden shadow-lg rounded-lg">
        <div className="text-xl font-semibold bg-gray-100 p-4 border-b">
          Users Table
        </div>
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr className="bg-blue-500 text-white">
                <th className="py-3 px-4 text-left">Name</th>
                <th className="py-3 px-4 text-left">CNIC</th>
                <th className="py-3 px-4 text-left">Phone</th>
                <th className="py-3 px-4 text-left">Address</th>
                <th className="py-3 px-4 text-left">Purpose</th>
                <th className="py-3 px-4 text-left">Token No</th>
              </tr>
            </thead>
            <tbody>
              {detail.length > 0 ? (
                detail.map((user, index) => (
                  <tr
                    key={index}
                    className="border-b even:bg-gray-50 hover:bg-gray-100"
                  >
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
  );
}
