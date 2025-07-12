import { useState } from "react";
import UserSidebar from "../components/navigation/UserSidebar.jsx";
import { useNavigate } from "react-router-dom";
import logo from "../assets/SamaKa.png";

const user = {
  name: "Juan Dela Cruz",
  level: 5,
  xp: 320,
  xpMax: 500,
  avatar: logo,
};

const badges = [
  {
    name: "Community Hero",
    icon: "fa-solid fa-medal",
    color: "bg-yellow-300 text-yellow-900",
    earned: true,
  },
  {
    name: "Eco Warrior",
    icon: "fa-solid fa-leaf",
    color: "bg-green/20 text-green-700",
    earned: true,
  },
  {
    name: "Volunteer",
    icon: "fa-solid fa-hands-helping",
    color: "bg-primary/20 text-primary",
    earned: false,
  },
  {
    name: "Top Collector",
    icon: "fa-solid fa-crown",
    color: "bg-brown/20 text-brown",
    earned: false,
  },
];

const UserDashboard = () => {
  const overviewData = [
    {
      label: "Total Items Collected",
      value: 23,
      icon: "fa-solid fa-box",
      color: "bg-primary/10 text-primary",
    },
    {
      label: "Current Rank in Leaderboard",
      value: 7,
      icon: "fa-solid fa-trophy",
      color: "bg-yellow-100 text-yellow-700",
    },
    {
      label: "Certificates Provided",
      value: 3,
      icon: "fa-solid fa-certificate",
      color: "bg-green/10 text-green",
    },
    {
      label: "Rewards Claimed",
      value: 5,
      icon: "fa-solid fa-gift",
      color: "bg-brown/10 text-brown",
    },
  ];

  const navigate = useNavigate();
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex">
      <UserSidebar
        isOpen={isSidebarOpen}
        onToggle={() => setSidebarOpen(!isSidebarOpen)}
      />

      <main className="w-full bg-bgColor min-h-screen p-4 sm:p-6 ml-0 lg:ml-64 transition-all duration-300">
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
            <span>Join Activities</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div className="bg-gradient-to-br from-primary/10 to-blue-100/50 rounded-2xl p-6 shadow-lg flex flex-col justify-between hover:scale-[1.02] transition-transform duration-200 border border-primary/10">
            <h2 className="font-semibold text-headingText mb-2 flex items-center space-x-2">
              <i className="fa-solid fa-handshake-angle text-primary"></i>
              <span>Join Activities</span>
            </h2>
            <p className="text-subHeadingText text-sm mb-4">
              Ready to accumulate more lingkod points?
            </p>
            <button className="bg-primary text-white w-full py-2 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:bg-blue-600 transition-all">
              <i className="fa-solid fa-bolt"></i>
              <span>Join Activities</span>
            </button>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-primary/10">
            <h2 className="font-semibold text-headingText mb-4 flex items-center space-x-2">
              <i className="fa-solid fa-chart-pie text-primary"></i>
              <span>Quick Overview</span>
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {overviewData.map((item) => (
                <div
                  key={item.label}
                  className={`flex flex-col items-center rounded-xl py-4 px-2 shadow-sm bg-white border-2 ${item.color} hover:scale-105 transition-transform duration-200`}
                >
                  <span
                    className={`mb-2 text-xl rounded-full p-2 ${item.color}`}
                  >
                    <i className={item.icon}></i>
                  </span>
                  <span className="text-2xl font-bold text-headingText">
                    {item.value}
                  </span>
                  <span className="text-subHeadingText text-xs text-center px-2">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-primary/10 flex flex-col space-y-4">
            <h2 className="font-semibold text-headingText flex items-center space-x-2">
              <i className="fa-solid fa-clock-rotate-left text-primary"></i>
              <span>Recent Activities</span>
            </h2>
            {[
              {
                name: "Tree Planting",
                date: "2025-06-24",
                icon: "fa-solid fa-tree",
                color: "bg-green/10 text-green",
              },
              {
                name: "Beach Cleanup",
                date: "2025-06-20",
                icon: "fa-solid fa-water",
                color: "bg-blue-100 text-primary",
              },
              {
                name: "Plastic Collection",
                date: "2025-06-18",
                icon: "fa-solid fa-recycle",
                color: "bg-yellow-100 text-yellow-700",
              },
            ].map((activity, idx) => (
              <div
                key={idx}
                className="border rounded-xl px-4 py-2 text-headingText text-sm flex justify-between items-center hover:bg-bgColor2 transition-colors group"
              >
                <div className="flex items-center gap-2">
                  <span
                    className={`w-8 h-8 flex items-center justify-center rounded-full ${activity.color}`}
                  >
                    <i className={activity.icon}></i>
                  </span>
                  <span>{activity.name}</span>
                </div>
                <span className="text-subHeadingText text-xs">
                  {activity.date}
                </span>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-primary/10">
            <h2 className="font-semibold text-headingText mb-4 flex items-center space-x-2">
              <i className="fa-solid fa-shield-halved text-primary"></i>
              <span>Badges</span>
            </h2>
            <div className="flex flex-wrap gap-4 items-center justify-center">
              {badges.map((badge, idx) => (
                <div
                  key={badge.name}
                  className={`flex flex-col items-center gap-1 ${
                    badge.earned ? "" : "opacity-50"
                  }`}
                  title={badge.earned ? badge.name : `Locked: ${badge.name}`}
                >
                  <span
                    className={`w-12 h-12 flex items-center justify-center rounded-full text-2xl shadow ${
                      badge.color
                    } ${badge.earned ? "ring-2 ring-primary" : "ring-0"}`}
                  >
                    <i className={badge.icon}></i>
                  </span>
                  <span className="text-xs text-headingText font-semibold text-center">
                    {badge.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UserDashboard;
