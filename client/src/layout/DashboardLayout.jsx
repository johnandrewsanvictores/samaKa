import React from "react";
import { useAuth } from "../context/AuthContext";
import RoleBasedNav from "../components/navigation/RoleBasedNav";
import { Navigate } from "react-router-dom";

const DashboardLayout = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/" />;
  }

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar Navigation */}
      <RoleBasedNav />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-semibold text-gray-900">
                Welcome back, {user.firstName}!
              </h1>
              <p className="text-sm text-gray-500 capitalize">
                {user.role.replace("_", " ")}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-medium">
                    {user.firstName.charAt(0)}
                    {user.lastName.charAt(0)}
                  </span>
                </div>
                <div className="text-sm">
                  <p className="font-medium text-gray-900">
                    {user.firstName} {user.lastName}
                  </p>
                  <p className="text-gray-500">{user.email}</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
