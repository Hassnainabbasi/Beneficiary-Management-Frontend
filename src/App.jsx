import Reception from "./pages/reception/reception";
import StaffForm from "./pages/departmentStaff/department";
import AdminDashboard from "./admin/Admin";

import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Footer from "./pages/Footer";
import HomePage from "./pages/landingPage/landingPage";


export default function App() {

  const location = useLocation()
  const isAdminPage = location.pathname === "/admin" ;

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/admin" element={<AdminDashboard/>}/>
        <Route path="/reception" element={<Reception />} />
        <Route path="/departmentStaff" element={<StaffForm />} />
          </Routes>
          {!isAdminPage && <Footer />}
    </>

  );
}
