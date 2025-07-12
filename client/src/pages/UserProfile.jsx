import UserSidebar from "../components/navigation/UserSidebar.jsx";
import { useState } from "react";
import logo from "../assets/SamaKa.png";

const user = {
  name: "Juan Dela Cruz",
  level: 5,
  xp: 320,
  xpMax: 500,
  avatar: logo,
  firstName: "Juan",
  lastName: "Dela Cruz",
  email: "juan@example.com",
  username: "juandelacruz",
};

const UserProfile = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="flex">
      <UserSidebar
        isOpen={isSidebarOpen}
        onToggle={() => setSidebarOpen(!isSidebarOpen)}
      />

      <main className="w-full bg-bgColor min-h-screen p-6 ml-0 lg:ml-60 transition-all duration-300">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-4 bg-white rounded-2xl shadow-lg px-6 py-4 border border-primary/10 w-full sm:w-auto">
            <div className="relative">
              <img
                src={user.avatar}
                alt="avatar"
                className="w-16 h-16 rounded-full border-4 border-primary shadow-md bg-bgColor object-cover"
              />
              <span className="absolute -bottom-2 right-0 bg-primary text-white text-xs font-bold px-2 py-0.5 rounded-full shadow">
                Lv. {user.level}
              </span>
            </div>
            <div>
              <div className="text-headingText font-bold text-lg mb-1">
                {user.name}
              </div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs text-subHeadingText">XP</span>
                <div className="w-28 h-2 bg-bgColor2 rounded-full overflow-hidden">
                  <div
                    className="h-2 bg-primary rounded-full transition-all"
                    style={{ width: `${(user.xp / user.xpMax) * 100}%` }}
                  ></div>
                </div>
                <span className="text-xs text-subHeadingText">
                  {user.xp}/{user.xpMax}
                </span>
              </div>
            </div>
          </div>
          <button className="bg-primary text-white px-6 py-3 rounded-xl font-semibold shadow hover:bg-blue-600 transition-all flex items-center space-x-2 text-lg">
            <i className="fa-solid fa-bolt"></i>
            <span>Edit Profile</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-primary/10">
            <h2 className="font-semibold text-headingText mb-4 flex items-center gap-2">
              <i className="fa-solid fa-user text-primary"></i>
              Personal Information
            </h2>
            <ul className="space-y-2 text-subHeadingText">
              <li>First Name: {user.firstName}</li>
              <li>Last Name: {user.lastName}</li>
              <li>Email: {user.email}</li>
              <li>Username: {user.username}</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-primary/10">
            <h2 className="font-semibold text-headingText mb-4 flex items-center gap-2">
              <i className="fa-solid fa-key text-primary"></i>
              <span>Password</span>
            </h2>
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="password"
                placeholder="Old Password"
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                type="password"
                placeholder="New Password"
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                type="password"
                placeholder="Confirm New Password"
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary sm:col-span-2"
              />
            </form>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-primary/10 md:col-span-2 flex flex-col md:flex-row items-center justify-between">
            <div>
              <h2 className="font-semibold text-headingText mb-4">Actions</h2>
              <ul className="space-y-0 flex flex-col md:flex-row md:space-x-6 md:space-y-0 items-center">
                <li>
                  <button className="bg-primary text-white px-4 py-2 rounded-lg font-semibold shadow hover:bg-blue-600 transition-all flex items-center gap-2">
                    <i className="fa-solid fa-pen-to-square"></i>
                    Edit Profile
                  </button>
                </li>
                <li>
                  <button className="bg-primary text-white px-4 py-2 rounded-lg font-semibold shadow hover:bg-blue-600 transition-all flex items-center gap-2">
                    <i className="fa-solid fa-lock"></i>
                    Change Password
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex justify-center mt-8 md:mt-6 md:col-span-2">
            <button className="bg-primary text-white px-8 py-3 rounded-lg font-semibold shadow hover:bg-blue-600 transition-all text-lg">
              Save Changes
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UserProfile;
