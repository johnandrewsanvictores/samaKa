import UserSidebar from "../components/navigation/UserSidebar.jsx";

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

const Leaderboard = () => {

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
      <UserSidebar />

      <main className="ml-60 w-full bg-bgColor min-h-screen p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-headingText text-2xl font-bold font-nunito flex items-center space-x-2">
            <i className="fa-solid fa-award text-primary"></i>
            <span>Leaderboard</span>
          </h1>
          <button className="bg-primary text-white px-4 py-2 rounded-lg font-semibold shadow hover:bg-blue-600 transition-all flex items-center space-x-2">
            <i className="fa-solid fa-flag-checkered"></i>
            <span>Join Activities</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
    
          <div className="bg-white rounded-lg shadow-md overflow-x-auto lg:col-span-2">
            <table className="min-w-full text-left">
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
                    className={`border-b border-gray-200 hover:bg-gray-50 transition-colors ${getRowClass(
                      row.rank
                    )}`}
                  >
                    <td className="px-4 py-2 font-semibold flex items-center">
                      {getRankIcon(row.rank)}
                      {row.rank}
                    </td>
                    <td className="px-4 py-2 text-subHeadingText">{row.name}</td>
                    <td className="px-4 py-2 text-headingText font-medium">
                      {row.xp}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

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
                  <span className="text-headingText font-medium">
                    {currentUser.xp} XP
                  </span>
                  <span className="ml-2 text-xs text-primary font-semibold bg-primary/20 px-2 py-1 rounded">
                    Your Rank
                  </span>
                </div>
              </div>
            )}
          </div>

   
          <div className="bg-white rounded-lg p-6 shadow-md flex flex-col space-y-3">
            <h2 className="font-semibold text-headingText flex items-center space-x-2">
              <i className="fa-solid fa-bell text-primary"></i>
              <span>Reminder!!!</span>
            </h2>
            <p className="text-subHeadingText text-sm">
              The player who is in the top 5 will receive a reward at the end of the month.
            </p>
            <ul className="list-disc list-inside text-subHeadingText text-sm space-y-1">
              <li>
                <span className="font-bold text-yellow-700">Top 1</span> will receive 5000 points
              </li>
              <li>
                <span className="font-bold text-gray-700">Top 2</span> will receive 2500 points
              </li>
              <li>
                <span className="font-bold text-amber-700">Top 3</span> will receive 2000 points
              </li>
              <li>
                <span className="font-bold text-primary">Top 4</span> will receive 1500 points
              </li>
              <li>
                <span className="font-bold text-primary">Top 5</span> will receive 1000 points
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Leaderboard; 