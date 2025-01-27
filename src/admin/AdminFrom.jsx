import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function AdminLoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate()
    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log("Email:", email);
        console.log("Password:", password);

        try {
            const response = await fetch("http://localhost:5000/auth/admins", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({email,password}),
              });
        
              const result = await response.json();      
              if(response.ok){
             Swal.fire("Assistance details updated successfully!");
             navigate('/admin')
              }  
             else {
                alert(result.message || "Failed to update assistance details.");
              }
        } catch (error) {
            console.log(error)
        }
      };
    
        
      
  return (
    <div className="h-screen bg-teal-700 flex justify-center items-center">
      <div
        className="rounded-full shadow-xl p-12 flex flex-col justify-center items-center"
        style={{
          background: "linear-gradient(to top, green 50%, seagreen 50%)",
          width: "500px",
          height: "500px", // Custom size
        }}
      >
        <h2 className="text-2xl font-bold text-white text-center ">
          Login
        </h2>
        <form onSubmit={handleSubmit} className="w-full">
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-white text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-green-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
           />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-white text-sm font-bold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-green-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
         />
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
