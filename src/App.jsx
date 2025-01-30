import Reception from "./pages/reception/reception";
import StaffForm from "./pages/departmentStaff/department";
import AdminDashboard from "./admin/Admin";
import '@fortawesome/fontawesome-free/css/all.min.css';

import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Footer from "./pages/Footer";
import HomePage from "./pages/landingPage/landingPage";
import AdminLoginForm from "./admin/AdminFrom";
import Announcement from "./admin/Announcement";
import Reports from "./admin/Reports";
import ManageUser from "./admin/ManageUser";
import CommentSection from "./admin/CommentSection";


export default function App() {

  const location = useLocation()
  const isAdminPage = location.pathname === "/admin" ;

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/form" element={<AdminLoginForm />} />
        <Route path="/admin/announcement" element={<Announcement />} />
        <Route path="/admin/reports" element={<Reports />} />
        <Route path="/admin/manageusers" element={<ManageUser />} />
        <Route path="/admin/comment" element={<CommentSection />} />

        <Route path="/reception" element={<Reception />} />
        <Route path="/departmentStaff" element={<StaffForm />} />
      </Routes>
      {!isAdminPage && <Footer />}
    </>
  );
}
