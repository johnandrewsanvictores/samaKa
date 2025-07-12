import mongoose from 'mongoose';
import {Double, Int32, ObjectId, Timestamp} from "mongodb";

const rewardSchema = new mongoose.Schema({
                barangayId: {type: ObjectId, required: true},
                imgPath: { type: String, required: false, default: "" },
                title: { type: String, required: true, default: "" },
                description:  { type: String, required: false, default: "" },
                lp: { type: Int32,  required: true, default: 0 },

}, { timestamps: true });

const Reward = mongoose.model('Reward', rewardSchema);

export default Reward;