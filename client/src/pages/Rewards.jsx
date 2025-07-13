import Sidebar from "../components/navigation/Sidebar.jsx";
import { useEffect, useState } from "react";
import RewardModal from "../components/modals/RewardModal.jsx";
import {
  buildRewardImgUrl,
  fetchRewards,
  createReward,
  updateReward,
  deleteReward,
} from "../services/rewardService.js";

const Rewards = () => {
  const [rewards, setRewards] = useState([]);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [editReward, setEditReward] = useState(null);

  
  useEffect(() => {
    const loadRewards = async () => {
      try {
        const data = await fetchRewards();
        
        const formatted = data.map((rw) => ({
          id: rw._id,
          _id: rw._id, 
          title: rw.title,
          points: rw.lp,
          imgPath: rw.imgPath,
          image: buildRewardImgUrl(rw.imgPath),
        }));
        setRewards(formatted);
      } catch (err) {
        console.error("Failed to fetch rewards", err);
      }
    };
    loadRewards();
  }, []);

  const handleAddReward = async (data) => {
    try {
      const reward = await createReward({
      title: data.title,
      points: data.points,
        image: data.image,
      });

      const newReward = {
        id: reward._id,
        _id: reward._id,
        title: reward.title,
        points: reward.lp,
        imgPath: reward.imgPath,
        image: buildRewardImgUrl(reward.imgPath),
    };
    setRewards((prev) => [...prev, newReward]);
    } catch (err) {
      console.error("Failed to create reward", err);
    }
  };

  const handleEditReward = async (data) => {
    try {
      const updated = await updateReward({
        _id: editReward._id,
        title: data.title,
        points: data.points,
        image: data.image, 
        imgPath: editReward.imgPath,
      });

    setRewards((prev) =>
      prev.map((rw) =>
        rw.id === editReward.id
          ? {
              ...rw,
                title: updated.title,
                points: updated.lp,
                imgPath: updated.imgPath,
                image: buildRewardImgUrl(updated.imgPath),
            }
          : rw
      )
    );
    setEditReward(null);
    } catch (err) {
      console.error("Failed to update reward", err);
    }
  };

  const handleRemoveReward = async (id) => {
    if (!confirm("Remove this reward?")) return;

    try {
      await deleteReward(id);
      setRewards((prev) => prev.filter((rw) => rw.id !== id));
    } catch (err) {
      console.error("Failed to delete reward", err);
    }
  };

  return (
    <div className="flex">
      <Sidebar isOpen={isSidebarOpen} onToggle={() => setSidebarOpen(!isSidebarOpen)} />

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
            <i className="fa-solid fa-gift text-primary"></i>
            <span>Rewards</span>
          </h1>

          <button className="bg-primary text-white px-4 py-2 rounded-lg font-semibold shadow hover:bg-blue-600 transition-all flex items-center space-x-2" onClick={() => setIsCreateOpen(true)}>
            <i className="fa-solid fa-plus"></i>
            <span>Add Reward</span>
          </button>
        </div>

     
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rewards.map((reward) => (
            <div
              key={reward.id}
              className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-200"
            >
              <img
                src={reward.image}
                alt={reward.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4 flex flex-col gap-2">
                <h3 className="font-semibold text-headingText">{reward.title}</h3>
                <p className="text-xs text-subHeadingText">
                  Lingkod Points: <span className="font-semibold">{reward.points}</span>
                </p>

                <div className="flex gap-2 mt-2">
                  <button className="bg-green-500/20 text-green-700 text-xs px-3 py-1 rounded-md font-semibold flex-1" onClick={() => setEditReward(reward)}>
                    Edit
                  </button>
                  <button className="bg-red/20 text-red text-xs px-3 py-1 rounded-md font-semibold flex-1" onClick={() => handleRemoveReward(reward.id)}>
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      {isCreateOpen && (
        <RewardModal isOpen={isCreateOpen} onClose={() => setIsCreateOpen(false)} onSave={handleAddReward} />
      )}
      {editReward && (
        <RewardModal isOpen={!!editReward} onClose={() => setEditReward(null)} onSave={handleEditReward} initialData={editReward} />
      )}
    </div>
  );
};

export default Rewards; 