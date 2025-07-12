import logo from "../../assets/SamaKa.png";
import currency from "../../assets/lp.png";

const TAG_STYLES = {
  past: "bg-gray-200 text-gray-700",
  ongoing: "bg-primary/20 text-primary",
  upcoming: "bg-green-200 text-green-700",
};

const EventDetailsModal = ({
  isOpen,
  onClose,
  event = {},
  attendees = [],
  isUserView = false,
  onJoin = () => {},
}) => {
  if (!isOpen) return null;

  const { title, date, status, image, points, description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore." } = event;

  const tagStyle = TAG_STYLES[status] || "bg-gray-200 text-gray-700";

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 overflow-auto p-4">
      <div className="bg-white rounded-2xl w-full max-w-lg mx-auto relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl"
        >
          ×
        </button>

        {/* Image */}
        {image && (
          <img src={image} alt={title} className="w-full h-48 object-cover rounded-t-2xl" />
        )}

        <div className="p-6 space-y-4">
          {/* Title and Tag */}
          <div>
            <h2 className="text-lg font-semibold text-headingText mb-1">{title}</h2>
            <span className={`inline-block px-2 py-0.5 text-xs rounded-md font-semibold ${tagStyle}`}>
              {status === "past" ? "Past events" : status === "ongoing" ? "Ongoing" : "Upcoming Events"}
            </span>
          </div>

          
          <p className="text-xs text-subHeadingText mb-1 flex items-center gap-1">
            <i className="fa-regular fa-calendar"></i>
            <span>{date}</span>
          </p>
          {points !== undefined && (
            <p className="text-xs text-subHeadingText mb-1 flex items-center gap-1">
              <img src={currency} alt="LP" className="w-4 h-4" />
              <span>{points}</span>
            </p>
          )}

       
          <p className="text-xs text-subHeadingText leading-relaxed">{description}</p>

        
          {isUserView ? (
            <div className="flex items-center justify-between mt-4">
              <p className="text-xs text-subHeadingText">
                Participants: <span className="font-semibold text-headingText">{attendees.length}</span>
              </p>
              {status !== "past" && (
                <button
                  onClick={() => onJoin(event)}
                  className="bg-primary text-white text-xs px-4 py-2 rounded-lg font-semibold hover:bg-blue-600 transition-all"
                >
                  Join Event
                </button>
              )}
            </div>
          ) : (
            <>
              <p className="text-xs text-subHeadingText mb-3">
                Participants: <span className="font-semibold text-headingText">{attendees.length}</span>
              </p>
              <div>
                <table className="w-full text-xs text-left">
                  <thead>
                    <tr>
                      <th className="py-2 border-b font-semibold">Name of Attendees</th>
                      <th className="py-2 border-b font-semibold text-center">Is Present?</th>
                    </tr>
                  </thead>
                  <tbody>
                    {attendees.map((a, idx) => (
                      <tr key={idx} className="border-b last:border-b-0">
                        <td className="py-2 pr-2">{a.name}</td>
                        <td className="py-2 text-center">
                          {status === "ongoing" ? (
                            <div className="flex justify-center gap-2">
                              <button className="bg-green-500/20 text-green-700 px-2 py-0.5 rounded text-[10px]">
                                Yes
                              </button>
                              <button className="bg-red/20 text-red px-2 py-0.5 rounded text-[10px]">
                                No
                              </button>
                            </div>
                          ) : (
                            <span
                              className={`inline-block px-2 py-0.5 rounded text-[10px] font-semibold ${
                                a.present
                                  ? "bg-green-500/20 text-green-700"
                                  : "bg-red/20 text-red"
                              }`}
                            >
                              {a.present ? "Present" : "Absent"}
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventDetailsModal; 