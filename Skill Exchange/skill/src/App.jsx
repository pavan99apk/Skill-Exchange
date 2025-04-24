import { Routes, Route, useLocation } from "react-router-dom";
import "./assets/adminlte.css";
import "./assets/adminlte.min.css";
import { UserProfile } from "./components/user/UserProfile";
import { Login } from "./components/common/Login";
import { Signup } from "./components/common/Signup";
import { AdminSidebar } from "./components/layouts/AdminSidebar";
import { AdminProfile } from "./components/admin/AdminProfile";
import Home from "./components/HomePage";
import ManageUser from "./components/admin/ManageUser";
import ManageSkill from "./components/admin/ManageSkill";
import ManageSession from "./components/admin/ManageSession";
import Feedback from "./components/admin/Feedback";
import Dashboard from "./components/admin/Dashboard";
import { UserNavbar } from "./components/layouts/UserNavbar";
import UserHome from "./components/user/UserHome";
import Skill from "./components/user/Skill";
import Session from "./components/user/Session";
import Contact from "./components/user/Contact";
import axios  from "axios";
import ForgotPassword from "./components/common/Forgotpassword";

axios.defaults.baseURL = "http://localhost:3000";

function App() {
  const location = useLocation();

  return (
    <div className={["/login", "/signup", "/addscreen"].includes(location.pathname) ? "app-wrap" : ""}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* User Routes */}
        <Route path="/user" element={<UserNavbar />}>
          <Route path="userprofile" element={<UserProfile />} />
          <Route path="userhome" element={<UserHome />} />
          <Route path="skill" element={<Skill />} />
          <Route path="session" element={<Session />} />
          <Route path="contact" element={<Contact />} />
        </Route>

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminSidebar />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="profile" element={<AdminProfile />} />
          <Route path="manageuser" element={<ManageUser />} />
          <Route path="manageskill" element={<ManageSkill />} />
          <Route path="managesession" element={<ManageSession />} />
          <Route path="feedback" element={<Feedback />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
