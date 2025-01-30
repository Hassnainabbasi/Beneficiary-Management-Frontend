
// // // // import { Link } from "react-router-dom";
// // // // import "../../assets/saylani.png";
// // // // import { useState } from "react";
// // // // import AdminLoginForm from "../../admin/AdminFrom";
// // // // function HomePage() {
// // // //     const [active , setActive] = useState('default')

// // // //     const handleCheck = (componet) =>{
// // // //     setActive(componet)
// // // //     }
// // // //     return (
        
// // // //        <div>
// // // //         {active === 'default' && (
// // // //              <div className="bg-white">
// // // //              <header className="flex justify-between items-center p-4 bord
// // // //              er-b">
// // // //                  <img src="https://saylaniwelfare.com/static/media/logo_saylaniwelfare.22bf709605809177256c.png" alt="Saylani Welfare Logo" className="h-12"/>
// // // //                  <nav className="space-x-8">
// // // //                   <Link to="/reception" className="text-gray-600 hover:text-gray-800">Reception</Link>
// // // //                    <Link to={'/departmentStaff'} className="text-gray-600 hover:text-gray-800">Department</Link>
// // // //                  </nav>
// // // //                  <div className="space-x-2">
// // // //                      <button className="bg-blue-600 text-white px-4 py-2 rounded">DONATE NOW</button>
// // // //                  <button value='admin' 
// // // //                  onClick={() => handleCheck('admin')}
// // // //                  className="bg-green-500 text-white px-4 py-2 rounded">Login Admin</button>
// // // //                  </div>
// // // //              </header>
// // // //              <main className="p-8">
// // // //                  <h1 className="text-4xl font-bold text-gray-800">
// // // //                      Welcome to the <span className="text-green-500">Saylani</span> Welfare Non Governmental Organization in Pakistan
// // // //                  </h1>
// // // //                  <h2 className="text-2xl font-bold text-gray-800 mt-4">
// // // //                      The largest NGO offering free <span className="text-blue-600">as</span>
// // // //                  </h2>
// // // //                  <p className="text-gray-600 mt-4">
// // // //                      Saylani Welfare is on the ground and already working with local communities to assess how best to support underprivileged families in more than 63 areas of day to day lives.
// // // //                  </p>
// // // //                  <button className="mt-6 px-6 py-2 border border-gray-800 text-gray-800 rounded hover:bg-gray-100">
// // // //                      Explorer More <i className="fas fa-arrow-right ml-2"></i>
// // // //                  </button>
// // // //                  <div className="mt-8 flex space-x-4">
// // // //                      <img src="https://res.cloudinary.com/saylani-welfare/image/upload/v1646926708/website-images/static/38.png" alt="Volunteers distributing food" className="rounded-full"/>
                     
// // // //                  </div>
// // // //              </main>
// // // //          </div>
// // // //         )}
// // // //         {active === 'admin' &&(
// // // //             <AdminLoginForm />
// // // //         )}
// // // //        </div>
// // // //     );
// // // // };


// // // // export default HomePage;
// // // import { Link } from "react-router-dom";
// // // import "../../assets/saylani.png";
// // // import { useState } from "react";
// // // import AdminLoginForm from "../../admin/AdminFrom";

// // // function HomePage() {
// // //     const [active, setActive] = useState('default');

// // //     const handleCheck = (component) => {
// // //         setActive(component);
// // //     };

