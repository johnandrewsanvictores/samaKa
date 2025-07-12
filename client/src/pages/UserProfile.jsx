import UserSidebar from "../components/navigation/UserSidebar.jsx";

const UserProfile = () => {
  return (
    <div className="flex">
      <UserSidebar />

      <main className="ml-60 w-full bg-bgColor min-h-screen p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-headingText text-2xl font-bold font-nunito flex items-center space-x-2">
            <i className="fa-solid fa-user text-primary"></i>
            <span>Profile</span>
          </h1>
          <button className="bg-primary text-white px-4 py-2 rounded-lg font-semibold shadow hover:bg-blue-600 transition-all">
            Join Activities
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h2 className="font-semibold text-headingText mb-4">Personal Information</h2>
            <ul className="space-y-2 text-subHeadingText">
              <li>First Name: Juan</li>
              <li>Last Name: Dela Cruz</li>
              <li>Email: juan@example.com</li>
              <li>Username: juandelacruz</li>
            </ul>
          </div>

    
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h2 className="font-semibold text-headingText mb-4 flex items-center space-x-2">
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

         
          <div className="bg-white rounded-lg p-6 shadow-md md:col-span-2 flex flex-col md:flex-row items-center justify-between">
            <div>
              <h2 className="font-semibold text-headingText mb-4">Actions</h2>
              <ul className="space-y-0 flex flex-col md:flex-row md:space-x-6 md:space-y-0 items-center">
                <li>
                  <button className="text-primary hover:underline font-medium px-4 py-2 rounded transition-colors">
                    <i className="fa-solid fa-pen-to-square mr-2"></i>
                    Edit Profile
                  </button>
                </li>
                <li>
                  <button className="text-primary hover:underline font-medium px-4 py-2 rounded transition-colors">
                    <i className="fa-solid fa-lock mr-2"></i>
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