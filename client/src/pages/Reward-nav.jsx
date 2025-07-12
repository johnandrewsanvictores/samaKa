import PublicLayout from "../layout/PublicLayout.jsx";
import { useState } from "react";

const RewardNav = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Rewards", icon: "🎁" },
    { id: "cash", name: "Cash Rewards", icon: "💰" },
    { id: "services", name: "Services", icon: "🔧" },
    { id: "physical", name: "Physical Rewards", icon: "📦" },
  ];

  const rewards = [
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
  const filteredRewards =
    selectedCategory === "all"
      ? rewards
      : rewards.filter((reward) => reward.category === selectedCategory);

  return (
    <PublicLayout>
      <section className="py-12 sm:py-16 md:py-20 px-2 sm:px-4 bg-gradient-to-br from-primary/10 to-blue-100/50">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-h1 font-bold text-headingText mb-4">
              Community <span className="text-primary">Rewards</span>
            </h1>
            <p className="text-base sm:text-lg md:text-h6 text-subHeadingText max-w-2xl sm:max-w-3xl mx-auto leading-relaxed">
              Discover amazing rewards earned through your community
              participation. From digital badges to exclusive experiences, every
              contribution brings you closer to these exciting prizes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto mb-8 sm:mb-12">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="text-3xl font-bold text-primary mb-2">
                {rewards.length}
              </div>
              <div className="text-subHeadingText">Available Rewards</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="text-3xl font-bold text-green mb-2">4</div>
              <div className="text-subHeadingText">Reward Categories</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="text-3xl font-bold text-brown mb-2">100-1000</div>
              <div className="text-subHeadingText">Points Range</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="text-3xl font-bold text-red mb-2">₱0.20</div>
              <div className="text-subHeadingText">Per Lingkod Point</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-4 sm:py-8 px-2 sm:px-4 bg-white border-b border-gray-100">
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

      <section className="py-8 sm:py-12 md:py-16 px-2 sm:px-4 bg-bgColor">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {filteredRewards.map((reward) => (
              <div
                key={reward.id}
                className={`group relative bg-white rounded-xl shadow-lg border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
              >
                <div className="p-6 text-center">
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {reward.image}
                  </div>
                </div>

                <div className="px-6 pb-6">
                  <h3 className="text-h5 font-bold text-headingText mb-2 group-hover:text-primary transition-colors">
                    {reward.name}
                  </h3>
                  <p className="text-subHeadingText text-sm mb-4 leading-relaxed">
                    {reward.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">⭐</span>
                        <span className="font-bold text-primary">
                          {reward.points} Points
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {reward.available && (
                  <div className="absolute top-3 left-3">
                    <span className="bg-green text-white px-2 py-1 rounded-full text-xs font-medium">
                      Available
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-16 md:py-20 px-2 sm:px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-h2 font-bold text-headingText mb-4 sm:mb-6">
              How to Earn Points
            </h2>
            <p className="text-base sm:text-lg md:text-h6 text-subHeadingText max-w-2xl sm:max-w-3xl mx-auto">
              Participate in community activities and earn points that can be
              redeemed for these amazing rewards.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-h5 font-bold text-headingText mb-2">
                Attend Events
              </h3>
              <p className="text-subHeadingText text-sm">
                Join barangay meetings, workshops, and community events
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-h5 font-bold text-headingText mb-2">
                Volunteer
              </h3>
              <p className="text-subHeadingText text-sm">
                Participate in community service and volunteer activities
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brown/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="text-h5 font-bold text-headingText mb-2">
                Share Ideas
              </h3>
              <p className="text-subHeadingText text-sm">
                Contribute suggestions and feedback for community improvement
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-h5 font-bold text-headingText mb-2">
                Stay Active
              </h3>
              <p className="text-subHeadingText text-sm">
                Regular engagement and participation in the platform
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-16 md:py-20 px-2 sm:px-4 bg-gradient-to-r from-primary to-blue-600">
        <div className="max-w-2xl sm:max-w-3xl md:max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-h2 font-bold text-white mb-4 sm:mb-6">
            Ready to Start Earning?
          </h2>
          <p className="text-white/90 text-base sm:text-lg md:text-h6 mb-6 sm:mb-8 max-w-xl sm:max-w-2xl mx-auto">
            Join your community today and start earning points towards these
            amazing rewards. Every contribution makes a difference!
          </p>
          <button className="bg-white text-primary px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">
            Join Community
          </button>
        </div>
      </section>
    </PublicLayout>
  );
};

export default RewardNav;
