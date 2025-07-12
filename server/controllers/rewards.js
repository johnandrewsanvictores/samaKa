
import Reward from "../models/rewardModel.js";
import User from "../models/userModel.js";
import { promises as fsp } from 'fs';
import {fileExists, getCoverImgUploadFolder} from "../utils/helper.js";
import path from "path";

export const addRewards = async (req, res) => {
    try {
        const currentUser = req.user;
        console.log(currentUser)
        const {imgPath, title, description, lp} = req.body;
        const coverFile = req.file.filename;
        if(currentUser.role !== "barangay"){
            const coverImgExist = await fileExists(getCoverImgUploadFolder(), coverFile);
            if(coverImgExist) await fsp.unlink(path.join(getCoverImgUploadFolder(), coverFile));
            return res.status(401).json({ error: 'Unauthorized' });
        }

        const rewards = await Reward.findOne({
            $or: [
                {title}
            ]
        })

        if (rewards) {
            const coverImgExist = await fileExists(getCoverImgUploadFolder(), coverFile);
            if(coverImgExist) await fsp.unlink(path.join(getCoverImgUploadFolder(), coverFile));
            return res.status(409).json({ error: "Reward already exists" });
        }

        const reward = await Reward.create({barangayId: currentUser.barangayId, imgPath: coverFile, title, description, lp});

        res.status(201).json({
            reward,
            success: "true",
            message: "Reward created successfully"
        });
    } catch(error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
}

export const editReward = async (req, res) => {
        try {
            const { _id, ...updateFields } = req.body;

            const updatedUser = await User.findByIdAndUpdate(
                _id,
                { $set: updateFields },
                { new: true }
            );

            res.status(200).json({ success: true, user: updatedUser, message: "Updated user successfully" });
        } catch (error) {
            res.status(500).json({ success: false, message: error.message });
        }
}