// // //     return (
// // //         <div>
// // //             {active === 'default' && (
// // //                 <div className="bg-white min-h-screen">
// // //                     <header className="flex flex-wrap justify-between items-center p-4 bg-gray-900 text-white">
// // //                         <img
// // //                             src="https://saylaniwelfare.com/static/media/logo_saylaniwelfare.22bf709605809177256c.png"
// // //                             alt="Saylani Welfare Logo"
// // //                             className="h-10 sm:h-12 md:h-14"
// // //                         />
// // //                         <nav className="flex space-x-4 sm:space-x-6 text-sm sm:text-base">
// // //                             <Link to="/reception" className="hover:text-green-500 transition">Reception</Link>
// // //                             <Link to="/departmentStaff" className="hover:text-green-500 transition">Department</Link>
// // //                         </nav>
// // //                         <div className="space-x-2 sm:space-x-3">
// // //                             <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
// // //                                 DONATE NOW
// // //                             </button>
// // //                             <button
// // //                                 value="admin"
// // //                                 onClick={() => handleCheck('admin')}
// // //                                 className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
// // //                             >
// // //                                 Login Admin
// // //                             </button>
// // //                         </div>
// // //                     </header>

                    // <main className="px-6 py-8 sm:px-8 sm:py-12 md:px-16 md:py-20">
                    //     <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-800 leading-tight mb-4">
                    //         Welcome to the <span className="text-green-500">Saylani</span> Welfare Non-Governmental Organization
                    //         in Pakistan
                    //     </h1>
                    //     <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-700 mb-6">
                    //         The largest NGO offering free <span className="text-blue-600">assistance</span>
                    //     </h2>
                    //     <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6">
                    //         Saylani Welfare is on the ground and already working with local communities to assess how best to
                    //         support underprivileged families in more than 63 areas of day-to-day life.
                    //     </p>
                    //     <button className="mt-6 px-6 py-3 border border-gray-800 text-gray-800 rounded-lg hover:bg-gray-100 transition flex items-center">
                    //         Explore More <i className="fas fa-arrow-right ml-2"></i>
                    //     </button>

                    //     <div className="mt-8 flex justify-center sm:justify-start space-x-4">
                    //         <img
                    //             src="https://res.cloudinary.com/saylani-welfare/image/upload/v1646926708/website-images/static/38.png"
                    //             alt="Volunteers distributing food"
                    //             className="rounded-xl shadow-lg w-full sm:w-3/4 md:w-1/2 lg:w-1/3 object-cover"
                    //         />
                    //     </div>
                    // </main>

                   
// // //                 </div>
// // //             )}

// // //             {active === 'admin' && (
// // //                 <AdminLoginForm />
// // //             )}
// // //         </div>
// // //     );
// // // }

// // // export default HomePage;
// // import { Link } from "react-router-dom";
// // import "../../assets/saylani.png";
// // import { useState, useEffect } from "react";
// // import AdminLoginForm from "../../admin/AdminFrom";

// // function HomePage() {
// //     const [active, setActive] = useState('default');
// //     const [loading, setLoading] = useState(true);

// //     const handleCheck = (component) => {
// //         setActive(component);
// //     };

// //     useEffect(() => {
// //         // Simulating a loading delay to show skeleton for 3 seconds
// //         setTimeout(() => {
// //             setLoading(false);
// //         }, 3000);
// //     }, []);

// //     const skeleton = (
// //         <div className="bg-gray-200 animate-pulse p-6 rounded-lg shadow-md">
// //             <div className="flex space-x-4">
// //                 <div className="bg-blue-100 h-48 w-1/2 rounded-lg" />
// //                 <div className="bg-blue-100 h-48 w-1/2 rounded-lg" />
// //             </div>
// //             <div className="mt-6 space-y-4">
// //                 <div className="bg-blue-100 h-4 w-3/4 rounded" />
// //                 <div className="bg-blue-100 h-4 w-2/3 rounded" />
// //                 <div className="bg-blue-100 h-4 w-1/2 rounded" />
// //                 <div className="bg-blue-100 h-4 w-5/6 rounded" />
// //                 <div className="bg-blue-100 h-4 w-1/3 rounded" />
// //             </div>
// //         </div>
// //     );

