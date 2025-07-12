import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../../assets/SamaKa.png";
import { getSidebarLinkClass } from "../../utils/utils.js";
import { useAuth } from "../../context/AuthContext.jsx";
import api from "../../../axious.js";
import { showConfirmation, showSuccess } from "../../utils/alertHelper.js";

const UserSidebar = ({ isOpen = true, onToggle }) => {
  const { setUser } = useAuth();
  const navigate = useNavigate();
  const [isProcessingLogout, setIsProcessingLogout] = useState(false);
  const user = {
    name: "Juan Dela Cruz",
    level: 5,
    xp: 320,
    xpMax: 500,
    avatar: logo,
  };

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
    <aside
      className={`w-64 bg-bgColor2 h-screen fixed top-0 left-0 flex flex-col justify-between shadow-xl z-40 transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } lg:translate-x-0 rounded-r-3xl border-r-4 border-primary/20`}
    >
      <button
        className="lg:hidden absolute top-4 right-4 text-headingText"
        onClick={() => (onToggle ? onToggle() : null)}
      >
        <i className="fa-solid fa-xmark text-2xl"></i>
      </button>
      <div>
        <div className="flex items-center space-x-3 p-4 pt-10">
          <img src={logo} alt="logo" className="h-10 w-10" />
          <p className="text-h4 font-bold text-headingText">
            <span className="text-primary">Bayani</span>
            <span className="text-subHeadingText">Mo</span>
          </p>
        </div>
        <nav className="mt-2 flex flex-col space-y-3 px-3">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-xl font-semibold shadow-sm transition-all duration-200 text-lg ${
                isActive
                  ? "bg-primary/10 border-l-4 border-primary text-primary scale-105 shadow-md"
                  : "bg-white border-l-4 border-transparent text-headingText hover:bg-primary/5 hover:scale-105"
              }`
            }
            end
          >
            <span className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-primary text-xl shadow-sm">
              <i className="fa-solid fa-house"></i>
            </span>
            <span>Dashboard</span>
          </NavLink>
          <NavLink
            to="/events"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-xl font-semibold shadow-sm transition-all duration-200 text-lg ${
                isActive
                  ? "bg-primary/10 border-l-4 border-primary text-primary scale-105 shadow-md"
                  : "bg-white border-l-4 border-transparent text-headingText hover:bg-primary/5 hover:scale-105"
              }`
            }
          >
            <span className="w-10 h-10 flex items-center justify-center rounded-full bg-green/10 text-green text-xl shadow-sm">
              <i className="fa-solid fa-calendar-days"></i>
            </span>
            <span>Events</span>
          </NavLink>
          <NavLink
            to="/leaderboard"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-xl font-semibold shadow-sm transition-all duration-200 text-lg ${
                isActive
                  ? "bg-primary/10 border-l-4 border-primary text-primary scale-105 shadow-md"
                  : "bg-white border-l-4 border-transparent text-headingText hover:bg-primary/5 hover:scale-105"
              }`
            }
          >
            <span className="w-10 h-10 flex items-center justify-center rounded-full bg-yellow-100 text-yellow-600 text-xl shadow-sm">
              <i className="fa-solid fa-ranking-star"></i>
            </span>
            <span>Leaderboard</span>
          </NavLink>
          <NavLink
            to="/store"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-xl font-semibold shadow-sm transition-all duration-200 text-lg ${
                isActive
                  ? "bg-primary/10 border-l-4 border-primary text-primary scale-105 shadow-md"
                  : "bg-white border-l-4 border-transparent text-headingText hover:bg-primary/5 hover:scale-105"
              }`
            }
          >
            <span className="w-10 h-10 flex items-center justify-center rounded-full bg-brown/10 text-brown text-xl shadow-sm">
              <i className="fa-solid fa-store"></i>
            </span>
            <span>Store</span>
          </NavLink>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-xl font-semibold shadow-sm transition-all duration-200 text-lg ${
                isActive
                  ? "bg-primary/10 border-l-4 border-primary text-primary scale-105 shadow-md"
                  : "bg-white border-l-4 border-transparent text-headingText hover:bg-primary/5 hover:scale-105"
              }`
            }
          >
            <span className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-primary text-xl shadow-sm">
              <i className="fa-solid fa-user"></i>
            </span>
            <span>Profile</span>
          </NavLink>
        </nav>
      </div>

      <div className="p-4 border-t border-gray-200">
        <button
          onClick={handleLogout}
          disabled={isProcessingLogout}
          className="w-full flex items-center gap-3 text-white bg-red px-4 py-3 rounded-xl font-semibold shadow-md hover:bg-red-600 transition-colors disabled:opacity-70 disabled:cursor-not-allowed text-lg"
        >
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 text-white text-xl shadow-sm">
            <i className="fa-solid fa-right-from-bracket"></i>
          </span>
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default UserSidebar;
