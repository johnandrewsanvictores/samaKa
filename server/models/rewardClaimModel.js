import mongoose from 'mongoose';
import {Double, Int32, ObjectId, Timestamp} from "mongodb";

const rewardClaimSchema = new mongoose.Schema({
    userId: {type: ObjectId, required: true},
    rewardId: {type: ObjectId, required: true},
    receiptImg: {type: String, required: false},
    status: {type: String, required: true, default: 'pending'}
}, { timestamps: true });

const RewardClaim = mongoose.model('RewardClaim', rewardClaimSchema);

export default RewardClaim;