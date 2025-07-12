
import Reward from "../models/rewardModel.js";

export const addRewards = async (req, res) => {
    try {
        const currentUser = req.user;
        console.log(currentUser)
        const {imgPath, title, description, lp} = req.body;
        if(currentUser.role !== "barangay") return res.status(401).json({ error: 'Unauthorized' });

        const rewards = await Reward.findOne({
            $or: [
                {title}
            ]
        })

        if (rewards) {
            return res.status(409).json({ error: "Reward already exists" });
        }

        const reward = await Reward.create({barangayId: currentUser.barangayId, imgPath, title, description, lp});

        res.status(201).json({
            reward,
            success: "true",
            message: "Reward created successfully"
        });
    } catch(error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
}