import api from "../../axious.js";


export const buildEventImgUrl = (imgPath) => {
  if (!imgPath) return "";
  return `${import.meta.env.VITE_API_URL}/eventCover/${imgPath}`;
};

export const fetchEvents = async (filters = {}) => {
  const { data } = await api.get("/event", { params: filters });
  return data.events;
};

export const createEvent = async ({
  title,
  description,
  startDate,
  endDate,
  type,
  lp,
  eventImg,
  dayInterval,
  category,
}) => {
  const formData = new FormData();
  formData.append("title", title);
  formData.append("description", description);
  formData.append("startDate", startDate);
  formData.append("endDate", endDate);
  formData.append("type", type);
  formData.append("lp", Number(lp));
  if (dayInterval) formData.append("dayInterval", dayInterval);
  if (category) formData.append("category", category);
  if (eventImg) formData.append("eventImg", eventImg);

  const { data } = await api.post("/event/create", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return data.event;
};

export const updateEvent = async ({ _id, updates, eventImg }) => {
  
  const formData = new FormData();
  formData.append("_id", _id);
  Object.entries(updates).forEach(([key, value]) => {
    if (value !== undefined) formData.append(key, value);
  });
  if (eventImg) formData.append("eventImg", eventImg);

  const { data } = await api.patch("/event/update", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return data.reward; 
};

export const deleteEvent = async (id) => {
  await api.delete(`/event/delete/${id}`);
};

export const fetchParticipants = async (eventId) => {
  const { data } = await api.get(`/event/participants/${eventId}`);
  return data.participants;
};

export const acceptAttendance = async ({ eventId, userId }) => {
  await api.post("/event/accept-join", { eventId, userId });
};

export const rejectAttendance = async ({ eventId, userId }) => {
  await api.post("/event/reject-join", { eventId, userId });
};

export const joinEvent = async (eventId) => {
  const { data } = await api.post("/event/join", { eventId });
  return data.joinedInfo;
}; 