// //     return (
// //         <div>
// //             {active === 'default' && (
// //                 <div className="bg-white min-h-screen">
// //                     <div className="flex">
// //     {/* Sidebar */}
// //     <div className="bg-green-500 text-white w-64 min-h-screen p-4">
// //       <div className="text-2xl font-bold mb-6">Sidebar</div>
// //       <hr className="border-t border-green-300 mb-6" />
// //       <ul>
// //         <li className="mb-4">
// //           <a
// //             href="#"
// //             className="flex items-center p-2 bg-white text-green-500 rounded-md"
// //           >
// //             <i className="fas fa-home mr-3" /> Home
// //           </a>
// //         </li>
// //         <li className="mb-4">
// //           <a href="#" className="flex items-center p-2">
// //             <i className="fas fa-th-large mr-3" /> Dashboard
// //           </a>
// //         </li>
// //         <li className="mb-4">
// //           <a href="#" className="flex items-center p-2">
// //             <i className="fas fa-calendar-alt mr-3" /> Orders
// //           </a>
// //         </li>
// //         <li className="mb-4">
// //           <a href="#" className="flex items-center p-2">
// //             <i className="fas fa-box mr-3" /> Products
// //           </a>
// //         </li>
// //         <li className="mb-4">
// //           <a href="#" className="flex items-center p-2">
// //             <i className="fas fa-user mr-3" /> Customers
// //           </a>
// //         </li>
// //       </ul>
// //       <div className="mt-auto">
// //         <a href="#" className="flex items-center p-2">
// //           <i className="fas fa-cog mr-3" /> Settings
// //         </a>
// //       </div>
// //     </div>
// //     {/* Main Content */}
// //     <div className="flex-1 p-6">
// //       <div className="bg-white p-6 rounded-lg shadow-md">
// //         <div className="flex space-x-4">
// //           <div className="bg-blue-100 h-48 w-1/2 rounded-lg" />
// //           <div className="bg-blue-100 h-48 w-1/2 rounded-lg" />
// //         </div>
// //         <div className="mt-6 space-y-4">
// //           <div className="bg-blue-100 h-4 w-3/4 rounded" />
// //           <div className="bg-blue-100 h-4 w-2/3 rounded" />
// //           <div className="bg-blue-100 h-4 w-1/2 rounded" />
// //           <div className="bg-blue-100 h-4 w-5/6 rounded" />
// //           <div className="bg-blue-100 h-4 w-1/3 rounded" />
// //         </div>
// //       </div>
// //     </div>
// //   </div>

// //                     <main className="px-6 py-8 sm:px-8 sm:py-12 md:px-16 md:py-20">
// //                         <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-800 leading-tight mb-4">
// //                             Welcome to the <span className="text-green-500">Saylani</span> Welfare Non-Governmental Organization in Pakistan
// //                         </h1>
// //                         <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-700 mb-6">
// //                             The largest NGO offering free <span className="text-blue-600">assistance</span>
// //                         </h2>
// //                         <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6">
// //                             Saylani Welfare is on the ground and already working with local communities to assess how best to
// //                             support underprivileged families in more than 63 areas of day-to-day life.
// //                         </p>
// //                         <button className="mt-6 px-6 py-3 border border-gray-800 text-gray-800 rounded-lg hover:bg-gray-100 transition flex items-center">
// //                             Explore More <i className="fas fa-arrow-right ml-2"></i>
// //                         </button>

// //                         {/* Image section */}
// //                         <div className="mt-8 flex justify-center sm:justify-start space-x-4">
// //                             {loading ? (
// //                                 skeleton
// //                             ) : (
// //                                 <img
// //                                     src="https://res.cloudinary.com/saylani-welfare/image/upload/v1646926708/website-images/static/38.png"
// //                                     alt="Volunteers distributing food"
// //                                     className="rounded-xl shadow-lg w-full sm:w-3/4 md:w-1/2 lg:w-1/3 object-cover"
// //                                 />
// //                             )}
// //                         </div>
// //                     </main>
// //                 </div>
// //             )}

// //             {active === 'admin' && <AdminLoginForm />}
// //         </div>
// //     );
// // }

// // export default HomePage;
// import { Link } from "react-router-dom";
// import "../../assets/saylani.png";
// import { useState, useEffect } from "react";
// import AdminLoginForm from "../../admin/AdminFrom";

// function HomePage() {
//     const [active, setActive] = useState('default');
//     const [loading, setLoading] = useState(true);
//     const [sidebarOpen, setSidebarOpen] = useState(false);

//     const handleCheck = (component) => {
//         setActive(component);
//     };

//     useEffect(() => {
//         // Simulating a loading delay to show skeleton for 3 seconds
//         setTimeout(() => {
//             setLoading(false);
//         }, 3000);
//     }, []);

//     const skeleton = (
//         <div className="bg-gray-200 animate-pulse p-6 rounded-lg shadow-md">
//             <div className="flex space-x-4">
//                 <div className="bg-blue-100 h-48 w-1/2 rounded-lg" />
//                 <div className="bg-blue-100 h-48 w-1/2 rounded-lg" />
//             </div>
//             <div className="mt-6 space-y-4">
//                 <div className="bg-blue-100 h-4 w-3/4 rounded" />
//                 <div className="bg-blue-100 h-4 w-2/3 rounded" />
//                 <div className="bg-blue-100 h-4 w-1/2 rounded" />
//                 <div className="bg-blue-100 h-4 w-5/6 rounded" />
//                 <div className="bg-blue-100 h-4 w-1/3 rounded" />
//             </div>
//         </div>
//     );

