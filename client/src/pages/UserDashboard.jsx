import { useState } from "react";
import UserSidebar from "../components/navigation/UserSidebar.jsx";
import { useNavigate } from "react-router-dom";

const UserDashboard = () => {
  const overviewData = [
    { label: "Total Items Collected", value: 23 },
    { label: "Current Rank in Leaderboard", value: 23 },
    { label: "Certificates Provided", value: 23 },
    { label: "Rewards Claimed", value: 23 },
  ];

  const navigate = useNavigate();
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex">
      <UserSidebar isOpen={isSidebarOpen} onToggle={() => setSidebarOpen(!isSidebarOpen)} />

      <main className="w-full bg-bgColor min-h-screen p-6 ml-0 lg:ml-60 transition-all duration-300">
       
        <div className="flex justify-between items-center mb-6">

          <button
            className="lg:hidden text-headingText mr-2"
            onClick={() => setSidebarOpen(!isSidebarOpen)}
          >
            <i className="fas fa-bars text-2xl"></i>
          </button>
          <h1 className="text-headingText text-2xl font-bold font-nunito flex items-center space-x-2">
            <i className="fa-solid fa-gauge-high text-primary"></i>
            <span>Dashboard</span>
          </h1>
          <button className="bg-primary text-white px-4 py-2 rounded-lg font-semibold shadow hover:bg-blue-600 transition-all flex items-center space-x-2" onClick={() => navigate('/events')}>
            <span>Join Activities</span>
          </button>
        </div>

  
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
     
          <div className="bg-white rounded-lg p-6 shadow-md flex flex-col justify-between">
            <h2 className="font-semibold text-headingText mb-2 flex items-center space-x-2">
              <i className="fa-solid fa-handshake-angle text-primary"></i>
              <span>Join Activities</span>
            </h2>
            <p className="text-subHeadingText text-sm mb-4">
              Ready to accumulate more lingkod points?
            </p>
            <button className="bg-primary text-white w-full py-2 rounded-lg font-semibold flex items-center justify-center space-x-2" onClick={() => navigate('/events')}>
              <span>Join Activities</span>
            </button>
          </div>

 
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h2 className="font-semibold text-headingText mb-4 flex items-center space-x-2">
              <i className="fa-solid fa-chart-pie text-primary"></i>
              <span>Quick Overview</span>
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {overviewData.map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col items-center bg-bgColor2 rounded-lg py-4"
                >
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

          <div className="bg-white rounded-lg p-6 shadow-md flex flex-col space-y-4">
            <h2 className="font-semibold text-headingText flex items-center space-x-2">
              <i className="fa-solid fa-clock-rotate-left text-primary"></i>
              <span>Recent Activities</span>
            </h2>
            {[
              "Tree Planting",
              "Beach Cleanup",
              "Plastic Collection",
            ].map((activity, idx) => (
              <div
                key={idx}
                className="border rounded-lg px-4 py-2 text-headingText text-sm flex justify-between items-center hover:bg-bgColor2"
              >
                <span>{activity}</span>
                <span className="text-subHeadingText text-xs">2025-06-24</span>
              </div>
            ))}
          </div>


          <div className="bg-white rounded-lg p-6 shadow-md">
            <h2 className="font-semibold text-headingText mb-4 flex items-center space-x-2">
              <i className="fa-solid fa-shield-halved text-primary"></i>
              <span>Badges</span>
            </h2>
            <div className="h-32 bg-bgColor2 rounded-lg flex items-center justify-center text-subHeadingText">
              Badges Placeholder
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UserDashboard; 