import { Routes, Route, Navigate } from "react-router-dom";

import Homepage from "./pages/Homepage.jsx";
import GoogleSuccess from "./pages/GoogleSuccess.jsx";
import { useAuth } from "./context/AuthContext.jsx";
import BarangayDashboard from "./pages/BarangayDashboard.jsx";
import UserDashboard from "./pages/UserDashboard.jsx";
import Leaderboard from "./pages/Leaderboard.jsx";
import Store from "./pages/Store.jsx";
import UserProfile from "./pages/UserProfile.jsx";
import ManageEvents from "./pages/ManageEvents.jsx";
import ManageBarangays from "./pages/ManageBarangays.jsx";
import Analytics from "./pages/Analytics.jsx";
import Rewards from "./pages/Rewards.jsx";
import BarangayLeaderboard from "./pages/BarangayLeaderboard.jsx";
import Events from "./pages/Events.jsx";
import MunicipalityDashboard from "./pages/MunicipalityDashboard.jsx";


function App() {
  const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();

    if (loading) return <p>Loading...</p>;

    return user ? children : <Navigate to="/" />;
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/google-success" element={<GoogleSuccess />} />


        <Route path="/barangay-dashboard" element={<BarangayDashboard />} />

       
        <Route path="/dashboard" element={<UserDashboard />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/store" element={<Store />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/manage-events" element={<ManageEvents />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/rewards" element={<Rewards />} />
        <Route path="/barangay-leaderboard" element={<BarangayLeaderboard />} />
        <Route path="/events" element={<Events />} />
        <Route path="/manage-barangays" element={<ManageBarangays />} />
        <Route path="/municipality-dashboard" element={<MunicipalityDashboard />} />
        
        {/* 
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <BarangayDashboard />
            </PrivateRoute>
          }
        />*/}
      </Routes>
    </>
  );
}

export default App;
