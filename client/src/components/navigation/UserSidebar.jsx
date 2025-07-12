import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../../assets/SamaKa.png";
import { getSidebarLinkClass } from "../../utils/utils.js";
import { useAuth } from "../../context/AuthContext.jsx";
import api from "../../../axious.js";
import { showConfirmation, showSuccess } from "../../utils/alertHelper.js";

const UserSidebar = () => {
  const { setUser } = useAuth();
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
          <img src={logo} alt="logo" className="h-10 w-10" />
          <span className="font-nunito font-bold text-2xl text-headingText">
            Sama<span className="text-primary">Ka</span>
          </span>
        </div>
        <nav className="mt-4 flex flex-col space-y-2 px-2">
          <NavLink to="/dashboard" className={getSidebarLinkClass} end>
            <i className="fa-solid fa-house text-xl"></i>
            <span className="text-lg">Dashboard</span>
          </NavLink>
          <NavLink to="/leaderboard" className={getSidebarLinkClass}>
            <i className="fa-solid fa-ranking-star text-xl"></i>
            <span className="text-lg">Leaderboard</span>
          </NavLink>
          <NavLink to="/store" className={getSidebarLinkClass}>
            <i className="fa-solid fa-store text-xl"></i>
            <span className="text-lg">Store</span>
          </NavLink>
          <NavLink to="/profile" className={getSidebarLinkClass}>
            <i className="fa-solid fa-user text-xl"></i>
            <span className="text-lg">Profile</span>
          </NavLink>
        </nav>
      </div>

      <div className="p-4 border-t border-gray-200">
        <button
          onClick={handleLogout}
          disabled={isProcessingLogout}
          className="w-full flex items-center space-x-3 text-red hover:text-white hover:bg-red rounded-lg px-4 py-3 transition-colors disabled:opacity-70 disabled:cursor-not-allowed text-lg"
        >
          <i className="fa-solid fa-right-from-bracket text-xl"></i>
          <span className="text-lg">Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default UserSidebar; 