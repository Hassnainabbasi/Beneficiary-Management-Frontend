
// import { Link } from "react-router-dom";
// import "../../assets/saylani.png";
// import { useState } from "react";
// import AdminLoginForm from "../../admin/AdminFrom";
// function HomePage() {
//     const [active , setActive] = useState('default')

//     const handleCheck = (componet) =>{
//     setActive(componet)
//     }
//     return (
        
//        <div>
//         {active === 'default' && (
//              <div className="bg-white">
//              <header className="flex justify-between items-center p-4 bord
//              er-b">
//                  <img src="https://saylaniwelfare.com/static/media/logo_saylaniwelfare.22bf709605809177256c.png" alt="Saylani Welfare Logo" className="h-12"/>
//                  <nav className="space-x-8">
//                   <Link to="/reception" className="text-gray-600 hover:text-gray-800">Reception</Link>
//                    <Link to={'/departmentStaff'} className="text-gray-600 hover:text-gray-800">Department</Link>
//                  </nav>
//                  <div className="space-x-2">
//                      <button className="bg-blue-600 text-white px-4 py-2 rounded">DONATE NOW</button>
//                  <button value='admin' 
//                  onClick={() => handleCheck('admin')}
//                  className="bg-green-500 text-white px-4 py-2 rounded">Login Admin</button>
//                  </div>
//              </header>
//              <main className="p-8">
//                  <h1 className="text-4xl font-bold text-gray-800">
//                      Welcome to the <span className="text-green-500">Saylani</span> Welfare Non Governmental Organization in Pakistan
//                  </h1>
//                  <h2 className="text-2xl font-bold text-gray-800 mt-4">
//                      The largest NGO offering free <span className="text-blue-600">as</span>
//                  </h2>
//                  <p className="text-gray-600 mt-4">
//                      Saylani Welfare is on the ground and already working with local communities to assess how best to support underprivileged families in more than 63 areas of day to day lives.
//                  </p>
//                  <button className="mt-6 px-6 py-2 border border-gray-800 text-gray-800 rounded hover:bg-gray-100">
//                      Explorer More <i className="fas fa-arrow-right ml-2"></i>
//                  </button>
//                  <div className="mt-8 flex space-x-4">
//                      <img src="https://res.cloudinary.com/saylani-welfare/image/upload/v1646926708/website-images/static/38.png" alt="Volunteers distributing food" className="rounded-full"/>
                     
//                  </div>
//              </main>
//          </div>
//         )}
//         {active === 'admin' &&(
//             <AdminLoginForm />
//         )}
//        </div>
//     );
// };


// export default HomePage;
import { Link } from "react-router-dom";
import "../../assets/saylani.png";
import { useState } from "react";
import AdminLoginForm from "../../admin/AdminFrom";

function HomePage() {
    const [active, setActive] = useState('default');

    const handleCheck = (component) => {
        setActive(component);
    };

    return (
        <div>
            {active === 'default' && (
                <div className="bg-white min-h-screen">
                    <header className="flex flex-wrap justify-between items-center p-4 bg-gray-900 text-white">
                        <img
                            src="https://saylaniwelfare.com/static/media/logo_saylaniwelfare.22bf709605809177256c.png"
                            alt="Saylani Welfare Logo"
                            className="h-10 sm:h-12 md:h-14"
                        />
                        <nav className="flex space-x-4 sm:space-x-6 text-sm sm:text-base">
                            <Link to="/reception" className="hover:text-green-500 transition">Reception</Link>
                            <Link to="/departmentStaff" className="hover:text-green-500 transition">Department</Link>
                        </nav>
                        <div className="space-x-2 sm:space-x-3">
                            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                                DONATE NOW
                            </button>
                            <button
                                value="admin"
                                onClick={() => handleCheck('admin')}
                                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
                            >
                                Login Admin
                            </button>
                        </div>
                    </header>

                    <main className="px-6 py-8 sm:px-8 sm:py-12 md:px-16 md:py-20">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-800 leading-tight mb-4">
                            Welcome to the <span className="text-green-500">Saylani</span> Welfare Non-Governmental Organization
                            in Pakistan
                        </h1>
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-700 mb-6">
                            The largest NGO offering free <span className="text-blue-600">assistance</span>
                        </h2>
                        <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6">
                            Saylani Welfare is on the ground and already working with local communities to assess how best to
                            support underprivileged families in more than 63 areas of day-to-day life.
                        </p>
                        <button className="mt-6 px-6 py-3 border border-gray-800 text-gray-800 rounded-lg hover:bg-gray-100 transition flex items-center">
                            Explore More <i className="fas fa-arrow-right ml-2"></i>
                        </button>

                        <div className="mt-8 flex justify-center sm:justify-start space-x-4">
                            <img
                                src="https://res.cloudinary.com/saylani-welfare/image/upload/v1646926708/website-images/static/38.png"
                                alt="Volunteers distributing food"
                                className="rounded-xl shadow-lg w-full sm:w-3/4 md:w-1/2 lg:w-1/3 object-cover"
                            />
                        </div>
                    </main>

                   
                </div>
            )}

            {active === 'admin' && (
                <AdminLoginForm />
            )}
        </div>
    );
}

export default HomePage;
