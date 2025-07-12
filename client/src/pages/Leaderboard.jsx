import UserSidebar from "../components/navigation/UserSidebar.jsx";
import { useState } from "react";

const getRowClass = (rank) => {
  if (rank === 1)
    return "bg-yellow-300 text-yellow-900 font-bold animate-pulse";
  if (rank === 2) return "bg-gray-300 text-gray-800 font-semibold";
  if (rank === 3)
    return "bg-amber-700 bg-opacity-50 text-amber-100 font-semibold";
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

const Leaderboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const data = [
    { rank: 1, name: "John Andrew San Victores", xp: 1000 },
    { rank: 2, name: "Nicko Balmes", xp: 980 },
    { rank: 3, name: "Uriel Sebastian Andrei Diomano", xp: 950 },
    { rank: 4, name: "Kenneth Alojado", xp: 930 },
    { rank: 5, name: "John Andrew San Victorres", xp: 900 },
    { rank: 6, name: "John Andrew San Victorres", xp: 880 },
    { rank: 7, name: "John Andrew San Victorres", xp: 860 },
    { rank: 8, name: "John Andrew San Victorres", xp: 840 },
    { rank: 9, name: "John Andrew San Victorres", xp: 820 },
    { rank: 10, name: "John Andrew San Victorres", xp: 800 },
  ];

  const currentUser = {
    name: "You (Daniel Llarena)",
    xp: 650,
    rank: 23,
  };

  const isCurrentUserInTop10 = data.some(
    (row) => row.name === currentUser.name
  );

  return (
    <div className="flex">
      <UserSidebar
        isOpen={isSidebarOpen}
        onToggle={() => setSidebarOpen(!isSidebarOpen)}
      />

      <main className="w-full bg-bgColor min-h-screen p-6 ml-0 lg:ml-60 transition-all duration-300">
        <div className="flex justify-between items-center mb-6">
          <button
            className="lg:hidden text-headingText mr-2"
            onClick={() => setSidebarOpen(!isSidebarOpen)}
          >
            <i className="fas fa-bars text-2xl"></i>
          </button>
          <h1 className="text-headingText text-2xl font-bold font-nunito flex items-center space-x-2">
            <i className="fa-solid fa-award text-primary"></i>
            <span>Leaderboard</span>
          </h1>
          <button className="bg-primary text-white px-4 py-2 rounded-lg font-semibold shadow hover:bg-blue-600 transition-all flex items-center space-x-2">
            <span>Join Activities</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl shadow-lg overflow-x-auto lg:col-span-2 border border-primary/10">
            <table className="min-w-full text-left rounded-2xl overflow-hidden">
              <thead>
                <tr className="bg-bgColor2 text-headingText">
                  <th className="px-4 py-2">Rank</th>
                  <th className="px-4 py-2">Name</th>
                  <th className="px-4 py-2">XP</th>
                </tr>
              </thead>
              <tbody>
                {data.map((row) => (
                  <tr
                    key={row.rank}
                    className={`border-b border-gray-200 hover:bg-primary/10 transition-colors ${getRowClass(
                      row.rank
                    )} ${row.rank <= 3 ? "scale-[1.01] shadow-md" : ""}`}
                  >
                    <td className="px-4 py-2 font-semibold flex items-center gap-2">
                      {getRankIcon(row.rank)}
                      <span
                        className={`inline-block w-8 h-8 rounded-full text-center font-bold ${
                          row.rank === 1
                            ? "bg-yellow-300 text-yellow-900 animate-pulse"
                            : row.rank === 2
                            ? "bg-gray-300 text-gray-800"
                            : row.rank === 3
                            ? "bg-amber-700 bg-opacity-50 text-amber-100"
                            : "bg-bgColor2 text-headingText"
                        }`}
                      >
                        {row.rank}
                      </span>
                    </td>
                    <td className="px-4 py-2 text-subHeadingText font-semibold">
                      {row.name}
                    </td>
                    <td className="px-4 py-2 text-headingText font-bold">
                      {row.xp}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {!isCurrentUserInTop10 && (
              <div className="mt-4 flex items-center justify-center">
                <div className="w-full max-w-xl bg-gradient-to-r from-primary/10 to-blue-100/50 border border-primary rounded-2xl px-6 py-4 flex items-center space-x-4 shadow-inner animate-fade-in">
                  <span className="text-lg font-bold text-primary flex items-center">
                    <i className="fa-solid fa-user-circle mr-2"></i>
                    {currentUser.rank}
                  </span>
                  <span className="text-headingText font-semibold flex-1">
                    {currentUser.name}
                  </span>
                  <span className="text-headingText font-bold">
                    {currentUser.xp} XP
                  </span>
                  <span className="ml-2 text-xs text-primary font-semibold bg-primary/20 px-2 py-1 rounded-full ring-2 ring-primary/30">
                    Your Rank
                  </span>
                </div>
              </div>
            )}
          </div>

          <div className="bg-gradient-to-br from-yellow-100 via-primary/10 to-blue-100 rounded-2xl p-6 shadow-lg flex flex-col space-y-3 border border-primary/10">
            <h2 className="font-semibold text-headingText flex items-center space-x-2">
              <i className="fa-solid fa-bell text-primary animate-bounce"></i>
              <span>Reminder!!!</span>
            </h2>
            <p className="text-subHeadingText text-sm">
              The player who is in the top 5 will receive a reward at the end of
              the month.
            </p>
            <ul className="list-none text-subHeadingText text-sm space-y-2 mt-2">
              <li className="flex items-center gap-2">
                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-yellow-300 text-yellow-900 font-bold text-lg shadow">
                  <i className="fa-solid fa-crown"></i> 1
                </span>
                <span className="font-bold text-yellow-700">Top 1</span> will
                receive 5000 points
              </li>
              <li className="flex items-center gap-2">
                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-300 text-gray-800 font-bold text-lg shadow">
                  <i className="fa-solid fa-medal"></i> 2
                </span>
                <span className="font-bold text-gray-700">Top 2</span> will
                receive 2500 points
              </li>
              <li className="flex items-center gap-2">
                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-amber-700 bg-opacity-50 text-amber-100 font-bold text-lg shadow">
                  <i className="fa-solid fa-medal"></i> 3
                </span>
                <span className="font-bold text-amber-700">Top 3</span> will
                receive 2000 points
              </li>
              <li className="flex items-center gap-2">
                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-lg shadow">
                  4
                </span>
                <span className="font-bold text-primary">Top 4</span> will
                receive 1500 points
              </li>
              <li className="flex items-center gap-2">
                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-lg shadow">
                  5
                </span>
                <span className="font-bold text-primary">Top 5</span> will
                receive 1000 points
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Leaderboard;
