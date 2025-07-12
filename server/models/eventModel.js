import mongoose from 'mongoose';
import {Int32, ObjectId, Timestamp} from "mongodb";

const eventSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    barangayId: {type: ObjectId, required: true},
    startDate: { type: Timestamp, required: true },
    endDate: { type: Timestamp, required: true },
    lp: { type: String, required: true },
    type: { type: String, required: true },
    status: { type: String, required: true, default: "upcoming" },
    joined: {type: [{
            userId: { type: ObjectId, required: true },
            isPresent: { type: Boolean, default: false },
            joinedAt: { type: Timestamp, required: true },
        }], default: []}

}, { timestamps: true });

const Events = mongoose.model('Events', eventSchema);

export default Events;