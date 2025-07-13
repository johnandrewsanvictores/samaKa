import mongoose from 'mongoose';
import {Int32, ObjectId, Timestamp} from "mongodb";

const eventSchema = new mongoose.Schema({
    title: { type: String, required: true },
    eventImg: { type: String, required: false },
    description: { type: String, required: true },
    barangayId: {type: ObjectId, required: false, default: null},
    category: {type: String, required: false},
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    lp: { type: Number, required: true },
    type: { type: String, required: true },
    dayInterval: {type : Number, required: false, default: null},
    status: { type: String, required: true, default: "upcoming" },
    joined: {type: [{
            userId: { type: ObjectId, required: true },
            isPresent: { type: Boolean, default: null },
            joinedAt: { type: Date, required: true },
        }], default: []}

}, { timestamps: true });

const Events = mongoose.model('Events', eventSchema);

export default Events;