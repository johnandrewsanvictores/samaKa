import Sidebar from "../components/navigation/Sidebar.jsx";
import { useState } from "react";

const Analytics = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const metrics = [
    { label: "Total Events", value: 23 },
    { label: "Total Participants", value: 230 },
    { label: "Certificates Given", value: 45 },
    { label: "Rewards Claimed", value: 67 },
  ];

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
            <i className="fa-solid fa-chart-column text-primary"></i>
            <span>Analytics</span>
          </h1>

          <button className="bg-primary text-white px-4 py-2 rounded-lg font-semibold shadow hover:bg-blue-600 transition-all flex items-center space-x-2">
            <i className="fa-solid fa-plus"></i>
            <span>Create Events / Activities</span>
          </button>
        </div>

    
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
          {metrics.map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center bg-bgColor2 rounded-lg py-6"
            >
              <span className="text-3xl font-bold text-headingText">
                {item.value}
              </span>
              <span className="text-subHeadingText text-xs text-center px-2">
                {item.label}
              </span>
            </div>
          ))}
        </div>

  
        <div className="bg-white rounded-lg p-6 shadow-md">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-headingText flex items-center space-x-2">
              <i className="fa-solid fa-chart-line text-primary"></i>
              <span>Participants Trend</span>
            </h2>

            <select className="border rounded-md text-sm px-2 py-1">
              <option>Weekly</option>
              <option>Monthly</option>
              <option>Yearly</option>
            </select>
          </div>

          <div className="h-80 bg-bgColor2 rounded-lg flex items-center justify-center text-subHeadingText">
            Chart Placeholder
          </div>
        </div>
      </main>
    </div>
  );
};

export default Analytics; 