//     return (
//         <div className="flex">
//             {active === 'default' && (
//                 <div className="flex w-full min-h-screen">
                    // {/* Sidebar */}
                    // <div className={`bg-green-500 text-white w-64 sm:w-48 md:w-64 p-4 ${sidebarOpen ? 'block' : 'hidden'} sm:block sm:w-48 md:w-64`}>
                    //     <div className="text-2xl font-bold mb-6">Sidebar</div>
                    //     <hr className="border-t border-green-300 mb-6" />
                    //     <ul>
                    //         <li className="mb-4">
                    //             <a
                    //                 href="#"
                    //                 className="flex items-center p-2 bg-white text-green-500 rounded-md"
                    //             >
                    //                 <i className="fas fa-home mr-3" /> Home
                    //             </a>
                    //         </li>
                    //         <li className="mb-4">
                    //             <a href="#" className="flex items-center p-2">
                    //                 <i className="fas fa-th-large mr-3" /> Dashboard
                    //             </a>
                    //         </li>
                    //         <li className="mb-4">
                    //             <a href="#" className="flex items-center p-2">
                    //                 <i className="fas fa-calendar-alt mr-3" /> Reception
                    //             </a>
                    //         </li>
                    //         <li className="mb-4">
                    //             <a href="#" className="flex items-center p-2">
                    //                 <i className="fas fa-box mr-3" /> Department Staff
                    //             </a>
                    //         </li>
                    //         <li className="mb-4">
                    //             <a href="#" className="flex items-center p-2">
                    //                 <i className="fas fa-user mr-3" /> Reports
                    //             </a>
                    //         </li>
                    //     </ul>
                    // </div>

                    // {/* Main Content */}
                    // <div className="flex-1 p-6 sm:p-8 md:p-12">
                    //     {/* Hamburger Button for Mobile */}
                    //     <button 
                    //         className="sm:hidden text-2xl text-gray-700" 
                    //         onClick={() => setSidebarOpen(!sidebarOpen)}
                    //     >
                    //         ☰
                    //     </button>

//                         <main className="sm:px-6 sm:py-8 md:px-8 md:py-12">
//                             <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-800 leading-tight mb-4">
//                                 Welcome to the <span className="text-green-500">Saylani</span> Welfare Non-Governmental Organization in Pakistan
//                             </h1>
//                             <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-700 mb-6">
//                                 The largest NGO offering free <span className="text-blue-600">assistance</span>
//                             </h2>
//                             <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6">
//                                 Saylani Welfare is on the ground and already working with local communities to assess how best to
//                                 support underprivileged families in more than 63 areas of day-to-day life.
//                             </p>
//                             <button className="mt-6 px-6 py-3 border border-gray-800 text-gray-800 rounded-lg hover:bg-gray-100 transition flex items-center">
//                                 Explore More <i className="fas fa-arrow-right ml-2"></i>
//                             </button>

//                             {/* Image section */}
//                             <div className="mt-8 flex justify-center sm:justify-start space-x-4">
//                                 {loading ? (
//                                     skeleton
//                                 ) : (
//                                     <img
//                                         src="https://res.cloudinary.com/saylani-welfare/image/upload/v1646926708/website-images/static/38.png"
//                                         alt="Volunteers distributing food"
//                                         className="rounded-xl shadow-lg w-full sm:w-3/4 md:w-1/2 lg:w-1/3 object-cover"
//                                     />
//                                 )}
//                             </div>
//                         </main>
//                     </div>
//                 </div>
//             )}

//             {active === 'admin' && <AdminLoginForm />}
//         </div>
//     );
// }

// export default HomePage;
import { useState, useEffect } from "react";
import AdminLoginForm from "../../admin/AdminFrom";
import "font-awesome/css/font-awesome.min.css"; // Make sure Font Awesome is imported
import { CalendarIcon, UsersIcon } from "lucide-react";
import { Link } from "react-router-dom";

