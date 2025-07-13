import api from "../../axious.js";

// Auth API
export const authAPI = {
  // Get current user profile
  getProfile: async () => {
    try {
      const response = await api.get("/auth/user/profile");
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Sign in user
  signIn: async (credentials) => {
    try {
      const response = await api.post("/auth/signin", credentials);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Sign up user
  signUp: async (userData) => {
    try {
      const response = await api.post("/auth/signup", userData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Logout user
  logout: async () => {
    try {
      const response = await api.post("/auth/logout");
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Update user profile
  updateProfile: async (userData) => {
    try {
      const response = await api.patch("/auth/update", userData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

// Events API
export const eventsAPI = {
  // Get all events
  getAllEvents: async () => {
    try {
      const response = await api.get("/event");
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Get specific event
  getEvent: async (eventId) => {
    try {
      const response = await api.get(`/event/${eventId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Create new event
  createEvent: async (eventData) => {
    try {
      const formData = new FormData();
      Object.keys(eventData).forEach((key) => {
        if (key === "eventImg" && eventData[key]) {
          formData.append(key, eventData[key]);
        } else if (eventData[key] !== null && eventData[key] !== undefined) {
          formData.append(key, eventData[key]);
        }
      });

      const response = await api.post("/event/create", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Update event
  updateEvent: async (eventData) => {
    try {
      const formData = new FormData();
      Object.keys(eventData).forEach((key) => {
        if (key === "eventImg" && eventData[key]) {
          formData.append(key, eventData[key]);
        } else if (eventData[key] !== null && eventData[key] !== undefined) {
          formData.append(key, eventData[key]);
        }
      });

      const response = await api.patch("/event/update", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Delete event
  deleteEvent: async (eventId) => {
    try {
      const response = await api.delete(`/event/delete/${eventId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Join event
  joinEvent: async (eventData) => {
    try {
      const response = await api.post("/event/join", eventData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Accept attendance
  acceptAttendance: async (data) => {
    try {
      const response = await api.post("/event/accept-join", data);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Reject attendance
  rejectAttendance: async (data) => {
    try {
      const response = await api.post("/event/reject-join", data);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Get participant count
  getParticipantCount: async (eventId) => {
    try {
      const response = await api.get(`/event/join-count/${eventId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Get participants
  getParticipants: async (eventId) => {
    try {
      const response = await api.get(`/event/participants/${eventId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

// Rewards API
export const rewardsAPI = {
  // Get all rewards
  getAllRewards: async () => {
    try {
      const response = await api.get("/reward");
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Get specific barangay rewards
  getBarangayRewards: async (barangayId) => {
    try {
      const response = await api.get(`/reward/${barangayId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Create new reward
  createReward: async (rewardData) => {
    try {
      const formData = new FormData();
      Object.keys(rewardData).forEach((key) => {
        if (key === "rewardCoverImg" && rewardData[key]) {
          formData.append(key, rewardData[key]);
        } else if (rewardData[key] !== null && rewardData[key] !== undefined) {
          formData.append(key, rewardData[key]);
        }
      });

      const response = await api.post("/reward/create", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Update reward
  updateReward: async (rewardData) => {
    try {
      const formData = new FormData();
      Object.keys(rewardData).forEach((key) => {
        if (key === "rewardCoverImg" && rewardData[key]) {
          formData.append(key, rewardData[key]);
        } else if (rewardData[key] !== null && rewardData[key] !== undefined) {
          formData.append(key, rewardData[key]);
        }
      });

      const response = await api.patch("/reward/update", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Delete reward
  deleteReward: async (rewardId) => {
    try {
      const response = await api.delete(`/reward/delete/${rewardId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

// Barangay API
export const barangayAPI = {
  // Get all barangays
  getAllBarangays: async () => {
    try {
      const response = await api.get("/barangay");
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Get specific barangay
  getBarangay: async (barangayId) => {
    try {
      const response = await api.get(`/barangay/${barangayId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Create new barangay
  createBarangay: async (barangayData) => {
    try {
      const response = await api.post("/barangay/create", barangayData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

// User API
export const userAPI = {
  // Get user resume
  getResume: async (userId) => {
    try {
      const response = await api.get("/user/resume", {
        params: { userId },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

// Error handler utility
export const handleAPIError = (error) => {
  if (error.response) {
    // Server responded with error status
    const { status, data } = error.response;
    switch (status) {
      case 401:
        return "Unauthorized. Please log in again.";
      case 403:
        return "Access denied. You don't have permission for this action.";
      case 404:
        return "Resource not found.";
      case 409:
        return data.error || "Conflict occurred.";
      case 422:
        return data.error || "Validation error.";
      case 500:
        return "Server error. Please try again later.";
      default:
        return data.error || "An error occurred.";
    }
  } else if (error.request) {
    // Network error
    return "Network error. Please check your connection.";
  } else {
    // Other error
    return error.message || "An unexpected error occurred.";
  }
};
