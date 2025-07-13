import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import {
  Home,
  User,
  Trophy,
  Store,
  Calendar,
  Gift,
  BarChart3,
  Settings,
  Users,
  LogOut,
  Building2,
  MapPin,
} from "lucide-react";

const RoleBasedNav = () => {
  const { user, logout } = useAuth();
  const location = useLocation();

  if (!user) return null;

  const isActive = (path) => location.pathname === path;

  const navItemClass = (active) => `
    flex items-center gap-3 px-4 py-3 rounded-lg transition-colors duration-200
    ${
      active
        ? "bg-blue-100 text-blue-700 border-r-2 border-blue-700"
        : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
    }
  `;

  const handleLogout = async () => {
    await logout();
  };

  // Public User Navigation
  const PublicUserNav = () => (
    <>
      <Link to="/dashboard" className={navItemClass(isActive("/dashboard"))}>
        <User size={20} />
        <span>Dashboard</span>
      </Link>
      <Link to="/events" className={navItemClass(isActive("/events"))}>
        <Calendar size={20} />
        <span>Events</span>
      </Link>
      <Link
        to="/leaderboard"
        className={navItemClass(isActive("/leaderboard"))}
      >
        <Trophy size={20} />
        <span>Leaderboard</span>
      </Link>
      <Link to="/store" className={navItemClass(isActive("/store"))}>
        <Store size={20} />
        <span>Store</span>
      </Link>
      <Link to="/rewards" className={navItemClass(isActive("/rewards"))}>
        <Gift size={20} />
        <span>Rewards</span>
      </Link>
      <Link to="/profile" className={navItemClass(isActive("/profile"))}>
        <Settings size={20} />
        <span>Profile</span>
      </Link>
    </>
  );

  // Barangay Admin Navigation
  const BarangayAdminNav = () => (
    <>
      <Link
        to="/barangay-dashboard"
        className={navItemClass(isActive("/barangay-dashboard"))}
      >
        <Building2 size={20} />
        <span>Barangay Dashboard</span>
      </Link>
      <Link
        to="/manage-events"
        className={navItemClass(isActive("/manage-events"))}
      >
        <Calendar size={20} />
        <span>Manage Events</span>
      </Link>
      <Link
        to="/barangay-leaderboard"
        className={navItemClass(isActive("/barangay-leaderboard"))}
      >
        <Trophy size={20} />
        <span>Barangay Leaderboard</span>
      </Link>
      <Link to="/analytics" className={navItemClass(isActive("/analytics"))}>
        <BarChart3 size={20} />
        <span>Analytics</span>
      </Link>
      <Link to="/profile" className={navItemClass(isActive("/profile"))}>
        <Settings size={20} />
        <span>Profile</span>
      </Link>
    </>
  );

  // Municipality Admin Navigation
  const MunicipalityAdminNav = () => (
    <>
      <Link
        to="/municipality-dashboard"
        className={navItemClass(isActive("/municipality-dashboard"))}
      >
        <MapPin size={20} />
        <span>Municipality Dashboard</span>
      </Link>
      <Link
        to="/manage-barangays"
        className={navItemClass(isActive("/manage-barangays"))}
      >
        <Users size={20} />
        <span>Manage Barangays</span>
      </Link>
      <Link
        to="/manage-events"
        className={navItemClass(isActive("/manage-events"))}
      >
        <Calendar size={20} />
        <span>Manage Events</span>
      </Link>
      <Link to="/analytics" className={navItemClass(isActive("/analytics"))}>
        <BarChart3 size={20} />
        <span>Analytics</span>
      </Link>
      <Link to="/profile" className={navItemClass(isActive("/profile"))}>
        <Settings size={20} />
        <span>Profile</span>
      </Link>
    </>
  );

  const renderNavItems = () => {
    switch (user.role) {
      case "public_user":
        return <PublicUserNav />;
      case "barangay_admin":
        return <BarangayAdminNav />;
      case "municipality_admin":
        return <MunicipalityAdminNav />;
      default:
        return <PublicUserNav />;
    }
  };

  return (
    <nav className="w-64 bg-white shadow-lg h-screen">
      <div className="p-6">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">SK</span>
          </div>
          <div>
            <h2 className="font-semibold text-gray-900">SamaKa</h2>
            <p className="text-xs text-gray-500 capitalize">
              {user.role.replace("_", " ")}
            </p>
          </div>
        </div>

        <div className="space-y-2">{renderNavItems()}</div>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-3 w-full text-left text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200"
          >
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default RoleBasedNav;
