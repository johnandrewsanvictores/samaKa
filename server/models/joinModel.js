import mongoose from 'mongoose';
import {ObjectId, Timestamp} from "mongodb";

const joinSchema = new mongoose.Schema({
    userId: {type: ObjectId, required: true},
    eventId: {type: ObjectId, required: true},
    isPresent: { type: Boolean, default: null },
    joinedAt: { type: Date, required: true },
}, { timestamps: true });

const Join = mongoose.model('Joined', joinSchema);

export default Join;