import { useState, useEffect } from "react";
import MunicipalitySidebar from "../components/navigation/MunicipalitySidebar.jsx";
import { createBarangayAccount, fetchBarangays } from "../services/barangayService.js";
import { showSuccess, showError } from "../utils/alertHelper.js";

const ManageBarangays = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const [form, setForm] = useState({
    barangayName: "",
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    contactNumber: "",
  });

  const [barangays, setBarangays] = useState([]);

  const loadBarangays = async () => {
    try {
      const list = await fetchBarangays();
      setBarangays(list);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    loadBarangays();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      showError("Passwords do not match");
      return;
    }
    try {
      await createBarangayAccount({
        barangayName: form.barangayName,
        firstName: form.firstName,
        lastName: form.lastName,
        username: form.username,
        email: form.email,
        password: form.password,
      });

      showSuccess("Barangay account created!");
      setForm({
        barangayName: "",
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        contactNumber: "",
      });
      loadBarangays();
    } catch (err) {
      showError(err.response?.data?.error || err.message);
    }
  };

  return (
    <div className="flex">
      <MunicipalitySidebar isOpen={isSidebarOpen} onToggle={() => setSidebarOpen(!isSidebarOpen)} />
      <main className="w-full bg-bgColor min-h-screen p-6 ml-0 lg:ml-60 transition-all duration-300">
        <div className="flex items-center mb-6">
          <button
            className="lg:hidden text-headingText mr-2"
            onClick={() => setSidebarOpen(!isSidebarOpen)}
          >
            <i className="fas fa-bars text-2xl"></i>
          </button>
          <h1 className="text-headingText text-2xl font-bold font-nunito flex items-center space-x-2">
            <i className="fa-solid fa-users-gear text-primary"></i>
            <span>Manage Barangays</span>
          </h1>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-md max-w-2xl mx-auto">
          <h2 className="text-headingText text-xl font-semibold mb-4 flex items-center space-x-2">
            <span>Create Barangay Account</span>
          </h2>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-subHeadingText mb-1">First Name</label>
                <input type="text" id="firstName" name="firstName" value={form.firstName} onChange={handleChange} className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary" required />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-subHeadingText mb-1">Last Name</label>
                <input type="text" id="lastName" name="lastName" value={form.lastName} onChange={handleChange} className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary" required />
              </div>
            </div>
            <div>
              <label htmlFor="barangayName" className="block text-sm font-medium text-subHeadingText mb-1">Barangay Name</label>
              <input type="text" id="barangayName" name="barangayName" value={form.barangayName} onChange={handleChange} className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary" placeholder="e.g., Barangay 1" required />
            </div>

            <div>
              <label htmlFor="username" className="block text-sm font-medium text-subHeadingText mb-1">Username</label>
              <input type="text" id="username" name="username" value={form.username} onChange={handleChange} className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Choose a username" />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-subHeadingText mb-1">Email</label>
              <input type="email" id="email" name="email" value={form.email} onChange={handleChange} className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary" placeholder="example@domain.com" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-subHeadingText mb-1">Password</label>
                <input type="password" id="password" name="password" value={form.password} onChange={handleChange} className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-subHeadingText mb-1">Confirm Password</label>
                <input type="password" id="confirmPassword" name="confirmPassword" value={form.confirmPassword} onChange={handleChange} className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
            </div>

            <div>
              <label htmlFor="contactNumber" className="block text-sm font-medium text-subHeadingText mb-1">Contact Number</label>
              <input type="tel" id="contactNumber" name="contactNumber" value={form.contactNumber} onChange={handleChange} className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary" placeholder="e.g., 09xxxxxxxxx" />
            </div>

            <button type="submit" className="bg-primary text-white px-4 py-2 rounded-lg font-semibold shadow hover:bg-blue-600 transition-all">
              Create Barangay
            </button>
          </form>
        </div>
        {barangays.length > 0 && (
          <div className="bg-white rounded-lg p-6 shadow-md max-w-2xl mx-auto mt-8">
            <h2 className="text-headingText text-xl font-semibold mb-4 flex items-center space-x-2">
              <span>Existing Barangays</span>
            </h2>
            <ul className="space-y-2">
              {barangays.map((brgy) => (
                <li key={brgy._id} className="flex justify-between text-sm border-b last:border-b-0 py-1">
                  <span>{brgy.barangayName}</span>
                </li>
              ))}
            </ul>
          </div>) }
      </main>
    </div>
  );
};

export default ManageBarangays; 