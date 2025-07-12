import { useState } from "react";
import Sidebar from "../components/navigation/Sidebar.jsx";

const BarangayDashboard = () => {
  const overviewData = [
    { label: "Total Events", value: 12 },
    { label: "Ongoing Events", value: 4 },
    { label: "Upcoming Events", value: 3 },
    { label: "Past Events", value: 5 },
  ];

  const upcomingActivities = [
    { title: "Tree Planting", date: "July 12, 2025" },
    { title: "Coastal Cleanup", date: "August 2, 2026" },
    { title: "Recycling Drive", date: "August 15, 2026" },
  ];

  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex">
      <Sidebar isOpen={isSidebarOpen} onToggle={() => setSidebarOpen(!isSidebarOpen)} />

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
            <span>Barangay Dashboard</span>
          </h1>

          <button className="bg-primary text-white px-4 py-2 rounded-lg font-semibold shadow hover:bg-blue-600 transition-all flex items-center space-x-2">
            <i className="fa-solid fa-plus"></i>
            <span>Create Events / Activities</span>
          </button>
        </div>

   
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
      
          <div className="bg-white rounded-lg p-6 shadow-md flex flex-col justify-between">
            <h2 className="font-semibold text-headingText mb-2 flex items-center space-x-2">
              <i className="fa-solid fa-calendar-plus text-primary"></i>
              <span>Create Events / Activities</span>
            </h2>
            <p className="text-subHeadingText text-sm mb-4">
              Organize new events or activities for your barangay community.
            </p>
            <button className="bg-primary text-white w-full py-2 rounded-lg font-semibold flex items-center justify-center space-x-2">
              <i className="fa-solid fa-plus"></i>
              <span>Create Event / Activity</span>
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
   
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h2 className="font-semibold text-headingText mb-4 flex items-center space-x-2">
              <i className="fa-solid fa-clock-rotate-left text-primary"></i>
              <span>Upcoming Activities</span>
            </h2>

            <div className="space-y-3">
              {upcomingActivities.map((activity, idx) => (
                <div
                  key={idx}
                  className="border rounded-lg px-4 py-2 text-headingText text-sm flex justify-between items-center hover:bg-bgColor2"
                >
                  <span>{activity.title}</span>
                  <span className="text-subHeadingText text-xs">
                    {activity.date}
                  </span>
                </div>
              ))}
            </div>
          </div>

     
          <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-semibold text-headingText flex items-center space-x-2">
                <i className="fa-solid fa-chart-column text-primary"></i>
                <span>Analytics</span>
              </h2>

              <select className="border rounded-md text-sm px-2 py-1">
                <option>Filter: weekly</option>
                <option>Filter: monthly</option>
                <option>Filter: yearly</option>
              </select>
            </div>

            <div className="h-64 bg-bgColor2 rounded-lg flex items-center justify-center text-subHeadingText">
              Analytics Chart Placeholder
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BarangayDashboard; 