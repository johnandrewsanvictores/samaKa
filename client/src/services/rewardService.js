import api from "../../axious.js";


export const buildRewardImgUrl = (imgPath) => {
  if (!imgPath) return "";
  
  return `${import.meta.env.VITE_API_URL}/rewards/${imgPath}`;
};

export const fetchRewards = async (filters = {}) => {
  const { data } = await api.get("/reward", { params: filters });
  return data.rewards;
};

export const createReward = async ({ title, points, image, category = "General", description = "" }) => {
  const formData = new FormData();
  formData.append("title", title);
  formData.append("lp", Number(points)); 
  formData.append("category", category);
  formData.append("description", description);
  if (image) formData.append("rewardCoverImg", image);

  const { data } = await api.post("/reward/create", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return data.reward;
};

export const updateReward = async ({ _id, title, points, image, imgPath, category = "General", description = "" }) => {
  const formData = new FormData();
  formData.append("_id", _id);
  formData.append("title", title);
  formData.append("lp", Number(points));
  formData.append("category", category);
  formData.append("description", description);
  if (image) {
    
    formData.append("rewardCoverImg", image);
  } else if (imgPath) {
    
    formData.append("imgPath", imgPath);
  }

  const { data } = await api.patch("/reward/update", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return data.reward;
};

export const deleteReward = async (id) => {
  await api.delete(`/reward/delete/${id}`);
}; 