function HomePage() {
    const [active, setActive] = useState('default');
    const [loading, setLoading] = useState(true);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const handleCheck = (component) => {
        setActive(component);
    };

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);

    const skeleton = (
        <div className="bg-gray-200 animate-pulse p-6 rounded-lg shadow-md">
            <div className="flex space-x-4">
                <div className="bg-blue-100 h-48 w-1/2 rounded-lg" />
                <div className="bg-blue-100 h-48 w-1/2 rounded-lg" />
            </div>
            <div className="mt-6 space-y-4">
                <div className="bg-blue-100 h-4 w-3/4 rounded" />
                <div className="bg-blue-100 h-4 w-2/3 rounded" />
                <div className="bg-blue-100 h-4 w-1/2 rounded" />
                <div className="bg-blue-100 h-4 w-5/6 rounded" />
                <div className="bg-blue-100 h-4 w-1/3 rounded" />
            </div>
        </div>
    );

    return (
        <div className="flex">
            {active === 'default' && (
                <div className="flex w-full min-h-screen">
                    {/* Sidebar */}
                    <div
                        className={`bg-green-500 text-white ${sidebarOpen ? 'w-64 p-4' : 'w-0'} sm:w-64 md:w-64 transition-all duration-300 overflow-hidden`}
                    >
                       <h1 className="text-center mb-2 text-2xl items-center flex justify-center p-4">BMS</h1>
                        <hr className="border-t border-green-300 mb-6" />
                        <ul>
                            <li className="mb-4">
                    <Link to={'/'} className="flex items-center p-2 focus:bg-white focus:text-green-500 rounded-md">
                                    <i className="fa fa-home mr-3 px-2" /> Home
                                </Link>
                            </li>
                            <li className="mb-4">
                                <Link to={'/departmentstaff'} className="flex items-center p-2 focus:bg-white rounded-md focus:text-green-500">
                                    <i className="fa fa-th-large mr-3 px-2" /> Department Staff
                                </Link>
                            </li>
                            <li className="mb-4 px-2">
                                <Link to={'/reception'} className="flex items-center p-2 focus:bg-white rounded-md  focus:text-green-500">
                                <CalendarIcon className="h-5 w-5 mr-3 " /> Reception
                                </Link>
                            </li>
                            <li className="mb-4 px-2">
                                <Link onClick={() => handleCheck('admin')} className="flex px-2 items-center rounded-md  p-2 focus:bg-white focus:text-green-500">
                                <UsersIcon  
                                className="h-5 w-5 mr-3" />Admin 
                                </Link>
                            </li>
                            <li className="mb-4">
                                <Link to={'/'} className="flex items-center rounded-md  p-2 focus:bg-white focus:text-green-500">
                                    <i className="fa fa-user mr-3 px-2" /> Reports
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Main Content */}
                    <div className="flex-1 p-6 sm:p-8 ">
                    <main className="sm:px-6 sm:py-8 md:px-8 lg:px-16 lg:py-12">
    {/* Hamburger Menu Button */}
    <button
        className="sm:hidden text-2xl text-gray-700"
        onClick={() => setSidebarOpen(!sidebarOpen)}
    >
        ☰
    </button>

    {/* Main Content Wrapper */}
    {/* <div className="w-full block">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-800 mb-4 lg:mb-6 w-full">
            Welcome to the <span className="text-green-500">Saylani</span> Welfare Non-Governmental Organization in Pakistan
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-700 mb-4 lg:mb-6 w-full">
            The largest NGO offering free <span className="text-blue-600">assistance</span>
        </h2>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 mb-6 lg:mb-8 w-full">
            Saylani Welfare is on the ground and already working with local communities to assess how best to
            support underprivileged families in more than 63 areas of day-to-day life.
        </p>
        <div className="flex justify-center sm:justify-start w-full">
            <button className="mt-6 px-6 py-3 border border-gray-800 text-gray-800 rounded-lg hover:bg-gray-100 transition flex items-center">
                Explore More <i className="fa fa-arrow-right ml-2"></i>
            </button>
        </div>
    </div> */}

    {/* Image Section */}
    {/* <div className="mt-8 flex justify-center sm:justify-start w-full">
        {loading ? (
            skeleton
        ) : (
            <img
                src="https://res.cloudinary.com/saylani-welfare/image/upload/v1646926708/website-images/static/38.png"
                alt="Volunteers distributing food"
                className="rounded-xl shadow-lg w-full sm:w-3/4 md:w-1/2 lg:w-full object-cover"
            />
        )}
    </div> */}
</main>

                    </div>
                </div>
            )}
<div className="w-full">
{active === 'admin' && <AdminLoginForm/>}

</div>
        </div>

);
}

export default HomePage;
