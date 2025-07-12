import { useState, useEffect } from "react";
import UserSidebar from "../components/navigation/UserSidebar.jsx";
import EventDetailsModal from "../components/modals/EventDetailsModal.jsx";
import api from "../../axious.js";
import currency from "../assets/lp.png";
import { showSuccess } from "../utils/alertHelper.js";

const FALLBACK_EVENTS = [
  {
    id: 1,
    status: "ongoing",
    title: "Tree Planting",
    date: "July 12, 2025",
    image: "https://source.unsplash.com/400x300/?tree",
    description:
      "Participate in our community tree-planting activity and earn lingkod points while helping the environment!",
    points: 100,
  },
  {
    id: 2,
    status: "upcoming",
    title: "Coastal Cleanup",
    date: "August 2, 2026",
    image: "https://source.unsplash.com/400x300/?beach",
    description:
      "Join us as we clean our coastal areas and promote responsible waste management.",
    points: 150,
  },
  {
    id: 3,
    status: "past",
    title: "Recycling Drive",
    date: "August 15, 2024",
    image: "https://source.unsplash.com/400x300/?recycle",
    description: "Barangay-wide recycling competition held last year.",
    points: 120,
  },
];

const TABS = [
  { key: "ongoing", label: "Ongoing" },
  { key: "upcoming", label: "Upcoming" },
  { key: "past", label: "Past" },
];

const Events = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("ongoing");
  const [events, setEvents] = useState([]);
  const [detailsEvent, setDetailsEvent] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await api.get("/events/user-barangay");
        setEvents(res.data.events || []);
      } catch (err) {
        console.error("Failed to fetch events", err);
        setEvents(FALLBACK_EVENTS);
      }
    };

    fetchEvents();
  }, []);

  const handleJoin = async (evt) => {
    try {
      await api.post(`/events/${evt.id}/join`);
      showSuccess("Successfully joined the event!");
    } catch (err) {
      console.error("Join failed", err);
    }
  };

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
            <i className="fa-solid fa-calendar-days text-primary"></i>
            <span>Events & Activities</span>
          </h1>
        </div>

        <div className="mb-6 border-b border-gray-200">
          <nav className="flex space-x-2 sm:space-x-4 justify-center">
            {TABS.map((tab) => (
              <button
                key={tab.key}
                className={`px-4 py-2 text-sm font-bold rounded-full focus:outline-none transition-all duration-200 shadow-sm border-2 ${
                  activeTab === tab.key
                    ? "bg-primary text-white border-primary scale-105 shadow-md"
                    : "bg-white text-subHeadingText border-gray-200 hover:bg-primary/10 hover:text-primary"
                }`}
                onClick={() => setActiveTab(tab.key)}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events
            .filter((evt) => evt.status === activeTab)
            .map((evt) => (
              <div
                key={evt.id}
                className={`relative rounded-2xl shadow-lg border-2 overflow-hidden transition-all duration-200 group bg-gradient-to-br ${
                  evt.status === "ongoing"
                    ? "from-green/10 to-green/5 border-green/30"
                    : evt.status === "upcoming"
                    ? "from-primary/10 to-blue-100/50 border-primary/20"
                    : "from-gray-100 to-gray-50 border-gray-200"
                } hover:scale-[1.03] hover:shadow-xl`}
              >
                {evt.image && (
                  <img
                    src={evt.image}
                    alt={evt.title}
                    className="w-full h-36 object-cover"
                  />
                )}
                <span
                  className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold shadow-md z-10 ${
                    evt.status === "ongoing"
                      ? "bg-green text-white"
                      : evt.status === "upcoming"
                      ? "bg-primary text-white"
                      : "bg-gray-300 text-gray-700"
                  }`}
                >
                  {evt.status.charAt(0).toUpperCase() + evt.status.slice(1)}
                </span>
                <div className="p-4 flex flex-col h-full">
                  <h3 className="font-bold text-headingText mb-1 text-lg flex items-center gap-2">
                    <i className="fa-solid fa-trophy text-primary"></i>
                    {evt.title}
                  </h3>
                  <p className="text-xs text-subHeadingText mb-2 flex items-center gap-1">
                    <i className="fa-regular fa-calendar"></i>
                    <span>{evt.date}</span>
                  </p>
                  <p className="text-xs text-subHeadingText mb-2 flex items-center gap-1">
                    <img src={currency} alt="LP" className="w-4 h-4" />
                    <span className="font-bold text-green">
                      {evt.points} LP
                    </span>
                  </p>
                  {evt.description && (
                    <p className="text-xs text-subHeadingText line-clamp-3 mb-4">
                      {evt.description}
                    </p>
                  )}
                  <button
                    className="bg-primary text-white text-xs px-4 py-2 rounded-lg font-bold shadow hover:bg-blue-600 transition-all mt-auto group-hover:scale-105"
                    onClick={() => setDetailsEvent(evt)}
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
        </div>
      </main>

      {detailsEvent && (
        <EventDetailsModal
          isOpen={!!detailsEvent}
          onClose={() => setDetailsEvent(null)}
          event={detailsEvent}
          attendees={detailsEvent.attendees || []}
          isUserView={true}
          onJoin={handleJoin}
        />
      )}
    </div>
  );
};

export default Events;
