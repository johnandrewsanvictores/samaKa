import { useState } from "react";
import Sidebar from "../components/navigation/Sidebar.jsx";

const getRowClass = (rank) => {
  if (rank === 1) return "bg-yellow-300 text-yellow-900 font-bold animate-pulse";
  if (rank === 2) return "bg-gray-300 text-gray-800 font-semibold";
  if (rank === 3) return "bg-amber-700 bg-opacity-50 text-amber-100 font-semibold";
  return "";
};

const getRankIcon = (rank) => {
  if (rank === 1)
    return <i className="fa-solid fa-crown text-yellow-500 mr-2"></i>;
  if (rank === 2)
    return <i className="fa-solid fa-medal text-gray-500 mr-2"></i>;
  if (rank === 3)
    return <i className="fa-solid fa-medal text-amber-200 mr-2"></i>;
  return null;
};

const BarangayLeaderboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

 
  const data = [
    { rank: 1, name: "Resident A", xp: 1200 },
    { rank: 2, name: "Resident B", xp: 1100 },
    { rank: 3, name: "Resident C", xp: 1050 },
    { rank: 4, name: "Resident D", xp: 950 },
    { rank: 5, name: "Resident E", xp: 900 },
  ];

  // For highlight of current barangay admin account if desired (placeholder)
  const currentUser = { name: "You (Barangay Account)", xp: 0, rank: 0 };

  const isCurrentUserInTop10 = data.some((row) => row.name === currentUser.name);

  return (
    <div className="flex">
      <Sidebar isOpen={isSidebarOpen} onToggle={() => setSidebarOpen(!isSidebarOpen)} />

      <main className="w-full bg-bgColor min-h-screen p-6 ml-0 lg:ml-60 transition-all duration-300">
        <div className="flex justify-between items-center mb-6">
          {/* Toggle button for mobile */}
          <button
            className="lg:hidden text-headingText mr-2"
            onClick={() => setSidebarOpen(!isSidebarOpen)}
          >
            <i className="fas fa-bars text-2xl"></i>
          </button>
          <h1 className="text-headingText text-2xl font-bold font-nunito flex items-center space-x-2">
            <i className="fa-solid fa-medal text-primary"></i>
            <span>Barangay Leaderboard</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Table */}
          <div className="bg-white rounded-lg shadow-md overflow-x-auto lg:col-span-2">
            <table className="min-w-full text-left">
              <thead>
                <tr className="bg-bgColor2 text-headingText">
                  <th className="px-4 py-2">Rank</th>
                  <th className="px-4 py-2">Resident</th>
                  <th className="px-4 py-2">XP</th>
                </tr>
              </thead>
              <tbody>
                {data.map((row) => (
                  <tr
                    key={row.rank}
                    className={`border-b border-gray-200 hover:bg-gray-50 transition-colors ${getRowClass(
                      row.rank
                    )}`}
                  >
                    <td className="px-4 py-2 font-semibold flex items-center">
                      {getRankIcon(row.rank)}
                      {row.rank}
                    </td>
                    <td className="px-4 py-2 text-subHeadingText">{row.name}</td>
                    <td className="px-4 py-2 text-headingText font-medium">{row.xp}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Highlight current user if outside top list */}
            {!isCurrentUserInTop10 && (
              <div className="mt-4 flex items-center justify-center">
                <div className="w-full max-w-xl bg-primary/10 border border-primary rounded-lg px-6 py-4 flex items-center space-x-4 shadow-inner animate-fade-in">
                  <span className="text-lg font-bold text-primary flex items-center">
                    <i className="fa-solid fa-user-circle mr-2"></i>
                    {currentUser.rank}
                  </span>
                  <span className="text-headingText font-semibold flex-1">
                    {currentUser.name}
                  </span>
                  <span className="text-headingText font-medium">{currentUser.xp} XP</span>
                  <span className="ml-2 text-xs text-primary font-semibold bg-primary/20 px-2 py-1 rounded">Your Rank</span>
                </div>
              </div>
            )}
          </div>

          {/* Reminder Side Panel */}
          <div className="bg-white rounded-lg p-6 shadow-md flex flex-col space-y-3">
            <h2 className="font-semibold text-headingText flex items-center space-x-2">
              <i className="fa-solid fa-bell text-primary"></i>
              <span>Reminder</span>
            </h2>
            <p className="text-subHeadingText text-sm">
              Top-performing residents will receive special recognition at the end of the month.
            </p>
            <ul className="list-disc list-inside text-subHeadingText text-sm space-y-1">
              <li><span className="font-bold text-yellow-700">Top 1</span> – 5000 points reward</li>
              <li><span className="font-bold text-gray-700">Top 2</span> – 2500 points reward</li>
              <li><span className="font-bold text-amber-700">Top 3</span> – 2000 points reward</li>
              <li><span className="font-bold text-primary">Top 4</span> – 1500 points reward</li>
              <li><span className="font-bold text-primary">Top 5</span> – 1000 points reward</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BarangayLeaderboard; 