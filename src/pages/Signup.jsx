import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';


export default function Signup() {
 const [username , setUsername] = useState("") 
 const [email , setEmail] = useState("") 
 const [password , setPassword] = useState("")
 
 const navigate = useNavigate()

 const handleSubmit = async(e) =>{
 e.preventDefault()
    console.log(username)
    console.log(email)
    console.log(password)
    const userRegisterdata = {username , email,password}

    try {
        let response = await fetch('http://localhost:5000/auth/register',{
            method : "POST",
             headers: {
                'Content-Type': 'application/json',
            },
            body : JSON.stringify(userRegisterdata)
        })

      const data = await response.json();
      console.log(data)
      if (data && !data.error) {
        navigate('/login');
      }
      else {
        alert(data.msg || 'Login failed');
      }
    } catch (error) {
        console.log(error)
    }
}
 
 return (
  <div className=''>
     <div className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 ">
    <div className="bg-blue-500 rounded-full h-20 w-20 " />
  </div>
  <div className="absolute bottom-0 left-0 transform -translate-x-1/2 translate-y-1/2">
    <div className="bg-blue-500 rounded-full h-20 w-20" />
  </div>
  <div className="bg-white rounded-3xl shadow-lg flex overflow-hidden max-w-4xl relative z-10">
    <div className="p-10 flex-1 relative">
      <h1 className="text-4xl font-bold mb-4">Welcome</h1>
      <p className="text-gray-500 mb-8">We are glad to see you back with us</p>
      <form>
        <div className="mb-4 relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
          <FontAwesomeIcon icon={faUser} className="text-gray-400" />
             </span>
          <input
           type="text"
           name="username"
           id="username"
            className="w-full pl-10 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required=""
         
          />
        </div>
        <div className="mb-4 relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
          <FontAwesomeIcon icon={faEnvelope} className="text-gray-400" />
           </span>
          <input
           type="email"
                           name="email"
                           id="email"
            className="w-full pl-10 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Email"
            value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required=""
               
          />
        </div>
        <div className="mb-4 relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
          <FontAwesomeIcon icon={faLock} className="text-gray-400" />
           </span>
          <input
           type="password"
                           name="password"
                           id="Password"
            className="w-full pl-10 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="password"
            value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required=""
               
          />
        </div>
        <button onClick={handleSubmit} className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition duration-300">
          LOGIN
        </button>
      </form>
      <div className="mt-8 text-center">
      <div className="flex items-center justify-center mb-4">
        <hr className="w-full border-gray-300" />
        <span className="px-2 text-gray-500">Or</span>
        <hr className="w-full border-gray-300" />
      </div>
        <button className="w-full flex items-center justify-center border py-2 rounded-lg mb-4 hover:bg-gray-100 transition duration-300">
          <img
            alt="Google logo"
            className="mr-2"
            height={20}
            src="https://w7.pngwing.com/pngs/882/225/png-transparent-google-logo-google-logo-google-search-icon-google-text-logo-business-thumbnail.png"
            width={20}
          />
          <span className="text-gray-700">Login with google</span>
        </button>
        <button className="w-full flex items-c  enter justify-center border py-2 rounded-lg hover:bg-gray-100 transition duration-300">
          <img
            alt="Facebook logo"
            className="mr-2 rounded-sm"
            height={20}
            src="https://store-images.s-microsoft.com/image/apps.30645.9007199266245907.cb06f1f9-9154-408e-b4ef-d19f2325893b.ac3b465e-4384-42a8-9142-901c0405e1bc"
            width={20}
          />
          <span className="text-gray-700">Login with facebook</span>
        </button>
      </div>
    </div>
    <div className="hidden md:block md:w-1/2">
      <img
        alt="A child in an blue suit with a futuristic background"
        className="w-full h-full object-cover rounded-3xl"
        height={600}
        src="https://avada.website/tour-operator/wp-content/uploads/sites/169/2022/06/maldives-tour.jpg"
        width={600}
      />
    </div>
  </div>
  </div>
  )
}
