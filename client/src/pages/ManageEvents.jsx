import {useEffect, useState} from "react";
import Sidebar from "../components/navigation/Sidebar.jsx";
import CreateActivityModal from "../components/modals/CreateActivityModal.jsx";
import EventDetailsModal from "../components/modals/EventDetailsModal.jsx";
import currency from "../assets/lp.png";
import {
  buildEventImgUrl,
  fetchEvents,
  fetchParticipants,
} from "../services/eventService.js";
import moment from "moment";

const sampleEvents = [
  {
    id: 1,
    status: "past",
    title: "Tree Planting",
    date: "July 12, 2025",
    image: "https://source.unsplash.com/400x300/?tree",
    points: 100,
    participants: 25,
  },
  {
    id: 2,
    status: "ongoing",
    title: "Coastal Cleanup",
    date: "August 2, 2026",
    image: "https://source.unsplash.com/400x300/?beach",
    points: 150,
    participants: 40,
  },
  {
    id: 3,
    status: "upcoming",
    title: "Recycling Drive",
    date: "August 15, 2026",
    image: "https://source.unsplash.com/400x300/?recycle",
    points: 120,
    participants: 30,
  },
];



const TABS = [
  { key: "past", label: "Past Events" },
  { key: "ongoing", label: "Ongoing Events" },
  { key: "upcoming", label: "Upcoming Events" },
];


const ManageEvents = () => {
  const [activeTab, setActiveTab] = useState("past");
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [detailsEvent, setDetailsEvent] = useState(null);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [attendees , setAttendees] = useState([]);

  const attendeesMock = [
    { name: "John Andrew San Victorres", present: true },
    { name: "John Andrew San Victorres", present: false },
    { name: "John Andrew San Victorres", present: true },
  ];

  const [events, setEvents] = useState([]);

  const fetchAttendees = async (evt) => {
    try {
      const participants = await fetchParticipants(evt._id);
      setAttendees(participants);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    const loadEvents = async () => {
      try {
        const data = await fetchEvents();
        setEvents(data || []);
      } catch (err) {
        console.error("Failed to fetch events", err);
      }
    };
    loadEvents();
  }, []);

  return (
    <div className="flex">
      <Sidebar isOpen={isSidebarOpen} onToggle={() => setSidebarOpen(!isSidebarOpen)} />

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
            <span>Manage Events</span>
          </h1>

          <button className="bg-primary text-white px-4 py-2 rounded-lg font-semibold shadow hover:bg-blue-600 transition-all flex items-center space-x-2" onClick={() => setIsCreateOpen(true)}>
            <i className="fa-solid fa-plus"></i>
            <span>Create Events / Activities</span>
          </button>
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
                key={evt._id}
                className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-200"
              >
                <img
                  src={buildEventImgUrl(evt.eventImg)}
                  alt={evt.title}
                  className="w-full h-32 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-headingText mb-1">
                    {evt.title}
                  </h3>
                  <p className="text-xs text-subHeadingText mb-2 flex items-center gap-1">
                    <i className="fa-regular fa-calendar"></i>
                    <span>{evt.startDate === evt.endDate ? moment(evt.startDate).format("MMM Do YY") : moment(evt.startDate).format("MMM Do YY") + " - " + moment(evt.endDate).format("MMM Do YY")}</span>
                  </p>
                  <p className="text-xs text-subHeadingText mb-2 flex items-center gap-1">
                    <img src={currency} alt="LP" className="w-4 h-4" />
                    <span>{evt.lp}</span>
                  </p>
                  <p className="text-xs text-subHeadingText line-clamp-3 mb-4">
                    {evt.description}
                  </p>
                  <button className="bg-primary/20 text-primary text-xs px-3 py-1 rounded-md font-semibold" onClick={
                    async () => {
                      await setDetailsEvent(evt);
                      await fetchAttendees(evt)
                    }
                  }>
                    View Details
                  </button>
                </div>
              </div>
            ))}
        </div>
      </main>
      {isCreateOpen && (
        <CreateActivityModal isOpen={isCreateOpen} onClose={() => setIsCreateOpen(false)} setEvents={setEvents} events={events} />
      )}
      {detailsEvent && (
        <EventDetailsModal isOpen={!!detailsEvent} onClose={() => setDetailsEvent(null)} event={detailsEvent} attendees={attendees} />
      )}
    </div>
  );
};

export default ManageEvents; 