import UserSidebar from "../components/navigation/UserSidebar.jsx";
import currency from "../assets/lp.png";
import { useState } from "react";

const Store = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Items", icon: "🛍️" },
    { id: "cash", name: "Cash Rewards", icon: "💰" },
    { id: "services", name: "Services", icon: "🔧" },
    { id: "physical", name: "Physical Items", icon: "📦" },
  ];

  const storeItems = [
    {
      id: 1,
      name: "₱20 Cash Reward",
      category: "cash",
      points: 100,
      description: "Direct cash reward redeemable at barangay hall",
      image: "💰",
      available: true,
      cashValue: 20,
    },
    {
      id: 2,
      name: "₱50 Cash Reward",
      category: "cash",
      points: 250,
      description: "Direct cash reward redeemable at barangay hall",
      image: "💰",
      available: true,
      cashValue: 50,
    },
    {
      id: 3,
      name: "₱100 Cash Reward",
      category: "cash",
      points: 500,
      description: "Direct cash reward redeemable at barangay hall",
      image: "💰",
      available: true,
      cashValue: 100,
    },
    {
      id: 4,
      name: "₱200 Cash Reward",
      category: "cash",
      points: 1000,
      description: "Direct cash reward redeemable at barangay hall",
      image: "💰",
      available: true,
      cashValue: 200,
    },
    {
      id: 5,
      name: "Barangay T-Shirt",
      category: "physical",
      points: 300,
      description: "Custom designed Bayanimo community t-shirt",
      image: "👕",
      available: true,
    },
    {
      id: 6,
      name: "Community Mug",
      category: "physical",
      points: 150,
      description: "Bayanimo branded coffee mug",
      image: "☕",
      available: true,
    },
    {
      id: 7,
      name: "Barangay Cap",
      category: "physical",
      points: 200,
      description: "Stylish Bayanimo community cap",
      image: "🧢",
      available: true,
    },
    {
      id: 8,
      name: "Local Artisan Gift Basket",
      category: "physical",
      points: 800,
      description: "Curated basket from local artisans and producers",
      image: "🧺",
      available: true,
    },
    {
      id: 9,
      name: "Community Garden Plot",
      category: "services",
      points: 600,
      description:
        "Reserved plot in the barangay community garden for 6 months",
      image: "🌱",
      available: true,
    },
    {
      id: 10,
      name: "Barangay Hall Tour",
      category: "services",
      points: 200,
      description: "Exclusive behind-the-scenes tour of barangay operations",
      image: "🏛️",
      available: true,
    },
    {
      id: 11,
      name: "Community Workshop Pass",
      category: "services",
      points: 250,
      description: "Access to skill-building workshops and training sessions",
      image: "🔧",
      available: true,
    },
    {
      id: 12,
      name: "Library Premium Membership",
      category: "services",
      points: 400,
      description:
        "Premium membership with extended borrowing privileges for 1 year",
      image: "📚",
      available: true,
    },
    {
      id: 13,
      name: "Community Event VIP Pass",
      category: "services",
      points: 150,
      description: "VIP access to upcoming barangay events and celebrations",
      image: "🎪",
      available: true,
    },
    {
      id: 14,
      name: "Leadership Certificate",
      category: "services",
      points: 500,
      description: "Official certificate of community leadership and service",
      image: "📜",
      available: true,
    },
    {
      id: 15,
      name: "Community Service Award",
      category: "services",
      points: 1000,
      description: "Prestigious award for outstanding community service",
      image: "🏆",
      available: true,
    },
  ];

  const filteredItems =
    selectedCategory === "all"
      ? storeItems
      : storeItems.filter((item) => item.category === selectedCategory);

  const userPoints = 2000;

  const handlePurchase = (item) => {
    if (userPoints >= item.points) {
      alert(`Successfully purchased ${item.name} for ${item.points} points!`);
    } else {
      alert("Insufficient points to purchase this item.");
    }
  };

  return (
    <div className="flex">
      <UserSidebar
        isOpen={isSidebarOpen}
        onToggle={() => setSidebarOpen(!isSidebarOpen)}
      />

      <main className="w-full bg-bgColor min-h-screen ml-0 lg:ml-60 transition-all duration-300">
        <section className="py-8 sm:py-12 px-4 sm:px-6 bg-gradient-to-br from-primary/10 to-blue-100/50">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <button
                className="lg:hidden text-headingText mr-2"
                onClick={() => setSidebarOpen(!isSidebarOpen)}
              >
                <i className="fas fa-bars text-2xl"></i>
              </button>
              <h1 className="text-headingText text-2xl sm:text-3xl font-bold font-nunito flex items-center space-x-2">
                <i className="fa-solid fa-cart-shopping text-primary"></i>
                <span>Community Store</span>
              </h1>
              <button className="bg-primary text-white px-4 py-2 rounded-lg font-semibold shadow hover:bg-blue-600 transition-all flex items-center space-x-2">
                <span>Join Activities</span>
              </button>
            </div>

            <div className="bg-white p-16  rounded-xl shadow-lg border border-gray-100 mb-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl sm:text-3xl md:text-h1 font-bold text-headingText mb-4">
                  Exchange Your{" "}
                  <span className="text-primary">Lingkod Points</span>
                </h2>
                <p className="text-base sm:text-lg md:text-h6 text-subHeadingText max-w-2xl sm:max-w-3xl mx-auto leading-relaxed">
                  Use your earned Lingkod Points to purchase amazing rewards and
                  exclusive community items.
                </p>
              </div>
              <div className="flex items-center gap-4 bg-gradient-to-r from-primary/10 to-blue-100/50 rounded-xl p-4 shadow border border-primary/10 mb-2">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/20 text-primary text-2xl shadow">
                  <img
                    src={currency}
                    alt="Lingkod Points"
                    className="w-8 h-8"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-headingText text-lg mb-1">
                    Current Lingkod Points
                  </h3>
                  <span className="text-2xl font-bold text-primary">
                    {userPoints.toLocaleString()} LP
                  </span>
                </div>
              </div>
              <p className="text-subHeadingText text-sm mt-2">
                You can exchange your Lingkod Points for something valuable.
                Treat this as a reward for yourself.
              </p>
            </div>
          </div>
        </section>

        <section className="py-4 sm:py-8 px-4 sm:px-6 bg-white border-b border-gray-100">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-nowrap sm:flex-wrap overflow-x-auto sm:overflow-visible gap-2 sm:gap-4 pb-2 sm:pb-0 justify-center">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                    selectedCategory === category.id
                      ? "bg-primary text-white shadow-lg"
                      : "bg-gray-100 text-subHeadingText hover:bg-gray-200"
                  }`}
                >
                  <span className="text-lg">{category.icon}</span>
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 bg-bgColor">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className={`group relative bg-white rounded-xl shadow-lg border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                    userPoints < item.points ? "opacity-60" : ""
                  }`}
                >
                  <div className="p-6 text-center">
                    <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {item.image}
                    </div>
                  </div>

                  <div className="px-6 pb-6">
                    <h3 className="text-h5 font-bold text-headingText mb-2 group-hover:text-primary transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-subHeadingText text-sm mb-4 leading-relaxed">
                      {item.description}
                    </p>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2">
                          <img src={currency} alt="LP" className="w-5 h-5" />
                          <span className="font-bold text-primary">
                            {item.points} Points
                          </span>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => handlePurchase(item)}
                      disabled={userPoints < item.points}
                      className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-200 ${
                        userPoints >= item.points
                          ? "bg-primary text-white hover:bg-blue-600 hover:scale-105 shadow-lg"
                          : "bg-gray-300 text-gray-500 cursor-not-allowed"
                      }`}
                    >
                      {userPoints >= item.points
                        ? "Purchase Now"
                        : "Insufficient Points"}
                    </button>
                  </div>

                  {item.available && (
                    <div className="absolute top-3 left-3">
                      <span className="bg-green text-white px-2 py-1 rounded-full text-xs font-medium">
                        Available
                      </span>
                    </div>
                  )}

                  {userPoints < item.points && (
                    <div className="absolute top-3 right-3">
                      <span className="bg-red text-white px-2 py-1 rounded-full text-xs font-medium">
                        Need {item.points - userPoints} more LP
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Store;
