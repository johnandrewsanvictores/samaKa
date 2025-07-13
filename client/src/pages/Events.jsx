import { useState, useEffect } from "react";
import UserSidebar from "../components/navigation/UserSidebar.jsx";
import EventDetailsModal from "../components/modals/EventDetailsModal.jsx";
import api from "../../axious.js";
import { joinEvent } from "../services/eventService.js";
import currency from "../assets/lp.png";
import { showSuccess } from "../utils/alertHelper.js";
import {useAuth} from "../context/AuthContext.jsx";


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
    description:
      "Barangay-wide recycling competition held last year.",
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
  const {user} = useAuth();


  useEffect(() => {
    const fetchEvents = async () => {
        console.log("Hi")
      try {
        const res = await api.get("/event");
        console.log(res);
        const fetched = (res.data.events || []).map((ev) => ({
          ...ev,
          joinedLabel: false,
          participantsCount: ev.participantsCount || 0,
        }));
        setEvents(fetched);
      } catch (err) {
        console.error("Failed to fetch events", err);
        setEvents(FALLBACK_EVENTS); 
      }
    };

    fetchEvents();
  }, []);

  const handleJoin = async (evt) => {
    try {
      await joinEvent(evt._id);

      // update list
      setEvents((prev) =>
        prev.map((e) =>
          e._id === evt._id
            ? {
                ...e,
                joinedLabel: true,
                participantsCount: (e.participantsCount || 0) + 1,
              }
            : e
        )
      );

      // update detail modal
      setDetailsEvent((prev) =>
        prev && prev._id === evt._id
          ? {
              ...prev,
              attendees: [...(prev.attendees || []), { fullName: `${user.firstName} ${user.lastName}` }],
            }
          : prev
      );

      showSuccess("Successfully joined the event!");
    } catch (err) {
      console.error("Join failed", err);
    }
  };

  return (
    <div className="flex">
      <UserSidebar isOpen={isSidebarOpen} onToggle={() => setSidebarOpen(!isSidebarOpen)} />

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
            <i className="fa-solid fa-calendar-days text-primary"></i>
            <span>Events & Activities</span>
          </h1>
        </div>

     
        <div className="mb-6 border-b border-gray-200">
          <nav className="flex space-x-4">
            {TABS.map((tab) => (
              <button
                key={tab.key}
                className={`px-4 py-2 text-sm font-medium rounded-t-md focus:outline-none transition-colors duration-200 ${
                  activeTab === tab.key
                    ? "text-primary border-b-2 border-primary"
                    : "text-subHeadingText hover:text-primary"
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
                key={evt._id || evt.id}
                className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-200"
              >
                {evt.image && (
                  <img
                    src={evt.image}
                    alt={evt.title}
                    className="w-full h-32 object-cover"
                  />
                )}
                <div className="p-4">
                  <h3 className="font-semibold text-headingText mb-1">
                    {evt.title}
                  </h3>
                  <p className="text-xs text-subHeadingText mb-2 flex items-center gap-1">
                    <i className="fa-regular fa-calendar"></i>
                    <span>{evt.date || evt.startDate}</span>
                  </p>
                  <p className="text-xs text-subHeadingText mb-2 flex items-center gap-1">
                    <img src={currency} alt="LP" className="w-4 h-4" />
                    <span>{evt.points}</span>
                  </p>
                  {evt.description && (
                    <p className="text-xs text-subHeadingText line-clamp-3 mb-4">
                      {evt.description}
                    </p>
                  )}
                  <div className="flex justify-between items-center">
                    <button
                      className="bg-primary/20 text-primary text-xs px-3 py-1 rounded-md font-semibold"
                      onClick={() => setDetailsEvent(evt)}
                    >
                      View Details
                    </button>
                    <span className="text-[10px] text-subHeadingText">{evt.participantsCount} joined</span>
                  </div>
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