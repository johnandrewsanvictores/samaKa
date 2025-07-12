import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../../assets/SamaKa.png";
import { getSidebarLinkClass } from "../../utils/utils.js";
import { useAuth } from "../../context/AuthContext.jsx";
import api from "../../../axious.js";
import { showConfirmation, showSuccess } from "../../utils/alertHelper.js";

const Sidebar = () => {
  const { user, setUser } = useAuth();
  const navigate = useNavigate();
  const [isProcessingLogout, setIsProcessingLogout] = useState(false);

  const handleLogout = async () => {
    try {
      const confirmed = await showConfirmation({
        title: "Log out?",
        text: "Are you sure you want to log out?",
        confirmButtonText: "Log Out",
      });

      if (!confirmed) return;

      setIsProcessingLogout(true);
      const res = await api.post("/auth/logout");
      setUser(null);
      showSuccess(res.data.message);
      navigate("/");
    } catch (error) {
      console.error("Logout failed", error);
    } finally {
      setIsProcessingLogout(false);
    }
  };

  return (
    <aside className="w-60 bg-bgColor2 h-screen fixed top-0 left-0 flex flex-col justify-between shadow-md z-40">

      <div>
        <div className="flex items-center space-x-3 p-4">
          <img src={logo} alt="logo" className="h-8 w-8" />
          <span className="font-nunito font-bold text-xl text-headingText">
            Sama<span className="text-primary">Ka</span>
          </span>
        </div>
        <nav className="mt-4 flex flex-col space-y-1 px-2">
          <NavLink to="/barangay-dashboard" className={getSidebarLinkClass} end>
            <i className="fa-solid fa-house"></i>
            <span>Dashboard</span>
          </NavLink>
          <NavLink to="/manage-events" className={getSidebarLinkClass}>
            <i className="fa-solid fa-calendar-days"></i>
            <span>Manage Events</span>
          </NavLink>
          <NavLink to="/analytics" className={getSidebarLinkClass}>
            <i className="fa-solid fa-chart-column"></i>
            <span>Analytics</span>
          </NavLink>
          <NavLink to="/rewards" className={getSidebarLinkClass}>
            <i className="fa-solid fa-gift"></i>
            <span>Rewards</span>
          </NavLink>
          <NavLink to="/profile" className={getSidebarLinkClass}>
            <i className="fa-solid fa-user"></i>
            <span>Profile</span>
          </NavLink>
        </nav>
      </div>

      {/* Logout */}
      <div className="p-4 border-t border-gray-200">
        <button
          onClick={handleLogout}
          disabled={isProcessingLogout}
          className="w-full flex items-center space-x-2 text-red hover:text-white hover:bg-red rounded-lg px-3 py-2 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
        >
          <i className="fa-solid fa-right-from-bracket"></i>
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar; 