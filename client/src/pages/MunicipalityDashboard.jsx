import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MunicipalitySidebar from "../components/navigation/MunicipalitySidebar.jsx";
import { fetchBarangays } from "../services/barangayService.js";

const MunicipalityDashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [barangays, setBarangays] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const loadBarangays = async () => {
      try {
        const list = await fetchBarangays();
        setBarangays(list);
      } catch (err) {
        console.error(err);
      }
    };
    loadBarangays();
  }, []);

  return (
    <div className="flex">
      <MunicipalitySidebar isOpen={isSidebarOpen} onToggle={() => setSidebarOpen(!isSidebarOpen)} />

      <main className="w-full bg-bgColor min-h-screen p-6 ml-0 lg:ml-60 transition-all duration-300">
      
        <div className="flex justify-between items-center mb-6">
      
          <button
            className="lg:hidden text-headingText mr-2"
            onClick={() => setSidebarOpen(!isSidebarOpen)}
          >
            <i className="fas fa-bars text-2xl"></i>
          </button>
          <h1 className="text-headingText text-2xl font-bold font-nunito flex items-center space-x-2">
            <i className="fa-solid fa-city text-primary"></i>
            <span>Municipality Dashboard</span>
          </h1>
          <button className="bg-primary text-white px-4 py-2 rounded-lg font-semibold shadow hover:bg-blue-600 transition-all flex items-center space-x-2" onClick={() => navigate("/manage-barangays")}> 
            <i className="fa-solid fa-plus"></i>
            <span>Create Barangay</span>
          </button>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-md mb-6">
          <h2 className="font-semibold text-headingText mb-4 flex items-center space-x-2">
            <i className="fa-solid fa-users-gear text-primary"></i>
            <span>Barangays Under Municipality</span>
          </h2>
  
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {barangays.map((bgy, idx) => (
              <div
                key={idx}
                className="cursor-pointer border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow bg-bgColor2"
                onClick={() => console.log(`View details for ${bgy.barangayName || bgy.name}`)}
              >
                <h3 className="text-lg font-bold text-headingText mb-2">{bgy.barangayName || bgy.name}</h3>
                <p className="text-subHeadingText text-sm mb-1">
                  <i className="fa-solid fa-calendar-days text-primary mr-1"></i>
                  Events: {bgy.events ? bgy.events.length || bgy.events : 0}
                </p>
                <p className="text-subHeadingText text-sm">
                  <i className="fa-solid fa-users text-primary mr-1"></i>
                  Residents: {bgy.residents ?? 0}
                </p>
              </div>
            ))}
          </div>
        </div>

     
        <div className="bg-white rounded-lg p-6 shadow-md">
          <h2 className="font-semibold text-headingText mb-4 flex items-center space-x-2">
            <i className="fa-solid fa-calendar-days text-primary"></i>
            <span>All Events</span>
          </h2>
          <div className="h-64 bg-bgColor2 rounded-lg flex items-center justify-center text-subHeadingText">
            Events List Placeholder
          </div>
        </div>
      </main>
    </div>
  );
};

export default MunicipalityDashboard; 