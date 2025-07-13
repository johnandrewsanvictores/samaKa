
import Reward from "../models/rewardModel.js";
import User from "../models/userModel.js";
import { promises as fsp } from 'fs';
import {fileExists, getCoverImgUploadFolder} from "../utils/helper.js";
import path from "path";
import Events from "../models/eventModel.js";
import RewardClaim from "../models/rewardClaimModel.js";

export const addRewards = async (req, res) => {
    try {
        const currentUser = req.user;
        
        if (!currentUser) {
            
            if (req.file) {
                const uploadDir = getCoverImgUploadFolder('../uploads/rewards');
                await fsp.unlink(path.join(uploadDir, req.file.filename));
            }
            return res.status(401).json({ error: 'Unauthorized' });
        }

        console.log('addRewards currentUser:', currentUser);
        const {imgPath, title, description, lp, category} = req.body;
        const coverFile = req.file ? req.file.filename : "";
        
        if(currentUser.role !== "barangay"){
            if(coverFile){
                const coverImgExist = await fileExists(getCoverImgUploadFolder('../uploads/rewards'), coverFile);
                if(coverImgExist) await fsp.unlink(path.join(getCoverImgUploadFolder('../uploads/rewards'), coverFile));
            }
            return res.status(401).json({ error: 'Unauthorized' });
        }

        const rewards = await Reward.findOne({
            $or: [
                {title}
            ]
        })

        if (rewards) {
            if (coverFile) {
                const coverImgExist = await fileExists(getCoverImgUploadFolder('../uploads/rewards'), coverFile);
                if(coverImgExist) await fsp.unlink(path.join(getCoverImgUploadFolder('../uploads/rewards'), coverFile));
            }
            return res.status(409).json({ error: "Reward already exists" });
        }

        const reward = await Reward.create({barangayId: currentUser.barangayId, imgPath: coverFile, title, description, lp, category});

        res.status(201).json({
            reward,
            success: "true",
            message: "Reward created successfully"
        });
    } catch(error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
}

export const updateRewards = async (req, res) => {
        try {
            const { _id, imgPath, ...updateFields } = req.body;
            const coverFile = req.file ? req.file.filename : imgPath;
            const updateReward = await Reward.findByIdAndUpdate(
                _id,
                { $set: {...updateFields, imgPath: coverFile} },
                { new: true }
            );

            res.status(200).json({ success: true, reward: updateReward, message: "Updated reward successfully" });
        } catch (error) {
            res.status(500).json({ success: false, message: error.message });
        }
}

export const deleteRewards = async (req, res) => {
    try {
        const { id } = req.params;
        console.log(req.params.id);
        
        const deletedReward = await Reward.findOneAndDelete({ _id: id});

        const uploadDir = getCoverImgUploadFolder('../uploads/rewards');

        if(deletedReward) {
            const coverImgExist = await fileExists(uploadDir, deletedReward.imgPath);
            if(coverImgExist) await fsp.unlink(path.join(uploadDir, deletedReward.imgPath));

            return res.status(200).json({ success: true, message: 'Reward deleted' });
        }else {
            return res.status(404).json({ success: false, message: 'Reward not found' });
        }
    }catch (err) {
        return  res.status(500).json({ error: err.message });
    }
}

export const getRewards = async (req, res) => {
    try {
        const filters = req.query;
        const reward = await Reward.find(filters); 
        console.log(reward);
        res.json({rewards: reward});
    } catch (err) {
        res.status(500).json({ error: err });
    }
}

export const getSpecificBarangayRewards = async (req, res) => {
    try {
        const { barangayId } = req.params;
        const specificBarangayRewards = await Reward.find({barangayId: barangayId}); 
        res.json({specificBarangayRewards});
    } catch (err) {
        res.status(500).json({ error: err });
    }
}

export const rewardClaim = async (req, res) => {
    try {
        const currentUser = req.user;
        const {rewardId, receiptImg} = req.body;

        const coverFile = req.file.filename;
        const reward = await RewardClaim.create({rewardId, receiptImg: coverFile, userId: currentUser._id});

        res.status(201).json({
            reward,
            success: "true",
            message: "Reward claimed successfully"
        });
    } catch(error) {
        res.status(500).json({ error: error });
    }
}

export const rewardClaimChangeStatus = async (req, res) => {
    try {
        const { _id, status } = req.body;
        const updateReward = await RewardClaim.findByIdAndUpdate(
            _id,
            { $set: {status} },
            { new: true }
        );

        res.status(200).json({ success: true, claimReward: updateReward, message: "Reward claimed successfully" });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

export const getClaimRewards = async (req, res) => {
    try {
        const filters = req.query;
        const rewardClaim = await RewardClaim.find(filters); 
        res.json({rewardClaim});
    } catch (err) {
        res.status(500).json({ error: err });
    }
}
